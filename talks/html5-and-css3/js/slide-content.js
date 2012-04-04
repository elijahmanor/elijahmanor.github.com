/**
 * Copyright 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

window.URL = window.URL ? window.URL :
             window.webkitURL ? window.webkitURL : null;

window.BlobBuilder = window.WebKitBlobBuilder || window.MozBlobBuilder || window.BlobBuilder;

window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
                               window.mozRequestAnimationFrame;

/*******************************************************************************
 * PREFLIGHT
 ******************************************************************************/
function hide(id) {
  util.query('#' + id)[0].classList.add('hidden');
}
function unhide(id) {
  util.query('#' + id)[0].classList.remove('hidden');
};
function checkWebGL() {
  try {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('experimental-webgl');
    if (context) {
      unhide('feature-webgl');
      return;
    }
  } catch(e) {}
  unhide('feature-no-webgl');
};
function checkBrowser() {
  if (util.isWK) {
    unhide('browser-webkit');
  } else if (util.isFF) {
    unhide('browser-mozilla');
  } else {
    unhide('browser-other');
  }
};
function checkFileAPIs() {
  if (!!window.File && !!window.FileList && !!window.FileReader) {
    unhide('feature-file');
  } else {
    unhide('feature-no-file');
  }
};
function checkFileSystem() {
  if (window.requestFileSystem) {
    // Attempt to create a folder to test if we can.
    window.requestFileSystem(TEMPORARY, 512, function(fs) {
      fs.root.getDirectory('slidestestquotaforfsfolder', {create: true}, function(dirEntry) {
       dirEntry.remove(); // If successfully created, just delete it.
       unhide('feature-filesystem');
     }, function(e) {
       if (e.code == FileError.QUOTA_EXCEEDED_ERR) {
         unhide('feature-filesystem-quota');
       }
     });
   });
  } else {
    unhide('feature-no-filesystem');
  }
};
function checkWebAudioAPI() {
  if (!!(window.AudioContext || window.webkitAudioContext)) {
    unhide('feature-web-audio');
  } else {
    unhide('feature-no-web-audio');
  }
};
var preflightRun = false;
function runPreflight(e) {
  if (!preflightRun) {
    preflightRun = true;
    checkBrowser();
    checkFileAPIs();
    checkFileSystem();
    checkWebGL();
    checkWebAudioAPI();
  }
};
document.addEventListener('DOMContentLoaded', runPreflight, false);
window.addEventListener('load', runPreflight, false);

/*******************************************************************************
 * WHO ARE THESE GUYS?
 ******************************************************************************/
(function() {
   var slide = document.querySelector('#profile-slide');
   slide.addEventListener('slideIn', function() {
     slide.classList.remove('out');
   }, false);
   slide.addEventListener('slideOut', function() {
     slide.classList.add('out');
   }, false);
 })();
 
/*******************************************************************************
 * FILEREADER
 ******************************************************************************/
document.querySelector('#file-select').addEventListener('click', function(e) {
  document.querySelector('#filereader-files').click();
}, false);

document.querySelector('#filereader-files').onchange = function(e) {
  var files = e.target.files; // FileList

  var output = [];
  for (var i = 0, f; f = files[i]; ++i) {
    output.push('<li><b>', f.name, '</b> (',
        f.type || 'n/a', ') - ', f.size, ' bytes, last modified: ',
        f.lastModifiedDate.toLocaleDateString(), '</li>');
  }
  document.querySelector('#filereader-list').innerHTML =
      '<ul>' + output.join('') + '</ul>';
};
/*******************************************************************************
 * DND FILE
 ******************************************************************************/
function DNDFileController(id) {
  var el_ = document.getElementById(id);
  var thumbnails_ = document.getElementById('thumbnails');

  this.dragenter = function(e) {
    e.stopPropagation();
    e.preventDefault();
    el_.classList.add('rounded');
  };

  this.dragover = function(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  };

  this.dragleave = function(e) {
    e.stopPropagation();
    e.preventDefault();
    el_.classList.remove('rounded');
  };

  this.drop = function(e) {
    e.stopPropagation();
    e.preventDefault();

    el_.classList.remove('rounded');

    var files = e.dataTransfer.files;

    for (var i = 0, file; file = files[i]; i++) {
      var imageType = /image.*/;
      if (!file.type.match(imageType)) {
        continue;
      }

      var fileUrl = window.URL.createObjectURL(file);
      thumbnails_.insertAdjacentHTML(
        'afterBegin', '<img src="' + fileUrl +
        '" width="75" height="75" alt="' + file.name + '" title="' + 
        file.name + '" />');
    }

    return false;
  };

  el_.addEventListener("dragenter", this.dragenter, false);
  el_.addEventListener("dragover", this.dragover, false);
  el_.addEventListener("dragleave", this.dragleave, false);
  el_.addEventListener("drop", this.drop, false);
};

