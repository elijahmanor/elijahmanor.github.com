<!--

account_name: elijahmanor
account_slug: elijahmanor
account: 51dc7b400a79df571c000003
title: "jQuery-free JavaScript: 60 mins"
slug: jqfreejs-60
slideCount: 78
description: "Many of us started using jQuery because it ironed out many cross-browser issues, it was easy to use, and had a consistent API. However, web browsers these days continue to get better and are following web standards much more closely. Do we still need jQuery? Has it become a crutch? Can we get away with dropping jQuery as a dependency and use native browser APIs instead? In this session we will explain when it is appropriate to use jQuery and when you might be able to go without it. If you do need jQuery then we will look at how you can make a custom build that only includes the parts you need. For the majority of this session we will be looking at common jQuery snippets and show how to convert them either using native browser APIs or utilizing popular micro-libraries."
createdAt: 2014-04-15T18:18:13.000Z
published: true
private: true
themeVariation: default
theme: basic/2
themeCSS: ".slide h1 a { color: white; }\n.slide-12, .slide-13,\n.slide-14, .slide-18 { background-color: white; }\n\n.slide-22 .column-1 { width: 40% !important; }\n.slide-22 .column-2 { width: 60% !important; }\n\n.slide-28 .column-1 { width: 40% !important; }\n.slide-28 .column-2 { width: 60% !important; }\n.slide-29 .column-1 { width: 40% !important; }\n.slide-29 .column-2 { width: 60% !important; }\n.slide-30 .column-1 { width: 40% !important; }\n.slide-30 .column-2 { width: 60% !important; }\n.slide-31 .column-1 { width: 40% !important; }\n.slide-31 .column-2 { width: 60% !important; }\n.slide-32 .column-1 { width: 40% !important; }\n.slide-32 .column-2 { width: 60% !important; }\n.slide-33 .column-1 { width: 40% !important; }\n.slide-33 .column-2 { width: 60% !important; }\n\n.slide-38 .column-1 { width: 40% !important; }\n.slide-38 .column-2 { width: 60% !important; }\n.slide-39 .column-1 { width: 40% !important; }\n.slide-39 .column-2 { width: 60% !important; }\n.slide-40 .column-1 { width: 40% !important; }\n.slide-40 .column-2 { width: 60% !important; }\n\n#use-jquery {\n  -webkit-animation-duration: 3s;\n  -webkit-animation-delay: 2s;\n  -webkit-animation-iteration-count: infinite;\n}\n\n\n/*\n * CSS animated rainbow dividers of awesome \n * by Chris Heilmann @codepo8 and Lea Verou @leaverou \n**/\n@-moz-keyframes charlieeee {\n  from { background-position:top left; } \n  to {background-position:top right; }\n}\n@-webkit-keyframes charlieeee { \n  from { background-position:top left; }  \n  to { background-position:top right; }  \n}\n@-o-keyframes charlieeee { \n  from { background-position:top left; }  \n  to { background-position:top right; }  \n}\n@-ms-keyframes charlieeee { \n  from { background-position:top left; }  \n  to { background-position:top right; }  \n}\n@-khtml-keyframes charlieeee { \n  from { background-position:top left; }  \n  to { background-position:top right; }  \n}\n@keyframes charlieeee { \n  from { background-position:top left; }  \n  to { background-position:top right; }  \n}\n.catchadream{\n  background-image:-webkit-linear-gradient( left, red, orange, yellow, green,\n                                          blue, indigo, violet, indigo, blue,\n                                          green, yellow, orange, red );\n  background-image:-moz-linear-gradient( left, red, orange, yellow, green,\n                                         blue,indigo, violet, indigo, blue,\n                                         green, yellow, orange,red );\n  background-image:-o-linear-gradient( left, red, orange, yellow, green,\n                                         blue,indigo, violet, indigo, blue,\n                                         green, yellow, orange,red );\n  background-image:-ms-linear-gradient( left, red, orange, yellow, green,\n                                         blue,indigo, violet, indigo, blue,\n                                         green, yellow, orange,red );\n  background-image:-khtml-linear-gradient( left, red, orange, yellow, green,\n                                         blue,indigo, violet, indigo, blue,\n                                         green, yellow, orange,red );\n  background-image:linear-gradient( left, red, orange, yellow, green,\n                                         blue,indigo, violet, indigo, blue,\n                                         green, yellow, orange,red );\n  -moz-animation:charlieeee 2.5s forwards linear infinite;\n  -webkit-animation:charlieeee 2.5s forwards linear infinite;\n  -o-animation:charlieeee 2.5s forwards linear infinite;\n  -khtml-animation:charlieeee 2.5s forwards linear infinite;\n  -ms-animation:charlieeee 2.5s forwards linear infinite;\n  -lynx-animation:charlieeee 2.5s forwards linear infinite;\n  animation:charlieeee 2.5s forwards linear infinite;\n  background-size:50% auto;\n}\n\n@charset \"UTF-8\";\n\n/*!\nAnimate.css - http://daneden.me/animate\nLicensed under the MIT license\n\nCopyright (c) 2013 Daniel Eden\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n}\n\n@-webkit-keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  40% {\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px);\n  }\n\n  60% {\n    -webkit-transform: translateY(-15px);\n    transform: translateY(-15px);\n  }\n}\n\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  40% {\n    -webkit-transform: translateY(-30px);\n    -ms-transform: translateY(-30px);\n    transform: translateY(-30px);\n  }\n\n  60% {\n    -webkit-transform: translateY(-15px);\n    -ms-transform: translateY(-15px);\n    transform: translateY(-15px);\n  }\n}\n\n.bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce;\n}\n\n@-webkit-keyframes flash {\n  0%, 50%, 100% {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n@keyframes flash {\n  0%, 50%, 100% {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n.flash {\n  -webkit-animation-name: flash;\n  animation-name: flash;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  50% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n\n  50% {\n    -webkit-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse;\n}\n\n@-webkit-keyframes rubberBand {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  30% {\n    -webkit-transform: scaleX(1.25) scaleY(0.75);\n    transform: scaleX(1.25) scaleY(0.75);\n  }\n\n  40% {\n    -webkit-transform: scaleX(0.75) scaleY(1.25);\n    transform: scaleX(0.75) scaleY(1.25);\n  }\n\n  60% {\n    -webkit-transform: scaleX(1.15) scaleY(0.85);\n    transform: scaleX(1.15) scaleY(0.85);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes rubberBand {\n  0% {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n\n  30% {\n    -webkit-transform: scaleX(1.25) scaleY(0.75);\n    -ms-transform: scaleX(1.25) scaleY(0.75);\n    transform: scaleX(1.25) scaleY(0.75);\n  }\n\n  40% {\n    -webkit-transform: scaleX(0.75) scaleY(1.25);\n    -ms-transform: scaleX(0.75) scaleY(1.25);\n    transform: scaleX(0.75) scaleY(1.25);\n  }\n\n  60% {\n    -webkit-transform: scaleX(1.15) scaleY(0.85);\n    -ms-transform: scaleX(1.15) scaleY(0.85);\n    transform: scaleX(1.15) scaleY(0.85);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.rubberBand {\n  -webkit-animation-name: rubberBand;\n  animation-name: rubberBand;\n}\n\n@-webkit-keyframes shake {\n  0%, 100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px);\n  }\n}\n\n@keyframes shake {\n  0%, 100% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translateX(-10px);\n    -ms-transform: translateX(-10px);\n    transform: translateX(-10px);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translateX(10px);\n    -ms-transform: translateX(10px);\n    transform: translateX(10px);\n  }\n}\n\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake;\n}\n\n@-webkit-keyframes swing {\n  20% {\n    -webkit-transform: rotate(15deg);\n    transform: rotate(15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate(-10deg);\n    transform: rotate(-10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate(5deg);\n    transform: rotate(5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate(-5deg);\n    transform: rotate(-5deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n}\n\n@keyframes swing {\n  20% {\n    -webkit-transform: rotate(15deg);\n    -ms-transform: rotate(15deg);\n    transform: rotate(15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate(-10deg);\n    -ms-transform: rotate(-10deg);\n    transform: rotate(-10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate(5deg);\n    -ms-transform: rotate(5deg);\n    transform: rotate(5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate(-5deg);\n    -ms-transform: rotate(-5deg);\n    transform: rotate(-5deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n}\n\n.swing {\n  -webkit-transform-origin: top center;\n  -ms-transform-origin: top center;\n  transform-origin: top center;\n  -webkit-animation-name: swing;\n  animation-name: swing;\n}\n\n@-webkit-keyframes tada {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  10%, 20% {\n    -webkit-transform: scale(0.9) rotate(-3deg);\n    transform: scale(0.9) rotate(-3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale(1.1) rotate(3deg);\n    transform: scale(1.1) rotate(3deg);\n  }\n\n  40%, 60%, 80% {\n    -webkit-transform: scale(1.1) rotate(-3deg);\n    transform: scale(1.1) rotate(-3deg);\n  }\n\n  100% {\n    -webkit-transform: scale(1) rotate(0);\n    transform: scale(1) rotate(0);\n  }\n}\n\n@keyframes tada {\n  0% {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n\n  10%, 20% {\n    -webkit-transform: scale(0.9) rotate(-3deg);\n    -ms-transform: scale(0.9) rotate(-3deg);\n    transform: scale(0.9) rotate(-3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale(1.1) rotate(3deg);\n    -ms-transform: scale(1.1) rotate(3deg);\n    transform: scale(1.1) rotate(3deg);\n  }\n\n  40%, 60%, 80% {\n    -webkit-transform: scale(1.1) rotate(-3deg);\n    -ms-transform: scale(1.1) rotate(-3deg);\n    transform: scale(1.1) rotate(-3deg);\n  }\n\n  100% {\n    -webkit-transform: scale(1) rotate(0);\n    -ms-transform: scale(1) rotate(0);\n    transform: scale(1) rotate(0);\n  }\n}\n\n.tada {\n  -webkit-animation-name: tada;\n  animation-name: tada;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes wobble {\n  0% {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%);\n  }\n\n  15% {\n    -webkit-transform: translateX(-25%) rotate(-5deg);\n    transform: translateX(-25%) rotate(-5deg);\n  }\n\n  30% {\n    -webkit-transform: translateX(20%) rotate(3deg);\n    transform: translateX(20%) rotate(3deg);\n  }\n\n  45% {\n    -webkit-transform: translateX(-15%) rotate(-3deg);\n    transform: translateX(-15%) rotate(-3deg);\n  }\n\n  60% {\n    -webkit-transform: translateX(10%) rotate(2deg);\n    transform: translateX(10%) rotate(2deg);\n  }\n\n  75% {\n    -webkit-transform: translateX(-5%) rotate(-1deg);\n    transform: translateX(-5%) rotate(-1deg);\n  }\n\n  100% {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%);\n  }\n}\n\n@keyframes wobble {\n  0% {\n    -webkit-transform: translateX(0%);\n    -ms-transform: translateX(0%);\n    transform: translateX(0%);\n  }\n\n  15% {\n    -webkit-transform: translateX(-25%) rotate(-5deg);\n    -ms-transform: translateX(-25%) rotate(-5deg);\n    transform: translateX(-25%) rotate(-5deg);\n  }\n\n  30% {\n    -webkit-transform: translateX(20%) rotate(3deg);\n    -ms-transform: translateX(20%) rotate(3deg);\n    transform: translateX(20%) rotate(3deg);\n  }\n\n  45% {\n    -webkit-transform: translateX(-15%) rotate(-3deg);\n    -ms-transform: translateX(-15%) rotate(-3deg);\n    transform: translateX(-15%) rotate(-3deg);\n  }\n\n  60% {\n    -webkit-transform: translateX(10%) rotate(2deg);\n    -ms-transform: translateX(10%) rotate(2deg);\n    transform: translateX(10%) rotate(2deg);\n  }\n\n  75% {\n    -webkit-transform: translateX(-5%) rotate(-1deg);\n    -ms-transform: translateX(-5%) rotate(-1deg);\n    transform: translateX(-5%) rotate(-1deg);\n  }\n\n  100% {\n    -webkit-transform: translateX(0%);\n    -ms-transform: translateX(0%);\n    transform: translateX(0%);\n  }\n}\n\n.wobble {\n  -webkit-animation-name: wobble;\n  animation-name: wobble;\n}\n\n@-webkit-keyframes bounceIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(.3);\n    transform: scale(.3);\n  }\n\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(1.05);\n    transform: scale(1.05);\n  }\n\n  70% {\n    -webkit-transform: scale(.9);\n    transform: scale(.9);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes bounceIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(.3);\n    -ms-transform: scale(.3);\n    transform: scale(.3);\n  }\n\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(1.05);\n    -ms-transform: scale(1.05);\n    transform: scale(1.05);\n  }\n\n  70% {\n    -webkit-transform: scale(.9);\n    -ms-transform: scale(.9);\n    transform: scale(.9);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.bounceIn {\n  -webkit-animation-name: bounceIn;\n  animation-name: bounceIn;\n}\n\n@-webkit-keyframes bounceInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(30px);\n    transform: translateY(30px);\n  }\n\n  80% {\n    -webkit-transform: translateY(-10px);\n    transform: translateY(-10px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes bounceInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    -ms-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(30px);\n    -ms-transform: translateY(30px);\n    transform: translateY(30px);\n  }\n\n  80% {\n    -webkit-transform: translateY(-10px);\n    -ms-transform: translateY(-10px);\n    transform: translateY(-10px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.bounceInDown {\n  -webkit-animation-name: bounceInDown;\n  animation-name: bounceInDown;\n}\n\n@-webkit-keyframes bounceInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(30px);\n    transform: translateX(30px);\n  }\n\n  80% {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes bounceInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    -ms-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(30px);\n    -ms-transform: translateX(30px);\n    transform: translateX(30px);\n  }\n\n  80% {\n    -webkit-transform: translateX(-10px);\n    -ms-transform: translateX(-10px);\n    transform: translateX(-10px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.bounceInLeft {\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft;\n}\n\n@-webkit-keyframes bounceInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(-30px);\n    transform: translateX(-30px);\n  }\n\n  80% {\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes bounceInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    -ms-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(-30px);\n    -ms-transform: translateX(-30px);\n    transform: translateX(-30px);\n  }\n\n  80% {\n    -webkit-transform: translateX(10px);\n    -ms-transform: translateX(10px);\n    transform: translateX(10px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.bounceInRight {\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight;\n}\n\n@-webkit-keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px);\n  }\n\n  80% {\n    -webkit-transform: translateY(10px);\n    transform: translateY(10px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    -ms-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n    -ms-transform: translateY(-30px);\n    transform: translateY(-30px);\n  }\n\n  80% {\n    -webkit-transform: translateY(10px);\n    -ms-transform: translateY(10px);\n    transform: translateY(10px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n\n@-webkit-keyframes bounceOut {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  25% {\n    -webkit-transform: scale(.95);\n    transform: scale(.95);\n  }\n\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(.3);\n    transform: scale(.3);\n  }\n}\n\n@keyframes bounceOut {\n  0% {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n\n  25% {\n    -webkit-transform: scale(.95);\n    -ms-transform: scale(.95);\n    transform: scale(.95);\n  }\n\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(.3);\n    -ms-transform: scale(.3);\n    transform: scale(.3);\n  }\n}\n\n.bounceOut {\n  -webkit-animation-name: bounceOut;\n  animation-name: bounceOut;\n}\n\n@-webkit-keyframes bounceOutDown {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n}\n\n@keyframes bounceOutDown {\n  0% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(-20px);\n    -ms-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    -ms-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n}\n\n.bounceOutDown {\n  -webkit-animation-name: bounceOutDown;\n  animation-name: bounceOutDown;\n}\n\n@-webkit-keyframes bounceOutLeft {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateX(20px);\n    transform: translateX(20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n}\n\n@keyframes bounceOutLeft {\n  0% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    -ms-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n}\n\n.bounceOutLeft {\n  -webkit-animation-name: bounceOutLeft;\n  animation-name: bounceOutLeft;\n}\n\n@-webkit-keyframes bounceOutRight {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n}\n\n@keyframes bounceOutRight {\n  0% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    -ms-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n}\n\n.bounceOutRight {\n  -webkit-animation-name: bounceOutRight;\n  animation-name: bounceOutRight;\n}\n\n@-webkit-keyframes bounceOutUp {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(20px);\n    transform: translateY(20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n}\n\n@keyframes bounceOutUp {\n  0% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(20px);\n    -ms-transform: translateY(20px);\n    transform: translateY(20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    -ms-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n}\n\n.bounceOutUp {\n  -webkit-animation-name: bounceOutUp;\n  animation-name: bounceOutUp;\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n    -ms-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n\n@-webkit-keyframes fadeInDownBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeInDownBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    -ms-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.fadeInDownBig {\n  -webkit-animation-name: fadeInDownBig;\n  animation-name: fadeInDownBig;\n}\n\n@-webkit-keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft;\n}\n\n@-webkit-keyframes fadeInLeftBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInLeftBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    -ms-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.fadeInLeftBig {\n  -webkit-animation-name: fadeInLeftBig;\n  animation-name: fadeInLeftBig;\n}\n\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    transform: translateX(20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n\n@-webkit-keyframes fadeInRightBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInRightBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    -ms-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.fadeInRightBig {\n  -webkit-animation-name: fadeInRightBig;\n  animation-name: fadeInRightBig;\n}\n\n@-webkit-keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    transform: translateY(20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    -ms-transform: translateY(20px);\n    transform: translateY(20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n}\n\n@-webkit-keyframes fadeInUpBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeInUpBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    -ms-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.fadeInUpBig {\n  -webkit-animation-name: fadeInUpBig;\n  animation-name: fadeInUpBig;\n}\n\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n}\n\n@-webkit-keyframes fadeOutDown {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    transform: translateY(20px);\n  }\n}\n\n@keyframes fadeOutDown {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    -ms-transform: translateY(20px);\n    transform: translateY(20px);\n  }\n}\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n}\n\n@-webkit-keyframes fadeOutDownBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n}\n\n@keyframes fadeOutDownBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    -ms-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n}\n\n.fadeOutDownBig {\n  -webkit-animation-name: fadeOutDownBig;\n  animation-name: fadeOutDownBig;\n}\n\n@-webkit-keyframes fadeOutLeft {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n}\n\n@keyframes fadeOutLeft {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n}\n\n.fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft;\n}\n\n@-webkit-keyframes fadeOutLeftBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n}\n\n@keyframes fadeOutLeftBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    -ms-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n}\n\n.fadeOutLeftBig {\n  -webkit-animation-name: fadeOutLeftBig;\n  animation-name: fadeOutLeftBig;\n}\n\n@-webkit-keyframes fadeOutRight {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    transform: translateX(20px);\n  }\n}\n\n@keyframes fadeOutRight {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px);\n  }\n}\n\n.fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight;\n}\n\n@-webkit-keyframes fadeOutRightBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n}\n\n@keyframes fadeOutRightBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    -ms-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n}\n\n.fadeOutRightBig {\n  -webkit-animation-name: fadeOutRightBig;\n  animation-name: fadeOutRightBig;\n}\n\n@-webkit-keyframes fadeOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n}\n\n@keyframes fadeOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n    -ms-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n}\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp;\n}\n\n@-webkit-keyframes fadeOutUpBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n}\n\n@keyframes fadeOutUpBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    -ms-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n}\n\n.fadeOutUpBig {\n  -webkit-animation-name: fadeOutUpBig;\n  animation-name: fadeOutUpBig;\n}\n\n@-webkit-keyframes flip {\n  0% {\n    -webkit-transform: perspective(400px) translateZ(0) rotateY(0) scale(1);\n    transform: perspective(400px) translateZ(0) rotateY(0) scale(1);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);\n    transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);\n    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);\n    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n@keyframes flip {\n  0% {\n    -webkit-transform: perspective(400px) translateZ(0) rotateY(0) scale(1);\n    -ms-transform: perspective(400px) translateZ(0) rotateY(0) scale(1);\n    transform: perspective(400px) translateZ(0) rotateY(0) scale(1);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);\n    -ms-transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);\n    transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n    -ms-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);\n    -ms-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);\n    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);\n    -ms-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);\n    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n.animated.flip {\n  -webkit-backface-visibility: visible;\n  -ms-backface-visibility: visible;\n  backface-visibility: visible;\n  -webkit-animation-name: flip;\n  animation-name: flip;\n}\n\n@-webkit-keyframes flipInX {\n  0% {\n    -webkit-transform: perspective(400px) rotateX(90deg);\n    transform: perspective(400px) rotateX(90deg);\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotateX(-10deg);\n    transform: perspective(400px) rotateX(-10deg);\n  }\n\n  70% {\n    -webkit-transform: perspective(400px) rotateX(10deg);\n    transform: perspective(400px) rotateX(10deg);\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateX(0deg);\n    transform: perspective(400px) rotateX(0deg);\n    opacity: 1;\n  }\n}\n\n@keyframes flipInX {\n  0% {\n    -webkit-transform: perspective(400px) rotateX(90deg);\n    -ms-transform: perspective(400px) rotateX(90deg);\n    transform: perspective(400px) rotateX(90deg);\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotateX(-10deg);\n    -ms-transform: perspective(400px) rotateX(-10deg);\n    transform: perspective(400px) rotateX(-10deg);\n  }\n\n  70% {\n    -webkit-transform: perspective(400px) rotateX(10deg);\n    -ms-transform: perspective(400px) rotateX(10deg);\n    transform: perspective(400px) rotateX(10deg);\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateX(0deg);\n    -ms-transform: perspective(400px) rotateX(0deg);\n    transform: perspective(400px) rotateX(0deg);\n    opacity: 1;\n  }\n}\n\n.flipInX {\n  -webkit-backface-visibility: visible !important;\n  -ms-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInX;\n  animation-name: flipInX;\n}\n\n@-webkit-keyframes flipInY {\n  0% {\n    -webkit-transform: perspective(400px) rotateY(90deg);\n    transform: perspective(400px) rotateY(90deg);\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotateY(-10deg);\n    transform: perspective(400px) rotateY(-10deg);\n  }\n\n  70% {\n    -webkit-transform: perspective(400px) rotateY(10deg);\n    transform: perspective(400px) rotateY(10deg);\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateY(0deg);\n    transform: perspective(400px) rotateY(0deg);\n    opacity: 1;\n  }\n}\n\n@keyframes flipInY {\n  0% {\n    -webkit-transform: perspective(400px) rotateY(90deg);\n    -ms-transform: perspective(400px) rotateY(90deg);\n    transform: perspective(400px) rotateY(90deg);\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotateY(-10deg);\n    -ms-transform: perspective(400px) rotateY(-10deg);\n    transform: perspective(400px) rotateY(-10deg);\n  }\n\n  70% {\n    -webkit-transform: perspective(400px) rotateY(10deg);\n    -ms-transform: perspective(400px) rotateY(10deg);\n    transform: perspective(400px) rotateY(10deg);\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateY(0deg);\n    -ms-transform: perspective(400px) rotateY(0deg);\n    transform: perspective(400px) rotateY(0deg);\n    opacity: 1;\n  }\n}\n\n.flipInY {\n  -webkit-backface-visibility: visible !important;\n  -ms-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInY;\n  animation-name: flipInY;\n}\n\n@-webkit-keyframes flipOutX {\n  0% {\n    -webkit-transform: perspective(400px) rotateX(0deg);\n    transform: perspective(400px) rotateX(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateX(90deg);\n    transform: perspective(400px) rotateX(90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutX {\n  0% {\n    -webkit-transform: perspective(400px) rotateX(0deg);\n    -ms-transform: perspective(400px) rotateX(0deg);\n    transform: perspective(400px) rotateX(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateX(90deg);\n    -ms-transform: perspective(400px) rotateX(90deg);\n    transform: perspective(400px) rotateX(90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutX {\n  -webkit-animation-name: flipOutX;\n  animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  -ms-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n}\n\n@-webkit-keyframes flipOutY {\n  0% {\n    -webkit-transform: perspective(400px) rotateY(0deg);\n    transform: perspective(400px) rotateY(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateY(90deg);\n    transform: perspective(400px) rotateY(90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutY {\n  0% {\n    -webkit-transform: perspective(400px) rotateY(0deg);\n    -ms-transform: perspective(400px) rotateY(0deg);\n    transform: perspective(400px) rotateY(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateY(90deg);\n    -ms-transform: perspective(400px) rotateY(90deg);\n    transform: perspective(400px) rotateY(90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutY {\n  -webkit-backface-visibility: visible !important;\n  -ms-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipOutY;\n  animation-name: flipOutY;\n}\n\n@-webkit-keyframes lightSpeedIn {\n  0% {\n    -webkit-transform: translateX(100%) skewX(-30deg);\n    transform: translateX(100%) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: translateX(-20%) skewX(30deg);\n    transform: translateX(-20%) skewX(30deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: translateX(0%) skewX(-15deg);\n    transform: translateX(0%) skewX(-15deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: translateX(0%) skewX(0deg);\n    transform: translateX(0%) skewX(0deg);\n    opacity: 1;\n  }\n}\n\n@keyframes lightSpeedIn {\n  0% {\n    -webkit-transform: translateX(100%) skewX(-30deg);\n    -ms-transform: translateX(100%) skewX(-30deg);\n    transform: translateX(100%) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: translateX(-20%) skewX(30deg);\n    -ms-transform: translateX(-20%) skewX(30deg);\n    transform: translateX(-20%) skewX(30deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: translateX(0%) skewX(-15deg);\n    -ms-transform: translateX(0%) skewX(-15deg);\n    transform: translateX(0%) skewX(-15deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: translateX(0%) skewX(0deg);\n    -ms-transform: translateX(0%) skewX(0deg);\n    transform: translateX(0%) skewX(0deg);\n    opacity: 1;\n  }\n}\n\n.lightSpeedIn {\n  -webkit-animation-name: lightSpeedIn;\n  animation-name: lightSpeedIn;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n\n@-webkit-keyframes lightSpeedOut {\n  0% {\n    -webkit-transform: translateX(0%) skewX(0deg);\n    transform: translateX(0%) skewX(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: translateX(100%) skewX(-30deg);\n    transform: translateX(100%) skewX(-30deg);\n    opacity: 0;\n  }\n}\n\n@keyframes lightSpeedOut {\n  0% {\n    -webkit-transform: translateX(0%) skewX(0deg);\n    -ms-transform: translateX(0%) skewX(0deg);\n    transform: translateX(0%) skewX(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: translateX(100%) skewX(-30deg);\n    -ms-transform: translateX(100%) skewX(-30deg);\n    transform: translateX(100%) skewX(-30deg);\n    opacity: 0;\n  }\n}\n\n.lightSpeedOut {\n  -webkit-animation-name: lightSpeedOut;\n  animation-name: lightSpeedOut;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in;\n}\n\n@-webkit-keyframes rotateIn {\n  0% {\n    -webkit-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(-200deg);\n    transform: rotate(-200deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateIn {\n  0% {\n    -webkit-transform-origin: center center;\n    -ms-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(-200deg);\n    -ms-transform: rotate(-200deg);\n    transform: rotate(-200deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: center center;\n    -ms-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n.rotateIn {\n  -webkit-animation-name: rotateIn;\n  animation-name: rotateIn;\n}\n\n@-webkit-keyframes rotateInDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(-90deg);\n    -ms-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n.rotateInDownLeft {\n  -webkit-animation-name: rotateInDownLeft;\n  animation-name: rotateInDownLeft;\n}\n\n@-webkit-keyframes rotateInDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n.rotateInDownRight {\n  -webkit-animation-name: rotateInDownRight;\n  animation-name: rotateInDownRight;\n}\n\n@-webkit-keyframes rotateInUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n.rotateInUpLeft {\n  -webkit-animation-name: rotateInUpLeft;\n  animation-name: rotateInUpLeft;\n}\n\n@-webkit-keyframes rotateInUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(-90deg);\n    -ms-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n.rotateInUpRight {\n  -webkit-animation-name: rotateInUpRight;\n  animation-name: rotateInUpRight;\n}\n\n@-webkit-keyframes rotateOut {\n  0% {\n    -webkit-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(200deg);\n    transform: rotate(200deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOut {\n  0% {\n    -webkit-transform-origin: center center;\n    -ms-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: center center;\n    -ms-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(200deg);\n    -ms-transform: rotate(200deg);\n    transform: rotate(200deg);\n    opacity: 0;\n  }\n}\n\n.rotateOut {\n  -webkit-animation-name: rotateOut;\n  animation-name: rotateOut;\n}\n\n@-webkit-keyframes rotateOutDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownLeft {\n  -webkit-animation-name: rotateOutDownLeft;\n  animation-name: rotateOutDownLeft;\n}\n\n@-webkit-keyframes rotateOutDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(-90deg);\n    -ms-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownRight {\n  -webkit-animation-name: rotateOutDownRight;\n  animation-name: rotateOutDownRight;\n}\n\n@-webkit-keyframes rotateOutUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(-90deg);\n    -ms-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpLeft {\n  -webkit-animation-name: rotateOutUpLeft;\n  animation-name: rotateOutUpLeft;\n}\n\n@-webkit-keyframes rotateOutUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpRight {\n  -webkit-animation-name: rotateOutUpRight;\n  animation-name: rotateOutUpRight;\n}\n\n@-webkit-keyframes slideInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes slideInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    -ms-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.slideInDown {\n  -webkit-animation-name: slideInDown;\n  animation-name: slideInDown;\n}\n\n@-webkit-keyframes slideInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes slideInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    -ms-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.slideInLeft {\n  -webkit-animation-name: slideInLeft;\n  animation-name: slideInLeft;\n}\n\n@-webkit-keyframes slideInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes slideInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    -ms-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.slideInRight {\n  -webkit-animation-name: slideInRight;\n  animation-name: slideInRight;\n}\n\n@-webkit-keyframes slideOutLeft {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n}\n\n@keyframes slideOutLeft {\n  0% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    -ms-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n}\n\n.slideOutLeft {\n  -webkit-animation-name: slideOutLeft;\n  animation-name: slideOutLeft;\n}\n\n@-webkit-keyframes slideOutRight {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n}\n\n@keyframes slideOutRight {\n  0% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    -ms-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n}\n\n.slideOutRight {\n  -webkit-animation-name: slideOutRight;\n  animation-name: slideOutRight;\n}\n\n@-webkit-keyframes slideOutUp {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n}\n\n@keyframes slideOutUp {\n  0% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    -ms-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n}\n\n.slideOutUp {\n  -webkit-animation-name: slideOutUp;\n  animation-name: slideOutUp;\n}\n\n@-webkit-keyframes hinge {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    -webkit-transform: rotate(80deg);\n    transform: rotate(80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40% {\n    -webkit-transform: rotate(60deg);\n    transform: rotate(60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  80% {\n    -webkit-transform: rotate(60deg) translateY(0);\n    transform: rotate(60deg) translateY(0);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: translateY(700px);\n    transform: translateY(700px);\n    opacity: 0;\n  }\n}\n\n@keyframes hinge {\n  0% {\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    -webkit-transform-origin: top left;\n    -ms-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    -webkit-transform: rotate(80deg);\n    -ms-transform: rotate(80deg);\n    transform: rotate(80deg);\n    -webkit-transform-origin: top left;\n    -ms-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40% {\n    -webkit-transform: rotate(60deg);\n    -ms-transform: rotate(60deg);\n    transform: rotate(60deg);\n    -webkit-transform-origin: top left;\n    -ms-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  80% {\n    -webkit-transform: rotate(60deg) translateY(0);\n    -ms-transform: rotate(60deg) translateY(0);\n    transform: rotate(60deg) translateY(0);\n    -webkit-transform-origin: top left;\n    -ms-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: translateY(700px);\n    -ms-transform: translateY(700px);\n    transform: translateY(700px);\n    opacity: 0;\n  }\n}\n\n.hinge {\n  -webkit-animation-name: hinge;\n  animation-name: hinge;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%) rotate(-120deg);\n    transform: translateX(-100%) rotate(-120deg);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px) rotate(0deg);\n    transform: translateX(0px) rotate(0deg);\n  }\n}\n\n@keyframes rollIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%) rotate(-120deg);\n    -ms-transform: translateX(-100%) rotate(-120deg);\n    transform: translateX(-100%) rotate(-120deg);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px) rotate(0deg);\n    -ms-transform: translateX(0px) rotate(0deg);\n    transform: translateX(0px) rotate(0deg);\n  }\n}\n\n.rollIn {\n  -webkit-animation-name: rollIn;\n  animation-name: rollIn;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollOut {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0px) rotate(0deg);\n    transform: translateX(0px) rotate(0deg);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(100%) rotate(120deg);\n    transform: translateX(100%) rotate(120deg);\n  }\n}\n\n@keyframes rollOut {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0px) rotate(0deg);\n    -ms-transform: translateX(0px) rotate(0deg);\n    transform: translateX(0px) rotate(0deg);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(100%) rotate(120deg);\n    -ms-transform: translateX(100%) rotate(120deg);\n    transform: translateX(100%) rotate(120deg);\n  }\n}\n\n.rollOut {\n  -webkit-animation-name: rollOut;\n  animation-name: rollOut;\n}\n"
themeSettings: 
  color1: "#333"
  color2: "rgb(85, 85, 85)"
  color3: "#e5e5e5"
  color4: "#555"
  textColor: "#333"
  textColorAlt: "#e5e5e5"
  pictureFrame: "#ffffff"
  titleFont: ""
  subtitleFont: ""
  bodyFont: ""
  codeFontSize: ""
