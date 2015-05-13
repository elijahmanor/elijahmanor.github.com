'use strict';

const reqwest = require('reqwest');
const postal = require('postal');
const channel = postal.channel('slides');
const marked = require('marked');

class SlideApi {
  constructor(slides) {
    this.slides = slides;

    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });
  }

  enhance() {
    let slides = this.slides.filter(slide => !!slide.markdown);

    slides.forEach(slide => {
      reqwest({ url: slide.markdown })
      .then(response => {
        let content = marked(response);
        channel.publish('slide.updated', { id: slide.id, content });
      });
    });

    return this.slides;
  }
}

module.exports = SlideApi;