document.addEventListener('DOMContentLoaded', function(e) {
  var dndc = new DNDFileController('dropzone');
}, false);


/*******************************************************************************
 * BLOG URL
 ******************************************************************************/
function runBlobExample1() {
  var bb = new BlobBuilder();
  bb.append('<marquee>');
  bb.append('  <b>Flashy Lights!!!</b>  ');
  bb.append('  <b>Flashy Lights!!!</b>  ');
  bb.append('  <b>Flashy Lights!!!</b>  ');
  bb.append('  <b>Flashy Lights!!!</b>  ');
  bb.append('</marquee>');

  var iframe = document.createElement('iframe');
  iframe.src = window.URL.createObjectURL(bb.getBlob('text/html'));
  iframe.style.backgroundColor = '#fff';
  iframe.style.height = '35px';
  iframe.style.width = '85%';
  document.querySelector('#blobURL-demo').appendChild(iframe);
  window.URL.revokeObjectURL(iframe.src);
}

function runBlobExample2() {
  var toObjectURL = function(contentType, strData) {
    var bb = new BlobBuilder();
    bb.append(strData);
    return window.URL.createObjectURL(bb.getBlob(contentType));
  };

  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = toObjectURL('text/css', '#bloburl-slide { background: red; }');
  document.head.appendChild(link);
  window.URL.revokeObjectURL(link.href);
}

/*******************************************************************************
 * SVG DOM
 ******************************************************************************/
(function() {
  var slide = document.getElementById('slide-svg');
  var input = slide.querySelector('input');
  input.addEventListener('input', function(evt) {
    var svgText = slide.querySelector('svg > text > * > tspan');
    svgText.textContent = this.value;
  }, true);
})();

/*******************************************************************************
 * GRAPHICS: LOTS OF CSS
 ******************************************************************************/
(function() {
  var slide = document.getElementById('slide-cssprops');
  var interval = null;
  function moveTransition() {
    var max = slide.getBoundingClientRect().width;
    var left = Math.round(Math.random() * max) * 0.8 + 0.1 * max;
    slide.querySelector('.demo-transition').style.left = left + 'px';
  };
  slide.addEventListener('slideIn', function() {
    if (!interval) {
      moveTransition();
      interval = window.setInterval(moveTransition, 3000);
    }
  }, false);
  slide.addEventListener('slideOut', function() {
    window.clearInterval(interval);
    interval = null;
  }, false);
})();

/*******************************************************************************
 * TWEENS
 ******************************************************************************/
window.addEventListener('load', function() {
  var slide = document.getElementById('slide-tween');
  var handler = new TweenSlide(400, 300, slide);
  handler.setBezier(0.9, 0.1, 0.1, 0.9);
}, false);

/*******************************************************************************
 * 3D CSS
 ******************************************************************************/
(function() {
  var slide = document.querySelector('#slide-css3d');
  var container = slide.querySelector('.container');
  slide.addEventListener('slideIn', function() {
    container.classList.remove('hidden');
  }, false);
  slide.addEventListener('slideOut', function() {
    container.classList.add('hidden');
  }, false);
})();

/*******************************************************************************
 * CANVAS
 ******************************************************************************/
