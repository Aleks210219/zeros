module.exports = function getZerosCount(number) {
  // your implementation
  var count = 0;
  var b = 5;
  while(b <= number) {
  	count += Math.floor(number/b);
  	}
return count;
  }

