exports.handler = async function (event: any,context:any) {
  const tododaily:any[] = [
    {
      id: 1,
      task: "eating",
    },
    {
      id: 2,
      task: "drinking",
    },
    {
      id: 3,
      task: "sleeping",
    },
  ];

  return {
    "statusCode": "200",
    "header": {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    "isBase64Encoded": false,
    "body": JSON.stringify(tododaily),
  };
};
export { };