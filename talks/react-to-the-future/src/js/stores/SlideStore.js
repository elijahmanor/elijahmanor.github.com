'use strict';

const Reflux = require('reflux');
const SlideActions = require('../actions/SlideActions');
const _findIndex = require('lodash-node/modern/array/findIndex');
const SlideApi = require('../utils/SlideApi');
const postal = require('postal');
const channel = postal.channel('slides');

let SLIDES = [
  { id: 'Introduction', content: '<h1>Slide 1</h1>', markdown: './md/introduction.md', status: 'current' },
  { id: 'About', markdown: './md/about.md' },
  { id: 'third', markdown: './md/slide3.md' },
  { id: 'fourth', markdown: './md/slide4.md' },
  { id: 'fifth', markdown: './md/slide5.md' },
  { id: 'conclusion', content: `<h1>Conclusion</h1>` }
];

let SlideStore = Reflux.createStore({
  listenables: [SlideActions],
  init: function() {
    channel.subscribe('slide.updated', data => {
      let index = _findIndex(this.slides, slide => slide.id === data.id);
      let slide = this.slides[index];

      this.slides.splice(index, 1, { id: data.id, content: data.content, status: slide.status });
      this.trigger({ slides: this.slides });
    });

    this.slides = SLIDES;
    this.slideApi = new SlideApi(SLIDES);
    this.slideApi.enhance();
  },
  getInitialState() {
    return { slides: SLIDES };
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
