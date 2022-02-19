import express = require('express');
import core = require('express-serve-static-core');

declare function expressAsyncHandler<
  P = core.ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = core.Query,
  Locals = any
>(handler: (...args: Parameters<express.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>) => void | Promise<void>):
  express.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>;

declare namespace expressAsyncHandler {

}

export = expressAsyncHandler;
