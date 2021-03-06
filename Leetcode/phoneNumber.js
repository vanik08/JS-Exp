var dict = {
  0: [''],
  1: [''],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(data, n, str, result) {
  data = data || '';
  n = n || 0;
  str = str || '';
  result = result || [];

  var list = dict[data.charAt(n)] || [''];
  var i = 0;

  for (i = 0; i < list.length; i++) {
    var itm = list[i];
    var fullStr = str + itm;

    if (n < data.length - 1) {
      letterCombinations(data, n + 1, fullStr, result);
    }
    if (n === data.length - 1) {
      result.push(fullStr);
    }
  }
  return result;
};
console.log(letterCombinations('1123'));
console.log(letterCombinations('23'));
console.log(letterCombinations('2303981040000000'));