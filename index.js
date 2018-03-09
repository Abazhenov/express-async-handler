const asyncUtil = fn =>
function asyncUtilWrap(req, res, next, ...args) {
  const fnReturn = fn(req, res, next, ...args)
  if (fnReturn instanceof Promise) {
    return fnReturn.catch(next)
  } else {
    return fnReturn
  }
}

module.exports = asyncUtil
