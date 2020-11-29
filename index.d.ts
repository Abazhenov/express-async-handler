import express = require('express');

declare function expressAsyncHandler(handler: (...args: Parameters<express.RequestHandler>) => void | Promise<void>): express.RequestHandler;
declare namespace expressAsyncHandler {

}

export = expressAsyncHandler;
