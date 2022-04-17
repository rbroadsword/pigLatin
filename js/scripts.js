function pigLatin(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  let userInput = text.toLowerCase(); 
  let result = "";
  let vowelCounter = 0;
  for (let i = 0; i < userInput.length; i+=1) {
    if (vowels.indexOf(userInput[0]) > -1){
      result = userInput + "way";
      return result; 
      console.log("exists:" + userInput[i]);
    } else {vowelCounter = vowelCounter}  
  };
  console.log(userInput);
}

function translatePigLatin(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";

    if (vowels.indexOf(str[0]) > -1) {
        newStr = str + "way";
        return newStr;
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstMatch[0]);
        newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
        return newStr;
    }
}