function commonLetters(strList) {
const letters = strList[0].split("");
return letters.filter(letter =>
strList.every(str => str.includes(letter))
);
}
 console.log(commonLetters(["bella","label","roller"]));
 console.log(commonLetters(["cool","lock","cook"]));