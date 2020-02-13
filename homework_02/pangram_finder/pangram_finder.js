const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase
}

PangramFinder.prototype.isPangram = function () {
  let alphabet = this.alphabet;
  let reg_exp = /[A-Za-z]/g;
  let phrase = this.phrase.toLowerCase();
  phrase = phrase.match(reg_exp);
  let phrase_letters = alphabet.filter((letter) => {
    if (phrase.includes(letter)) {
      return letter
    }
  });
  if (phrase_letters.length === alphabet.length) {
    return true
  } else {
    return false;
  }
};

module.exports = PangramFinder;
