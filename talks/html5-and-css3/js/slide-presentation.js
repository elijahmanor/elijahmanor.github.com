if (!Function.prototype.bind) {
  Function.prototype.bind = function(scope) {
    var func = this;
    return function() {
      func.apply(scope, arguments);
    };
  }
}

(function() {
  var testA = document.createElement('a');

  yepnope({
    test: 'classList' in testA,
    nope: ['js/pollyfills/classList.min.js'],
    complete: function (url, result, key) {}
  });

  yepnope({
    test: 'dataset' in testA,
    nope: ['js/pollyfills/dataset.min.js'],
    complete: function (url, result, key) {}
  });

})();

var Util = function() {
  this.ctr_ = 0;
  this.spaces_ = /\s+/;
  this.a1_ = [''];

  this.ua = navigator.userAgent;
  this.isFF = parseFloat(this.ua.split("Firefox/")[1]) || undefined;
  this.isWK = parseFloat(this.ua.split("WebKit/")[1]) || undefined;
  this.isOpera = parseFloat(this.ua.split("Opera/")[1]) || undefined;
  this.transitionEnd = this.isWK ? "webkitTransitionEnd" : (this.isFF ? "transitionend" : "OTransitionEnd");
}

Util.prototype = {
  toArray: function(list) {
    return Array.prototype.slice.call(list || [], 0);
  },

  byId: function(id) {
    if (typeof id == "string") { return document.getElementById(id); }
    return id;
  },

  query: function(query, root) {
    if (!query) { return []; }
    if (typeof query != "string") { return this.toArray(query); }
    if (typeof root == "string"){
      root = this.byId(root);
      if(!root){ return []; }
    }

    root = root||document;
    var rootIsDoc = (root.nodeType == 9);
    var doc = rootIsDoc ? root : (root.ownerDocument||document);

    // rewrite the query to be ID rooted
    if (!rootIsDoc || (">~+".indexOf(query.charAt(0)) >= 0)) {
      root.id = root.id||("qUnique"+(this.ctr_++));
      query = "#"+root.id+" "+query;
    }
    // don't choke on something like ".yada.yada >"
    if (">~+".indexOf(query.slice(-1)) >= 0) {
      query += " *";
    }

    return this.toArray(doc.querySelectorAll(query));
  },

  strToArray: function(s) {
    if (typeof s == "string" || s instanceof String) {
      if (s.indexOf(" ") < 0) {
        this.a1_[0] = s;
        return this.a1_;
      } else {
        return s.split(this.spaces_);
      }
    }
    return s;
  },

  // TODO(ericbidelman): Most browsers support Strim.trim(). iPad does not.
  trim: function(str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  }
};

var util = new Util();




function Slide(dom, manager, index) {
  this.dom = dom;
  this.index = index;
  this.manager = manager;
  this.buildList = [];
  var styles = window.getComputedStyle(dom, null);
  var transitionProps = styles.getPropertyValue('-webkit-transition-property') ||
                        styles.getPropertyValue('-moz-transition-property');
  this.transitionPropertyCount = transitionProps.split(',').length;
  var onTransition = this.onTransition.bind(this);
  this.dom.addEventListener(util.transitionEnd, onTransition, false);

  this.delayedFrames = this.dom.querySelectorAll('iframe[data-delayedsrc]');
  if (this.delayedFrames.length) {
    var onBackground = this.activateDelayedFrames.bind(this);
    this.dom.addEventListener('backgroundTransitioned', onBackground, false);
  }
  this.deactivateFrames();

  this.makeCounter();
  this.makeBuildList();

  var self = this;
  setTimeout(function(){ self.runAutoBuilds(); }, 1000); // Run auto-builds on slide load.
};

Slide.prototype.makeBuildList = function(evt) {
  if (config.disableBuilds) { return; }

  if (this.dom) {
    this.buildList = util.query('[data-build] > *', this.dom);
  }
  this.buildList.forEach(function(el) {
    el.classList.add('to-build');
  });
};

