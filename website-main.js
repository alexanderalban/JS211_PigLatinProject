const pigLatin = (word) => {
    word = document.getElementById("textbox").value.toLowerCase().trim();
    word = word.split('');
    let vowel = ["a", "e", "i", "o", "u"];
  
    for (let i = 0; i < word.length; i++) {
      if ((vowel .includes(word[0])) === true) {
        word.push("yay");
        word = word.join('');
        document.getElementById("display-element").innerHTML = word;
        return word;
      } else if (vowel .includes(word[1]) === false) {
        let x = word.splice(0, 2);
        x = x.join('');
        word.push(x);
        word.push("ay");
        word= word.join('');
        document.getElementById("display-element").innerHTML = word;
        return word;
      } else {
        let x = word.shift();
        word.push(x);
        word.push("ay");
        word = word.join('');
        document.getElementById("display-element").innerHTML = word;
        return word;
      }
    }
  };