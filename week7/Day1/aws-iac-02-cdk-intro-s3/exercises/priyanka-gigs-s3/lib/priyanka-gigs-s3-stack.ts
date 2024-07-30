import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam'
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3Deployment from 'aws-cdk-lib/aws-s3-deployment';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class PriyankaGigsS3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: GigsSettings) {
    super(scope, id, props);
    cdk.Tags.of(this).add('Name', props.stackName!)
    cdk.Tags.of(this).add('Academy', props.stackName!)
  
    // Set a permissions boundary
    const boundary = iam.ManagedPolicy.fromManagedPolicyName(
      this,
      'Boundary',
      props.permissionsBoundaryPolicyName
    )
    iam.PermissionsBoundary.of(this).apply(boundary); 
    const flyersBucket = new s3.Bucket(this, "flyers-hosting", {
      bucketName: `${props.subDomain}-flyers-hosting`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL, // securit
      encryption: s3.BucketEncryption.S3_MANAGED, // security
    });
    flyersBucket.addToResourcePolicy(
      // security
      new iam.PolicyStatement({
        resources: [flyersBucket.arnForObjects("*"), flyersBucket.bucketArn],
        actions: ["s3:*"],
        effect: iam.Effect.DENY,
        conditions: {
          Bool: { "aws:SecureTransport": "false" },
        },
        principals: [new iam.AnyPrincipal()],
      })
    );
    
new s3Deployment.BucketDeployment(this, 'flyers-deployment', {

destinationBucket: flyersBucket,

sources: [ s3Deployment.Source.asset('../gig-flyers') ], //

retainOnDelete: false,

prune: true,

memoryLimit: 256, // in case folder is big

})
    new cdk.CfnOutput(this, "FlyersBucketName", {
      value: flyersBucket.bucketName,
    });
 
    // The code that defines your stack goes here

    // example resource
   
    // const queue = new sqs.Queue(this, 'PriyankaGigsS3Queue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    const clientBucket = new s3.Bucket(this, "client-hosting", {
      bucketName: `${props.subDomain}-client-hosting`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL, // security
      encryption: s3.BucketEncryption.S3_MANAGED, // security
    });
    clientBucket.addToResourcePolicy(
      // security
      new iam.PolicyStatement({
        resources: [clientBucket.arnForObjects("*"), clientBucket.bucketArn],
        actions: ["s3:*"],
        effect: iam.Effect.DENY,
        conditions: {
          Bool: { "aws:SecureTransport": "false" },
        },
        principals: [new iam.AnyPrincipal()],
      })
    );
      new s3Deployment.BucketDeployment(this, "client-deployment", {
        destinationBucket: clientBucket,

        sources: [s3Deployment.Source.asset("../client/dist")], //

        retainOnDelete: false,

        prune: true,

        memoryLimit: 256, // in case folder is big
      });
    new cdk.CfnOutput(this, "ClientBucketName", {
      value: clientBucket.bucketName,
    });

  }
}
export interface GigsSettings extends cdk.StackProps {
  permissionsBoundaryPolicyName: string,
  subDomain: string,
}
