const asyncUtil = fn =>
function asyncUtilWrap(req, res, next, ...args) {
  return Promise.resolve(fn(req, res, next, ...args))
    .catch(next);
}

module.exports = asyncUtil
