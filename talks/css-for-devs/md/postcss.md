# PostCSS

> "A tool for transforming CSS with JavaScript" --[PostCSS](http://postcss.org/)

Notes:

------

## PostCSS isn't a Postprocessor?
<!-- .slide: data-title="PostCSS" data-state="backEndBrian juniorJacob midLevelMelissa flagged twitter" -->

<div class="flexRowCenter">
  <div class="fragment">
    <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">It is time admit my mistakes. “Postprocessor” term was bad. PostCSS team stoped to use it. <a href="https://t.co/vs2AiXGoJy">https://t.co/vs2AiXGoJy</a></p>&mdash; PostCSS (@PostCSS) <a href="https://twitter.com/PostCSS/status/626046993006239744">July 28, 2015</a></blockquote>
  </div>

  <div class="fragment">
    <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/HugoGiraudel">@HugoGiraudel</a> nobody in postcss contributors is using this expression anymore. Now it is Postcss like &quot;css and beyond&quot;</p>&mdash; Maxime Thirouin (@MoOx) <a href="https://twitter.com/MoOx/status/623466638680178688">July 21, 2015</a></blockquote>
  </div>
</div>

------

## Why Would I Use PostCSS?
<!-- .slide: data-title="PostCSS" data-state="backEndBrian juniorJacob midLevelMelissa notes" -->

------

## Performance <small>(milliseconds)</small>
<!-- .slide: data-title="PostCSS" data-state="backEndBrian juniorJacob midLevelMelissa flagged preLeftAligned" -->

<iframe class="stretch" id="postcss-performance" data-chart></iframe>

<small style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);">Source: [postcss/benchmark](https://github.com/postcss/benchmark)</small>

<!-- ```
PostCSS:     40 ms
Rework:      75 ms ( 1.9 times slower)
libsass:     76 ms ( 1.9 times slower)
Less:       147 ms ( 3.7 times slower)
Stylus:     166 ms ( 4.1 times slower)
Stylecow:   258 ms ( 6.4 times slower)
Ruby Sass: 1042 ms (26.0 times slower)
```

https://github.com/postcss/benchmark -->

------

## Modularity
<!-- .slide: data-title="PostCSS" data-state="backEndBrian juniorJacob midLevelMelissa notes" -->

