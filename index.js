const asyncUtil = fn =>
function asyncUtilWrap(req, res, next, ...args) {
  const fnReturn = fn(req, res, next, ...args)
  return Promise.resolve(fnReturn).catch(next)
}

module.exports = asyncUtil
