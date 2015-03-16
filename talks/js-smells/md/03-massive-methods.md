# Smelly Code

```
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
```

------

# Massive Methods!

* Too Many Statements <!-- .element class="fragment" -->
* Too Many Parameters <!-- .element class="fragment" -->
* Too Much Depth <!-- .element class="fragment" -->

------

# Tooling

<!-- .element class="fragment" -->
JSHint and ESLint support the `maxparams`, `maxdepth`, `maxstatements`, & `maxlen` options!

<!-- .element class="fragment" -->
`// jshint maxparams:3, maxdepth:2, maxstatements:5, maxlen:80 */`

<!-- .element class="fragment" -->
_Note: `maxlen` has been deprecated & you should use `jscs` instead_

------

# JSHint / ESLint

![](./img/jshint-max.png)

------

# Stats

* <!-- .element class="fragment" --> `maxparams`: 2
* <!-- .element class="fragment" --> `maxdepth`: 3
* <!-- .element class="fragment" --> `maxstatements`: 10
* <!-- .element class="fragment" --> `maxcomplexity`: 4
* <!-- .element class="fragment" --> `maxlen`: 65

------

# So What!?!

## Refactor <!-- .element class="fragment" -->

------

# Refactor

<!-- /* jshint maxparams:3, maxdepth:2, maxstatements:5, maxcomplexity:6, maxlen:80, esnext:true */ -->
<pre><code data-trim data-lang="javascript">
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
</code></pre>

------

# Updated Stats

* <!-- .element class="fragment highlight-blue" --> `maxparams`: 2
* <!-- .element class="fragment highlight-green" --> `maxdepth`: 2
* <!-- .element class="fragment highlight-green" --> `maxstatements`: 6
* <!-- .element class="fragment highlight-green" --> `maxcomplexity`: 3
* <!-- .element class="fragment highlight-red" --> `maxlen`: 73

------

# Resources

* `jshint` - http://jshint.com/