<svg xmlns="http://www.w3.org/2000/svg" id="mermaidChart" viewBox="0 0 710 125">
  <style title="mermaid-svg-internal-css">
    #mermaidChart .node&gt;rect { ; }
    #mermaidChart .node text { fill:#000; stroke:none; font-weight:300; font-family:&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serf; font-size:14px; }
    #mermaidChart .edgeLabel text { fill:#000; stroke:none; font-weight:300; font-family:&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serf; font-size:14px; }
    #mermaidChart .cluster rect { rx:4px; fill: rgb(255, 255, 222); rx: 4px; stroke: rgb(170, 170, 51); stroke-width: 1px; }
    *, ::before, ::after { box-sizing: inherit;}
    .mermaid .label, .label { color: rgb(51, 51, 51); font-size: 1rem; }
    .node rect, .node circle, .node polygon { fill: rgb(236, 236, 255); stroke: rgb(204, 204, 255); stroke-width: 1px;}
    .edgePath .path { stroke: #3AADFD !important;}
  </style>
  <g class="output">
    <g class="edgePaths">
      <g class="edgePath">
        <path fill="none" d="M74 52.5h50" class="path fragment" data-fragment-index="2" marker-end="url(#arrowhead603)"/>
        <defs>
          <marker id="arrowhead603" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="6" orient="auto">
            <path fill="#3AADFD" d="M0 0l10 5-10 5z"/>
          </marker>
        </defs>
      </g>
      <g class="edgePath">
        <path fill="none" d="M182 52.5h50" class="path fragment" data-fragment-index="3" marker-end="url(#arrowhead604)"/>
        <defs>
          <marker id="arrowhead604" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="6" orient="auto">
            <path fill="#3AADFD" d="M0 0l10 5-10 5z"/>
          </marker>
        </defs>
      </g>
      <g class="edgePath">
        <path fill="none" d="M306 52.5h50" class="path fragment" data-fragment-index="4" marker-end="url(#arrowhead605)"/>
        <defs>
          <marker id="arrowhead605" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="6" orient="auto">
            <path fill="#3AADFD" d="M0 0l10 5-10 5z"/>
          </marker>
        </defs>
      </g>
      <g class="edgePath">
        <path fill="none" d="M430 52.5h50" class="path fragment" data-fragment-index="5" marker-end="url(#arrowhead606)"/>
        <defs>
          <marker id="arrowhead606" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="6" orient="auto">
            <path fill="#3AADFD" d="M0 0l10 5-10 5z"/>
          </marker>
        </defs>
      </g>
      <g class="edgePath">
        <path fill="none" d="M555 52.5h50" class="path fragment" data-fragment-index="6" marker-end="url(#arrowhead607)"/>
        <defs>
          <marker id="arrowhead607" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="6" orient="auto">
            <path fill="#3AADFD" d="M0 0l10 5-10 5z"/>
          </marker>
        </defs>
      </g>
    </g>
    <g class="edgeLabels">
      <foreignObject width="0" height="0" class="edgeLabel label">
        <div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml">
          <span class="edgeLabel"/>
        </div>
      </foreignObject>
      <foreignObject width="0" height="0" class="edgeLabel label">
        <div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml">
          <span class="edgeLabel"/>
        </div>
      </foreignObject>
      <foreignObject width="0" height="0" class="edgeLabel label">
        <div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml">
          <span class="edgeLabel"/>
        </div>
      </foreignObject>
      <foreignObject width="0" height="0" class="edgeLabel label">
        <div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml">
          <span class="edgeLabel"/>
        </div>
      </foreignObject>
      <foreignObject width="0" height="0" class="edgeLabel label">
        <div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml">
          <span class="edgeLabel"/>
        </div>
      </foreignObject>
    </g>
    <g class="nodes">
      <g id="Input" class="node fragment" data-fragment-index="1" transform="translate(47 52.5)">
        <circle r="32.5"/>
        <foreignObject width="34" height="22" transform="translate(-17 -11)" class="label">
          <div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml">
            Input
          </div>
        </foreignObject>
      </g>
      <g id="Parse" class="node fragment" data-fragment-index="2" transform="translate(153 52.5)">
        <rect width="58" height="42" x="-29" y="-21" rx="5" ry="5"/>
        <foreignObject width="38" height="22" transform="translate(-19 -11)" class="label">
          <div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml">
            Parse
          </div>
        </foreignObject>
      </g>
      <g id="Plugin1" class="node fragment" data-fragment-index="3" transform="translate(269 52.5)">
        <rect width="74" height="42" x="-37" y="-21" rx="0" ry="0"/>
        <foreignObject width="54" height="22" transform="translate(-27 -11)" class="label">
          <div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml">
            Plugin 1
          </div>
        </foreignObject>
      </g>
      <g id="Plugin2" class="node fragment" data-fragment-index="4" transform="translate(393 52.5)">
        <rect width="74" height="42" x="-37" y="-21" rx="0" ry="0"/>
        <foreignObject width="54" height="22" transform="translate(-27 -11)" class="label">
          <div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml">
            Plugin 2
          </div>
        </foreignObject>
      </g>
      <g id="Stringify" class="node fragment" data-fragment-index="5" transform="translate(517.5 52.5)">
        <rect width="75" height="42" x="-37.5" y="-21" rx="5" ry="5"/>
        <foreignObject width="55" height="22" transform="translate(-27.5 -11)" class="label">
          <div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml">
            Stringify
          </div>
        </foreignObject>
      </g>
      <g id="Output" class="node fragment" data-fragment-index="6" transform="translate(637.5 52.5)">
        <circle r="32.5"/>
        <foreignObject width="45" height="22" transform="translate(-22.5 -11)" class="label">
          <div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml">
            Output
          </div>
        </foreignObject>
      </g>
    </g>
  </g>
</svg>

------

## How to Use?
<!-- .slide: data-title="PostCSS" data-state="backEndBrian juniorJacob midLevelMelissa notes" -->

CLI, Node, Grunt, Gulp, etc...

<textarea data-codemirror data-mode="text/x-sh">
postcss --use autoprefixer -c options.json -o main.css css/*.css
</textarea>

<textarea data-codemirror data-mode="text/javascript">
import postcss from "postcss";

postcss( [ plugin1, plugin2 ] )
  .process( css )
  .then( result => console.log( result.css ) );
</textarea>

------

## What does a Plugin Look Like?
<!-- .slide: data-title="PostCSS" data-state="backEndBrian juniorJacob midLevelMelissa notes" -->

<div class="Split" style="width: 120%; left: 50%; transform: translateX(-50%); position: relative;">
  <div class="Split-column Split-column--70">
<textarea data-codemirror data-mode="text/javascript" data-line-numbers="false">
import randomColor from "randomcolor";

postcss.plugin('randomcolor', () => {
  const RANDOM_PLACEHOLDER = "#random";

  return css => {
    css.walkRules(rule => {
      rule.walkDecls(decl => {
        let value = decl.value;
        if (~value.indexOf(RANDOM_PLACEHOLDER)) {
          decl.value = decl.value.replace(
            RANDOM_PLACEHOLDER, randomColor()
          );
        }
      });
    });
  }
});
</textarea>
  </div>
  <div class="Split-column Split-column--30">
    <h4>Input</h4>
    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false">
.randomColor {
  color: #random;
  z-index: 99;
  background: #random;
}
</textarea>
    <div class="fragment">
      <h4>Output</h4>
      <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false">
.randomColor {
  color: #40dcb3;
  z-index: 99;
  background: #d78169;
}
</textarea>
    </div>
  </div>
</div>

------

## Does PostCSS have XYZ feature like Sass!?!
<!-- .slide: data-title="PostCSS" data-state="backEndBrian juniorJacob midLevelMelissa" -->

------

<!-- .slide: data-title="PostCSS" data-state="backEndBrian juniorJacob midLevelMelissa" data-menu-title="postcss-simple-vars & postcss-nested" -->

<div class="Split">
  <div class="Split-column">
    [`-simple-vars`](https://github.com/postcss/postcss-simple-vars)

    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false">
$font-stack: Helvetica;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
</textarea>
  </div>
  <div class="Split-column">
    [`-nested`](https://github.com/postcss/postcss-nested)

    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false">
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { float: left; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
</textarea>
  </div>
</div>

------

<!-- .slide: data-title="PostCSS" data-state="backEndBrian juniorJacob midLevelMelissa extended" data-menu-title="postcss-partial-import & postcss-extend" -->

<div class="Split">
  <div class="Split-column">
    [`-partial-import`](https://github.com/jonathantneal/postcss-partial-import)

    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false">
// base.scss

@import "components/media";

body {
  font: 100% Helvetica;
  color: #efefef;
}</textarea>
  </div>
  <div class="Split-column">
    [`-extend`](https://github.com/travco/postcss-extend)

    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false">
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;

  border-color: green;
}
</textarea>
  </div>
</div>

------

## [postcss-mixins](https://github.com/postcss/postcss-mixins): Simple
<!-- .slide: data-title="PostCSS" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div class="Split">
  <div class="Split-column Split-column--50 fragment">
    <h3>Sass</h3>
    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false">
@mixin awesome($icon) {
  &:before {
    content: $icon;
    font-family: FontAwesome;
    display: inline-block;
    line-height: 1;
  }
}

.test {
  @include awesome("\f09b");
}
</textarea>
</div>
<div class="Split-column Split-column--50 fragment">
  <h3>PostCSS</h3>
  <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false">
@define-mixin awesome $icon {
  &:before {
    content: $icon;
    font-family: FontAwesome;
    display: inline-block;
    line-height: 1;
  }
}

.test {
  @mixin awesome "\f09b";
}
</textarea>
</div>

------

## [postcss-mixins](https://github.com/postcss/postcss-mixins): Function
<!-- .slide: data-title="PostCSS" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<textarea data-codemirror data-mode="text/javascript" data-line-numbers="false">
require('postcss-mixins')({
    mixins: {
      center: function (mixin, axis) {
        var declarations = {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        };

        if (axis === "x") {
          declarations.transform = "translateX(-50%)";
          delete declarations.top;
        } else if (axis === "y") {
          declarations.transform = "translateY(-50%)";
          delete declarations.left;
        }

        return declarations;
      }
    }
});
</textarea>

------

## [postcss-mixins](https://github.com/postcss/postcss-mixins) & [postcss-conditionals](https://github.com/andyjansson/postcss-conditionals)
<!-- .slide: data-title="PostCSS" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false">
@define-mixin center $axis: 0 {
  position: absolute;

  @if $axis == 0 {
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }
  @else if $axis == x {
    left: 50%;
    transform: translateX(-50%);
  }
  @else if $axis == y {
    top: 50%;
    transform: translateY(-50%);
  }
}
</textarea>

------


## Things Sass Can't Do...
<!-- .slide: data-title="PostCSS" data-state="backEndBrian juniorJacob midLevelMelissa" -->

------

## [cssnext](https://github.com/MoOx/postcss-cssnext)
<!-- .slide: data-title="PostCSS" data-state="backEndBrian juniorJacob midLevelMelissa" -->

* <!-- .element class="cssnext-feature" --> automatic vendor prefixes
* <!-- .element class="cssnext-feature" --> custom properties & `var()`
* <!-- .element class="cssnext-feature" --> reduced `calc()`
* <!-- .element class="cssnext-feature" --> custom media queries
* <!-- .element class="cssnext-feature" --> media queries ranges
* <!-- .element class="cssnext-feature" --> custom selectors
* <!-- .element class="cssnext-feature" --> nesting
* <!-- .element class="cssnext-feature" --> `color()` function
* <!-- .element class="cssnext-feature" --> `hwb()` function
* <!-- .element class="cssnext-feature" --> `gray()` function
* <!-- .element class="cssnext-feature" --> `#rrggbbaa` colors
* <!-- .element class="cssnext-feature" --> `rgba` function (rgb fallback)
* <!-- .element class="cssnext-feature" --> `rebeccapurple` color
* <!-- .element class="cssnext-feature" --> `font-variant` property
* <!-- .element class="cssnext-feature" --> `filter` property (svg fallback)
* <!-- .element class="cssnext-feature" --> `initial` value
* <!-- .element class="cssnext-feature" --> `rem` unit (px fallback)
* <!-- .element class="cssnext-feature" --> `:any-link` pseudo-class
* <!-- .element class="cssnext-feature" --> `:matches` pseudo-class
* <!-- .element class="cssnext-feature" --> `:not` pseudo-class (to l.3)
* <!-- .element class="cssnext-feature" --> `::pseudo` syntax (: fallback)

<!-- .element class="cssnext" -->

------

## [cssnext](https://github.com/MoOx/postcss-cssnext)
<!-- .slide: data-title="PostCSS" data-state="backEndBrian juniorJacob midLevelMelissa extended" -->

<div class="Split" style="width: 130%; left: 50%; transform: translateX(-50%); position: relative;">
  <div class="Split-column Split-column--50">
    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false">
/\* custom properties \*/
:root {
  --fontSize: 1rem;
  --mainColor: #12345678;
}

/\* some var() & calc() \*/
body {
  color: var(--mainColor);
  font-size: var(--fontSize);
  line-height:
    calc(var(--fontSize) \* 1.5);
  padding:
    calc((var(--fontSize) / 2) + 1px);
}
</textarea>
  </div>
  <div class="Split-column  Split-column--50">
    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false">
/\* custom selectors \*/
@custom-selector :--heading h1, h2, h3, h4, h5, h6;
:--heading { margin-top: 0 }

/\* colors stuff \*/
a:hover { color: gray(255, 50%) }
a:active { color: rebeccapurple }
a:any-link {
  color: color(
    var(--highlightColor) blackness(+20%)
  )
}

/\* filters \*/
.blur { filter: blur(4px); }
.sepia { filter: sepia(.8); }
</textarea>
  </div>
</div>

------

## [postcss-assets](https://github.com/assetsjs/postcss-assets)
<!-- .slide: data-title="PostCSS" data-state="backEndBrian juniorJacob midLevelMelissa" -->

<div class="Split" style="width: 120%; left: 50%; transform: translateX(-50%); position: relative;">
  <div class="Split-column Split-column--50">
    <textarea data-codemirror data-mode="text/javascript" data-line-numbers="false">
var assets =
  require('postcss-assets');

assets({
  loadPaths: [
    'fonts/',
    'media/patterns/',
    'images/'
  ]
});
</textarea>
  </div>
  <div class="Split-column Split-column--50">
    <h4>Input</h4>
    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false">
body {
  background: resolve('hero.jpg');
  background: resolve('close.png');
}
</textarea>

    <h4>Output</h4>
    <textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false" class="fragment">
body {
  background:
    url('/media/patterns/hero.jpg');
  background:
    url('/images/icons/close.png');
}
</textarea>
  </div>
</div>

------

## [doiuse](https://github.com/anandthakker/doiuse)
<!-- .slide: data-title="PostCSS" data-state="backEndBrian juniorJacob midLevelMelissa" -->

Lint CSS for browser support against caniuse database

<textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false">
doiuse --browsers "ie >= 10, > 5%, last 2 versions" main.css
</textarea>

<textarea data-codemirror data-mode="text/x-sass" data-line-numbers="false">
doiuse({
  browsers:['ie >= 10', '> 5%'],
  ignore: [], // an optional array of features to ignore
  ignoreFiles: [], // an optional array of files to ignore
  onFeatureUsage: function(usageInfo) {
    console.log(usageInfo.message);
  }
})
</textarea>

------

## Resources
<!-- .slide: data-title="PostCSS" data-state="backEndBrian juniorJacob midLevelMelissa midLevelMelissa resources" -->

* [An Introduction To PostCSS](https://www.smashingmagazine.com/2015/12/introduction-to-postcss/) by [@drewisthe](https://twitter.com/drewisthe)
* [PostCSS Deep Dive Series](http://webdesign.tutsplus.com/series/postcss-deep-dive--cms-889) by [@kezzbracey](https://twitter.com/kezzbracey)
* [PostCSS.parts: A searchable catalog of PostCSS Plugins](http://postcss.parts/)
* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [PostCSS Playground](https://sneakertack.github.io/postcss-playground/) by [@sneakertack](https://twitter.com/sneakertack)
* [PostCSS: The Future after Sass and Less](http://ai.github.io/about-postcss/en/?full#1) by [@andreysitnik](https://twitter.com/andreysitnik)
* [PostCSS Compare Packs](https://github.com/timaschew/postcss-compare-packs)

Notes:

* precss
* cssnext
* stylelint
* doiuse
* colorguard
* https://github.com/ileri/postcss-bem
* https://github.com/assetsjs/postcss-assets
* postcss-short
* gulp gulp-postcss gulp-sourcemaps
* webpack postcss-loader
* cli
* https://github.com/seaneking/postcss-normalize
* https://github.com/ileri/postcss-bem
* https://github.com/necolas/postcss-bem-linter
* https://github.com/btholt/postcss-colorblind

section { position: absolute 10px * *; }
.topNav { position: fixed 0 * * 0; }
.modal { position: fixed 40% 25%; }
