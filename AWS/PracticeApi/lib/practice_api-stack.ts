import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as apigateway from 'aws-cdk-lib/aws-apigateway'
export interface PracticeStack extends cdk.StackProps {
  permissionsBoundaryPolicyName: string;
  subDomain: string;
}

export class PracticeApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);
    cdk.Tags.of(this).add("Name", props.stackName!);
    cdk.Tags.of(this).add("Academy", props.stackName!);
    
    const handler = new lambda.Function(this, "PracticeHello",{
      runtime: lambda.Runtime.NODEJS_16_X,
      code: lambda.Code.fromAsset('lambda'),
        handler:'index.handler',
    })
    const api = new apigateway.RestApi(this, "Hellolambda");
    const main = api.root.addResource('app');
    main.addMethod("GET", new apigateway.LambdaIntegration(handler))

    // Integration between API Gateway and Lambda
    // const integration = new apigateway.LambdaIntegration(handler);
    // const resource = api.root.addResource("hello");
    // resource.addMethod("GET", integration);

   
  }
}
