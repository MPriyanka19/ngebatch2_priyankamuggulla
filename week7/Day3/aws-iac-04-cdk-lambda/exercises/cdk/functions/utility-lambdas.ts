import { Context, APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda"; // Lambda code goes here


export const gigsListHandler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  console.log("gigsListHandler invoked");
  console.log('Event', event);
  console.log('context', context);
  console.log(`Best gig is ${process.env.FAVOURITE_GIG}`);
  return {
    status: "ok",
    list: ["Rolling Stones", "The Doors", "The Beatles"],
  };
};


export {};