(function() {
  function Arc(x, y, r, rad, counter) {
    this.cx = x;
    this.cy = y;
    this.r = r;
    this.rad = rad;
    this.len = Math.random() * Math.PI;
    this.cur = 0;
    this.counter = counter;
    this.done = false;
  };

  Arc.D90 = Math.PI / 2;
  Arc.D180 = Math.PI;
  Arc.D270 = Arc.D90 + Arc.D180;
  Arc.D360 = 2 * Math.PI;

  Arc.prototype.add = function(rad) {
    if (!this.done) {
      var max = this.rad + this.len;
      this.cur += (this.counter) ? -rad : rad;
      this.cur = Math.max(-max, Math.min(max, this.cur));
      this.done = Math.abs(this.cur) == max;
      if (this.done) {
        return this.spawn();
      }
    }
    return false;
  };

  Arc.prototype.spawn = function() {
    if (!this.done) return null;
    var count = Math.floor(Math.random() * 3) + 1;
    var angle = Math.floor(100 * Math.random() * Arc.D90 / 4) / 100;
    var children = [];
    for (var i = 0; i < count; i++) {
      var r = Math.floor(Math.random() * 120) + 30;
      var rad = this.radEnd + Arc.D90 + (i * angle);
      rad = Math.round(100 * rad) / 100.0 + 0.1;
      children.push(new Arc(this.x, this.y, r, rad, true));
      children.push(new Arc(this.x, this.y, r, rad, false));
    }
    return children;
  };

  Arc.prototype.getVector = function(radians, radius) {
    while (radians > Arc.D360) radians -= Arc.D360;
    while (radians < 0) radians += Arc.D360;
    var dy = Math.sin(radians) * radius;
    var dx = Math.cos(radians) * radius;
    return {x:dx, y:dy};
  };

  Arc.prototype.draw = function(ctx) {
    ctx.strokeStyle = '#00d';
    ctx.fillStyle = '#00d';
    ctx.lineWidth = 6;

    var heading = this.getVector(this.rad, this.r);
    var tangent = this.getVector(this.rad + Arc.D90, this.r);
    if (this.counter) {
      tangent.x *= -1;
      tangent.y *= -1;
    }

    //ctx.beginPath();
    //ctx.moveTo(this.cx, this.cy);
    //ctx.lineTo(this.cx + heading.x, this.cy + heading.y);
    //ctx.stroke();

    //ctx.beginPath();
    //ctx.moveTo(this.cx, this.cy);
    //ctx.lineTo(this.cx + tangent.x, this.cy + tangent.y);
    //ctx.stroke();

    ctx.beginPath();
    var arcStart = this.rad - Arc.D90;
    if (this.counter) {
      arcStart += Arc.D180;
    }
    ctx.arc(this.cx + tangent.x, this.cy + tangent.y, this.r,
            arcStart, arcStart + this.cur, this.counter);
    ctx.stroke();

    this.radEnd = arcStart + this.cur;
    var arcend = this.getVector(this.radEnd, this.r);
    this.x = this.cx + tangent.x + arcend.x;
    this.y = this.cy + tangent.y + arcend.y;

    if (!this.done) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 10, 0, Arc.D360, false);
      ctx.fill();
    }
  };

  function CanvasDemo(slide, w, h) {
    this.objects = [];
    this.objects.push(new Arc(w / 4, h / 2, h / 6, 0 ));
    this.objects.push(new Arc(w / 2, h / 2, h / 6, Arc.D90));
    this.objects.push(new Arc(3 * w / 4, h / 2, h / 6, Arc.D270));
    this.canvas = slide.querySelector('canvas');
    this.started = false;
    this.canvas.width = w;
    this.canvas.height = h;
    this.button = slide.querySelector('button');
    var demo = this;
    this.button.addEventListener('click', function() {
      demo.started = !demo.started;
      this.textContent = (demo.started) ? 'stop' : 'start';
      demo.draw();
    }, false);
    this.draw();
  };

  CanvasDemo.prototype.draw = function() {
    var ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (var i = 0, obj; obj = this.objects[i]; i++) {
      var children = obj.add(0.02);
      if (children) {
        for (var j = 0, child; child = children[j]; j++) {
          if (child.cx >= 0 && child.cx <= this.canvas.width &&
              child.cy >= 0 && child.cy <= this.canvas.height) {
            this.objects.push(child);
          }
        }
      }
      obj.draw(ctx);
    }

    if (this.objects.length > 30) {
      this.objects.shift();
    }
    if (this.started) {
      window.requestAnimationFrame(this.draw.bind(this), this.canvas);
    }
  };

  CanvasDemo.prototype.start = function() {
    this.started = true;
    this.draw();
  };

  CanvasDemo.prototype.stop = function() {
    this.started = false;
  };

  var slide = document.querySelector('#slide-canvasdemo');
  var demo = new CanvasDemo(slide, 800, 500);
  slide.addEventListener('slideIn', function() { demo.start(); }, false);
  slide.addEventListener('slideOut', function() { demo.stop(); }, false);
})();

