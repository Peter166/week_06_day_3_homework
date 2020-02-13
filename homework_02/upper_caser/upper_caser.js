const UpperCaser = function (words) {
  this.words = words
}

UpperCaser.prototype.toUpperCase = function () {
  const result = this.words.map((word)=> {
    return word.toUpperCase()
  })
  // const unique_results = new Set(first);
  // const result = Array.from(unique_results);
  return result
}

module.exports = UpperCaser;
