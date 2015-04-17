# Convoluted Code Smell
<!-- .slide: data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

------

# Pig Latin
<!-- .slide: data-title="Convoluted Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

1. <!-- .element start="1" value="1" --> If starts with consonant (or consonant cluster), then move the end and append "ay" <!-- .element class="fragment" -->

```
"pig"    -> "igpay"
"banana" -> "ananabay"
"trash"  -> "ashtray"
"happy"  -> "appyhay"
"glove"  -> "oveglay"
```
<!-- .element class="fragment" -->

2. <!-- .element start="2" value="2" --> If starts with vowel or silent letter, then keep word along and append "way" <!-- .element class="fragment" -->

```
"egg"    -> "eggway"
"inbox"  -> "inboxway"
"eight"  -> "eightway"
```
<!-- .element class="fragment" -->

------

# Smelly Code
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

```
/* const */ var CONSONANTS = 'bcdfghjklmnpqrstvwxyz';
/* const */ var VOWELS = 'aeiou';

function englishToPigLatin(english) {
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

# Why Does This Smell?
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

------

# Cyclomatic Complexity
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

> "... is a software metric (measurement), used to indicate the complexity of a program. It is a quantitative measure of the number of linearly independent paths through a program's source code. It was developed by Thomas J. McCabe, Sr. in 1976." --[wikipedia](http://en.wikipedia.org/wiki/Cyclomatic_complexity)

------

# EnglishToPigLatin
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

## Cyclomatic Complexity: 7

http://jscomplexity.org/

------

# Tooling
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

<!-- .element class="fragment" -->
JSHint and ESLint support the `maxcomplexity` option!

<!-- .element class="fragment" -->
`// jshint maxcomplexity:5`

------

# JSHint / ESLint
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

![](./img/jshint-complexity.png)

------

# So What!?!
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

## Refactor <!-- .element class="fragment" -->

------

# Unit Test First
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

<pre class="fragment"><code data-trim data-lang="javascript">
describe('Pig Latin', function() {
  describe('Invalid', function() {
    it('should return blank if passed null', function() {
      expect(englishToPigLatin(null)).toBe('');
    });

    it('should return blank if passed blank', function() {
      expect(englishToPigLatin('')).toBe('');
    });

    it('should return blank if passed number', function() {
      expect(englishToPigLatin('1234567890')).toBe('');
    });

    it('should return blank if passed symbol', function() {
      expect(englishToPigLatin('~!@#$%^&*()_+')).toBe('');
    });
  });

  describe('Consonants', function() {
    it('should return eastbay from beast', function() {
      expect(englishToPigLatin('beast')).toBe('eastbay');
    });

    it('should return estionquay from question', function() {
      expect(englishToPigLatin('question')).toBe('estionquay');
    });

    it('should return eethray from three', function() {
      expect(englishToPigLatin('three')).toBe('eethray');
    });
  });

  describe('Vowels', function() {
    it('should return appleay from apple', function() {
      expect(englishToPigLatin('apple')).toBe('appleay');
    });
  });
});
</code></pre>

------

# Refactor
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

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

function englishToPigLatin(english) {
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
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

## Cyclomatic Complexity: 4

------

# [`plato`](https://github.com/es-analysis/plato)
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

JavaScript visualization, static analysis, and complexity tool

```
plato -r -d report -t "English to Pig Latin"
```

<a href="./js/report/index.html" target="_blank"><img src="./img/plato.png" style="height: 450px;" /></a>

------

# Massive Method Smell
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

------

# Smelly Code
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

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

function englishToPigLatin(english) {
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

# Why Does This Smell?
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

------

# Massive Method!
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

* Too Many Statements <!-- .element class="fragment" -->
* Too Many Parameters <!-- .element class="fragment" -->
* Too Much Depth <!-- .element class="fragment" -->

------

# Tooling
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

JSHint and ESLint support the `maxparams`, `maxdepth`, `maxstatements`, & `maxlen` options!

<pre><code data-trim data-lang="javascript">
// jshint maxparams:3, maxdepth:2, maxstatements:5, maxlen:80 */
</code></pre><!-- .element class="fragment" -->

<!-- .element class="fragment" -->
_Note: `maxlen` is deprecated & you should use `jscs` instead_

------

# JSHint / ESLint
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

![](./img/jshint-max.png)

------

# Current Stats
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

* <!-- .element class="fragment" --> `maxparams`: 2
* <!-- .element class="fragment" --> `maxdepth`: 3
* <!-- .element class="fragment" --> `maxstatements`: 10
* <!-- .element class="fragment" --> `maxcomplexity`: 4
* <!-- .element class="fragment" --> `maxlen`: 65

------

# So What!?!
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

## Refactor <!-- .element class="fragment" -->

------

# Refactor
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

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

function englishToPigLatin(english='') {
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
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

* <!-- .element class="fragment highlight-blue" --> `maxparams`: 2
* <!-- .element class="fragment highlight-green" --> `maxdepth`: 2
* <!-- .element class="fragment highlight-green" --> `maxstatements`: 6
* <!-- .element class="fragment highlight-green" --> `maxcomplexity`: 3
* <!-- .element class="fragment highlight-red" --> `maxlen`: 73

------

# Resources
<!-- .slide: data-title="Convoluted Code" data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

* `jshint` - http://jshint.com/
* `eslint` - http://eslint.org/
* `jscomplexity` - http://jscomplexity.org/
* `escomplex` - https://github.com/philbooth/escomplex
* `plato` - https://github.com/es-analysis/plato
* `plato` report - http://elijahmanor.github.io/talks/js-smells/js/report/index.html
