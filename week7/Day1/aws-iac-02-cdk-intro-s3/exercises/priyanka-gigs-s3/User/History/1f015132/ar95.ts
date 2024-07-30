import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3Deployment from 'aws-cdk-lib/aws-s3-deployment';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class PriyankaGigsS3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    cdk.Tags.of(this).add('Name', props.stackName!)
    cdk.Tags.of(this).add('Academy', props.stackName!)
    // Set a permissions boundary
    const boundary = iam.ManagedPolicy.fromManagedPolicyName(
      this,
      'Boundary',
      props.permissionsBoundaryPolicyName
    )
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
