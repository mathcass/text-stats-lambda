#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TextStatsStack } from '../lib/stack';

const app = new cdk.App();
new TextStatsStack(app, 'TextStatsStack', {});
