(function () {
  'use strict';

  var sentencify = function (words) {
    // IMPLEMENT YOUR SOLUTION WITHIN THIS FUNCTION
    var index;
    var sentence = '';
    if (words.length === 0) {
	return '';
    }
    for (index = 0; index < (words.length - 1); ++index) {
        sentence = sentence + words[index] + ' ';
    }
    sentence = sentence + words[words.length - 1];
    return sentence;
  };

  module.exports = sentencify;  // DO NOT CHANGE THIS
})();
