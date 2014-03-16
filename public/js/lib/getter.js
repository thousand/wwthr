define(  [],
function () {

  Getter = function (idx, parser) {
    return function (obj) {
      return typeof parser === 'function' ? parser.call(obj[idx], obj) : obj[idx];
    };
  };

  return Getter;
});
