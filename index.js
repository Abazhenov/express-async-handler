const asyncUtil = fn =>
(req, res, next, ...args) =>
  fn(req, res, next, ...args)
    .catch(next);

module.exports = asyncUtil
