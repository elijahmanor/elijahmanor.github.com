var dest = './dist';
var src = './src';
var gutil = require('gulp-util');

module.exports = {
  server: {
    settings: {
      root: dest,
      host: 'localhost',
      port: 8080,
      livereload: {
        port: 35929
      }
    }
  },
  sass: {
    src: src + '/css/**/*.{sass,scss,css}',
    dest: dest + '/css',
    settings: {
      indentedSyntax: false, // Enable .sass syntax?
      imagePath: '/img' // Used by the image-url helper
    }
  },
  browserify: {
    settings: {
      transform: ['reactify', 'babelify'] //, 'stringify']
    },
    src: src + '/js/index.jsx',
    dest: dest + '/js',
    outputName: 'index.js',
    debug: gutil.env.type === 'dev'
  },
  html: {
    src: 'src/index.html',
    dest: dest
  },
  markdown: {
    src: src + '/md/*.md',
    dest: dest + '/md'
  },
  fonts: {
    src: src + '/css/*.ttf',
    dest: dest + '/css'
  },
  images: {
    src: src + '/img/*.*',
    dest: dest + '/img'
  },
  vendor: {
    src: src + '/vendor/*.*',
    dest: dest + '/vendor'
  },
  watch: {
    src: 'src/**/*.*',
    tasks: ['build']
  }
};