slidesOrder: 
  - 52264f7144439c240800005a
  - 52711a36cdf3fe6b4000005b
  - 534e7f365943b42e6f00003a
  - 534e7f505943b42e6f00003b
  - 52264f7144439c240800005b
  - 52faf25281f235b32300006d
  - 531e647787e717cd0400000a
  - 531e64d1d5f663c104000009
  - 531e66eb90afddc90400000e
  - 531e6726b22f73c50400000a
  - 531e670b90afddc90400000f
  - 531e678487e717cd0400000b
  - 52faf368f79fecb023000054
  - 531e70e0d5f663c10400000b
  - 531e6d02b22f73c50400000b
  - 531e6c5bd5f663c10400000a
  - 531e734b87e717cd0400000c
  - 531e736bd5f663c10400000c
  - 531e758fb22f73c50400000c
  - 531e75bfd5f663c10400000d
  - 531e75ea90afddc904000011
  - 531e75d4d5f663c10400000e
  - 531e764290afddc904000012
  - 531f1dc890afddc904000014
  - 5254e653d0b5b6ad6d00002a
  - 5254ef9cd0b5b6ad6d000036
  - 534ddc6f8ff7bf3f6f00000a
  - 5254f323d0b5b6ad6d000040
  - 534ddf018ff7bf3f6f00000b
  - 534ddf1f8ff7bf3f6f00000c
  - 5254f9fbd0b5b6ad6d000050
  - 531e7681b22f73c50400000d
  - 5254d8d0d0b5b6ad6d000020
  - 531fe5c7b22f73c504000015
  - 531fe525b22f73c504000014
  - 5254d930d0b5b6ad6d000021
  - 5254d952d0b5b6ad6d000022
  - 5254d969d0b5b6ad6d000023
  - 5254ed5cd0b5b6ad6d00002f
  - 5256151cd0b5b6ad6d000091
  - 5254df3dd0b5b6ad6d000026
  - 531f6213b22f73c504000012
  - 5254f087d0b5b6ad6d000039
  - 5320b101d5f663c104000015
  - 5320b12487e717cd04000015
  - 52561677d0b5b6ad6d000094
  - 5254f173d0b5b6ad6d00003b
  - 531fb09287e717cd04000010
  - 5254ee8bd0b5b6ad6d000033
  - 531ff5ba87e717cd04000013
  - 5254eef6d0b5b6ad6d000034
  - 531ff67fd5f663c104000013
  - 5254ef23d0b5b6ad6d000035
  - 531e766187e717cd0400000d
  - 5254e691d0b5b6ad6d00002b
  - 5320bc0c87e717cd04000017
  - 5254f616d0b5b6ad6d000047
  - 5254f6a2d0b5b6ad6d000048
  - 531fe9f790afddc904000016
  - 531fea0187e717cd04000012
  - 534ddf6e8ff7bf3f6f00000d
  - 5254f7bbd0b5b6ad6d00004b
  - 5320027890afddc904000017
  - 531e76ced5f663c10400000f
  - 531e76e9b22f73c50400000e
  - 531fd7f887e717cd04000011
  - 5226511744439c240800005d
  - 52523705d1a98b157c0000f2
  - 5252378fd1a98b157c0000f3
  - 531f6a6fd5f663c104000010
  - 5226515e44439c240800005e
  - 5252381fd1a98b157c0000f5
  - 531fda77d5f663c104000012
  - 531e79c2b22f73c50400000f
  - 531e99a887e717cd0400000e
  - 531fd9beb22f73c504000013
  - 531e99cf87e717cd0400000f
  - 5255ffd2d0b5b6ad6d00008d
