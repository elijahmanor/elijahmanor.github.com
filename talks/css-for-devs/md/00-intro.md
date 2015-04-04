# CSS for Developers

<div style="border: 5px solid white; height: 250px; width: 250px; margin: 1em auto;">
  <div style="font-size: 2em; text-align: left; width: 100px; line-height: 1.1em; margin-left: 0.25em;">CSS IS AWESOME</div>
</div>

## <!-- .element: style="text-transform: lowercase;" --> by [@elijahmanor](http://twitter.com/elijahmanor)

### @abracketsconf / #anglebrackets

<!-- <div style="font-size: .4em; opacity: 0.5; font-style: italic;">Picture: [Stray Cat](https://flic.kr/p/dQZvyD) / [Jim Bauer](https://www.flickr.com/photos/lens-cap/) / Creative Commons</div> -->

Notes:

## Bio

> Elijah Manor is a Christian and a family man. He works at The Lampo Group (Dave Ramsey) as a front-end web developer. He is a Microsoft Regional Director, Microsoft ASP.NET MVP, ASPInsider, IE userAgent, and a Pluralsight author. He enjoys blogging at http://elijahmanor.com and tweeting (@elijahmanor) about the things he learns.

------

## `me.json`

```
{
  "priorities" : [ "Christian", "Family", "Work" ],
  "work"       : [ "@DaveRamsey", "@PluralSight" ],
  "tech"       : [ "HTML", "CSS", "JavaScript", "React", "jQuery" ],
  "titles"     : [ "MS MVP", "IE userAgent" ]
}
```

------

# CSS Personas

```
window.fetch('http://api.randomuser.me/').then(function(response) {
  return response.json();
}).then(function(data) {
  copy(JSON.stringify(data, null, 2));
});
```

------

# CSS Personas

```
{
  "results": [
    {
      "user": {
        "gender": "female",
        "name": {
          "title": "ms",
          "first": "mia",
          "last": "williams"
        },
        "email": "mia.williams59@example.com",
        "picture": {
          "large": "http://api.randomuser.me/portraits/women/19.jpg",
          "medium": "http://api.randomuser.me/portraits/med/women/19.jpg",
          "thumbnail": "http://api.randomuser.me/portraits/thumb/women/19.jpg"
        },
        // ... more ...
      }
    }
  ]
}
```

------

## Back-End Brian

<img src="http://api.randomuser.me/portraits/men/8.jpg" style="border-radius: 50%; width: 25%;" />

### Computer science major

* Recently moved towards Front-End Web Development
* JavaScript and HTML make sense (mostly)
* CSS is frustrating and seemingly unmaintainable
* Leans towards Twitter Bootstrap or other frameworks

------

## Junior Jacob

<img src="http://api.randomuser.me/portraits/men/73.jpg" style="border-radius: 50%; width: 25%;" />

### Junior Front-End Developer

* Trying to pick up the ropes from scratch
* Too much information floating around on the web
* Hard to know what technique should be used

------

## Mid-Level Melissa

<img src="http://api.randomuser.me/portraits/women/10.jpg" style="border-radius: 50%; width: 25%;" />

### Mid-Level Front-End Developer

* Pretty comfortable with current set of skills
* Can get the job done, but it can be somewhat painful
* CSS quickly gets out of hand and hard to maintain
