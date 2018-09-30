module.exports = function getZerosCount(number) {
  // your implementation
  var count = 0;
  for (var b = 5; b <= number; b *= 5) {
  	count += Math.floor(number/b);
  	}
return count;
  }

