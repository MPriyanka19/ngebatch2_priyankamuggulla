#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { ActCitingSettings, ActCitingStack } from "../lib/act_citing-stack";

//this code snippet tells the environment variables.
const stackName: string = process.env.GIGS_STACK_NAME || "";
if (!(stackName && stackName.trim() && stackName.trim().length > 0)) {
  console.error(`PARAMETER $GIGS_STACK_NAME NOT SET, got: '${stackName}'`);
  process.exit(1);
}

//set up env variables
const settings: ActCitingSettings = {
  // Inherited from cdk.StackProps
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT || "NOT_SET",
    region: process.env.CDK_DEFAULT_REGION || "NOT_SET",
  },
  stackName: stackName,
  permissionsBoundaryPolicyName: "ScopePermissions",
  subDomain: stackName.toLowerCase(),
};
//initialise cdk
const app = new cdk.App();
new ActCitingStack(app, `${settings.stackName}-TS-CdkStack`, settings);


