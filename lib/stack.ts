import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from "aws-cdk-lib/aws-lambda";
import { PythonFunction } from "@aws-cdk/aws-lambda-python-alpha";


export class TextStatsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new PythonFunction(this, id + "StatsFunction", {
        runtime: lambda.Runtime.PYTHON_3_9,
        entry: "src",
        handler: "handler",
    });
  }
}
