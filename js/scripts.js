function pigLatin(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  let userInput = text.toLowerCase(); 
  let result = "";
  let vowelCounter = 0;

  if (vowels.indexOf(userInput[0]) > -1){
    result = userInput + "way";
    return result; 
    console.log("exists:" + userInput[i]);
  } else {
    for (let i = 0; i < userInput.length; i+=1)  {//i= 0
      for (let v = 0; v < vowels.length; v+=1) {//v=0
          if(userInput[i] === vowels[v]) {
          userInput = userInput.substring(i)+userInput.substring(0, i)+"ay"; 
          return userInput;
        }
      };  
    }
  }
console.log(userInput);
}

