(function () {
  'use strict';

  var BallFollower = function BallFollower(start, swaps) {
    // IMPLEMENT YOUR SOLUTION WITHIN THIS FUNCTION
    this.start = start;
    this.swaps = swaps;
    var ballPosition = start;
    var swapList = swaps;
    BallFollower.prototype.swap = function() {
        var index;
        for (index = 0; index < swapList.length; ++index) {
            if (swapList[index][0] === ballPosition) {
                ballPosition = swapList[index][1];
            }else if (swapList[index][1] === ballPosition) {
                ballPosition = swapList[index][0];
            }
        }return ballPosition;
    };
    return ballPosition;
  };

  module.exports = BallFollower; // DON'T ALTER THIS
})();
