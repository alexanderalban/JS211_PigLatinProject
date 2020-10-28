// const pigLatin = (word) => {
//     word = document.getElementById("textbox").value.toLowerCase().trim();
//     word = word.split('');
//     let vowel = ["a", "e", "i", "o", "u"];
  
//     for (let i = 0; i < word.length; i++) {
//       if (vowel .includes(word[0]) === true) {
//         word.push("yay");
//         word = word.join('');
//         document.getElementById("display-element").innerHTML = word;
//         return word;
//       } else if (vowel .includes(word[1]) === false) {
//         let x = word.splice(0, 2);
//         x = x.join('');
//         word.push(x);
//         word.push("ay");
//         word= word.join('');
//         document.getElementById("display-element").innerHTML = word;
//         return word;
//       } else {
//         let x = word.shift();
//         word.push(x);
//         word.push("ay");
//         word = word.join('');
//         document.getElementById("display-element").innerHTML = word;
//         return word;
//       }
//     }
//   };


const pigLatin = (word) => {
  word = document.getElementById("textbox").value.toLowerCase().trim();
  let indivWords = word.split(" ");
  let vowel = ["a", "e", "i", "o", "u"];
  document.getElementById("display-element").innerHTML = "";
  newPigArray = [];

  for (let i = 0; i < indivWords.length; i++) {
    let indivLetters = indivWords[i].split('');
    if (vowel .includes(indivLetters[0]) === true) {
      indivLetters.push('yay');
      indivLetters = indivLetters.join('');
      document.getElementById("display-element").innerHTML += indivLetters + " ";
      console.log(newPigArray);
      console.log(indivLetters);
    }
    else if (vowel .includes(indivLetters[1]) === false) {
      let x = indivLetters.splice(0, 2);
      x = x.join('');
      indivLetters.push(x);
      indivLetters.push('ay');
      indivLetters = indivLetters.join('');
      document.getElementById("display-element").innerHTML += indivLetters + " ";
      console.log(newPigArray);
      console.log(indivLetters);
    }
    else {
      let x = indivLetters.shift();
      indivLetters.push(x);
      indivLetters.push('ay');
      indivLetters = indivLetters.join('');
      document.getElementById("display-element").innerHTML += indivLetters + " ";
      console.log(newPigArray);
      console.log(indivLetters);
    }
  }
}