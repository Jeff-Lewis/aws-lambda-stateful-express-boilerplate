// This is the lambda entry point
const awsServerlessExpress = require('aws-serverless-express');
// Import the transpiled version of app
const app = require('./.dist/app');

const server = awsServerlessExpress.createServer(app);
exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
