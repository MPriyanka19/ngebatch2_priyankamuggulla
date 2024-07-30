import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam'
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3Deployment from 'aws-cdk-lib/aws-s3-deployment'
export interface GigsSettings extends cdk.StackProps {
  permissionsBoundaryPolicyName: string;
  subDomain: string;
}

export class PriyankaPracticeS3Stack extends cdk.Stack {
  
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
    const flyersBucket = new s3.Bucket(this, "test-bucket", {
      bucketName: `${props.subDomain}-practice-test-bucket`,
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
    new s3Deployment.BucketDeployment(this, "flyers-deployment", {
      destinationBucket: flyersBucket,

      sources: [s3Deployment.Source.asset("../gig-flyers")], //

      retainOnDelete: false,

      prune: true,

      memoryLimit: 256, // in case folder is big
    });
  }
}