metadata: 
  codeblocks: 
    color_scheme: blackboard
    highlight: "true"
format: markdown
level: ""
topic: 51e99cbe1796892303000006
topic_name: Client-side
topic_slug: clientside


-->

<!--

_id: 52264f7144439c240800005a
master: title
createdAt: 2013-09-03T21:06:57.000Z
updatedAt: 2014-04-17T02:42:29.812Z


-->

# jQuery-free JavaScript

## <strong>by <span style="color: #555;">@elijahmanor</span></strong>

<img style="overflow: hidden; position: absolute; top: -600px; box-shadow: none; display: inline-block; left: 100px; background-color: initial; opacity: 0.05; height: 640px; margin: auto; text-align: center;" src="https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/1000px-Vanillin-transparent.png"/>

-----

<!--

_id: 52711a36cdf3fe6b4000005b
master: content-alt
createdAt: 2013-10-30T14:39:50.000Z
updatedAt: 2014-04-17T02:42:29.813Z


-->

# jQuery-free JavaScript

## me.json

```javascript
{
  "priorities" : [ "Christian", "Family", "Work" ],
  "work"       : [ "@DaveRamsey", "@PluralSight" ],
  "tech"       : [ "HTML", "CSS", "JavaScript" ],
  "titles"     : [ "MS RD", "MS MVP", "IE userAgent" ]
}
```

