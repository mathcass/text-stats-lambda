#!/usr/bin/env python3

from collections import Counter

import en_core_web_sm


nlp = en_core_web_sm.load()


def handler(event, context):
    text = event.get("text")
    if not text:
        return {
            "statusCode": 400,
            "body": "missing text input"
        }

    doc = nlp(text)
    counts = Counter([t.pos_ for t in doc])

    return {
        "word_count": sum(counts.values()) - counts["PUNCT"],
        "noun_count": counts["NOUN"],
        "verb_count": counts["VERB"],
    }


if __name__ == "__main__":
    event = {"text": "We think you're very great, and I like cats."}
    print(handler(event, None))
