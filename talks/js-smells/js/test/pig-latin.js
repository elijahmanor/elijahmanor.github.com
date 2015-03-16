/* const */ var CONSONANTS = 'bcdfghjklmnpqrstvwxyz';
/* const */ var VOWELS = 'aeiou';

function isValid(word) {
  var character = word ? word[0] : '';

  return word && isVowel(character) || isConsonant(character);
}

function isVowel(character) {
  return character ? !!~VOWELS.indexOf(character) : false;
}

function isConsonant(character) {
  return character ? !!~CONSONANTS.indexOf(character) : false;
}

function getPreVowelConsonants(word) {
  var preVowelConsonants = '';

  for (var i = 0; i < word.length; ++i) {
    if (isConsonant(word[i])) {
      preVowelConsonants += word[i];
      if (preVowelConsonants == 'q' &&
        i+1 < word.length && word[i+1] == 'u') {
        preVowelConsonants += 'u';
        i += 2;
        break;
      }
    } else {
      break;
    }
  }

  return preVowelConsonants;
}

function EnglishToPigLatin(english) {
   /* const */ var SYLLABLE = 'ay';

   var pigLatin = '';
   var firstCharacter = english ? english[0] : '';

   if (isValid(english)) {
      if (isVowel(firstCharacter)) {
         pigLatin = english + SYLLABLE;
      } else {
        var preVowelConsonants = getPreVowelConsonants(english);
        pigLatin = english.substring(preVowelConsonants.length) +
          preVowelConsonants + SYLLABLE;
      }
   }

   return pigLatin;
}
