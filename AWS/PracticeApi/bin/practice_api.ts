#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PracticeApiStack } from '../lib/practice_api-stack';

const stackName: string = process.env.GIGS_STACK_NAME || "";
if (!(stackName && stackName.trim() && stackName.trim().length > 0)) {
  console.error(`PARAMETER $GIGS_STACK_NAME NOT SET, got: '${stackName}'`);
  process.exit(1);
}
const settings:any = {
  // Inherited from cdk.StackProps
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT || "NOT_SET",
    region: process.env.CDK_DEFAULT_REGION || "NOT_SET",
  },
  stackName: stackName,
  permissionsBoundaryPolicyName: "ScopePermissions",
  subDomain: stackName.toLowerCase(),
};

const app = new cdk.App();
new PracticeApiStack(app, `${settings.stackName}-TS-CdkStack`, settings);


// new PracticeApiStack(app, 'PracticeApiStack', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  // env: { account: '123456789012', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
// });