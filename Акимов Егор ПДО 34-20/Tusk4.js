const romanToInt = s => [...s].reduce((acc, curr, i) => acc + (curr < [...s][i + 1] ? -1 : 1) * ({ I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }[curr]), 0);
console.log(romanToInt("XXVII"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