Slide.prototype.runAutoBuilds = function(buildList) {
  if (!this.dom.classList.contains('current')) {
    return;
  }

  // find the next auto, slice it out of the list, and run it
  var idx = -1;

  this.buildList.some(function(el, i) {
    if (el.hasAttribute('data-auto')) {
      idx = i;
      return true;
    }
    return false;
  });

  if (idx >= 0) {
    var elem = this.buildList.splice(idx, 1)[0];

    var self = this;
    var l = function(evt) {
      elem.parentNode.removeEventListener(util.transitionEnd, l, false);
      self.runAutoBuilds();
    };
    elem.parentNode.addEventListener(util.transitionEnd, l, false);
    elem.classList.remove('to-build');
  }
};

Slide.prototype.buildNext = function(evt) {
  if (!this.buildList.length) {
    return false;
  }
  this.buildList.shift().classList.remove('to-build');
  return true;
};

Slide.prototype.onTransition = function(evt) {
  if (evt.target == this.dom) {
    this.transitionFinishedCount++;
    if (this.transitionFinishedCount >= this.transitionPropertyCount) {
      this.dispatchEvent();
    }
  }
};

Slide.prototype.setFrames = function(frames, nextsrc) {
  for (var i = 0; i < frames.length; i++) {
    var currentsrc = frames[i].getAttribute('src');
    if (nextsrc == null) {
      var nextsrc = frames[i].dataset.src ||
                    frames[i].dataset.delayedsrc;
    }
    if (currentsrc != nextsrc) {
      frames[i].setAttribute('src', nextsrc);
    }
  }
};

Slide.prototype.dispatchEvent = function() {
  var evt = document.createEvent('Event');
  evt.slide = this;
  if (this.dom.classList.contains('current')) {
    this.activateFrames();
    evt.initEvent('slideIn', false, false);
  } else {
    evt.initEvent('slideOut', false, false);
  }
  this.dom.dispatchEvent(evt);
};

Slide.prototype.getBackgroundId = function() {
  if (this.dom.dataset && this.dom.dataset.backgroundid) {
    return this.dom.dataset.backgroundid;
  } else if (this.dom.hasAttribute('data-backgroundid')) {
    return this.dom.getAttribute('data-backgroundid');
  } else {
    return null;
  }
};

Slide.prototype.addEventListener = function() {
  this.dom.addEventListener.apply(this.dom, arguments);
};

Slide.prototype.activateFrames = function() {
  var frames = this.dom.querySelectorAll('iframe[data-src]');
  this.setFrames(frames);
};

Slide.prototype.activateDelayedFrames = function() {
  this.setFrames(this.delayedFrames);
};

Slide.prototype.deactivateFrames = function() {
  var frames = this.dom.querySelectorAll('iframe[data-src]');
  this.setFrames(frames, this.manager.IFRAME_PLACEHOLDER);
  var frames = this.dom.querySelectorAll('iframe[data-delayedsrc]');
  this.setFrames(frames, this.manager.IFRAME_PLACEHOLDER);
};

Slide.prototype.setCurrentOffset = function(offset) {
  if (this.dom.classList.contains('current') && offset != 0) {
    this.deactivateFrames();
  }
  if (Math.abs(offset) <= 2) {
    if (this.dom.parentNode != this.manager.domStage) {
      this.manager.domStage.appendChild(this.dom);
    }
    this.setClassIf(offset == -2, 'far-past');
    this.setClassIf(offset == -1, 'past');
    this.setClassIf(offset == 0, 'current');
    this.setClassIf(offset == 1, 'future');
    this.setClassIf(offset == 2, 'far-future');
  } else {
    if (this.dom.parentNode != this.manager.domContent) {
      this.manager.domContent.appendChild(this.dom);
    }
  }
  this.transitionFinishedCount = 0;
};

Slide.prototype.setClassIf = function(cond, name) {
  if (cond) {
    this.dom.classList.add(name);
  } else {
    this.dom.classList.remove(name);
  }
};

Slide.prototype.getNotes = function() {
  var notes = this.dom.querySelector('aside.note');
  return notes ? notes.innerHTML : null;
};

