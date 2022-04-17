Describe: pigLatin(); 

Test: "It recognizes a single vowel."
Code: pigLatin("a"); 
Expected Output: true; 

Test: "It recognizes a single vowel regardless of case."
Code: pigLatin("A"); 
Expected Output: true; 

Test: "It recognizes a single vowel in a word with multiple characters"
Code: pigLatin("cat"); 
Expected Output: true; 

Test: "It recognizes vowels in a multiple-word sentence."
Code: pigLatin("Cats catered the event");
Expected Output: 7

Test: "It recognizes vowels in a multiple word sentence regardless of capitalization."
Code: pigLatin("CATS CATERED THE EVENT");
Expected Output: 7

Test: "It ignores non-alphabetical characters since they can't be vowels."
Code: pigLatin("*&$92%");
Expected Output: 0

Test: "It will add "way" to the end of words that begin with a vowel"
Code: pigLatin("away");
Expected Output: "awayway"

Test: "It will move all of the first consecutive consonanats to the end and add "ay". 
Code: pigLatin("code"); 
Expected Output: "odecay"