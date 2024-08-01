import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam'
import * as acm from 'aws-cdk-lib/aws-certificatemanager'
import * as s3 from 'aws-cdk-lib/aws-s3'
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as s3deployment from 'aws-cdk-lib/aws-s3-deployment'
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as route53 from "aws-cdk-lib/aws-route53";
//interface for settings
export interface AppSettings extends cdk.StackProps {
  certArn: string;
  permissionsBoundaryPolicyName: string;
  domainName: string;
  subDomain: string;
}

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: AppSettings) {
    super(scope, id, props);
    //to get domain
    const fullDomain = `${props.subDomain}.${props.domainName}`;
    //route53
     const zone = route53.HostedZone.fromLookup(this, "zone", {
       domainName: props.domainName,
     });
    const boundary = iam.ManagedPolicy.fromManagedPolicyName(
      this,
      "Boundary",
      props.permissionsBoundaryPolicyName
    );
    iam.PermissionsBoundary.of(this).apply(boundary);
      //certificate
      const cert = acm.Certificate.fromCertificateArn(
        this,
        "cert",
        props.certArn
      );
   //creating client bucket
    const clientBucket = new s3.Bucket(this, "client-hosting", {
      bucketName: `${props.subDomain}-client-hosting`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL, // security
      encryption: s3.BucketEncryption.S3_MANAGED, // security
    });
    //cloudfront
    const redirectsFunction = new cloudfront.Function(
      this,
      "redirects-function",
      {
        code: cloudfront.FunctionCode.fromFile({
          filePath: "functions/redirect.js",
        }),
      }
    );

    //distribution
        const clientDistribution = new cloudfront.Distribution(
          this,
          `client-distribution`,
          {
            defaultBehavior: {
              origin: new origins.S3Origin(clientBucket),
              viewerProtocolPolicy:
                cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
              functionAssociations: [
                
                {
                  eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
                  function: redirectsFunction,
                },
              ],
              // extra bit here
              originRequestPolicy: new cloudfront.OriginRequestPolicy(
                this,
                `request-policy`,
                {
                  queryStringBehavior:
                    cloudfront.OriginRequestQueryStringBehavior.all(),
                }
              ),
            },
            priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
            defaultRootObject: "index.html",
            domainNames: [fullDomain],
            certificate: cert,
          }
        );
     
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

     // Copy react output into bucket
     const clientDeployment = new s3deployment.BucketDeployment(
       this,
       "client-deployment",
       {
         destinationBucket: clientBucket,
         sources: [s3deployment.Source.asset("../geetmart/geet-mart/dist")],
         retainOnDelete: false,
         distribution: clientDistribution, // invalidate this
         distributionPaths: ["/*"],
         prune: true,
         memoryLimit: 256, // react folder can be big
       }
     );
     new cdk.CfnOutput(this, "ClientBucketName", {
       value: clientBucket.bucketName,
     });
    
    
    new route53.CnameRecord(this, `client-record`, {
      zone,
      domainName: clientDistribution.domainName,
      recordName: fullDomain,
    });
    new cdk.CfnOutput(this, "ClientUrl", {
      value: `https://${fullDomain}`,
    });
  }
}