Slide.prototype.makeCounter = function() {
  if(!this.dom) { return; }
  var c = document.createElement('span');
  //c.textContent = this.index + 1;
  c.className = 'counter';
  //c.setAttribute('data-title', document.title);
  this.dom.appendChild(c);
};


function Background(dom, manager) {
  this.dom = dom;
  this.manager = manager;
  var onTransition = this.onTransition.bind(this);
  this.dom.addEventListener(util.transitionEnd, onTransition, false);

  var styles = window.getComputedStyle(this.dom, null);
  var transitionProps = styles.getPropertyValue('-webkit-transition-property') ||
                        styles.getPropertyValue('-moz-transition-property');
  this.transitionPropertyCount = transitionProps.split(',').length;
  this.transitionFinishedCount = 0;
};

Background.prototype.onTransition = function(evt) {
  if (evt.target == this.dom) {
    this.transitionFinishedCount++;
    if (this.transitionFinishedCount >= this.transitionPropertyCount) {
      this.transitionFinishedCount = 0;
      this.dispatchEvent();
    }
  }
};

Background.prototype.dispatchEvent = function() {
  var evt = document.createEvent('Event');
  evt.initEvent('backgroundTransitioned', false, false);
  evt.background = this;
  var slide = this.manager.getCurrent();
  slide.dom.dispatchEvent(evt);
};


function SlideManager() {
  this.domOverlay = document.querySelector('#overlay');
  this.domBackground = document.querySelector('#background');
  this.domContent = document.querySelector('#content');
  this.domStage = document.querySelector('#stage');
  var domslides = document.querySelectorAll('.slide');
  var dombgs = document.querySelectorAll('.background');
  var iframeDefault = document.querySelector('script[type="text/html"]');
  this.IFRAME_PLACEHOLDER = 'data:text/html;charset=utf-8,' +
                            (iframeDefault ? iframeDefault.textContent : '');

  this.slides = [];
  for (var i = 0, domslide; domslide = domslides[i]; ++i) {
    this.slides.push(new Slide(domslide, this, i));
  }
  this.backgrounds = {};
  for (var i = 0, dombg; dombg = dombgs[i]; ++i) {
    this.backgrounds[dombg.id] = new Background(dombg, this);
  }
  this.initEvents();
  this.parseHistory();
  this.domOverlay.style.opacity = 0;
  this.bgDefault = 'bg-white';

  this.socket = null;
  if (config.enableWebSockets) {
    this.initWebSockets();
  }

  if (!config.disablePrettyprint) {
    this.prettyPrint();
  }
};

SlideManager.prototype.onSlideIn = function(evt) {
  this.setBackground(this.getBackgroundId(evt.slide.index));
  this.domOverlay.style.opacity = 0;

  evt.slide.runAutoBuilds();

  _gaq.push(['_trackPageview', 'slide' + (evt.slide.index + 1)]);
};

SlideManager.prototype.initEvents = function() {
  window.addEventListener('keydown', this.onKeyDown.bind(this), false);
  for (var i = 0; i < this.slides.length; i++) {
    var s = this.slides[i];
    s.addEventListener('slideIn', this.onSlideIn.bind(this), false);
  }
};

SlideManager.prototype.initWebSockets = function() {
  var self = this;

  this.socket = new io.Socket('localhost',
                              {rememberTransport: false, reconnect: true});

  this.socket.connect();

  this.socket.on('connect', function(obj) {
    console.log('Connected remote control: ' + self.socket.transport.type);

    // Sync remote to current slide.
    self.socket.send({
      currentSlideNum: self.current + 1,
      numSlides: self.slides.length,
      notes: self.getCurrent().getNotes()
    });
  });

  this.socket.on('message', function(obj) {
    if (obj.direction) {
      switch (obj.direction) {
        case 'LEFT':
          self.prev();
          break;
        case 'RIGHT':
          self.next();
          break;
     }
     //this.socket.send({});
   }
  });

  this.socket.on('disconnect', function() {
   console.log('Remote disconnected.');
  });
};