/*******************************************************************************
 * requestAnimationFrame
 ******************************************************************************/
(function() {
  var slide = document.getElementById('slide-requestanimationframe');
  var radios = slide.querySelectorAll('input[type=radio]');
  var output = slide.querySelector('.output');
  var last = new Date().getTime();
  var active = false;
  var oldtitle = document.title;

  function getState() {
    var radio = slide.querySelector('input[type=radio]:checked');
    var state = radio ? radio.value : false;
    return state;
  };

  function draw(future) {
    var now = new Date().getTime();
    var state = getState();
    if (active && state) {
      var ms = now - last;
      var hz = Math.round(1000 / ms);
      output.innerHTML = 'Using <strong>' + state + '</strong>:<br>' +
                         ms + 'ms elapsed since last frame (' +
                         hz + 'hz)';
      document.title = ms + 'ms';
      last = now;
      switch (state) {
        case 'requestAnimationFrame':
          window.requestAnimationFrame(draw, output);
          break;
        case 'setTimeout':
          setTimeout(draw, 10);
          break;
      }
    }
  };
  slide.addEventListener('slideIn', function() {
    oldtitle = document.title;
    if (getState()) {
      active = true;
      draw();
    }
  }, false);
  slide.addEventListener('slideOut', function() {
    active = false;
    window.setTimeout(function() {
      document.title = oldtitle;
    }, 500);
  }, false);
  for (var i = 0, radio; radio = radios[i]; i++) {
    radio.addEventListener('click', function() {
      if (!active) {
        active = true;
        draw();
      }
    }, false);
  }
})();


/*******************************************************************************
 * ORIENTATION
 ******************************************************************************/
(function() {
  window.addEventListener('load', function() {
    var slide = document.querySelector('#slide-orientation');
    var orientationslide = new OrientationSlide(slide);
    slide.addEventListener('slideIn', function() {
      orientationslide.onLoad();
    }, false);
    slide.addEventListener('slideOut', function() {
      orientationslide.onUnload();
    }, false);
  }, false);
})();

/*******************************************************************************
 * WEBGL LOGO
 ******************************************************************************/
function WebGlLogo(canvas, mouse, w, h, fragment_src, vertex_src, texture_src) {
  this.w = w;
  this.h = h;
  this.canvas = canvas;
  this.mouse = mouse;
  this.init(fragment_src, vertex_src);
  this.running = false;
  var self = this;
  this.loadTexture(texture_src, function() {
    self.running = true;
    self.tick();
  });
};

WebGlLogo.prototype.init = function(fragment_src, vertex_src) {
  this.canvas.width = this.w;
  this.canvas.height = this.h;
  try {
    this.gl = this.canvas.getContext("experimental-webgl");
  } catch (e) {
    console.log(e);
  }
  if (!this.gl) {
    console.log(this.gl);
    throw 'Could not initialize WebGL';
  }
  this.gl.clearColor(1.0, 1.0, 1.0, 1.0);
  this.gl.enable(this.gl.DEPTH_TEST);
  this.program = this.getShaderProgram(fragment_src, vertex_src);
  this.mvMatrix = mat4.create();
  this.pMatrix = mat4.create();
  this.model = {
    'vertexBuffer' : this.getVertexBuffer(),
    'textureBuffer' : this.getTextureBuffer()
  };
  this.texture = null;
  this.mouse.addEventListener('mousemove', this.onMouseMove.bind(this), false);
};

WebGlLogo.prototype.onMouseMove = function(evt) {
  var el = this.mouse;
  var offsetY = 0;
  var offsetX = 0;
  while (el) {
    offsetY += el.offsetTop;
    offsetX += el.offsetLeft;
    el = el.offsetParent;
  }
  this.mouseY = evt.pageY - offsetY - (this.mh/2);
  this.mouseX = evt.pageX - offsetX;
};

WebGlLogo.prototype.getShader = function(src, type) {
  var shader = this.gl.createShader(type);
  this.gl.shaderSource(shader, src);
  this.gl.compileShader(shader)
  if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS))
    throw this.gl.getShaderInfoLog(shader);
  return shader;
};

