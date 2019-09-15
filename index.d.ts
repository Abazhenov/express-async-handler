import express = require('express');

declare function expressAsyncHandler(handler: express.ErrorRequestHandler): express.ErrorRequestHandler;
declare function expressAsyncHandler(handler: express.RequestHandler): express.RequestHandler;
declare namespace expressAsyncHandler {

}

export = expressAsyncHandler;
