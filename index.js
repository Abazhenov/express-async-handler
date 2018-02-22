const asyncUtil = fn =>
function asyncUtilWrap(req, res, next, ...args) {
  return fn(req, res, next, ...args)
    .catch(next);
}

module.exports = asyncUtil
