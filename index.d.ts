import express = require('express');

declare function expressAsyncHandler<R extends express.RequestHandler>(handler: (...args: Parameters<R>) => void | Promise<void>): R;
declare namespace expressAsyncHandler {

}

export = expressAsyncHandler;
