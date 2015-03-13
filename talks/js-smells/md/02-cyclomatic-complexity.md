# Smelly Code

```
/* const */ var CONSONANTS = 'bcdfghjklmnpqrstvwxyz';
/* const */ var VOWELS = 'aeiou';

function EnglishToPigLatin(english) {
  /* const */ var SYLLABLE = 'ay';

  var pigLatin = '';

  if (english !== null && english.length > 0 &&
    (VOWELS.indexOf(english[0]) > -1 ||
    CONSONANTS.indexOf(english[0]) > -1 )) {
    if (VOWELS.indexOf(english[0]) > -1) {
      pigLatin = english + SYLLABLE;
    } else {
      var preConsonants = '';
      for (var i = 0; i < english.length; ++i) {
        if (CONSONANTS.indexOf(english[i]) > -1) {
          preConsonants += english[i];
          if (preConsonants == 'q' &&
            i+1 < english.length && english[i+1] == 'u') {
            preConsonants += 'u';
            i += 2;
            break;
          }
        } else {
          break;
        }
      }
      pigLatin = english.substring(i) + preConsonants + SYLLABLE;
    }
  }

  return pigLatin;
}
```

------

# Cyclomatic Complexity

> "... is a software metric (measurement), used to indicate the complexity of a program. It is a quantitative measure of the number of linearly independent paths through a program's source code. It was developed by Thomas J. McCabe, Sr. in 1976." --[wikipedia](http://en.wikipedia.org/wiki/Cyclomatic_complexity)

------

# EnglishToPigLatin

## Cyclomatic Complexity: 7

http://jscomplexity.org/
https://github.com/philbooth/escomplex

------

# Tooling

<!-- .element class="fragment" -->
JSHint and ESLint support the `maxcomplexity` option!

<!-- .element class="fragment" -->
`// jshint maxcomplexity:5`

------

# JSHint / ESLint

![](./img/jshint-complexity.png)

------

# So What!?!

## Refactor <!-- .element class="fragment" -->

------

# Unit Test First

<pre class="fragment"><code data-trim data-lang="javascript">
describe('Pig Latin', function() {
  describe('Invalid', function() {
    it('should return blank if passed null', function() {
      expect(EnglishToPigLatin(null)).toBe('');
    });

    it('should return blank if passed blank', function() {
      expect(EnglishToPigLatin('')).toBe('');
    });

    it('should return blank if passed number', function() {
      expect(EnglishToPigLatin('1234567890')).toBe('');
    });

    it('should return blank if passed symbol', function() {
      expect(EnglishToPigLatin('~!@#$%^&*()_+')).toBe('');
    });
  });

  describe('Consonants', function() {
    it('should return eastbay from beast', function() {
      expect(EnglishToPigLatin('beast')).toBe('eastbay');
    });

    it('should return estionquay from question', function() {
      expect(EnglishToPigLatin('question')).toBe('estionquay');
    });

    it('should return eethray from three', function() {
      expect(EnglishToPigLatin('three')).toBe('eethray');
    });
  });

  describe('Vowels', function() {
    it('should return appleay from apple', function() {
      expect(EnglishToPigLatin('apple')).toBe('appleay');
    });
  });
});
</code></pre>

------

# Refactor

<pre class="fragment"><code data-trim data-lang="javascript">
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
</code></pre>

------

# A Little Better

## Cyclomatic Complexity: 4

http://jscomplexity.org/
https://github.com/philbooth/escomplex
