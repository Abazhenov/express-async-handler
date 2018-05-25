const asyncUtil = fn =>
function asyncUtilWrap(req, res, next, ...args) {
  return new Promise(function (resolve) {
    resolve(fn(req, res, next, ...args));
  }).catch(next);
}

module.exports = asyncUtil
