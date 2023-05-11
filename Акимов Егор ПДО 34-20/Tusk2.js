const a = [1, 4, 6];
const b = [11, 33, 22];
const pairs = a.map((value, index) => [value, b[index]]);
pairs.sort((a, b) => a[1] - b[1]); const result = pairs.map((pair) => pair[0]); console.log(result);