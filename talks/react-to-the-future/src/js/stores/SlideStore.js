'use strict';

const Reflux = require('reflux');
const SlideActions = require('../actions/SlideActions');
const _findIndex = require('lodash-node/modern/array/findIndex');
const SlideApi = require('../utils/SlideApi');
const postal = require('postal');
const channel = postal.channel('slides');

let SETS = [ // TODO: Have a task that will auto-add setIndex and slideIndex and an empty slide
  { id: 'Introduction', markdown: './md/introduction.md',  slides: [{ setIndex: 0, slideIndex: 0, content: '<h1>React to the Future</h1>' }] },
  { id: 'WhatIsReact',  markdown: './md/what-is-react.md', slides: [{ setIndex: 1, slideIndex: 0, content: '<h1>What is React?</h1>' }] },
  { id: 'Components',   markdown: './md/components.md',    slides: [{ setIndex: 2, slideIndex: 0, content: '<h1>Components</h1>' }] },
  { id: 'Gotchas',      markdown: './md/gotchas.md',       slides: [{ setIndex: 3, slideIndex: 0, content: '<h1>Gotchas</h1>' }] },
  { id: 'Tips',         markdown: './md/tips.md',          slides: [{ setIndex: 4, slideIndex: 0, content: '<h1>Tips</h1>' }] },
  { id: 'Flux',         markdown: './md/flux.md',          slides: [{ setIndex: 5, slideIndex: 0, content: '<h1>Flux</h1>' }] },
  { id: 'Isomorphic',   markdown: './md/isomporphic.md',   slides: [{ setIndex: 6, slideIndex: 0, content: '<h1>Isomorphic</h1>' }] },
  { id: 'NodeModules',  markdown: './md/node-modules.md',  slides: [{ setIndex: 7, slideIndex: 0, content: '<h1>Node Modules</h1>' }] },
  { id: 'Conclusion',   markdown: './md/conclusion.md',    slides: [{ setIndex: 8, slideIndex: 0, content: `<h1>Conclusion</h1>` }] },
  { id: 'Resources',    markdown: './md/resources.md',     slides: [{ setIndex: 9, slideIndex: 0, content: '<h1>Resources</h1>' }] }
];

const SlideStore = Reflux.createStore({
  listenables: [SlideActions],
  init: function() {
    channel.subscribe('slide.updated', data => { // TODO: This should be moved out somewhere...
      let setIndex = _findIndex(this.slides, set => set.id === data.id);
      let set = this.slides[setIndex];
      let slides = [];

      if (~data.content.indexOf('<hr>')) {
        slides = data.content.split('<hr>');
        slides = slides.map((slide, slideIndex) => {
          let title = slide.match(/<h\d.*?>(.*)<\/h\d>/);
          let metadata = slide.match(/<!--\s?({(.|\s)*?})\s?-->/);
          return {
            setIndex,
            slideIndex,
            content: slide,
            metadata: metadata && metadata.length === 3 ? JSON.parse(metadata[1]) : {},
            title: title && title.length === 2 ? title[1] : ''
          };
        });
      } else {
        let title = data.content.match(/<h\d.*?>(.*)<\/h\d>/);
        let metadata = data.content.match(/<!--\s?({(.|\s)*?})\s?-->/);
        slides.push({
          setIndex,
          slideIndex: 0,
          content: data.content,
          metadata: metadata && metadata.length === 3 ? JSON.parse(metadata[1]) : {},
          title: title && title.length === 2 ? title[1] : ''
        });
      }

      set.slides = slides;

      this.trigger({ slides: this.slides });
    });

    this.setIndex = 0;
    this.slideIndex = 0;
    this.isOffline = false;
    this.slides = SETS; // TODO: Can this be removed?
    this.slideApi = new SlideApi(SETS); // TODO - These can be combined or constructor can kick off enhance
    this.slideApi.enhance();
  },
  setRouter(router) {
    this.router = router; // TODO: Maybe make a mixin for this?
  },
  getInitialState() {
    return { slides: SETS }; // TODO: Either this or the init `this.slides = SETS` but not both
  },
  gotoSlide(setIndex, slideIndex) {
    this.setIndex = parseInt(setIndex);
    this.slideIndex = parseInt(slideIndex);

    return this.getSlide();
  },
  getSlide(setIndex=this.setIndex, slideIndex=this.slideIndex) {
    slideIndex = slideIndex <= this.slides[setIndex].slides.length - 1 ? slideIndex : 0;

    let slide = this.slides[setIndex].slides[slideIndex];
    slide.isOffline = this.isOffline;

    return slide;
  },
  onNext() {
    let slide = this.getNext();

    this.setIndex = slide.setIndex;
    this.slideIndex = slide.slideIndex;

    this.router.transitionTo('slide', slide);
  },
  onPrevious() {
    let slide = this.getPrevious();

    this.setIndex = slide.setIndex;
    this.slideIndex = slide.slideIndex;

    this.router.transitionTo('slide', slide);
  },
  onList() {
    this.router.transitionTo('list');
  },
  onOffline() {
    this.isOffline = !this.isOffline;

    this.trigger({ slides: this.slides });
  },
  getNext() { // TODO: This seems somewhat complex
    let hasNextSetIndex = this.setIndex < this.slides.length - 1;
    let hasNextSlideIndex = this.slideIndex < this.slides[this.setIndex].slides.length - 1;

    let nextSetIndex = !hasNextSlideIndex && hasNextSetIndex ?
      this.setIndex + 1 : this.setIndex;
    let nextSlideIndex = hasNextSlideIndex ? this.slideIndex + 1 :
      hasNextSetIndex ? 0 : this.slideIndex;

    return this.getSlide(nextSetIndex, nextSlideIndex);
  },
  getPrevious() { // TODO: This seems somewhat more complex
    let hasPrevSetIndex = this.setIndex > 0;
    let hasPrevSlideIndex = this.slideIndex > 0;

    let prevSetIndex = !hasPrevSlideIndex && hasPrevSetIndex ? this.setIndex - 1 : this.setIndex;
    let prevSlideIndex = hasPrevSlideIndex ? this.slideIndex - 1 :
      hasPrevSetIndex ? this.slides[prevSetIndex].slides.length - 1 : 0;

    return this.getSlide(prevSetIndex, prevSlideIndex);
  },
  getProgress() {
    return {
      current: this.slides.reduce((memo, set, index) => {
        memo += index < this.setIndex ? set.slides.length : 0;
        memo += index === this.setIndex ? this.slideIndex + 1 : 0;

        return memo;
      }, 0),
      total: this.slides.reduce((memo, set) => memo + set.slides.length, 0)
    };
  }
});

module.exports = SlideStore;
