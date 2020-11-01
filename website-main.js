const pigLatin = (word) => {
  word = document.getElementById("textbox").value.toLowerCase().trim();
  let indivWords = word.split(" ");
  let vowel = ["a", "e", "i", "o", "u"];
  document.getElementById("display-element").innerHTML = "";
  newPigArray = [];

  for (let i = 0; i < indivWords.length; i++) {
    let indivLetters = indivWords[i].split('');
    if (vowel.includes(indivLetters[0]) === true) {
      indivLetters.push('yay');
      indivLetters = indivLetters.join('');
      document.getElementById("display-element").innerHTML += indivLetters + " ";
      console.log(newPigArray);
      console.log(indivLetters);
    }
    else if (vowel.includes(indivLetters[1]) === false) {
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