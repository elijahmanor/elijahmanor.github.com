'use strict';

const Reflux = require('reflux');
const SlideActions = require('../actions/SlideActions');
const _findIndex = require('lodash-node/modern/array/findIndex');
const markdown = require( "markdown" ).markdown;
let SLIDES = [
  { content: `<h1>Slide 1</h1>`, status: 'current' },
  { content: `
    <h1>Slide 2</h1>
    <ul>
      <li>Point One</li>
      <li>Point Two</li>
      <li>Point Three</li>
    </ul>
    ` },
  { markdown: './md/slide3.md' },
  { markdown: './md/slide4.md' },
  { markdown: './md/slide5.md' }
];

let SlideStore = Reflux.createStore({
  listenables: [SlideActions],
  init: function() {
    this.slides = SLIDES;
  },
  getInitialState() {
    return { slides: this.slides };
  },
  onGetSlides() {
    // const markdown = require( "markdown" ).markdown;
  },
  onNext() {
    let index = _findIndex(this.slides, slide => slide.status === 'current');

    if (index > -1 && index < this.slides.length - 1) {
      this.slides[index].status = 'hidden';
      this.slides[index + 1].status = 'current';
      this.trigger({ slides: this.slides });
    }
  },
  onPrevious() {
    let index = _findIndex(this.slides, slide => slide.status === 'current');

    if (index > 0) {
      this.slides[index].status = 'hidden';
      this.slides[index - 1].status = 'current';
      this.trigger({ slides: this.slides });
    }
  },
  hideSlides() {
    this.slides.forEach(slide => slide.status = 'hidden');
  }
});

module.exports = SlideStore;