WebGlLogo.prototype.getShaderProgram = function(fragment_src, vertex_src) {
  var fragShader = this.getShader(fragment_src, this.gl.FRAGMENT_SHADER);
  var vertShader = this.getShader(vertex_src, this.gl.VERTEX_SHADER);
  var program = this.gl.createProgram();
  this.gl.attachShader(program, vertShader);
  this.gl.attachShader(program, fragShader);
  this.gl.linkProgram(program);
  if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS))
    throw 'Could not initialize shaders';
  this.gl.useProgram(program);

  program.vertexAttr = this.gl.getAttribLocation(program, 'aVertexPosition');
  this.gl.enableVertexAttribArray(program.vertexAttr);

  program.textureAttr = this.gl.getAttribLocation(program, 'aTextureCoord');
  this.gl.enableVertexAttribArray(program.textureAttr);

  program.pMatrixUniform = this.gl.getUniformLocation(program, 'uPMatrix');
  program.mvMatrixUniform = this.gl.getUniformLocation(program, 'uMVMatrix');
  program.samplerUniform = this.gl.getUniformLocation(program, 'uSampler');

  return program;
};

WebGlLogo.prototype.degToRad = function(degrees) {
  return degrees * Math.PI / 180;
};

WebGlLogo.prototype.draw = function() {
  this.gl.viewport(0, 0, this.w, this.h);
  this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

  mat4.identity(this.mvMatrix);
  mat4.perspective(45, this.w / this.h, 0.1, 100.0, this.pMatrix);
  mat4.translate(this.mvMatrix, [0, 0, -4.0]);

  var hW = this.mw / 2;
  var hH = this.mh / 2;
  var yDeg = -60.0 * ((hW - this.mouseX) / hW);
  var xDeg = -60.0 * ((hH - this.mouseY) / hH) + 15;
  mat4.rotate(this.mvMatrix, this.degToRad(yDeg), [0, 1, 0]);
  mat4.rotate(this.mvMatrix, this.degToRad(xDeg), [1, 0, 0]);

  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.model.vertexBuffer);
  this.gl.vertexAttribPointer(this.program.vertexAttr,
                              this.model.vertexBuffer.itemSize,
                              this.gl.FLOAT, false, 0, 0);

  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.model.textureBuffer);
  this.gl.vertexAttribPointer(this.program.textureAttr,
                              this.model.textureBuffer.itemSize,
                              this.gl.FLOAT, false, 0, 0);

  this.gl.activeTexture(this.gl.TEXTURE0);
  this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
  this.gl.uniform1i(this.program.samplerUniform, 0);
  this.gl.uniformMatrix4fv(this.program.pMatrixUniform, false, this.pMatrix);
  this.gl.uniformMatrix4fv(this.program.mvMatrixUniform, false, this.mvMatrix);
  this.gl.drawArrays(this.gl.TRIANGLES, 0, this.model.vertexBuffer.numItems);
};

WebGlLogo.prototype.getVertexBuffer = function () {
  var positionBuffer = this.gl.createBuffer();
  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
  var vertices = new Float32Array([
    -1.0, -0.8,  0.0,
    -1.1,  1.0,  0.0,
     0.0, -1.0,  1.0,

     0.0, -1.0,  1.0,
    -1.1,  1.0,  0.0,
     0.0,  1.0,  1.0,

     0.0, -1.0,  1.0,
     0.0,  1.0,  1.0,
     1.0, -0.8,  0.0,

     1.0, -0.8,  0.0,
     0.0,  1.0,  1.0,
     1.1,  1.0,  0.0
  ]);
  this.gl.bufferData(this.gl.ARRAY_BUFFER, vertices, this.gl.STATIC_DRAW);
  positionBuffer.itemSize = 3;
  positionBuffer.numItems = vertices.length / positionBuffer.itemSize;
  return positionBuffer;
};

