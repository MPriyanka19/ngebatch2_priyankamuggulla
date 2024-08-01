import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as iam from "aws-cdk-lib/aws-iam";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3Deployment from "aws-cdk-lib/aws-s3-deployment";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as nodejs from "aws-cdk-lib/aws-lambda-nodejs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";


//interface
export interface ActCitingSettings extends cdk.StackProps {
  permissionsBoundaryPolicyName: string;
  subDomain: string;
}

export class ActCitingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: ActCitingSettings) {
    super(scope, id, props);
    //tagging the resources in the stack
    cdk.Tags.of(this).add("Name", props.stackName!);
    cdk.Tags.of(this).add("Academy", props.stackName!);

    const boundary = iam.ManagedPolicy.fromManagedPolicyName(
      this,
      "Boundary",
      props.permissionsBoundaryPolicyName
    );
    iam.PermissionsBoundary.of(this).apply(boundary);
    const ImagesBucket = new s3.Bucket(this, "-bucket", {
      bucketName: `${props.subDomain}-practice-images-bucket`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL, // securit
      encryption: s3.BucketEncryption.S3_MANAGED, // security
    });
    ImagesBucket.addToResourcePolicy(
      // security
      new iam.PolicyStatement({
        resources: [ImagesBucket.arnForObjects("*"), ImagesBucket.bucketArn],
        actions: ["s3:*"],
        effect: iam.Effect.DENY,
        conditions: {
          Bool: { "aws:SecureTransport": "false" },
        },
        principals: [new iam.AnyPrincipal()],
      })
    );
    new s3Deployment.BucketDeployment(this, "flyers-deployment", {
      destinationBucket: ImagesBucket,
      sources: [s3Deployment.Source.asset("../VenueImages")],
      retainOnDelete: false,
      prune: true,
      memoryLimit: 256, // in case folder is big
    });
    const lambdaEnvVars = {
      NODE_ENV: "production",
    };

    const bundling = {
      externalModules: ["aws-sdk"],
    };
    const gigsListLambda = new nodejs.NodejsFunction(this, "gigs-list-lambda", {
      functionName: `${props.subDomain}-gigs-list-lambda`,
      runtime: lambda.Runtime.NODEJS_16_X, // the latest
      entry: "./utility-lambdas.ts", // filename
      handler: "eventHandler", // function name
      bundling, // our externals list
      environment: {
        FAVOURITE_GIG: "Duran Duran in Leeds",
      },
    });

    new cdk.CfnOutput(this, "GigsListLambdaName", {
      value: gigsListLambda.functionName,
      
    });
    const Hellolambda = new nodejs.NodejsFunction(this, "hello-lambda", {
      functionName: `${props.subDomain}-hello-lambda`,
      runtime: lambda.Runtime.NODEJS_16_X,
      entry: "./utility-lambdas.ts",
      handler: "eventhandler",
      environment: lambdaEnvVars,
      timeout: cdk.Duration.seconds(3), // default
      bundling,
    });
    const api = new apigateway.RestApi(this, "Hellolambda");

    // Integration between API Gateway and Lambda
    const integration = new apigateway.LambdaIntegration(Hellolambda);
    const resource = api.root.addResource("hello");
    resource.addMethod("GET", integration);

    // Output the API endpoint
    new cdk.CfnOutput(this, "ApiEndpoint", {
      value: api.url ?? "Something went wrong with the deploy",
    });
  }
}
