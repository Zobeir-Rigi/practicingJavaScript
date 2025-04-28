const numberWords = {
    "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6,
    "seven": 7, "eight": 8, "nine": 9, "ten": 10, "eleven": 11, "twelve": 12,
    "thirteen": 13, "fourteen": 14, "fifteen": 15, "sixteen": 16, "seventeen": 17,
    "eighteen": 18, "nineteen": 19, "twenty": 20, "thirty": 30, "forty": 40,
    "fifty": 50, "sixty": 60, "seventy": 70, "eighty": 80, "ninety": 90,
    "hundred": 100
  };
  
  function wordsToNumber(word) {
    return word.split(' ').reduce((total, w, i, arr) => {
      if (w === 'hundred') {
        return total * 100;
      } 
      return total + (numberWords[w] || 0);
    }, 0);
  }
  
  console.log(wordsToNumber("one")); //1
  console.log(wordsToNumber("twenty five")); // 25
  console.log(wordsToNumber("ninety eight")); // 98
  console.log(wordsToNumber("four hundred ninety nine")); // 499