WebGlLogo.prototype.getTextureBuffer = function() {
  var textureBuffer = this.gl.createBuffer();
  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, textureBuffer);
  var textureCoords = new Float32Array([
    0.0, 0.1,
    0.0, 1.0,
    0.5, 0.0,

    0.5, 0.0,
    0.0, 1.0,
    0.5, 1.0,

    0.5, 0.0,
    0.5, 1.0,
    1.0, 0.1,

    1.0, 0.1,
    0.5, 1.0,
    1.0, 1.0
  ]);
  this.gl.bufferData(this.gl.ARRAY_BUFFER, textureCoords, this.gl.STATIC_DRAW);
  textureBuffer.itemSize = 2;
  textureBuffer.numItems = textureCoords.length / textureBuffer.itemSize;
  return textureBuffer;
};

WebGlLogo.prototype.loadTexture = function(path, callback) {
  this.texture = this.gl.createTexture();
  this.texture.image = new Image();
  var self = this;
  this.texture.image.addEventListener('load', function() {
    self.onTextureLoaded();
    callback(self.texture);
  }, false);
  this.texture.image.src = path;
};

WebGlLogo.prototype.onTextureLoaded = function() {
  this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
  this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);
  this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA,
                     this.gl.UNSIGNED_BYTE, this.texture.image);
  this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER,
                        this.gl.LINEAR);
  this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER,
                        this.gl.LINEAR);
};

WebGlLogo.prototype.setMouseArea = function() {
  this.mw = this.mouse.offsetWidth;
  this.mh = this.mouse.offsetHeight;
  if (!this.mouseX)
    this.mouseX = this.mw / 2;
  if (!this.mouseY)
    this.mouseY = this.mh / 2;
};

WebGlLogo.prototype.tick = function(time) {
  if (!this.mv || !this.mh) {
    this.setMouseArea();
  }
  this.draw();
  if (this.running) {
    window.requestAnimationFrame(this.tick.bind(this), this.canvas);
  }
};

WebGlLogo.prototype.stop = function() {
  this.running = false;
};

(function () {
  var slide = document.querySelector('#webgl-slide');
  var logo = null;
  slide.addEventListener('slideIn', function() {
    var canvas = document.querySelector('#webgl-canvas');
    var slide = document.querySelector('#webgl-slide');
    var fragment = document.querySelector('#webgl-fs').textContent;
    var vertex = document.querySelector('#webgl-vs').textContent;
    var texture = 'images/html5-texture.png';
    logo = new WebGlLogo(canvas, slide, 840, 300, fragment, vertex, texture);
  }, false);
  slide.addEventListener('slideOut', function() {
    delete logo;
  }, false);
})();
/*******************************************************************************
 * WEB AUDIO API BELL
 ******************************************************************************/
(function() {
  if (window.AudioContext || window.webkitAudioContext) {
    var ctx = new (window.AudioContext || window.webkitAudioContext)();
    var sample = null;

    window.ringBellAudioAPI = function() {
      var src = ctx.createBufferSource();
      src.connect(ctx.destination);
      src.buffer = sample;
      src.noteOn(0);
    };

    var request = new XMLHttpRequest();
    request.open('GET', 'sounds/bell.ogg', true);
    request.responseType = 'arraybuffer';
    request.onload = function() {
      sample = ctx.createBuffer(request.response, false);
    };
    request.send();
  }
})();

/*******************************************************************************
 * ORIENTATION
 ******************************************************************************/
function OrientationSlide(slide) {
  this.slide = slide;
  this.dom = slide.querySelector('.demo');
  this.setup();
};
OrientationSlide.prototype.setup = function() {
  for (var i = 0; i < this.dom.children.length; i++) {
    var child = this.dom.children[i];
    var clone = child.cloneNode(true);
    this.dom.insertBefore(clone, child);
    child.classList.add('orig');
    clone.classList.add('clone');
    i += 1;
  }
  this.xbuffer = [];
  this.ybuffer = [];
};

OrientationSlide.prototype.orient = function(x, y) {
  this.xbuffer.push(x);
  this.ybuffer.push(y);
  if (this.xbuffer.length > 10) this.xbuffer.shift();
  if (this.ybuffer.length > 10) this.ybuffer.shift();
  x = this.xbuffer.reduce(function (x,y) { return x+y; }) / this.xbuffer.length;
  y = this.ybuffer.reduce(function (x,y) { return x+y; }) / this.ybuffer.length;
  if (Math.abs(x) < 3 && Math.abs(y) < 3) {
    x = 0;
    y = 0;
  }
  for (var i = 0; i < this.dom.children.length; i+=2) {
    var clone = this.dom.children[i];
    var child = this.dom.children[i+1];
    var depth_mod = 5;
    var parallax_mod = 2.5;
    child.style.zIndex = i;
    clone.style.zIndex = i + 1;
    child.style.left = x * depth_mod * i - (i * parallax_mod + 2) + 'px';
    clone.style.left = x * depth_mod * i + (i * parallax_mod + 2) + 'px';
    child.style.top = y * depth_mod * i + 'px';
    clone.style.top = y * depth_mod * i + 'px';
  }
};

