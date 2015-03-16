const CONSONANTS = ['th', 'qu', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k',
  'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const ENDING = 'ay';

var isValid = word => startsWithVowel(word) || startsWithConsonant(word);
var startsWithVowel = word => !!~VOWELS.indexOf(word[0]);
var startsWithConsonant = word => !!~CONSONANTS.indexOf(word[0]);

var getConsonants = word => CONSONANTS.reduce((memo, char) => {
  if (word.startsWith(char)) {
    memo += char;
    word = word.substr(char.length);
  }
  return memo;
}, '');

function EnglishToPigLatin(english='') {
  if (isValid(english)) {
    if (startsWithVowel(english)) {
      english += ENDING;
    } else {
      let letters = getConsonants(english);
      english = `${english.substr(letters.length)}${letters}${ENDING}`;
    }
  }
  return english;
}