SlideManager.prototype.prev = function() {
  this.setCurrent(this.current - 1);
  if (this.socket) {
    this.sendWebSocketUpdate();
  }
};

SlideManager.prototype.next = function() {
  if (!this.getCurrent().buildNext()) {
    this.setCurrent(this.current + 1);
    if (this.socket) {
      this.sendWebSocketUpdate();
    }
  }
};

SlideManager.prototype.toggleSpeakerNotes = function() {
  if (config.disableNotes) { return; }

   if (!document.body.classList.contains('with-notes')) {
     document.body.classList.add('with-notes');
   } else {
     document.body.classList.remove('with-notes');
   }
};

SlideManager.prototype.onKeyDown = function(evt) {
  if (/^(input|textarea)$/i.test(evt.target.nodeName) ||
      evt.target.isContentEditable) {
    return;
  }
  switch (evt.keyCode) {
    case 37: // left arrow
      this.prev();
      break;
    case 39: // right arrow
    case 32: // space
      this.next();
      break;
    case 78: // N
      this.toggleSpeakerNotes();
      break;
    case 72: // H
      this.highlightImportantCode();
      break;
  }
};

SlideManager.prototype.getBackgroundId = function(index) {
  for (var i = index; i >= 0; i--) {
    var bgid = this.slides[i].getBackgroundId();
    if (bgid != null) {
      return bgid;
    }
  }
  return this.bgDefault;
};

SlideManager.prototype.parseHistory = function() {
  var parts = window.location.pathname.split('/slide');
  this.current = 0;
  if (parts.length == 2) {
    this.current = parseInt(parts[1]) - 1;
  }
  this.setCurrent(this.current);
  this.getCurrent().dispatchEvent();
  var currentSlide = this.slides[this.current];
  currentSlide.activateFrames();
  this.setBackground(this.getBackgroundId(this.current))
};

SlideManager.prototype.setHistory = function(index) {
  var path = '/slide' + (index + 1);
  window.history.pushState({}, null, path);
};

/* Returns the current Slide object. */
SlideManager.prototype.getCurrent = function() {
  return this.slides[this.current];
};

SlideManager.prototype.setCurrent = function(index) {
  index = Math.min(this.slides.length - 1, Math.max(0, index));
  var slidenum = index + 1;
  this.domOverlay.textContent = slidenum + '/' + this.slides.length;
  this.domOverlay.style.opacity = 1;
  this.setHistory(index);
  var self = this;
  this.slides.forEach(function (s, i) {
    s.setCurrentOffset(i - index);
  });
  this.current = index;
};

SlideManager.prototype.setBackground = function(id) {
  var current = this.backgrounds['active'];
  var next = this.backgrounds[id];
  if (current != next) {
    var last = this.backgrounds['last'];
    if (last) {
      last.dom.classList.remove('last');
      this.domContent.appendChild(last.dom);
      this.backgrounds['last'] = null;
    }
    if (current) {
      current.dom.classList.add('last');
      this.backgrounds['last'] = current;
      current.dom.classList.remove('active');
      this.backgrounds['active'] = null;
    }
    if (next) {
      this.backgrounds['active'] = next;
      this.domBackground.appendChild(next.dom);
      window.setTimeout(function() { next.dom.classList.add('active'); }, 0);
    }
  } else {
    next.dispatchEvent();
  }
};

SlideManager.prototype.sendWebSocketUpdate = function() {
  if (this.socket) {
    var msg = {
      currentSlideNum: this.current + 1
    };

    var notes = this.getCurrent().getNotes();
    if (notes) {
      msg.notes = notes;
    }
    this.socket.send(msg);
  }
};

SlideManager.prototype.prettyPrint = function() {
  util.query('pre').forEach(function(el) {
    el.classList.add('prettyprint');
  });
  prettyPrint();
};

SlideManager.prototype.highlightImportantCode = function() {
  if (config.disableCodeHighlights) { return; }
  this.domStage.classList.toggle('highlight-code');
};

window.addEventListener('load', function() {
  var mgr = new SlideManager();
}, false);