OrientationSlide.prototype.displayValues = function(a, b, g) {
  var domA = this.slide.querySelector('.alpha');
  var domB = this.slide.querySelector('.beta');
  var domG = this.slide.querySelector('.gamma');
  domA.textContent = a;
  domB.textContent = b;
  domG.textContent = g;
};

OrientationSlide.prototype.onOrient = function(evt) {
  var a = evt.alpha;
  var b = evt.beta;
  var g = evt.gamma;
  this.orient(g, b);
  this.displayValues(a, b, g);
};

OrientationSlide.prototype.onLoad = function() {
  if (!this.onorienthandler) {
    this.onorienthandler = this.onOrient.bind(this);
    window.addEventListener('deviceorientation', this.onorienthandler, true);
  }
};

OrientationSlide.prototype.onUnload = function() {
  if (this.onorienthandler) {
    window.removeEventListener('deviceorientation', this.onorienthandler, true);
    this.onorienthandler = null;
  }
};

/*******************************************************************************
 * TWEENING
 ******************************************************************************/
function TweenSlide(w, h, slide) {
  this.domSlide = slide;
  this.domPre = slide.querySelector('pre');
  this.domCanvas = slide.querySelector('canvas');
  this.domLogo = slide.querySelector('.logo');
  this.domButton = slide.querySelector('button');
  this.domSelect = slide.querySelector('select');

  this.duration = 3; // Seconds
  this.elapsed = 0;
  this.started = 0;
  this.padding = 8.5;
  this.domCanvas.width = w;
  this.domCanvas.height = h;

  this.domCanvas.addEventListener('mousedown', this.onMouseDown.bind(this), 
      false);
  this.domCanvas.addEventListener('selectstart', this.onSelectStart, false);
  this.domSlide.addEventListener('mouseup', this.onMouseUp.bind(this), false);
  this.domButton.addEventListener('click', this.onClick.bind(this), false);
  this.domSelect.addEventListener('change', this.onSelect.bind(this), false);

  this.dragging = 0;
  this.moveListener = this.onMouseMove.bind(this);
  this.w = this.domCanvas.width - (2 * this.padding);
  this.h = this.domCanvas.height - (2 * this.padding);
};

TweenSlide.prototype.onSelect = function(evt) {
  switch (evt.target.value) {
    case 'linear':
      this.setBezier(0.0, 0.0, 1, 1);
      break;
    case 'default':
      this.setBezier(0.25, 0.1, 0.25, 1);
      break;
    case 'ease-in':
      this.setBezier(0.42, 0, 1, 1);
      break;
    case 'ease-out':
      this.setBezier(0, 0, 0.58, 1);
      break;
    case 'ease-in-out':
      this.setBezier(0.42, 0, 0.58, 1);
      break;
  }
};

TweenSlide.prototype.stopAnimation = function() {
  this.started = 0;
  this.elapsed = 0;
  this.domLogo.style.webkitAnimation = '';
  this.domLogo.style.MozAnimation = '';
};

TweenSlide.prototype.onClick = function(evt) {
  this.stopAnimation();
  var self = this;
  window.setTimeout(function() {
    var animation = [
      'chromelogo-spin ', self.duration, 's 1 cubic-bezier(',
      self.x1, ', ', self.y1, ', ', self.x2, ', ', self.y2, ')'
    ].join('');
    self.domLogo.style.webkitAnimation = animation;
    self.domLogo.style.MozAnimation = animation;
    self.started = new Date().getTime();
    self.animate();
  }, 0);
};

TweenSlide.prototype.onSelectStart = function(evt) {
  evt.preventDefault();
};

