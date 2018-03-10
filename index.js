const asyncUtil = fn =>
function asyncUtilWrap(req, res, next, ...args) {
  if (fn instanceof Promise) {
    return fn(req, res, next, ...args).catch(next)
  } else {
    return fn(req, res, next, ...args)
  }
}

module.exports = asyncUtil
