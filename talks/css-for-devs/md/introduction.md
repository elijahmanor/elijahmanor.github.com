# CSS for Developers

<div class="CSSForDevelopers">
  <div class="CSSForDevelopers-text">CSS IS AWESOME</div>
</div>

## <!-- .element: style="text-transform: lowercase;" --> by [@elijahmanor](http://twitter.com/elijahmanor)

<h3 data-store="introduction-social" contenteditable></h3>

<!-- <div style="font-size: .4em; opacity: 0.5; font-style: italic;">Picture: [Stray Cat](https://flic.kr/p/dQZvyD) / [Jim Bauer](https://www.flickr.com/photos/lens-cap/) / Creative Commons</div> -->

Notes:

## Bio

> Elijah Manor is a Christian and a family man. He works at The Lampo Group (Dave Ramsey) as a front-end web developer. He is a Microsoft Regional Director, Microsoft ASP.NET MVP, ASPInsider, IE userAgent, and a Pluralsight author. He enjoys blogging at http://elijahmanor.com and tweeting (@elijahmanor) about the things he learns.

------

## `me.json`

<div class="Split">
  <div class="Split-column">
    <pre class="language-javascript clean"><code>{
  "name": "Elijah Manor",
  "priorities" : [
    "Christian", "Family", "Work"
  ],
  "work" : [
    "@DaveRamsey", "@PluralSight"
  ],
  "tech" : [
    "HTML", "CSS", "JavaScript",
    "React", "jQuery"
  ],
  "titles" : [
    "Microsoft MVP",
    "IE userAgent"
  ]
}</code></pre>
  </div>
  <div class="Split-column">
    <img src="./imgs/myfamily.jpg" />
    <img src="./imgs/ramsey-solutions.svg" />
    <img src="./imgs/everydollar.svg" />
  </div>
</div>  

------

# CSS Personas

<pre class="language-javascript"><code>
window.fetch('http://api.randomuser.me/').then(function(response) {
  return response.json();
}).then(function(data) {
  copy(JSON.stringify(data, null, 2));
});</code></pre>

------

## Back-End Brian

<img src="./imgs/back-end-brian-big.jpg" data-xsrc="http://api.randomuser.me/portraits/men/31.jpg" style="border-radius: 50%; width: 25%;" /><!-- 8, 15, 31,  -->

### Computer science major

* Recently moved towards Front-End Web Development
* JavaScript and HTML make sense (mostly)
* CSS is frustrating and seemingly unmaintainable
* Leans towards Twitter Bootstrap or other frameworks

------

## Junior Jacob

<img src="./imgs/junior-jacob-big.jpg" data-xsrc="http://api.randomuser.me/portraits/men/73.jpg" style="border-radius: 50%; width: 25%;" /><!-- 32, 73 -->

### Junior Front-End Developer

* Trying to pick up the ropes from scratch
* Too much information floating around on the web
* Hard to know what technique should be used

------

## Mid-Level Melissa

<img src="./imgs/mid-level-melissa-big.jpg" data-xsrc="http://api.randomuser.me/portraits/women/10.jpg" style="border-radius: 50%; width: 25%;" />

### Mid-Level Front-End Developer

* Pretty comfortable with current set of skills
* Can get the job done, but it can be somewhat painful
* CSS quickly gets out of hand and hard to maintain