TweenSlide.prototype.onMouseMove = function(evt) {
  var x = (evt.offsetX - this.padding) / this.w;
  var y = (this.h - evt.offsetY + this.padding) / this.h;
  this.domSelect.selectedIndex = 0; // Cubic bezier
  if (this.dragging == 1) {
    this.setBezier(x, y, this.x2, this.y2);
  } else {
    this.setBezier(this.x1, this.y1, x, y);
  }
};

TweenSlide.prototype.onMouseDown = function(evt) {
  var x = evt.offsetX;
  var y = evt.offsetY;

  if (x >= this.mx1 - this.padding &&
      x <= this.mx1 + this.padding &&
      y >= this.my1 - this.padding &&
      y <= this.my1 + this.padding) {
    this.dragging = 1;
  }
  if (x >= this.mx2 - this.padding &&
      x <= this.mx2 + this.padding &&
      y >= this.my2 - this.padding &&
      y <= this.my2 + this.padding) {
    this.dragging = 2;
  }
  if (this.dragging > 0) {
    this.domCanvas.addEventListener('mousemove', this.moveListener, false);
  }
};

TweenSlide.prototype.onMouseUp = function(evt) {
  this.dragging = 0;
  this.domCanvas.removeEventListener('mousemove', this.moveListener, false);
};

TweenSlide.prototype.clamp = function(val) {
  return Math.round(100.0 * Math.min(1.0, Math.max(0.0, val))) / 100.0;
};

TweenSlide.prototype.clear = function(ctx) {
  ctx.clearRect(0, 0, this.domCanvas.width, this.domCanvas.height);
  ctx.beginPath()
  ctx.strokeStyle = '#999';
  ctx.lineWidth = 1;
  ctx.strokeRect(this.padding, this.padding, this.w, this.h);
  ctx.closePath();
};

TweenSlide.prototype.setBezier = function(x1, y1, x2, y2) {
  this.stopAnimation();
  this.x1 = this.clamp(x1);
  this.x2 = this.clamp(x2);
  this.y1 = this.clamp(y1);
  this.y2 = this.clamp(y2);

  this.domValues = this.domPre.querySelectorAll('.val');
  this.domValues[0].textContent = this.x1;
  this.domValues[1].textContent = this.y1;
  this.domValues[2].textContent = this.x2;
  this.domValues[3].textContent = this.y2;

  this.mx1 = this.x1 * this.w + this.padding;
  this.my1 = (1 - this.y1) * this.h + this.padding;
  this.mx2 = this.x2 * this.w + this.padding;
  this.my2 = (1 - this.y2) * this.h + this.padding;

  this.draw();
};

TweenSlide.prototype.animate = function() {
  this.elapsed = new Date().getTime() - this.started;
  if (this.elapsed < this.duration * 1000) {
    this.draw();
    window.requestAnimationFrame(this.animate.bind(this));
  } else {
    this.stopAnimation();
  }
};

TweenSlide.prototype.draw = function() {
  var ctx = this.domCanvas.getContext('2d');
  var boxD = this.padding * 2;
  var progress = this.elapsed / (this.duration * 1000);
  var progressX = progress * this.w + this.padding;

  this.clear(ctx);

  ctx.beginPath();
  ctx.moveTo(this.padding, this.h + this.padding);
  ctx.strokeStyle = '#36b';
  ctx.lineWidth = 16;
  ctx.lineCap = 'round';
  ctx.bezierCurveTo(this.mx1 + this.padding, this.my1 + this.padding,
                    this.mx2 + this.padding, this.my2 + this.padding,
                    this.w + this.padding, this.padding);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = '#0a0';
  ctx.fillStyle = '#0a0';
  ctx.lineWidth = 2;
  ctx.moveTo(this.padding, this.h + this.padding);
  ctx.lineTo(this.mx1, this.my1);
  ctx.moveTo(this.w + this.padding, this.padding);
  ctx.lineTo(this.mx2, this.my2);
  ctx.fillRect(this.mx1 - this.padding, this.my1 - this.padding, boxD, boxD);
  ctx.fillRect(this.mx2 - this.padding, this.my2 - this.padding, boxD, boxD);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = '#d00';
  ctx.lineWidth = 2;
  ctx.moveTo(progressX, 0);
  ctx.lineTo(progressX, this.domCanvas.height);
  ctx.stroke();
};


