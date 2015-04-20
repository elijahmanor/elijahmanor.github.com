# Convoluted Code Smell
<!-- .slide: data-state="statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" -->

------

## Pig Latin
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

## Smelly Code
<!-- .slide: data-title="Convoluted Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

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
        } else { break; }
      }
      pigLatin = english.substring(i) + preConsonants + SYLLABLE;
    }
  }

  return pigLatin;
}
```
<!-- .element class="fragment fragment--code" -->

------

# Why Does This Smell?
<!-- .slide: data-title="Convoluted Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

------

## LOTS OF REASONS!
<!-- .slide: data-title="Convoluted Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

* Too Many Statements <!-- .element class="fragment" -->
* Too Much Depth <!-- .element class="fragment" -->
* Too Much Complexity <!-- .element class="fragment highlight-red" -->

------

## Cyclomatic Complexity
<!-- .slide: data-title="Convoluted Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

> "... is a software metric (measurement), used to indicate the complexity of a program. It is a quantitative measure of the number of linearly independent paths through a program's source code. It was developed by Thomas J. McCabe, Sr. in 1976." --[wikipedia](http://en.wikipedia.org/wiki/Cyclomatic_complexity)

Notes:

* http://jscomplexity.org/

------

# Tooling
<!-- .slide: data-title="Convoluted Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

------

## Linting
<!-- .slide: data-title="Convoluted Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

### Rules <!-- .element class="fragment" data-fragment-index="1" -->

```
/*jshint maxstatements:15, maxdepth:2, maxcomplexity:5 */
```
<!-- .element class="fragment" data-fragment-index="1"  -->

```
/*eslint max-statements:[2, 15], max-depth:[1, 2], complexity:[2, 5] */
```
<!-- .element class="fragment" data-fragment-index="2" -->

### Result <!-- .element class="fragment" data-fragment-index="3" -->

<pre><code class="nohighlight">7:0 - Function 'englishToPigLatin' has a complexity of 7.
7:0 - This function has too many statements (16). Maximum allowed is 15.
22:10 - Blocks are nested too deeply (5).</code></pre>
<!-- .element class="fragment" data-fragment-index="3" -->

------

## But Wait, There's More! (Current Stats)
<!-- .slide: data-title="Convoluted Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

* `max-statements:[2, 16]`
* `max-depth:[2, 5]`
* `complexity:[2, 7]`
* <!-- .element class="fragment highlight-blue" -->`max-len:[2, 65]`
* <!-- .element class="fragment highlight-blue" -->`max-params:[2, 0]`
* <!-- .element class="fragment highlight-blue" --> <code>max-nested-callbacks:[2, 0]</code> <div style="display: inline-block; font-size: .6em; opacity: 1.0; font-style: italic;">(ESLint Only)</div>

------

# So What!?!
<!-- .slide: data-title="Convoluted Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--junior" data-background="#222" -->

## Refactor <!-- .element class="fragment" -->

------

## Unit Test First
<!-- .slide: data-title="Convoluted Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--mid statusSkill--change" data-background="#222" -->

<pre class="fragment fragment--code"><code data-trim data-lang="javascript">
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

## Refactor
<!-- .slide: data-title="Convoluted Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--senior statusSkill--change" data-background="#222" -->

<!-- /* jshint maxparams:3, maxdepth:2, maxstatements:5, maxcomplexity:6, maxlen:80, esnext:true */ -->
<pre class="fragment fragment--code"><code data-trim data-lang="javascript">
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

## Updated Stats
<!-- .slide: data-title="Convoluted Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--senior" data-background="#222" -->

* max-statements: 16 &rarr; 6 <!-- .element class="fragment highlight-green" -->
* max-depth: 5 &rarr; 2 <!-- .element class="fragment highlight-green" -->
* complexity: 7 &rarr; 3 <!-- .element class="fragment highlight-green" -->
* max-len: 65 &rarr; 73 <!-- .element class="fragment highlight-red" -->
* max-params: 0 &rarr; 2 <!-- .element class="fragment highlight-red" -->
* max-nested-callbacks: 0 &rarr; 1 <!-- .element class="fragment highlight-red" -->

------

## Resources
<!-- .slide: data-title="Convoluted Code" data-state="title statusLint statusLint--easy statusRule statusRule--fresh statusSkill statusSkill--senior" data-background="#222" -->

* `jshint` - http://jshint.com/
* `eslint` - http://eslint.org/
* `jscomplexity` - http://jscomplexity.org/
* `escomplex` - https://github.com/philbooth/escomplex
* `jasmine` - http://jasmine.github.io/
