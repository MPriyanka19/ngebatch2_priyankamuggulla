import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class PriyankaGigsS3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'PriyankaGigsS3Queue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
export interface GigsSettings extends cdk.StackProps {
  permissionsBoundaryPolicyName: string,
  subDomain: string,
}