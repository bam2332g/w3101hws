(function () {
  'use strict';

  var sumArray = function sumArray(values) {
    // IMPLEMENT YOUR SOLUTION HERE!
    // MAKE SURE TO USE REDUCE!
    return values.reduce(function(a, b) {
        return a + b; }, 0);
  };

  module.exports = sumArray; // DON'T CHANGE THIS
})();
