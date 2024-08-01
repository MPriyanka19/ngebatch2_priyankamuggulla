import { Context, APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda"; // Lambda code goes here

exports.eventhandler = async function (event: any) {
  console.log("recevied event:", JSON.stringify(event, null, 2));
  return {
    statusCode: "200",
    headers: {
      "Content-type": "text/plain",
    },
    body: "Hello cdk, this is type script",
  };
};

export {};
