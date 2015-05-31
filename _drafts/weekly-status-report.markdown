---
layout: post
title: Weekly Status Report
---

```
$ brew update
$ brew install pandoc
```

https://gist.github.com/schmurfy/3199254
http://johnmacfarlane.net/pandoc/installing.html

```javascript
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    markdownpdf: {
      options: {},
      files: {
        src: "src/*.md",
        dest: "build"
      }
    },
    watch: {
      markdown: {
        files: ["src/*.md"],
        tasks: ["markdownpdf"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-markdown-pdf");
  grunt.registerTask("default", ["markdownpdf"]);

};
```

```
{
  "name": "dave-ramsey-weekly-report",
  "description": "Weekly Report that is emailed working week at Dave Ramsey",
  "version": "0.1.0",
  "author": "The Lampo Group",
  "private": true,
  "devDependencies": {
    "grunt": "~0.4.0",
    "grunt-contrib-uglify": "*",
    "grunt-contrib-watch": "*",
    "grunt-htmlhint": "*",
    "grunt-contrib-jasmine": "*",
    "matchdep": "*",
    "grunt-contrib-jshint": "~0.7.1",
    "jshint-stylish": "~0.1.3",
    "grunt-contrib-copy": "~0.4.1",
    "request": "~2.27.0",
    "underscore": "~1.5.2",
    "grunt-markdown-pdf": "~1.1.0",
    "grunt-nodemailer": "~0.1.1"
  }
}
```