<img style="position: absolute; top: -130px; box-shadow: none; display: inline-block; left: 100px; background-color: initial; opacity: 0.05; height: 640px;" src="https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/1000px-Vanillin-transparent.png"/>

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span>&nbsp;<a href='http://twitter.com/elijahmanor' style='color: #ddd; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 534e7f365943b42e6f00003a
master: content-alt
createdAt: 2014-04-16T13:01:42.000Z
updatedAt: 2014-04-17T02:42:29.813Z


-->

# jQuery-free JavaScript

<!-- ![](https://dl.dropboxusercontent.com/u/200135/talks/fluent-conf-review/fluent-conf-profile.png)-->

<center><img src="http://farm8.staticflickr.com/7460/13120425244_fc39b71453_b.jpg" style="height: 450px" /></center>


-----

<!--

_id: 534e7f505943b42e6f00003b
master: content-alt
createdAt: 2014-04-16T13:02:08.000Z
updatedAt: 2014-04-17T02:42:29.813Z


-->

# jQuery-free JavaScript

<!-- ![](https://dl.dropboxusercontent.com/u/200135/talks/fluent-conf-review/fluent-conf-profile.png)-->

<center><img src="https://dl.dropboxusercontent.com/u/200135/talks/fluent-conf-review/fluent-conf-speaking-hamburger.jpg-large" style="height: 450px" /></center>


-----

<!--

_id: 52264f7144439c240800005b
master: full
createdAt: 2013-09-03T21:06:57.000Z
updatedAt: 2014-04-17T02:42:29.813Z


-->

# To jQuery or Not to jQuery?

![When Should I Use jQuery?](https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/why-should-i-use-jquery.png)

-----

<!--

_id: 52faf25281f235b32300006d
master: full
createdAt: 2014-02-12T04:02:26.000Z
updatedAt: 2014-04-17T02:42:29.813Z


-->

# http://youmightnotneedjquery.com

<object data="http://youmightnotneedjquery.com/" type="text/html" style="width: 100%; height: 100%;"></object>

<!--<center><img style="height: 500px" src="https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/youmightnotneedjquery.png" /></center>-->


-----

<!--

_id: 531e647787e717cd0400000a
master: title
createdAt: 2014-03-11T01:18:47.000Z
updatedAt: 2014-04-17T02:42:29.813Z


-->

# Do You Need jQuery?

<script>
$(".slide-5 h1").addClass("animated bounceIn");
</script>

-----

<!--

_id: 531e64d1d5f663c104000009
master: content
createdAt: 2014-03-11T01:20:17.000Z
updatedAt: 2014-04-17T02:42:29.813Z


-->

# What Does jQuery Solve?

## A Little Background...

* API
	* Abstraction
	* Consistency
	* Terse

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531e66eb90afddc90400000e
master: content
createdAt: 2014-03-11T01:29:15.000Z
updatedAt: 2014-04-17T02:42:29.813Z


-->

# What Does jQuery Solve?

## A Little Background...

* API
	* Abstraction
	* Consistency
	* Terse
---
* Community
	* Developers, Developers, Developers

![](https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/jquery-ben-nadel.jpg)

<script>
$(".slide-7 img").addClass("animated bounceInRight");
</script>

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531e6726b22f73c50400000a
master: full
createdAt: 2014-03-11T01:30:14.000Z
updatedAt: 2014-04-17T02:42:29.813Z


-->

# It's Battle Tested

![](https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/rockem-sockem.jpg)


-----

<!--

_id: 531e670b90afddc90400000f
master: full
createdAt: 2014-03-11T01:29:47.000Z
updatedAt: 2014-04-17T02:42:29.813Z


-->

# 57.5% of Quantcast Top Million

![](https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/built-with-jquery.png)


-----

<!--

_id: 531e678487e717cd0400000b
master: full
createdAt: 2014-03-11T01:31:48.000Z
updatedAt: 2014-04-17T02:42:29.814Z


-->

# It Fixes Cross-Browser Bugs!

<center>
<blockquote class="twitter-tweet" lang="en"><p>jQuery is very much alive. <a href="https://twitter.com/rwaldron">@rwaldron</a>&#39;s list of 129 browser bugs that jQuery works around in MODERN browsers: <a href="https://t.co/cEGoi6TO3F">https://t.co/cEGoi6TO3F</a></p>&mdash; John Resig (@jeresig) <a href="https://twitter.com/jeresig/statuses/429019936506142720">January 30, 2014</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
<blockquote class="twitter-tweet" lang="en"><p>You Might Not Need jQuery! … assuming you&#39;ll address these bugs in your hand-written code: <a href="https://t.co/j2hrG2nCpX">https://t.co/j2hrG2nCpX</a></p>&mdash; Paul Irish (@paul_irish) <a href="https://twitter.com/paul_irish/statuses/431584056883429376">February 7, 2014</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
</center>



-----

<!--

_id: 52faf368f79fecb023000054
master: content
createdAt: 2014-02-12T04:07:04.000Z
updatedAt: 2014-04-17T02:42:29.814Z


-->

# jQuery's Browser Bug Workarounds

## http://bit.ly/jquery-browser-bugs

<center><img src="https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/youmightnotneedjquery-rebuttle.png" style="height: 415px;" /></center>
<!-- <object data="https://docs.google.com/document/d/1LPaPA30bLUB_publLIMF0RlhdnPx_ePXm7oW02iiT6o/edit#" type="text/html" style="width: 100%; height: 100%;"></object> -->

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531e70e0d5f663c10400000b
master: content
createdAt: 2014-03-11T02:11:44.000Z
updatedAt: 2014-04-17T02:42:29.814Z


-->

# Browser Bug Breakdown

## 100+ Cross-Browser Bugs

<iframe src="//embed.gettyimages.com/embed/167311807?et=ZkxDsoXTaUCiWzFaa_VVNg&sig=lkUtWQ4N84S3JJRM3rZFVDVOk1n2habUT8CWgXTJT2A=" width="480" height="407" frameborder="0" scrolling="no"></iframe>

---

<iframe height=371 width=480 src="//docs.google.com/spreadsheets/d/1190rU9CYvQwYxfxBWhqt_m_sghvgIxUSreGdmZjolQk/gviz/chartiframe?oid=1526958102" seamless frameborder=0 scrolling=no></iframe>

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531e6d02b22f73c50400000b
master: content
createdAt: 2014-03-11T01:55:14.000Z
updatedAt: 2014-04-17T02:42:29.814Z


-->

# Browser Bug Breakdown

## 38 of Bugs are Sizzle Bugs

<iframe src="//embed.gettyimages.com/embed/dv0302111?et=UBk5COJlsk2uCqkA8SLKnQ&sig=0x3pbmbO2AKk6KQf3dfc_4ZVshzS5NPx0y5MjIxHTAo=" width="480" height="400" frameborder="0" scrolling="no"></iframe>

---

<iframe height=371 width=480 src="//docs.google.com/spreadsheets/d/1190rU9CYvQwYxfxBWhqt_m_sghvgIxUSreGdmZjolQk/gviz/chartiframe?oid=1650848818" seamless frameborder=0 scrolling=no></iframe>

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531e6c5bd5f663c10400000a
master: content
createdAt: 2014-03-11T01:52:27.000Z
updatedAt: 2014-04-17T02:42:29.814Z


-->

# Browser Bug Breakdown

## 50 IE Specific Bugs

<center><img src="https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/internet-explorer_512x512.png" style="width: 280px; box-shadow: none; position: relative; top: 25px;" /></center>

---

<iframe height=371 width=480 src="//docs.google.com/spreadsheets/d/1190rU9CYvQwYxfxBWhqt_m_sghvgIxUSreGdmZjolQk/gviz/chartiframe?oid=395021372" seamless frameborder=0 scrolling=no></iframe>

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531e734b87e717cd0400000c
master: content
createdAt: 2014-03-11T02:22:03.000Z
updatedAt: 2014-04-17T02:42:29.814Z


-->

# Contribute to Standards

## http://bit.ly/jquery-standards

* jQuery has close relations to the browser vendors and communicates standard violations to be fixed
* Yehuda Katz & Rick Waldron are active in ECMA TC39 group
* Scott González & Kris Borchers worked to refine the Pointer Events standard
* Julian Aubourg has participated on revisions to the XMLHttpRequest standard

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531e736bd5f663c10400000c
master: content
createdAt: 2014-03-11T02:22:35.000Z
updatedAt: 2014-04-17T02:42:29.814Z


-->

# Lots and Lots of Unit Tests

* When a Bug is encountered a Unit Test is added
* There are currently 6519 Unit Tests
* Tests run against a suite of browsers via TestSwarm

---

<img src="https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/testswarm.png" style="height: 450px;" />

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531e758fb22f73c50400000c
master: content
createdAt: 2014-03-11T02:31:43.000Z
updatedAt: 2014-04-17T02:42:29.814Z


-->

# What are the dangers of jQuery-free?

* You are battle testing your own code
* You don't gain the combined knowledge and talent of experienced from top front-end devs
* Unit Testing and Integration Testing is MUCH more important than normal
* It requires a high level of skill across your team

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531e75bfd5f663c10400000d
master: vertical
createdAt: 2014-03-11T02:32:31.000Z
updatedAt: 2014-04-17T02:42:29.814Z


-->

# Let's Go jQuery-free

<center><iframe src="//embed.gettyimages.com/embed/165723598?et=-MMOOvIyi0OnavOMNm5zcw&sig=70StwyWTT2vS_ZT1335Qj_wiii9sNcTGAb2rIz3x6iY=" width="414" height="483" frameborder="0" scrolling="no"></iframe></center>

<script>
$(".presentation-title").html("jQuery-free JavaScript");
</script>

-----

<!--

_id: 531e75ea90afddc904000011
master: content
createdAt: 2014-03-11T02:33:14.000Z
updatedAt: 2014-04-17T02:42:29.814Z


-->

# Cutting the Mustard

## Internet Explorer >= 9

```javascript
if ( "querySelector" in document && "localStorage" in window &&
  "addEventListener" in window ) {
  // bootstrap the JavaScript application
}
```

* document.querySelector (IE8 was limited to CSS 2.1)
* addEventListener, dispatchEvent (IE9+)
* Matches (IE9+)
* ECMAScript 5 (bind, forEach, filter, map, reduce, etc…)

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>


-----

<!--

_id: 531e75d4d5f663c10400000e
master: title
createdAt: 2014-03-11T02:32:52.000Z
updatedAt: 2014-04-17T02:42:29.814Z


-->

# The Good, the Bad, & the Ugly

-----

<!--

_id: 531e764290afddc904000012
master: title
createdAt: 2014-03-11T02:34:42.000Z
updatedAt: 2014-04-17T02:42:29.814Z


-->

# Good Browser Feature Parity

-----

<!--

_id: 531f1dc890afddc904000014
master: content
createdAt: 2014-03-11T14:29:28.000Z
updatedAt: 2014-04-17T02:42:29.815Z


-->

# Good Browser Feature Parity

## Basic Selectors

```javascript
$("#datepicker")


$("input")


$(".date")


$("input.date")
```

---

```js
document.getElementById("datepicker");
document.querySelector("#datepicker");

document.getElementsByTagName("input");
document.querySelectorAll("input");

document.getElementsByClassName("date");
document.querySelectorAll(".date");

document.querySelectorAll("input.date");
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5254e653d0b5b6ad6d00002a
master: content
createdAt: 2013-10-09T05:14:59.000Z
updatedAt: 2014-04-17T02:42:29.815Z


-->

# Good Browser Feature Parity

## Next, Previous

jQuery

```javascript
var element = $("#widget");


element.prev();

element.next();
```

---

Native

```javascript
var element = document.getElementbyId("widget");

element.previousElementSibling,

element.nextElementSibling;
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5254ef9cd0b5b6ad6d000036
master: content
createdAt: 2013-10-09T05:54:36.000Z
updatedAt: 2014-04-17T02:42:29.815Z


-->

# Good Browser Feature Parity

## HTML & Text

jQuery

```javascript
var widget = $("#widget");


widget.html("<p>hello</p>"); 
widget.html;    

widget.text("goodbye");              
widget.text;                        
```

---

Native

```javascript
var widget = document.getElementById("widget");

widget.innerHTML = "<p>hello</p>"; 
widget.innerHTML;                          

widget.textContent = "goodbye";           
widget.textContent;                           
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 534ddc6f8ff7bf3f6f00000a
master: content
createdAt: 2014-04-16T01:27:11.000Z
updatedAt: 2014-04-17T02:42:29.815Z


-->

# Good Browser Feature Parity

## Attributes & Properties

jQuery

```javascript
var $e1 = $("#e1"),
    $e2 = $("#e2"),
    $e3 = $("#e3");


$e1.attr("placeholder", "☃");
$e1.attr("placeholder");
$e2.prop("checked", true);
$e2.prop("checked");
$e3.attr("href");        // relative
$e3.prop("href");        // absolute
```

---

Native

```javascript
var doc = document,
  e1 = doc.getElementById("e1"),
  e2 = doc.getElementById("e2"),
  e3 = doc.getElementById("e3");

e1.setAttribute("placeholder", "☃");
e1.getAttribute("placeholder");
e2.checked = true;
e2.checked;
e3.getAttribute("href"); // relative 
e3.href;                 // absolute
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5254f323d0b5b6ad6d000040
master: content
createdAt: 2013-10-09T06:09:39.000Z
updatedAt: 2014-04-17T02:42:29.815Z


-->

# Good Browser Feature Parity

## Proxy

jQuery

```javascript
var store = {
  cat: "Books",
  clickHandler: function(e) {
    var url = "./str/" + this.cat;
    // ... more code ...
  }
};

$("#search").on(
  "click",
  $.proxy(store.clickHandler, store)
);
```

---

Native

```javascript
var store = {
  cat: "Books",
  clickHandler: function(e) {
    var url = "./str/" + this.cat;
    // ... more code ...
  }
};

document.getElementById("search")
  .addEventListener(
    "click",   
    store.clickHandler.bind(store)
  );
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 534ddf018ff7bf3f6f00000b
master: content
createdAt: 2014-04-16T01:38:09.000Z
updatedAt: 2014-04-17T02:42:29.815Z


-->

# Good Browser Feature Parity

## DOM Ready: Markup

jQuery

```javascript
$(document).ready(function() {
    //DOM is ready
});

$(function() {
    //DOM is ready
});
```

---

Native

```html
<html>
    <head></head>
    <body>
        ...
        <script>
            //DOM is ready
        </script>
    </body>
</html>
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 534ddf1f8ff7bf3f6f00000c
master: content
createdAt: 2014-04-16T01:38:39.000Z
updatedAt: 2014-04-17T02:42:29.815Z


-->

# Good Browser Feature Parity

## DOM Ready: JavaScript

jQuery

```javascript
$(document).ready(function() {
    //DOM is ready
});

$(function() {
    //DOM is ready
});
```

---

Native

```javascript
document.addEventListener(
    "DOMContentLoaded", 
    function() {}
);
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5254f9fbd0b5b6ad6d000050
master: content
createdAt: 2013-10-09T06:38:51.000Z
updatedAt: 2014-04-17T02:42:29.815Z


-->

# Good Browser Feature Parity

## Miscellaneous

jQuery

```javascript
$.each(), $.grep(), $.map()

$.extend()

$.inArray()

$.type()

$.trim()
```

---


Native

```javascript
[].forEach(), [].filter(), [].map()

_.extend()

[].indexOf()

typeof, Array.isArray(), Underscore

"".trim()
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531e7681b22f73c50400000d
master: title
createdAt: 2014-03-11T02:35:45.000Z
updatedAt: 2014-04-17T02:42:29.815Z


-->

# Ugly Browser Feature Parity




-----

<!--

_id: 5254d8d0d0b5b6ad6d000020
master: content
createdAt: 2013-10-09T04:17:20.000Z
updatedAt: 2014-04-17T02:42:29.815Z


-->

# Ugly Browser Feature Parity

## Each: Option 1

jQuery

```javascript
$(".date").each(
  function(i, el) {
    $(el).text("Hi:" + i);
  });
```

---

Native

```javascript
document.querySelectorAll(".date")
  .forEach(function(el, i) {
    el.innerText = "Hi:" + i;
  });

```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531fe5c7b22f73c504000015
master: content
createdAt: 2014-03-12T04:42:47.000Z
updatedAt: 2014-04-17T02:42:29.815Z


-->

# Ugly Browser Feature Parity

## Each: Option 1

jQuery

```javascript
$(".date").each(
  function(i, el) {
    $(el).text("Hi:" + i);
  });
```

---

Native

```javascript
document.querySelectorAll(".date")
  .forEach(function(el, i) {
    el.innerText = "Hi:" + i;
  });

```
<div style="color: red; position: relative; font-size: 200px; text-align: center; top: -104px;">X</div>

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531fe525b22f73c504000014
master: content
createdAt: 2014-03-12T04:40:05.000Z
updatedAt: 2014-04-17T02:42:29.816Z


-->

# Ugly Browser Feature Parity

## Each: Option 1 - Take 2

jQuery

```javascript
$(".date").each(
  function(i, el) {
    $(el).text("Hi:" + i);
  });
```

---

Native

```javascript
var nodes = 
  document.querySelectorAll(".date"), i, len;

for (i = 0, len = nodes.length;
  i < len;
  ++i) {
  nodes[i].innerText = "Hi:" + i;
};
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5254d930d0b5b6ad6d000021
master: content
createdAt: 2013-10-09T04:18:56.000Z
updatedAt: 2014-04-17T02:42:29.816Z


-->

# Ugly Browser Feature Parity

## Each: Option 2

jQuery

```javascript
$(".date").each(
  function(i, el) {
    $(el).text("Hi:" + i);
  });
```

---

Native

```javascript
var nodes = 
  document.querySelectorAll(".date"),
  els = Array.prototype.slice.call(nodes);

els.forEach(function(el, i) {
  el.innerText = "Hi:" + i;
});
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5254d952d0b5b6ad6d000022
master: content
createdAt: 2013-10-09T04:19:30.000Z
updatedAt: 2014-04-17T02:42:29.816Z


-->

# Ugly Browser Feature Parity

## Each: Option 3

jQuery

```javascript
$(".date").each(
  function(i, el) {
    $(el).text("Hi:" + i);
  });
```

---

Native

```javascript
var nodes = 
  document.querySelectorAll(".date");

[].forEach.call(nodes, function(el, i) {
  el.innerText = "Hi:" + i;
});
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5254d969d0b5b6ad6d000023
master: content
createdAt: 2013-10-09T04:19:53.000Z
updatedAt: 2014-04-17T02:42:29.816Z


-->

# Ugly Browser Feature Parity

## Each: Option 4

jQuery

```javascript
$(".date").each(
  function(i, el) {
    $(el).text("Hi:" + i);
  });
```

---

Native

```javascript
function $$(s) {
  return [].slice.call(
    document.querySelectorAll(s || "*")
  );
}

$$(".date").forEach(function(el, i) {
  el.innerText = "Hi:" + i;
});
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5254ed5cd0b5b6ad6d00002f
master: content
createdAt: 2013-10-09T05:45:00.000Z
updatedAt: 2014-04-17T02:42:29.816Z


-->

# Ugly Browser Feature Parity

## Class Manipulation

jQuery

```javascript
var widget = $("#widget");


widget.addClass("active");
widget.addClass("active dirty");
widget.removeClass("active");
widget.toggleClass("active");
widget.hasClass("active");
```

---

Native (IE9)

```javascript
var widget = document.getElementById("widget");

widget.className += " active";
widget.className = "";
widget.className = widget.className
  .replace(/\bactive\b/g, "");
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5256151cd0b5b6ad6d000091
master: content
createdAt: 2013-10-10T02:46:52.000Z
updatedAt: 2014-04-17T02:42:29.816Z


-->

# Ugly Browser Feature Parity

## Class Manipulation: Polyfill

![](https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/classList.png)

---

```javascript
var el = document.getElementById("widget");

el.classList.add("active");
el.classList.add("active", "dirty");
el.classList.remove("active");
el.classList.toggle("active");
el.classList.contains("active");
```
http://bit.ly/polyfill-classlist

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5254df3dd0b5b6ad6d000026
master: content
createdAt: 2013-10-09T04:44:45.000Z
updatedAt: 2014-04-17T02:42:29.816Z


-->

# Ugly Browser Feature Parity

## Is

jQuery

```javascript
$("#widget").is("input.date")
```

---

Native

```javascript
document.getElementById("widget")
  .matches("input.date")
```

Why is that Ugly? - http://bit.ly/element-matches

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531f6213b22f73c504000012
master: content
createdAt: 2014-03-11T19:20:51.000Z
updatedAt: 2014-04-17T02:42:29.816Z


-->

# Ugly Browser Feature Parity

## Is

jQuery

```javascript
$("#widget").is("input.date")
```

---

Native

```javascript
document.getElementById("widget")
  .matches("input.date")
```

```javascript
if (Element && !Element.prototype.matches) {
  var proto = Element.prototype;

  proto.matches = 
    proto.matchesSelector ||
    proto.mozMatchesSelector ||
    proto.msMatchesSelector ||
    proto.oMatchesSelector ||
    proto.webkitMatchesSelector;
}
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5254f087d0b5b6ad6d000039
master: content
createdAt: 2013-10-09T05:58:31.000Z
updatedAt: 2014-04-17T02:42:29.816Z


-->

# Ugly Browser Feature Parity

## Height & Width

HTML

```html
<div id="box"></div>
```

CSS

```css
#box {
  width: 200px;
  height: 200px;
  padding: 10px;
  margin: 5px;
  border: 1px solid black;
}
```

---

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5320b101d5f663c104000015
master: content
createdAt: 2014-03-12T19:09:53.000Z
updatedAt: 2014-04-17T02:42:29.816Z


-->

# Ugly Browser Feature Parity

## Height & Width

HTML

```html
<div id="box"></div>
```

CSS

```css
#box {
  width: 200px;
  height: 200px;
  padding: 10px;
  margin: 5px;
  border: 1px solid black;
}
```

---

jQuery

```javascript
var box = $("#box");

box.width();          // 200
box.innerWidth();     // 220
box.outerWidth();     // 222
box.outerWidth(true); // 232 
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5320b12487e717cd04000015
master: content
createdAt: 2014-03-12T19:10:28.000Z
updatedAt: 2014-04-17T02:42:29.816Z


-->

# Ugly Browser Feature Parity

## Height & Width

HTML

```html
<div id="box"></div>
```

CSS

```css
#box {
  width: 200px;
  height: 200px;
  padding: 10px;
  margin: 5px;
  border: 1px solid black;
}
```

---

jQuery

```javascript
var box = $("#box");

box.width();          // 200
box.innerWidth();     // 220
box.outerWidth();     // 222
box.outerWidth(true); // 232 
```


Native

```javascript
var box = document.getElementById("box");

box.clientWidth;      // 220
box.offsetWidth;      // 222
box.getBoundingClientRect().width; // 222

```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 52561677d0b5b6ad6d000094
master: full
createdAt: 2013-10-10T02:52:39.000Z
updatedAt: 2014-04-17T02:42:29.817Z


-->

# Ugly Browser Feature Parity

## Height & Width

![](https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/jquery-core-height.png)

-----

<!--

_id: 5254f173d0b5b6ad6d00003b
master: content
createdAt: 2013-10-09T06:02:27.000Z
updatedAt: 2014-04-17T02:42:29.817Z


-->

# Ugly Browser Feature Parity

## Bind & Unbind

jQuery

```javascript
$("#save").on("click",
  function() {});
```

---

Native

```javascript
document.getElementById("save")
  .addEventListener("click",  
    function() {});
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531fb09287e717cd04000010
master: content
createdAt: 2014-03-12T00:55:46.000Z
updatedAt: 2014-04-17T02:42:29.817Z


-->

# Ugly Browser Feature Parity

## Bind & Unbind

jQuery

```javascript
$("#save").on("click",
  function() {});
```
<div style="height: 15px">&nbsp;</div>
```js
$("button").on("click",
  function() {});
```

---

Native

```javascript
document.getElementById("save")
  .addEventListener("click", 
    function() {});
```

```js
var buttons = document.querySelectorAll("button"),
  callback = function() {};

[].forEach.call(buttons, 
  function(button) {
    button.addEventListener( 
      "click", callback);
  });
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5254ee8bd0b5b6ad6d000033
master: content
createdAt: 2013-10-09T05:50:03.000Z
updatedAt: 2014-04-17T02:42:29.817Z


-->

# Ugly Browser Feature Parity

## CSS: jQuery

`.css( propertyName, value )`

```javascript
var $el = $("#widget");

$el.css("color", "red");
$el.css("background-color", "blue");
$el.css("font-size", "20px");
$el.css("width", "400px");
$el.css("height", "100px");
```

---


<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531ff5ba87e717cd04000013
master: content
createdAt: 2014-03-12T05:50:50.000Z
updatedAt: 2014-04-17T02:42:29.817Z


-->

# Ugly Browser Feature Parity

## CSS: jQuery

`.css( propertyName, value )`

```javascript
var $el = $("#widget");

$el.css("color", "red");
$el.css("background-color", "blue");
$el.css("font-size", "20px");
$el.css("width", "400px");
$el.css("height", "100px");
```

---

`.css( properties )`

```javascript
var $el = $("#widget");

$el.css({
  color: "red",
  "background-color": "blue",
  fontSize: "20px",
  width: "400px",
  height: "100px"
});
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5254eef6d0b5b6ad6d000034
master: content
createdAt: 2013-10-09T05:51:50.000Z
updatedAt: 2014-04-17T02:42:29.817Z


-->

# Ugly Browser Feature Parity

## CSS: Native

dot notation

```javascript
var el = document.getElementById("widget");

el.style.color = "blue";
el.style.backgroundColor = "red";
el.style.fontSize = "20px";
el.style.width = "400px";
el.style.height = "100px";
```

---


<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531ff67fd5f663c104000013
master: content
createdAt: 2014-03-12T05:54:07.000Z
updatedAt: 2014-04-17T02:42:29.817Z


-->

# Ugly Browser Feature Parity

## CSS: Native

dot notation

```javascript
var el = document.getElementById("widget");

el.style.color = "blue";
el.style.backgroundColor = "red";
el.style.fontSize = "20px";
el.style.width = "400px";
el.style.height = "100px";
```

---

square bracket notation

```javascript
var el = document.getElementById("widget");

el.style["color"] = "blue";
el.style["backgroundColor"] = "red";
el.style["fontSize"] = "20px";
el.style["width"] = "400px";
el.style["height"] = "100px";
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5254ef23d0b5b6ad6d000035
master: content
createdAt: 2013-10-09T05:52:35.000Z
updatedAt: 2014-04-17T02:42:29.817Z


-->

# Ugly Browser Feature Parity

## updateStyle Helper Method

```javascript
var widget = document.getElementById("widget");

function updateStyle(element, styles) {
  var style = "";
  for (style in styles) {
    if (styles.hasOwnProperty(style)) { 
	  element.style[style] = styles[style];
	}
  }
}

updateStyle(widget, { 
  color: "blue",
  backgroundColor: "red", 
  fontSize: "20px" 
});
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531e766187e717cd0400000d
master: title
createdAt: 2014-03-11T02:35:13.000Z
updatedAt: 2014-04-17T02:42:29.817Z


-->

# Bad Browser Feature Parity

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5254e691d0b5b6ad6d00002b
master: content
createdAt: 2013-10-09T05:16:01.000Z
updatedAt: 2014-04-17T02:42:29.817Z


-->

# Bad Browser Feature Parity

## Closest

jQuery

```javascript
$("#dtl-123").closest("li")
```

---

Native

```javascript
var el = document.getElementById("dtl-123"),    
  found = false;

while (!found &&
  el instanceof Element) {
  found = element.matches("li");
  el = !found ? el.parentNode : el;
}
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5320bc0c87e717cd04000017
master: content
createdAt: 2014-03-12T19:57:00.000Z
updatedAt: 2014-04-17T02:42:29.817Z


-->

# Bad Browser Feature Parity

## Closest

```javascript
if (Element && !Element.prototype.closest) {
  Element.prototype.closest = function(selector, filter) {
    var node = this, found, filter = typeof filter === 'string' ? 
	  document.querySelector(filter) : filter;
		
    while (node instanceof Element && 
      !(found = node.matches(selector)) &&
      node !== filter) { node = node.parentNode; }
			
    return found ? node : null;
  };
}
```

```javascript
document.getElementById("dtl-123").closest("li");
```


<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>


-----

<!--

_id: 5254f616d0b5b6ad6d000047
master: content
createdAt: 2013-10-09T06:22:14.000Z
updatedAt: 2014-04-17T02:42:29.818Z


-->

# Bad Browser Feature Parity

## Ajax Post

jQuery

```javascript
$.post("/echo/json/", { category: "books" }, function(data) {});

$.ajax({
  type: "POST",
  url: "/echo/json/",
  data: { category: "books" },
  success: function(data) {
    //Handle data from server
  }
});
```

---
Native

```javascript
var xhr = new XMLHttpRequest();

xhr.open("POST", "/echo/json/", true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.onload = function() {
  if (this.status === 200) {
    alert(this.responseText);
  }
};
xhr.send("category=books&sort=asc");
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5254f6a2d0b5b6ad6d000048
master: content
createdAt: 2013-10-09T06:24:34.000Z
updatedAt: 2014-04-17T02:42:29.818Z


-->

# Bad Browser Feature Parity

## Ajax Post: Native - FormData

```javascript
var formData = new FormData(),
  xhr = new XMLHttpRequest();

formData.append("cat", "books");
formData.append("sort", "asc");
// ... more code ...
xhr.send(formData);
```

---

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531fe9f790afddc904000016
master: content
createdAt: 2014-03-12T05:00:39.000Z
updatedAt: 2014-04-17T02:42:29.818Z


-->

# Bad Browser Feature Parity

## Ajax Post: Native - FormData

```javascript
var formData = new FormData(),
  xhr = new XMLHttpRequest();

formData.append("cat", "books");
formData.append("sort", "asc");
// ... more code ...
xhr.send(formData);
```

```javascript
var form = 
  document.getElementById("myForm"),
  formData = new FormData(form),
  xhr = new XMLHttpRequest();
// ... more code ... 
xhr.send(formData);
```

---

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531fea0187e717cd04000012
master: content
createdAt: 2014-03-12T05:00:49.000Z
updatedAt: 2014-04-17T02:42:29.818Z


-->

# Bad Browser Feature Parity

## Ajax Post: Native - FormData

```javascript
var formData = new FormData(),
  xhr = new XMLHttpRequest();

formData.append("cat", "books");
formData.append("sort", "asc");
// ... more code ...
xhr.send(formData);
```

```javascript
var form = 
  document.getElementById("myForm"),
  formData = new FormData(form),
  xhr = new XMLHttpRequest();
// ... more code ... 
xhr.send(formData);
```

---

<img style="padding: 0; box-shadow: none;" src="https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/ajax2.png" />

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 534ddf6e8ff7bf3f6f00000d
master: content
createdAt: 2014-04-16T01:39:58.000Z
updatedAt: 2014-04-17T02:42:29.818Z


-->

# Bad Browser Feature Parity

## JSONP

jQuery

```javascript
$.ajax({
  url: "http://jsfid.../echo/jsonp",
  dataType: "jsonp",
  success: function(data) { /*..*/ }
});

$.getJSON("http://jsfiddle.net/echo/jsonp?callback=?", function(data) {
  //Handle data from server
});
```

---

Native

```javascript
function jsonpCallback(data) {
  //Handle data from server
}

var script = document.createElement("script");
script.src = "http://jsfiddle.net/echo/jsonp?callback=jsonpCallback";
document.head.appendChild(script);
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5254f7bbd0b5b6ad6d00004b
master: content
createdAt: 2013-10-09T06:29:15.000Z
updatedAt: 2014-04-17T02:42:29.818Z


-->

# Bad Browser Feature Parity

## reqwest Micro-library

```javascript
reqwest("/echo/json/", function(data) {});

reqwest({
    url: "/echo/json/",
    method: "get", success: function(data) { /* Handle data from server */ }
});

reqwest({
    url: "http://jsfiddle.net/echo/jsonp??callback=?",
    type: "jsonp", success: function(data) { /* Handle data from server */ }
});
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5320027890afddc904000017
master: content
createdAt: 2014-03-12T06:45:12.000Z
updatedAt: 2014-04-17T02:42:29.818Z


-->

# Bad Browser Feature Parity

## Others

* Deferreds (coming soon)
* Event Namespacing
* Animation (IE9)
* etc...

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531e76ced5f663c10400000f
master: content
createdAt: 2014-03-11T02:37:02.000Z
updatedAt: 2014-04-17T02:42:29.818Z


-->

# Okay, Okay, but what about jQuery's Size?

<center><iframe src="//embed.gettyimages.com/embed/113743815?et=r45-eHS_EUGWK6t4nQVXJA&sig=tQjzRGxszj06jQwia-cZ2XMLBYyylxijfJXMwzeMP8Q=" width="507" height="407" frameborder="0" scrolling="no"></iframe></center>

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531e76e9b22f73c50400000e
master: content
createdAt: 2014-03-11T02:37:29.000Z
updatedAt: 2014-04-17T02:42:29.818Z


-->

# Performance

## jQuery's Size

* 239K source code
* <span style="width: 20px; display: inline-block;"></span>82K minified
* <span style="width: 20px; display: inline-block;"></span>71K gzipped

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531fd7f887e717cd04000011
master: content
createdAt: 2014-03-12T03:43:52.000Z
updatedAt: 2014-04-17T02:42:29.819Z


-->

# Performance

## jQuery's Size

* 239K source code
* <span style="width: 20px; display: inline-block;"></span>82K minified
* <span style="width: 20px; display: inline-block;"></span>71K gzipped

---

## Other Considerations

* Are you using a CDN? (Google, etc...)
* Are you minifying/combining your other scripts?
* Are you minifying your images & markup?

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5226511744439c240800005d
master: content
createdAt: 2013-09-03T21:13:59.000Z
updatedAt: 2014-04-17T02:42:29.819Z


-->

# Custom Build of jQuery

## Building jQuery Master From Source

As of jQuery 1.8 You Can Create Custom Builds 


```
> git clone git://github.com/jquery/jquery.git

> npm install -g grunt-cli bower

> grunt -version && bowser -version

> cd jquery && npm install

> grunt
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 52523705d1a98b157c0000f2
master: content
createdAt: 2013-10-07T04:22:29.000Z
updatedAt: 2014-04-17T02:42:29.819Z


-->

# Custom Build of jQuery

## jQuery Modules

* ajax (xhr/script/jsonp)
* css
* deprecated
* dimensions
* effects
* event (alias)

---

* offset
* wrap
* core/ready
* deferred
* exports (global/amd)
* sizzle
	* Uses querySelectorAll instead

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5252378fd1a98b157c0000f3
master: content
createdAt: 2013-10-07T04:24:47.000Z
updatedAt: 2014-04-17T02:42:29.819Z


-->

# Custom Build of jQuery

## Remove Modules

Master
```
> grunt custom:-ajax,-css,-deprecated,-dimensions,-effects,-event/alias,-offset,-wrap
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531f6a6fd5f663c104000010
master: content
createdAt: 2014-03-11T19:56:31.000Z
updatedAt: 2014-04-17T02:42:29.819Z


-->

# Custom Build of jQuery

## Remove Modules

Master
```
> grunt custom:-ajax,-css,-deprecated,-dimensions,-effects,-event/alias,-offset,-wrap
```

Version 2.0.3

```
> git checkout tags/2.0.3
> npm install
> grunt
> grunt custom:-ajax,-css,-deprecated,-dimensions,-effects,-event-alias,-offset,-wrap,-sizzle
```

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5226515e44439c240800005e
master: full
createdAt: 2013-09-03T21:15:10.000Z
updatedAt: 2014-04-17T02:42:29.819Z


-->

# http://bit.ly/jquery-builder

[![Unofficial jQuery Builder](https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/unofficial-jquery-builder.png)](http://projects.jga.me/jquery-builder/)

-----

<!--

_id: 5252381fd1a98b157c0000f5
master: content
createdAt: 2013-10-07T04:27:11.000Z
updatedAt: 2014-04-17T02:42:29.819Z


-->

# What About jQuery Alternatives?

* [Zepto.js](http://zeptojs.com) by Thomas Fuchs
  * v1.1.3 – 9.2k gzipped & Largely jQuery-compatible API
  * IE10+ Support
  * Zurb (Foundation 5) replaced Zepto.js with jQuery 2 http://bit.ly/zurb-drop-zepto
	* Industry acceptance, Documentation, Support, **Speed**
	<!-- http://zurb.com/article/1293/why-we-dropped-zepto -->
* [Min.js](https://github.com/remy/min.js) by Remy Sharp
  * Very minimalistic & jQuery-like API
  * ~60 lines of code with comments


<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531fda77d5f663c104000012
master: content
createdAt: 2014-03-12T03:54:31.000Z
updatedAt: 2014-04-17T02:42:29.819Z


-->

# Summary of jQuery-free JavaScript

## Cross-Browser Bugs, Polyfills, & Helper Methods

* Cross-Browser Bugs
* Polyfills
	* classList
	* dataSet
	* matches
	* ...
	
---

* Helper Methods
    * $$ (querySelectorAll to Array)
	* closest
	* reqwest
	* ...

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531e79c2b22f73c50400000f
master: content
createdAt: 2014-03-11T02:49:38.000Z
updatedAt: 2014-04-17T02:42:29.819Z


-->

# So, What Do I Recommend?

## Questions

* Do you want to focus on functionality instead of cross-browser compatibility?
* Do you want to build off of the work of giants before you?
* Do you want a terse and clean API?
* Do you want a library that has lots of support and usage?

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531e99a887e717cd0400000e
master: focus
createdAt: 2014-03-11T05:05:44.000Z
updatedAt: 2014-04-17T02:42:29.819Z


-->

# What I Recommend

## Unless you have a really good reason...

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531fd9beb22f73c504000013
master: focus
createdAt: 2014-03-12T03:51:26.000Z
updatedAt: 2014-04-17T02:42:29.820Z


-->

# What I Recommend

## Unless you have a really good reason...

<h1 class="catchadream" style='line-height: 1.3em; color: white; text-shadow: 4px 4px 2px black;'><div id="use-jquery">Use jQuery</div></h1>
<script>
$(".slide-72 #use-jquery").addClass("animated pulse");
</script>

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531e99cf87e717cd0400000f
master: content
createdAt: 2014-03-11T05:06:23.000Z
updatedAt: 2014-04-17T02:42:29.820Z


-->

# What If I Choose Otherwise?

## That's okay as long as...

* You and your team have sufficient cross-browser knowledge
* You and your team are able to fix cross-browser bugs
* Your code has sufficient cross-browser tests coverage
* Your browsers all [Cut the Mustard](http://manor.im/cutting-the-mustard)

OR

* You're using a framework that has abstractions, cross-browser tests, & a large community (AngularJS, etc)

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5255ffd2d0b5b6ad6d00008d
master: focus
createdAt: 2013-10-10T01:16:02.000Z
updatedAt: 2014-04-17T02:42:29.820Z


-->

# Questions?

<pre style="text-align: left; font-size: 1.25em;"><a href="http://elijahmanor.com]" style="margin-left: 200px; color: #555; border-bottom: none;">http://elijahmanor.com</a>
      <a href="http://twitter.com/elijahmanor" style="margin-left: 200px; border-bottom: none; color: #555;">@elijahmanor</a>
       </pre>

<pre><span style="text-transform: lowercase;font-size: 1.25em;">Slides: <a style="text-decoration: none; border-bottom: none;" href="http://bit.ly/jqfreejs-60">http://bit.ly/jqfreejs-60</a></span></pre>

<script>
$(".presentation-title").html("jQuery-free JavaScript");
</script>