(function () {
  'use strict';

  var doubleArray = function(arrayToDouble) {
    // IMPLEMENT YOUR FUNCTION HERE
    // MAKE SURE TO USE ARRAY'S MAP METHOD!
    return arrayToDouble.map(function(x) {return x *2;});
  };

  module.exports = doubleArray;

})();
