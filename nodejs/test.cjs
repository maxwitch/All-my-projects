let inputString = "fheriherffazfszkisrrs";
let word = "sheriff";
let wordCount = 0;

for (let i = 0; i < word.length; i++) {
  let letterCount = 0;
  for (let j = 0; j < inputString.length; j++) {
    if (word[i] === inputString[j]) {
      letterCount++;
      inputString = inputString.slice(0, j) + inputString.slice(j + 1);
    }
  }
  if (letterCount === 0) {
    console.log("0");
    break;
  } else if (letterCount < wordCount || wordCount === 0) {
    wordCount = letterCount;
  }
}

if (wordCount > 0) {
  console.log(wordCount);
}