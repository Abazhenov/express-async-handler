const asyncUtil = fn =>
function asyncUtilWrap(...args) {
  const next = args[args.length-1];
  return new Promise(function (resolve) {
    resolve(fn(...args));
  }).catch(next);
}

module.exports = asyncUtil
