var checkpoint = {
  one: 'joe',
  two: {
    twoOne: 'something',
    twoTwo: 3,
  },
  three: {
    threeOne: 2,
    threeTwo: 5,
    threeThree: {
      fourOne: 'hello there',
      fourTwo: 5,
    },
  },
  four: 1,
  five: [2, 5, 'bla'],
};

traverse(checkpoint, 0);

function traverse(obj, count) {
  count++;
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key]++;
    }
    print(count, key, obj[key]);
    if (obj !== null && typeof obj[key] === 'object' && !(obj[key] instanceof Array)) {
      traverse(obj[key], count);
      console.log(appendSpaces(count) + '},');
    }
  }
}

function print(indent, key, value) {
  if (typeof value === 'object') {
    if (value instanceof Array) {
      value = '[' + value.join(', ') + '],';
    } else {
      value = '{';
    }
  } else if (typeof value === 'string') {
    value = "'" + value + "',";
  } else if (typeof value === 'number') {
    value = value + ",";
  }
  console.log(appendSpaces(indent) + key + ': ' + value);
}

function appendSpaces(indent) {
  var result = '';
  for (var i = 0; i < indent; i++) {
    result += '    ';
  }
  return result;
}
