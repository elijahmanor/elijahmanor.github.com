<!--

.slide h1 a { color: white; }
.slide-14, .slide-15, .slide-16, .slide-18 { background-color: white; }

.slide-24 .column-1 { width: 40% !important; }
.slide-24 .column-2 { width: 60% !important; }

.slide-30 .column-1 { width: 40% !important; }
.slide-30 .column-2 { width: 60% !important; }
.slide-31 .column-1 { width: 40% !important; }
.slide-31 .column-2 { width: 60% !important; }
.slide-32 .column-1 { width: 40% !important; }
.slide-32 .column-2 { width: 60% !important; }
.slide-33 .column-1 { width: 40% !important; }
.slide-33 .column-2 { width: 60% !important; }
.slide-34 .column-1 { width: 40% !important; }
.slide-34 .column-2 { width: 60% !important; }
.slide-35 .column-1 { width: 40% !important; }
.slide-35 .column-2 { width: 60% !important; }

.slide-40 .column-1 { width: 40% !important; }
.slide-40 .column-2 { width: 60% !important; }
.slide-41 .column-1 { width: 40% !important; }
.slide-41 .column-2 { width: 60% !important; }
.slide-42 .column-1 { width: 40% !important; }
.slide-42 .column-2 { width: 60% !important; }

.slide-52 .column-1 { width: 40% !important; }
.slide-52 .column-2 { width: 60% !important; }


#use-jquery {
  -webkit-animation-duration: 3s;
  -webkit-animation-delay: 2s;
  -webkit-animation-iteration-count: infinite;
}


/*
 * CSS animated rainbow dividers of awesome 
 * by Chris Heilmann @codepo8 and Lea Verou @leaverou 
**/
@-moz-keyframes charlieeee {
  from { background-position:top left; } 
  to {background-position:top right; }
}
@-webkit-keyframes charlieeee { 
  from { background-position:top left; }  
  to { background-position:top right; }  
}
@-o-keyframes charlieeee { 
  from { background-position:top left; }  
  to { background-position:top right; }  
}
@-ms-keyframes charlieeee { 
  from { background-position:top left; }  
  to { background-position:top right; }  
}
@-khtml-keyframes charlieeee { 
  from { background-position:top left; }  
  to { background-position:top right; }  
}
@keyframes charlieeee { 
  from { background-position:top left; }  
  to { background-position:top right; }  
}
.catchadream{
  background-image:-webkit-linear-gradient( left, red, orange, yellow, green,
                                          blue, indigo, violet, indigo, blue,
                                          green, yellow, orange, red );
  background-image:-moz-linear-gradient( left, red, orange, yellow, green,
                                         blue,indigo, violet, indigo, blue,
                                         green, yellow, orange,red );
  background-image:-o-linear-gradient( left, red, orange, yellow, green,
                                         blue,indigo, violet, indigo, blue,
                                         green, yellow, orange,red );
  background-image:-ms-linear-gradient( left, red, orange, yellow, green,
                                         blue,indigo, violet, indigo, blue,
                                         green, yellow, orange,red );
  background-image:-khtml-linear-gradient( left, red, orange, yellow, green,
                                         blue,indigo, violet, indigo, blue,
                                         green, yellow, orange,red );
  background-image:linear-gradient( left, red, orange, yellow, green,
                                         blue,indigo, violet, indigo, blue,
                                         green, yellow, orange,red );
  -moz-animation:charlieeee 2.5s forwards linear infinite;
  -webkit-animation:charlieeee 2.5s forwards linear infinite;
  -o-animation:charlieeee 2.5s forwards linear infinite;
  -khtml-animation:charlieeee 2.5s forwards linear infinite;
  -ms-animation:charlieeee 2.5s forwards linear infinite;
  -lynx-animation:charlieeee 2.5s forwards linear infinite;
  animation:charlieeee 2.5s forwards linear infinite;
  background-size:50% auto;
}

@charset "UTF-8";

/*!
Animate.css - http://daneden.me/animate
Licensed under the MIT license

Copyright (c) 2013 Daniel Eden

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.hinge {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}

@-webkit-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  60% {
    -webkit-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

.bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
}

@-webkit-keyframes flash {
  0%, 50%, 100% {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
}

@keyframes flash {
  0%, 50%, 100% {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
}

.flash {
  -webkit-animation-name: flash;
  animation-name: flash;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  100% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
}

.pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
}

@-webkit-keyframes rubberBand {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  30% {
    -webkit-transform: scaleX(1.25) scaleY(0.75);
    transform: scaleX(1.25) scaleY(0.75);
  }

  40% {
    -webkit-transform: scaleX(0.75) scaleY(1.25);
    transform: scaleX(0.75) scaleY(1.25);
  }

  60% {
    -webkit-transform: scaleX(1.15) scaleY(0.85);
    transform: scaleX(1.15) scaleY(0.85);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes rubberBand {
  0% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  30% {
    -webkit-transform: scaleX(1.25) scaleY(0.75);
    -ms-transform: scaleX(1.25) scaleY(0.75);
    transform: scaleX(1.25) scaleY(0.75);
  }

  40% {
    -webkit-transform: scaleX(0.75) scaleY(1.25);
    -ms-transform: scaleX(0.75) scaleY(1.25);
    transform: scaleX(0.75) scaleY(1.25);
  }

  60% {
    -webkit-transform: scaleX(1.15) scaleY(0.85);
    -ms-transform: scaleX(1.15) scaleY(0.85);
    transform: scaleX(1.15) scaleY(0.85);
  }

  100% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
}

.rubberBand {
  -webkit-animation-name: rubberBand;
  animation-name: rubberBand;
}

@-webkit-keyframes shake {
  0%, 100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
}

@keyframes shake {
  0%, 100% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translateX(-10px);
    -ms-transform: translateX(-10px);
    transform: translateX(-10px);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translateX(10px);
    -ms-transform: translateX(10px);
    transform: translateX(10px);
  }
}

.shake {
  -webkit-animation-name: shake;
  animation-name: shake;
}

@-webkit-keyframes swing {
  20% {
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  40% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  60% {
    -webkit-transform: rotate(5deg);
    transform: rotate(5deg);
  }

  80% {
    -webkit-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }

  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@keyframes swing {
  20% {
    -webkit-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  40% {
    -webkit-transform: rotate(-10deg);
    -ms-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  60% {
    -webkit-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    transform: rotate(5deg);
  }

  80% {
    -webkit-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }

  100% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

.swing {
  -webkit-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
  -webkit-animation-name: swing;
  animation-name: swing;
}

@-webkit-keyframes tada {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  10%, 20% {
    -webkit-transform: scale(0.9) rotate(-3deg);
    transform: scale(0.9) rotate(-3deg);
  }

  30%, 50%, 70%, 90% {
    -webkit-transform: scale(1.1) rotate(3deg);
    transform: scale(1.1) rotate(3deg);
  }

  40%, 60%, 80% {
    -webkit-transform: scale(1.1) rotate(-3deg);
    transform: scale(1.1) rotate(-3deg);
  }

  100% {
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}

@keyframes tada {
  0% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  10%, 20% {
    -webkit-transform: scale(0.9) rotate(-3deg);
    -ms-transform: scale(0.9) rotate(-3deg);
    transform: scale(0.9) rotate(-3deg);
  }

  30%, 50%, 70%, 90% {
    -webkit-transform: scale(1.1) rotate(3deg);
    -ms-transform: scale(1.1) rotate(3deg);
    transform: scale(1.1) rotate(3deg);
  }

  40%, 60%, 80% {
    -webkit-transform: scale(1.1) rotate(-3deg);
    -ms-transform: scale(1.1) rotate(-3deg);
    transform: scale(1.1) rotate(-3deg);
  }

  100% {
    -webkit-transform: scale(1) rotate(0);
    -ms-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}

.tada {
  -webkit-animation-name: tada;
  animation-name: tada;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes wobble {
  0% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }

  15% {
    -webkit-transform: translateX(-25%) rotate(-5deg);
    transform: translateX(-25%) rotate(-5deg);
  }

  30% {
    -webkit-transform: translateX(20%) rotate(3deg);
    transform: translateX(20%) rotate(3deg);
  }

  45% {
    -webkit-transform: translateX(-15%) rotate(-3deg);
    transform: translateX(-15%) rotate(-3deg);
  }

  60% {
    -webkit-transform: translateX(10%) rotate(2deg);
    transform: translateX(10%) rotate(2deg);
  }

  75% {
    -webkit-transform: translateX(-5%) rotate(-1deg);
    transform: translateX(-5%) rotate(-1deg);
  }

  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}

@keyframes wobble {
  0% {
    -webkit-transform: translateX(0%);
    -ms-transform: translateX(0%);
    transform: translateX(0%);
  }

  15% {
    -webkit-transform: translateX(-25%) rotate(-5deg);
    -ms-transform: translateX(-25%) rotate(-5deg);
    transform: translateX(-25%) rotate(-5deg);
  }

  30% {
    -webkit-transform: translateX(20%) rotate(3deg);
    -ms-transform: translateX(20%) rotate(3deg);
    transform: translateX(20%) rotate(3deg);
  }

  45% {
    -webkit-transform: translateX(-15%) rotate(-3deg);
    -ms-transform: translateX(-15%) rotate(-3deg);
    transform: translateX(-15%) rotate(-3deg);
  }

  60% {
    -webkit-transform: translateX(10%) rotate(2deg);
    -ms-transform: translateX(10%) rotate(2deg);
    transform: translateX(10%) rotate(2deg);
  }

  75% {
    -webkit-transform: translateX(-5%) rotate(-1deg);
    -ms-transform: translateX(-5%) rotate(-1deg);
    transform: translateX(-5%) rotate(-1deg);
  }

  100% {
    -webkit-transform: translateX(0%);
    -ms-transform: translateX(0%);
    transform: translateX(0%);
  }
}

.wobble {
  -webkit-animation-name: wobble;
  animation-name: wobble;
}

@-webkit-keyframes bounceIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(.3);
    transform: scale(.3);
  }

  50% {
    opacity: 1;
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }

  70% {
    -webkit-transform: scale(.9);
    transform: scale(.9);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(.3);
    -ms-transform: scale(.3);
    transform: scale(.3);
  }

  50% {
    opacity: 1;
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }

  70% {
    -webkit-transform: scale(.9);
    -ms-transform: scale(.9);
    transform: scale(.9);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
}

.bounceIn {
  -webkit-animation-name: bounceIn;
  animation-name: bounceIn;
}

@-webkit-keyframes bounceInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
  }

  80% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes bounceInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateY(30px);
    -ms-transform: translateY(30px);
    transform: translateY(30px);
  }

  80% {
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
  }

  100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.bounceInDown {
  -webkit-animation-name: bounceInDown;
  animation-name: bounceInDown;
}

@-webkit-keyframes bounceInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateX(30px);
    transform: translateX(30px);
  }

  80% {
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes bounceInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateX(30px);
    -ms-transform: translateX(30px);
    transform: translateX(30px);
  }

  80% {
    -webkit-transform: translateX(-10px);
    -ms-transform: translateX(-10px);
    transform: translateX(-10px);
  }

  100% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.bounceInLeft {
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
}

@-webkit-keyframes bounceInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    transform: translateX(2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateX(-30px);
    transform: translateX(-30px);
  }

  80% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes bounceInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    transform: translateX(2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateX(-30px);
    -ms-transform: translateX(-30px);
    transform: translateX(-30px);
  }

  80% {
    -webkit-transform: translateX(10px);
    -ms-transform: translateX(10px);
    transform: translateX(10px);
  }

  100% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.bounceInRight {
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight;
}

@-webkit-keyframes bounceInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    transform: translateY(2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  80% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes bounceInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    transform: translateY(2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  80% {
    -webkit-transform: translateY(10px);
    -ms-transform: translateY(10px);
    transform: translateY(10px);
  }

  100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.bounceInUp {
  -webkit-animation-name: bounceInUp;
  animation-name: bounceInUp;
}

@-webkit-keyframes bounceOut {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  25% {
    -webkit-transform: scale(.95);
    transform: scale(.95);
  }

  50% {
    opacity: 1;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(.3);
    transform: scale(.3);
  }
}

@keyframes bounceOut {
  0% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  25% {
    -webkit-transform: scale(.95);
    -ms-transform: scale(.95);
    transform: scale(.95);
  }

  50% {
    opacity: 1;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(.3);
    -ms-transform: scale(.3);
    transform: scale(.3);
  }
}

.bounceOut {
  -webkit-animation-name: bounceOut;
  animation-name: bounceOut;
}

@-webkit-keyframes bounceOutDown {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}

@keyframes bounceOutDown {
  0% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    transform: translateY(-20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}

.bounceOutDown {
  -webkit-animation-name: bounceOutDown;
  animation-name: bounceOutDown;
}

@-webkit-keyframes bounceOutLeft {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}

@keyframes bounceOutLeft {
  0% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}

.bounceOutLeft {
  -webkit-animation-name: bounceOutLeft;
  animation-name: bounceOutLeft;
}

@-webkit-keyframes bounceOutRight {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}

@keyframes bounceOutRight {
  0% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    transform: translateX(-20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}

.bounceOutRight {
  -webkit-animation-name: bounceOutRight;
  animation-name: bounceOutRight;
}

@-webkit-keyframes bounceOutUp {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}

@keyframes bounceOutUp {
  0% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}

.bounceOutUp {
  -webkit-animation-name: bounceOutUp;
  animation-name: bounceOutUp;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}

@-webkit-keyframes fadeInDownBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes fadeInDownBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.fadeInDownBig {
  -webkit-animation-name: fadeInDownBig;
  animation-name: fadeInDownBig;
}

@-webkit-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    transform: translateX(-20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}

@-webkit-keyframes fadeInLeftBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes fadeInLeftBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.fadeInLeftBig {
  -webkit-animation-name: fadeInLeftBig;
  animation-name: fadeInLeftBig;
}

@-webkit-keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

@-webkit-keyframes fadeInRightBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    transform: translateX(2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes fadeInRightBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    transform: translateX(2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.fadeInRightBig {
  -webkit-animation-name: fadeInRightBig;
  animation-name: fadeInRightBig;
}

@-webkit-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

@-webkit-keyframes fadeInUpBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    transform: translateY(2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes fadeInUpBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    transform: translateY(2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.fadeInUpBig {
  -webkit-animation-name: fadeInUpBig;
  animation-name: fadeInUpBig;
}

@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

@-webkit-keyframes fadeOutDown {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }
}

@keyframes fadeOutDown {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
  }
}

.fadeOutDown {
  -webkit-animation-name: fadeOutDown;
  animation-name: fadeOutDown;
}

@-webkit-keyframes fadeOutDownBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}

@keyframes fadeOutDownBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}

.fadeOutDownBig {
  -webkit-animation-name: fadeOutDownBig;
  animation-name: fadeOutDownBig;
}

@-webkit-keyframes fadeOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
  }
}

@keyframes fadeOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    transform: translateX(-20px);
  }
}

.fadeOutLeft {
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}

@-webkit-keyframes fadeOutLeftBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}

@keyframes fadeOutLeftBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}

.fadeOutLeftBig {
  -webkit-animation-name: fadeOutLeftBig;
  animation-name: fadeOutLeftBig;
}

@-webkit-keyframes fadeOutRight {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }
}

@keyframes fadeOutRight {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
}

.fadeOutRight {
  -webkit-animation-name: fadeOutRight;
  animation-name: fadeOutRight;
}

@-webkit-keyframes fadeOutRightBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}

@keyframes fadeOutRightBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}

.fadeOutRightBig {
  -webkit-animation-name: fadeOutRightBig;
  animation-name: fadeOutRightBig;
}

@-webkit-keyframes fadeOutUp {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}

@keyframes fadeOutUp {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}

.fadeOutUp {
  -webkit-animation-name: fadeOutUp;
  animation-name: fadeOutUp;
}

@-webkit-keyframes fadeOutUpBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}

@keyframes fadeOutUpBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}

.fadeOutUpBig {
  -webkit-animation-name: fadeOutUpBig;
  animation-name: fadeOutUpBig;
}

@-webkit-keyframes flip {
  0% {
    -webkit-transform: perspective(400px) translateZ(0) rotateY(0) scale(1);
    transform: perspective(400px) translateZ(0) rotateY(0) scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);
    transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);
    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  100% {
    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);
    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}

@keyframes flip {
  0% {
    -webkit-transform: perspective(400px) translateZ(0) rotateY(0) scale(1);
    -ms-transform: perspective(400px) translateZ(0) rotateY(0) scale(1);
    transform: perspective(400px) translateZ(0) rotateY(0) scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);
    -ms-transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);
    transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -ms-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);
    -ms-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);
    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  100% {
    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);
    -ms-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);
    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}

.animated.flip {
  -webkit-backface-visibility: visible;
  -ms-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation-name: flip;
  animation-name: flip;
}

@-webkit-keyframes flipInX {
  0% {
    -webkit-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotateX(-10deg);
    transform: perspective(400px) rotateX(-10deg);
  }

  70% {
    -webkit-transform: perspective(400px) rotateX(10deg);
    transform: perspective(400px) rotateX(10deg);
  }

  100% {
    -webkit-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }
}

@keyframes flipInX {
  0% {
    -webkit-transform: perspective(400px) rotateX(90deg);
    -ms-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotateX(-10deg);
    -ms-transform: perspective(400px) rotateX(-10deg);
    transform: perspective(400px) rotateX(-10deg);
  }

  70% {
    -webkit-transform: perspective(400px) rotateX(10deg);
    -ms-transform: perspective(400px) rotateX(10deg);
    transform: perspective(400px) rotateX(10deg);
  }

  100% {
    -webkit-transform: perspective(400px) rotateX(0deg);
    -ms-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }
}

.flipInX {
  -webkit-backface-visibility: visible !important;
  -ms-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInX;
  animation-name: flipInX;
}

@-webkit-keyframes flipInY {
  0% {
    -webkit-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotateY(-10deg);
    transform: perspective(400px) rotateY(-10deg);
  }

  70% {
    -webkit-transform: perspective(400px) rotateY(10deg);
    transform: perspective(400px) rotateY(10deg);
  }

  100% {
    -webkit-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
}

@keyframes flipInY {
  0% {
    -webkit-transform: perspective(400px) rotateY(90deg);
    -ms-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotateY(-10deg);
    -ms-transform: perspective(400px) rotateY(-10deg);
    transform: perspective(400px) rotateY(-10deg);
  }

  70% {
    -webkit-transform: perspective(400px) rotateY(10deg);
    -ms-transform: perspective(400px) rotateY(10deg);
    transform: perspective(400px) rotateY(10deg);
  }

  100% {
    -webkit-transform: perspective(400px) rotateY(0deg);
    -ms-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
}

.flipInY {
  -webkit-backface-visibility: visible !important;
  -ms-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInY;
  animation-name: flipInY;
}

@-webkit-keyframes flipOutX {
  0% {
    -webkit-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
}

@keyframes flipOutX {
  0% {
    -webkit-transform: perspective(400px) rotateX(0deg);
    -ms-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(400px) rotateX(90deg);
    -ms-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
}

.flipOutX {
  -webkit-animation-name: flipOutX;
  animation-name: flipOutX;
  -webkit-backface-visibility: visible !important;
  -ms-backface-visibility: visible !important;
  backface-visibility: visible !important;
}

@-webkit-keyframes flipOutY {
  0% {
    -webkit-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
}

@keyframes flipOutY {
  0% {
    -webkit-transform: perspective(400px) rotateY(0deg);
    -ms-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(400px) rotateY(90deg);
    -ms-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
}

.flipOutY {
  -webkit-backface-visibility: visible !important;
  -ms-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipOutY;
  animation-name: flipOutY;
}

@-webkit-keyframes lightSpeedIn {
  0% {
    -webkit-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: translateX(-20%) skewX(30deg);
    transform: translateX(-20%) skewX(30deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: translateX(0%) skewX(-15deg);
    transform: translateX(0%) skewX(-15deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
    opacity: 1;
  }
}

@keyframes lightSpeedIn {
  0% {
    -webkit-transform: translateX(100%) skewX(-30deg);
    -ms-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: translateX(-20%) skewX(30deg);
    -ms-transform: translateX(-20%) skewX(30deg);
    transform: translateX(-20%) skewX(30deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: translateX(0%) skewX(-15deg);
    -ms-transform: translateX(0%) skewX(-15deg);
    transform: translateX(0%) skewX(-15deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(0%) skewX(0deg);
    -ms-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
    opacity: 1;
  }
}

.lightSpeedIn {
  -webkit-animation-name: lightSpeedIn;
  animation-name: lightSpeedIn;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}

@-webkit-keyframes lightSpeedOut {
  0% {
    -webkit-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
    opacity: 0;
  }
}

@keyframes lightSpeedOut {
  0% {
    -webkit-transform: translateX(0%) skewX(0deg);
    -ms-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(100%) skewX(-30deg);
    -ms-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
    opacity: 0;
  }
}

.lightSpeedOut {
  -webkit-animation-name: lightSpeedOut;
  animation-name: lightSpeedOut;
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
}

@-webkit-keyframes rotateIn {
  0% {
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(-200deg);
    transform: rotate(-200deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

@keyframes rotateIn {
  0% {
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(-200deg);
    -ms-transform: rotate(-200deg);
    transform: rotate(-200deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

.rotateIn {
  -webkit-animation-name: rotateIn;
  animation-name: rotateIn;
}

@-webkit-keyframes rotateInDownLeft {
  0% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

@keyframes rotateInDownLeft {
  0% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

.rotateInDownLeft {
  -webkit-animation-name: rotateInDownLeft;
  animation-name: rotateInDownLeft;
}

@-webkit-keyframes rotateInDownRight {
  0% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

@keyframes rotateInDownRight {
  0% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

.rotateInDownRight {
  -webkit-animation-name: rotateInDownRight;
  animation-name: rotateInDownRight;
}

@-webkit-keyframes rotateInUpLeft {
  0% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

@keyframes rotateInUpLeft {
  0% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

.rotateInUpLeft {
  -webkit-animation-name: rotateInUpLeft;
  animation-name: rotateInUpLeft;
}

@-webkit-keyframes rotateInUpRight {
  0% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

@keyframes rotateInUpRight {
  0% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

.rotateInUpRight {
  -webkit-animation-name: rotateInUpRight;
  animation-name: rotateInUpRight;
}

@-webkit-keyframes rotateOut {
  0% {
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(200deg);
    transform: rotate(200deg);
    opacity: 0;
  }
}

@keyframes rotateOut {
  0% {
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(200deg);
    -ms-transform: rotate(200deg);
    transform: rotate(200deg);
    opacity: 0;
  }
}

.rotateOut {
  -webkit-animation-name: rotateOut;
  animation-name: rotateOut;
}

@-webkit-keyframes rotateOutDownLeft {
  0% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }
}

@keyframes rotateOutDownLeft {
  0% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }
}

.rotateOutDownLeft {
  -webkit-animation-name: rotateOutDownLeft;
  animation-name: rotateOutDownLeft;
}

@-webkit-keyframes rotateOutDownRight {
  0% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }
}

@keyframes rotateOutDownRight {
  0% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }
}

.rotateOutDownRight {
  -webkit-animation-name: rotateOutDownRight;
  animation-name: rotateOutDownRight;
}

@-webkit-keyframes rotateOutUpLeft {
  0% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }
}

@keyframes rotateOutUpLeft {
  0% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }
}

.rotateOutUpLeft {
  -webkit-animation-name: rotateOutUpLeft;
  animation-name: rotateOutUpLeft;
}

@-webkit-keyframes rotateOutUpRight {
  0% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }
}

@keyframes rotateOutUpRight {
  0% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }
}

.rotateOutUpRight {
  -webkit-animation-name: rotateOutUpRight;
  animation-name: rotateOutUpRight;
}

@-webkit-keyframes slideInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes slideInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }

  100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
}

@-webkit-keyframes slideInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes slideInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }

  100% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.slideInLeft {
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
}

@-webkit-keyframes slideInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    transform: translateX(2000px);
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    transform: translateX(2000px);
  }

  100% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.slideInRight {
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
}

@-webkit-keyframes slideOutLeft {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}

@keyframes slideOutLeft {
  0% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}

.slideOutLeft {
  -webkit-animation-name: slideOutLeft;
  animation-name: slideOutLeft;
}

@-webkit-keyframes slideOutRight {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}

@keyframes slideOutRight {
  0% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}

.slideOutRight {
  -webkit-animation-name: slideOutRight;
  animation-name: slideOutRight;
}

@-webkit-keyframes slideOutUp {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}

@keyframes slideOutUp {
  0% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}

.slideOutUp {
  -webkit-animation-name: slideOutUp;
  animation-name: slideOutUp;
}

@-webkit-keyframes hinge {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%, 60% {
    -webkit-transform: rotate(80deg);
    transform: rotate(80deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40% {
    -webkit-transform: rotate(60deg);
    transform: rotate(60deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  80% {
    -webkit-transform: rotate(60deg) translateY(0);
    transform: rotate(60deg) translateY(0);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  100% {
    -webkit-transform: translateY(700px);
    transform: translateY(700px);
    opacity: 0;
  }
}

@keyframes hinge {
  0% {
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%, 60% {
    -webkit-transform: rotate(80deg);
    -ms-transform: rotate(80deg);
    transform: rotate(80deg);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40% {
    -webkit-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    transform: rotate(60deg);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  80% {
    -webkit-transform: rotate(60deg) translateY(0);
    -ms-transform: rotate(60deg) translateY(0);
    transform: rotate(60deg) translateY(0);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  100% {
    -webkit-transform: translateY(700px);
    -ms-transform: translateY(700px);
    transform: translateY(700px);
    opacity: 0;
  }
}

.hinge {
  -webkit-animation-name: hinge;
  animation-name: hinge;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes rollIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100%) rotate(-120deg);
    transform: translateX(-100%) rotate(-120deg);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }
}

@keyframes rollIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100%) rotate(-120deg);
    -ms-transform: translateX(-100%) rotate(-120deg);
    transform: translateX(-100%) rotate(-120deg);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    -ms-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }
}

.rollIn {
  -webkit-animation-name: rollIn;
  animation-name: rollIn;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes rollOut {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(100%) rotate(120deg);
    transform: translateX(100%) rotate(120deg);
  }
}

@keyframes rollOut {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    -ms-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(100%) rotate(120deg);
    -ms-transform: translateX(100%) rotate(120deg);
    transform: translateX(100%) rotate(120deg);
  }
}

.rollOut {
  -webkit-animation-name: rollOut;
  animation-name: rollOut;
}


account_name: elijahmanor
account_slug: elijahmanor
account: 51dc7b400a79df571c000003
title: "jQuery-free JavaScript: 30 mins"
slug: jquery-free-javascript
slideCount: 83
description: "Many of us started using jQuery because it ironed out many cross-browser issues, it was easy to use, and had a consistent API. However, web browsers these days continue to get better and are following web standards much more closely. Do we still need jQuery? Has it become a crutch? Can we get away with dropping jQuery as a dependency and use native browser APIs instead? In this session we will explain when it is appropriate to use jQuery and when you might be able to go without it. If you do need jQuery then we will look at how you can make a custom build that only includes the parts you need. For the majority of this session we will be looking at common jQuery snippets and show how to convert them either using native browser APIs or utilizing popular micro-libraries."
createdAt: 2014-03-10T16:31:03.000Z
published: true
private: false
themeVariation: default
theme: basic/2
themeCSS: ".slide h1 a { color: white; }\n.slide-14, .slide-15, .slide-16, .slide-18 { background-color: white; }\n\n.slide-24 .column-1 { width: 40% !important; }\n.slide-24 .column-2 { width: 60% !important; }\n\n.slide-30 .column-1 { width: 40% !important; }\n.slide-30 .column-2 { width: 60% !important; }\n.slide-31 .column-1 { width: 40% !important; }\n.slide-31 .column-2 { width: 60% !important; }\n.slide-32 .column-1 { width: 40% !important; }\n.slide-32 .column-2 { width: 60% !important; }\n.slide-33 .column-1 { width: 40% !important; }\n.slide-33 .column-2 { width: 60% !important; }\n.slide-34 .column-1 { width: 40% !important; }\n.slide-34 .column-2 { width: 60% !important; }\n.slide-35 .column-1 { width: 40% !important; }\n.slide-35 .column-2 { width: 60% !important; }\n\n.slide-40 .column-1 { width: 40% !important; }\n.slide-40 .column-2 { width: 60% !important; }\n.slide-41 .column-1 { width: 40% !important; }\n.slide-41 .column-2 { width: 60% !important; }\n.slide-42 .column-1 { width: 40% !important; }\n.slide-42 .column-2 { width: 60% !important; }\n\n.slide-52 .column-1 { width: 40% !important; }\n.slide-52 .column-2 { width: 60% !important; }\n\n\n#use-jquery {\n  -webkit-animation-duration: 3s;\n  -webkit-animation-delay: 2s;\n  -webkit-animation-iteration-count: infinite;\n}\n\n\n/*\n * CSS animated rainbow dividers of awesome \n * by Chris Heilmann @codepo8 and Lea Verou @leaverou \n**/\n@-moz-keyframes charlieeee {\n  from { background-position:top left; } \n  to {background-position:top right; }\n}\n@-webkit-keyframes charlieeee { \n  from { background-position:top left; }  \n  to { background-position:top right; }  \n}\n@-o-keyframes charlieeee { \n  from { background-position:top left; }  \n  to { background-position:top right; }  \n}\n@-ms-keyframes charlieeee { \n  from { background-position:top left; }  \n  to { background-position:top right; }  \n}\n@-khtml-keyframes charlieeee { \n  from { background-position:top left; }  \n  to { background-position:top right; }  \n}\n@keyframes charlieeee { \n  from { background-position:top left; }  \n  to { background-position:top right; }  \n}\n.catchadream{\n  background-image:-webkit-linear-gradient( left, red, orange, yellow, green,\n                                          blue, indigo, violet, indigo, blue,\n                                          green, yellow, orange, red );\n  background-image:-moz-linear-gradient( left, red, orange, yellow, green,\n                                         blue,indigo, violet, indigo, blue,\n                                         green, yellow, orange,red );\n  background-image:-o-linear-gradient( left, red, orange, yellow, green,\n                                         blue,indigo, violet, indigo, blue,\n                                         green, yellow, orange,red );\n  background-image:-ms-linear-gradient( left, red, orange, yellow, green,\n                                         blue,indigo, violet, indigo, blue,\n                                         green, yellow, orange,red );\n  background-image:-khtml-linear-gradient( left, red, orange, yellow, green,\n                                         blue,indigo, violet, indigo, blue,\n                                         green, yellow, orange,red );\n  background-image:linear-gradient( left, red, orange, yellow, green,\n                                         blue,indigo, violet, indigo, blue,\n                                         green, yellow, orange,red );\n  -moz-animation:charlieeee 2.5s forwards linear infinite;\n  -webkit-animation:charlieeee 2.5s forwards linear infinite;\n  -o-animation:charlieeee 2.5s forwards linear infinite;\n  -khtml-animation:charlieeee 2.5s forwards linear infinite;\n  -ms-animation:charlieeee 2.5s forwards linear infinite;\n  -lynx-animation:charlieeee 2.5s forwards linear infinite;\n  animation:charlieeee 2.5s forwards linear infinite;\n  background-size:50% auto;\n}\n\n@charset \"UTF-8\";\n\n/*!\nAnimate.css - http://daneden.me/animate\nLicensed under the MIT license\n\nCopyright (c) 2013 Daniel Eden\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n}\n\n@-webkit-keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  40% {\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px);\n  }\n\n  60% {\n    -webkit-transform: translateY(-15px);\n    transform: translateY(-15px);\n  }\n}\n\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  40% {\n    -webkit-transform: translateY(-30px);\n    -ms-transform: translateY(-30px);\n    transform: translateY(-30px);\n  }\n\n  60% {\n    -webkit-transform: translateY(-15px);\n    -ms-transform: translateY(-15px);\n    transform: translateY(-15px);\n  }\n}\n\n.bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce;\n}\n\n@-webkit-keyframes flash {\n  0%, 50%, 100% {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n@keyframes flash {\n  0%, 50%, 100% {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n.flash {\n  -webkit-animation-name: flash;\n  animation-name: flash;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  50% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n\n  50% {\n    -webkit-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse;\n}\n\n@-webkit-keyframes rubberBand {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  30% {\n    -webkit-transform: scaleX(1.25) scaleY(0.75);\n    transform: scaleX(1.25) scaleY(0.75);\n  }\n\n  40% {\n    -webkit-transform: scaleX(0.75) scaleY(1.25);\n    transform: scaleX(0.75) scaleY(1.25);\n  }\n\n  60% {\n    -webkit-transform: scaleX(1.15) scaleY(0.85);\n    transform: scaleX(1.15) scaleY(0.85);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes rubberBand {\n  0% {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n\n  30% {\n    -webkit-transform: scaleX(1.25) scaleY(0.75);\n    -ms-transform: scaleX(1.25) scaleY(0.75);\n    transform: scaleX(1.25) scaleY(0.75);\n  }\n\n  40% {\n    -webkit-transform: scaleX(0.75) scaleY(1.25);\n    -ms-transform: scaleX(0.75) scaleY(1.25);\n    transform: scaleX(0.75) scaleY(1.25);\n  }\n\n  60% {\n    -webkit-transform: scaleX(1.15) scaleY(0.85);\n    -ms-transform: scaleX(1.15) scaleY(0.85);\n    transform: scaleX(1.15) scaleY(0.85);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.rubberBand {\n  -webkit-animation-name: rubberBand;\n  animation-name: rubberBand;\n}\n\n@-webkit-keyframes shake {\n  0%, 100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px);\n  }\n}\n\n@keyframes shake {\n  0%, 100% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translateX(-10px);\n    -ms-transform: translateX(-10px);\n    transform: translateX(-10px);\n  }\n\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translateX(10px);\n    -ms-transform: translateX(10px);\n    transform: translateX(10px);\n  }\n}\n\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake;\n}\n\n@-webkit-keyframes swing {\n  20% {\n    -webkit-transform: rotate(15deg);\n    transform: rotate(15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate(-10deg);\n    transform: rotate(-10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate(5deg);\n    transform: rotate(5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate(-5deg);\n    transform: rotate(-5deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n}\n\n@keyframes swing {\n  20% {\n    -webkit-transform: rotate(15deg);\n    -ms-transform: rotate(15deg);\n    transform: rotate(15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate(-10deg);\n    -ms-transform: rotate(-10deg);\n    transform: rotate(-10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate(5deg);\n    -ms-transform: rotate(5deg);\n    transform: rotate(5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate(-5deg);\n    -ms-transform: rotate(-5deg);\n    transform: rotate(-5deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n}\n\n.swing {\n  -webkit-transform-origin: top center;\n  -ms-transform-origin: top center;\n  transform-origin: top center;\n  -webkit-animation-name: swing;\n  animation-name: swing;\n}\n\n@-webkit-keyframes tada {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  10%, 20% {\n    -webkit-transform: scale(0.9) rotate(-3deg);\n    transform: scale(0.9) rotate(-3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale(1.1) rotate(3deg);\n    transform: scale(1.1) rotate(3deg);\n  }\n\n  40%, 60%, 80% {\n    -webkit-transform: scale(1.1) rotate(-3deg);\n    transform: scale(1.1) rotate(-3deg);\n  }\n\n  100% {\n    -webkit-transform: scale(1) rotate(0);\n    transform: scale(1) rotate(0);\n  }\n}\n\n@keyframes tada {\n  0% {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n\n  10%, 20% {\n    -webkit-transform: scale(0.9) rotate(-3deg);\n    -ms-transform: scale(0.9) rotate(-3deg);\n    transform: scale(0.9) rotate(-3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale(1.1) rotate(3deg);\n    -ms-transform: scale(1.1) rotate(3deg);\n    transform: scale(1.1) rotate(3deg);\n  }\n\n  40%, 60%, 80% {\n    -webkit-transform: scale(1.1) rotate(-3deg);\n    -ms-transform: scale(1.1) rotate(-3deg);\n    transform: scale(1.1) rotate(-3deg);\n  }\n\n  100% {\n    -webkit-transform: scale(1) rotate(0);\n    -ms-transform: scale(1) rotate(0);\n    transform: scale(1) rotate(0);\n  }\n}\n\n.tada {\n  -webkit-animation-name: tada;\n  animation-name: tada;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes wobble {\n  0% {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%);\n  }\n\n  15% {\n    -webkit-transform: translateX(-25%) rotate(-5deg);\n    transform: translateX(-25%) rotate(-5deg);\n  }\n\n  30% {\n    -webkit-transform: translateX(20%) rotate(3deg);\n    transform: translateX(20%) rotate(3deg);\n  }\n\n  45% {\n    -webkit-transform: translateX(-15%) rotate(-3deg);\n    transform: translateX(-15%) rotate(-3deg);\n  }\n\n  60% {\n    -webkit-transform: translateX(10%) rotate(2deg);\n    transform: translateX(10%) rotate(2deg);\n  }\n\n  75% {\n    -webkit-transform: translateX(-5%) rotate(-1deg);\n    transform: translateX(-5%) rotate(-1deg);\n  }\n\n  100% {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%);\n  }\n}\n\n@keyframes wobble {\n  0% {\n    -webkit-transform: translateX(0%);\n    -ms-transform: translateX(0%);\n    transform: translateX(0%);\n  }\n\n  15% {\n    -webkit-transform: translateX(-25%) rotate(-5deg);\n    -ms-transform: translateX(-25%) rotate(-5deg);\n    transform: translateX(-25%) rotate(-5deg);\n  }\n\n  30% {\n    -webkit-transform: translateX(20%) rotate(3deg);\n    -ms-transform: translateX(20%) rotate(3deg);\n    transform: translateX(20%) rotate(3deg);\n  }\n\n  45% {\n    -webkit-transform: translateX(-15%) rotate(-3deg);\n    -ms-transform: translateX(-15%) rotate(-3deg);\n    transform: translateX(-15%) rotate(-3deg);\n  }\n\n  60% {\n    -webkit-transform: translateX(10%) rotate(2deg);\n    -ms-transform: translateX(10%) rotate(2deg);\n    transform: translateX(10%) rotate(2deg);\n  }\n\n  75% {\n    -webkit-transform: translateX(-5%) rotate(-1deg);\n    -ms-transform: translateX(-5%) rotate(-1deg);\n    transform: translateX(-5%) rotate(-1deg);\n  }\n\n  100% {\n    -webkit-transform: translateX(0%);\n    -ms-transform: translateX(0%);\n    transform: translateX(0%);\n  }\n}\n\n.wobble {\n  -webkit-animation-name: wobble;\n  animation-name: wobble;\n}\n\n@-webkit-keyframes bounceIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(.3);\n    transform: scale(.3);\n  }\n\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(1.05);\n    transform: scale(1.05);\n  }\n\n  70% {\n    -webkit-transform: scale(.9);\n    transform: scale(.9);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes bounceIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(.3);\n    -ms-transform: scale(.3);\n    transform: scale(.3);\n  }\n\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(1.05);\n    -ms-transform: scale(1.05);\n    transform: scale(1.05);\n  }\n\n  70% {\n    -webkit-transform: scale(.9);\n    -ms-transform: scale(.9);\n    transform: scale(.9);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.bounceIn {\n  -webkit-animation-name: bounceIn;\n  animation-name: bounceIn;\n}\n\n@-webkit-keyframes bounceInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(30px);\n    transform: translateY(30px);\n  }\n\n  80% {\n    -webkit-transform: translateY(-10px);\n    transform: translateY(-10px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes bounceInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    -ms-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(30px);\n    -ms-transform: translateY(30px);\n    transform: translateY(30px);\n  }\n\n  80% {\n    -webkit-transform: translateY(-10px);\n    -ms-transform: translateY(-10px);\n    transform: translateY(-10px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.bounceInDown {\n  -webkit-animation-name: bounceInDown;\n  animation-name: bounceInDown;\n}\n\n@-webkit-keyframes bounceInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(30px);\n    transform: translateX(30px);\n  }\n\n  80% {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes bounceInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    -ms-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(30px);\n    -ms-transform: translateX(30px);\n    transform: translateX(30px);\n  }\n\n  80% {\n    -webkit-transform: translateX(-10px);\n    -ms-transform: translateX(-10px);\n    transform: translateX(-10px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.bounceInLeft {\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft;\n}\n\n@-webkit-keyframes bounceInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(-30px);\n    transform: translateX(-30px);\n  }\n\n  80% {\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes bounceInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    -ms-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(-30px);\n    -ms-transform: translateX(-30px);\n    transform: translateX(-30px);\n  }\n\n  80% {\n    -webkit-transform: translateX(10px);\n    -ms-transform: translateX(10px);\n    transform: translateX(10px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.bounceInRight {\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight;\n}\n\n@-webkit-keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px);\n  }\n\n  80% {\n    -webkit-transform: translateY(10px);\n    transform: translateY(10px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    -ms-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n    -ms-transform: translateY(-30px);\n    transform: translateY(-30px);\n  }\n\n  80% {\n    -webkit-transform: translateY(10px);\n    -ms-transform: translateY(10px);\n    transform: translateY(10px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n\n@-webkit-keyframes bounceOut {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  25% {\n    -webkit-transform: scale(.95);\n    transform: scale(.95);\n  }\n\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(.3);\n    transform: scale(.3);\n  }\n}\n\n@keyframes bounceOut {\n  0% {\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n  }\n\n  25% {\n    -webkit-transform: scale(.95);\n    -ms-transform: scale(.95);\n    transform: scale(.95);\n  }\n\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(.3);\n    -ms-transform: scale(.3);\n    transform: scale(.3);\n  }\n}\n\n.bounceOut {\n  -webkit-animation-name: bounceOut;\n  animation-name: bounceOut;\n}\n\n@-webkit-keyframes bounceOutDown {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n}\n\n@keyframes bounceOutDown {\n  0% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(-20px);\n    -ms-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    -ms-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n}\n\n.bounceOutDown {\n  -webkit-animation-name: bounceOutDown;\n  animation-name: bounceOutDown;\n}\n\n@-webkit-keyframes bounceOutLeft {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateX(20px);\n    transform: translateX(20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n}\n\n@keyframes bounceOutLeft {\n  0% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    -ms-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n}\n\n.bounceOutLeft {\n  -webkit-animation-name: bounceOutLeft;\n  animation-name: bounceOutLeft;\n}\n\n@-webkit-keyframes bounceOutRight {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n}\n\n@keyframes bounceOutRight {\n  0% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    -ms-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n}\n\n.bounceOutRight {\n  -webkit-animation-name: bounceOutRight;\n  animation-name: bounceOutRight;\n}\n\n@-webkit-keyframes bounceOutUp {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(20px);\n    transform: translateY(20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n}\n\n@keyframes bounceOutUp {\n  0% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(20px);\n    -ms-transform: translateY(20px);\n    transform: translateY(20px);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    -ms-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n}\n\n.bounceOutUp {\n  -webkit-animation-name: bounceOutUp;\n  animation-name: bounceOutUp;\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n    -ms-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n\n@-webkit-keyframes fadeInDownBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeInDownBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    -ms-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.fadeInDownBig {\n  -webkit-animation-name: fadeInDownBig;\n  animation-name: fadeInDownBig;\n}\n\n@-webkit-keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft;\n}\n\n@-webkit-keyframes fadeInLeftBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInLeftBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    -ms-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.fadeInLeftBig {\n  -webkit-animation-name: fadeInLeftBig;\n  animation-name: fadeInLeftBig;\n}\n\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    transform: translateX(20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n\n@-webkit-keyframes fadeInRightBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInRightBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    -ms-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.fadeInRightBig {\n  -webkit-animation-name: fadeInRightBig;\n  animation-name: fadeInRightBig;\n}\n\n@-webkit-keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    transform: translateY(20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    -ms-transform: translateY(20px);\n    transform: translateY(20px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n}\n\n@-webkit-keyframes fadeInUpBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeInUpBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    -ms-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.fadeInUpBig {\n  -webkit-animation-name: fadeInUpBig;\n  animation-name: fadeInUpBig;\n}\n\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n}\n\n@-webkit-keyframes fadeOutDown {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    transform: translateY(20px);\n  }\n}\n\n@keyframes fadeOutDown {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(20px);\n    -ms-transform: translateY(20px);\n    transform: translateY(20px);\n  }\n}\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n}\n\n@-webkit-keyframes fadeOutDownBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n}\n\n@keyframes fadeOutDownBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    -ms-transform: translateY(2000px);\n    transform: translateY(2000px);\n  }\n}\n\n.fadeOutDownBig {\n  -webkit-animation-name: fadeOutDownBig;\n  animation-name: fadeOutDownBig;\n}\n\n@-webkit-keyframes fadeOutLeft {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n}\n\n@keyframes fadeOutLeft {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n    -ms-transform: translateX(-20px);\n    transform: translateX(-20px);\n  }\n}\n\n.fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft;\n}\n\n@-webkit-keyframes fadeOutLeftBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n}\n\n@keyframes fadeOutLeftBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    -ms-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n}\n\n.fadeOutLeftBig {\n  -webkit-animation-name: fadeOutLeftBig;\n  animation-name: fadeOutLeftBig;\n}\n\n@-webkit-keyframes fadeOutRight {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    transform: translateX(20px);\n  }\n}\n\n@keyframes fadeOutRight {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px);\n  }\n}\n\n.fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight;\n}\n\n@-webkit-keyframes fadeOutRightBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n}\n\n@keyframes fadeOutRightBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    -ms-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n}\n\n.fadeOutRightBig {\n  -webkit-animation-name: fadeOutRightBig;\n  animation-name: fadeOutRightBig;\n}\n\n@-webkit-keyframes fadeOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n}\n\n@keyframes fadeOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n    -ms-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n}\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp;\n}\n\n@-webkit-keyframes fadeOutUpBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n}\n\n@keyframes fadeOutUpBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    -ms-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n}\n\n.fadeOutUpBig {\n  -webkit-animation-name: fadeOutUpBig;\n  animation-name: fadeOutUpBig;\n}\n\n@-webkit-keyframes flip {\n  0% {\n    -webkit-transform: perspective(400px) translateZ(0) rotateY(0) scale(1);\n    transform: perspective(400px) translateZ(0) rotateY(0) scale(1);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);\n    transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);\n    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);\n    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n@keyframes flip {\n  0% {\n    -webkit-transform: perspective(400px) translateZ(0) rotateY(0) scale(1);\n    -ms-transform: perspective(400px) translateZ(0) rotateY(0) scale(1);\n    transform: perspective(400px) translateZ(0) rotateY(0) scale(1);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);\n    -ms-transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);\n    transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n    -ms-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);\n    -ms-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);\n    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);\n    -ms-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);\n    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n.animated.flip {\n  -webkit-backface-visibility: visible;\n  -ms-backface-visibility: visible;\n  backface-visibility: visible;\n  -webkit-animation-name: flip;\n  animation-name: flip;\n}\n\n@-webkit-keyframes flipInX {\n  0% {\n    -webkit-transform: perspective(400px) rotateX(90deg);\n    transform: perspective(400px) rotateX(90deg);\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotateX(-10deg);\n    transform: perspective(400px) rotateX(-10deg);\n  }\n\n  70% {\n    -webkit-transform: perspective(400px) rotateX(10deg);\n    transform: perspective(400px) rotateX(10deg);\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateX(0deg);\n    transform: perspective(400px) rotateX(0deg);\n    opacity: 1;\n  }\n}\n\n@keyframes flipInX {\n  0% {\n    -webkit-transform: perspective(400px) rotateX(90deg);\n    -ms-transform: perspective(400px) rotateX(90deg);\n    transform: perspective(400px) rotateX(90deg);\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotateX(-10deg);\n    -ms-transform: perspective(400px) rotateX(-10deg);\n    transform: perspective(400px) rotateX(-10deg);\n  }\n\n  70% {\n    -webkit-transform: perspective(400px) rotateX(10deg);\n    -ms-transform: perspective(400px) rotateX(10deg);\n    transform: perspective(400px) rotateX(10deg);\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateX(0deg);\n    -ms-transform: perspective(400px) rotateX(0deg);\n    transform: perspective(400px) rotateX(0deg);\n    opacity: 1;\n  }\n}\n\n.flipInX {\n  -webkit-backface-visibility: visible !important;\n  -ms-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInX;\n  animation-name: flipInX;\n}\n\n@-webkit-keyframes flipInY {\n  0% {\n    -webkit-transform: perspective(400px) rotateY(90deg);\n    transform: perspective(400px) rotateY(90deg);\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotateY(-10deg);\n    transform: perspective(400px) rotateY(-10deg);\n  }\n\n  70% {\n    -webkit-transform: perspective(400px) rotateY(10deg);\n    transform: perspective(400px) rotateY(10deg);\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateY(0deg);\n    transform: perspective(400px) rotateY(0deg);\n    opacity: 1;\n  }\n}\n\n@keyframes flipInY {\n  0% {\n    -webkit-transform: perspective(400px) rotateY(90deg);\n    -ms-transform: perspective(400px) rotateY(90deg);\n    transform: perspective(400px) rotateY(90deg);\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotateY(-10deg);\n    -ms-transform: perspective(400px) rotateY(-10deg);\n    transform: perspective(400px) rotateY(-10deg);\n  }\n\n  70% {\n    -webkit-transform: perspective(400px) rotateY(10deg);\n    -ms-transform: perspective(400px) rotateY(10deg);\n    transform: perspective(400px) rotateY(10deg);\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateY(0deg);\n    -ms-transform: perspective(400px) rotateY(0deg);\n    transform: perspective(400px) rotateY(0deg);\n    opacity: 1;\n  }\n}\n\n.flipInY {\n  -webkit-backface-visibility: visible !important;\n  -ms-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInY;\n  animation-name: flipInY;\n}\n\n@-webkit-keyframes flipOutX {\n  0% {\n    -webkit-transform: perspective(400px) rotateX(0deg);\n    transform: perspective(400px) rotateX(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateX(90deg);\n    transform: perspective(400px) rotateX(90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutX {\n  0% {\n    -webkit-transform: perspective(400px) rotateX(0deg);\n    -ms-transform: perspective(400px) rotateX(0deg);\n    transform: perspective(400px) rotateX(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateX(90deg);\n    -ms-transform: perspective(400px) rotateX(90deg);\n    transform: perspective(400px) rotateX(90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutX {\n  -webkit-animation-name: flipOutX;\n  animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  -ms-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n}\n\n@-webkit-keyframes flipOutY {\n  0% {\n    -webkit-transform: perspective(400px) rotateY(0deg);\n    transform: perspective(400px) rotateY(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateY(90deg);\n    transform: perspective(400px) rotateY(90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutY {\n  0% {\n    -webkit-transform: perspective(400px) rotateY(0deg);\n    -ms-transform: perspective(400px) rotateY(0deg);\n    transform: perspective(400px) rotateY(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: perspective(400px) rotateY(90deg);\n    -ms-transform: perspective(400px) rotateY(90deg);\n    transform: perspective(400px) rotateY(90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutY {\n  -webkit-backface-visibility: visible !important;\n  -ms-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipOutY;\n  animation-name: flipOutY;\n}\n\n@-webkit-keyframes lightSpeedIn {\n  0% {\n    -webkit-transform: translateX(100%) skewX(-30deg);\n    transform: translateX(100%) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: translateX(-20%) skewX(30deg);\n    transform: translateX(-20%) skewX(30deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: translateX(0%) skewX(-15deg);\n    transform: translateX(0%) skewX(-15deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: translateX(0%) skewX(0deg);\n    transform: translateX(0%) skewX(0deg);\n    opacity: 1;\n  }\n}\n\n@keyframes lightSpeedIn {\n  0% {\n    -webkit-transform: translateX(100%) skewX(-30deg);\n    -ms-transform: translateX(100%) skewX(-30deg);\n    transform: translateX(100%) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: translateX(-20%) skewX(30deg);\n    -ms-transform: translateX(-20%) skewX(30deg);\n    transform: translateX(-20%) skewX(30deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: translateX(0%) skewX(-15deg);\n    -ms-transform: translateX(0%) skewX(-15deg);\n    transform: translateX(0%) skewX(-15deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: translateX(0%) skewX(0deg);\n    -ms-transform: translateX(0%) skewX(0deg);\n    transform: translateX(0%) skewX(0deg);\n    opacity: 1;\n  }\n}\n\n.lightSpeedIn {\n  -webkit-animation-name: lightSpeedIn;\n  animation-name: lightSpeedIn;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n\n@-webkit-keyframes lightSpeedOut {\n  0% {\n    -webkit-transform: translateX(0%) skewX(0deg);\n    transform: translateX(0%) skewX(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: translateX(100%) skewX(-30deg);\n    transform: translateX(100%) skewX(-30deg);\n    opacity: 0;\n  }\n}\n\n@keyframes lightSpeedOut {\n  0% {\n    -webkit-transform: translateX(0%) skewX(0deg);\n    -ms-transform: translateX(0%) skewX(0deg);\n    transform: translateX(0%) skewX(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: translateX(100%) skewX(-30deg);\n    -ms-transform: translateX(100%) skewX(-30deg);\n    transform: translateX(100%) skewX(-30deg);\n    opacity: 0;\n  }\n}\n\n.lightSpeedOut {\n  -webkit-animation-name: lightSpeedOut;\n  animation-name: lightSpeedOut;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in;\n}\n\n@-webkit-keyframes rotateIn {\n  0% {\n    -webkit-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(-200deg);\n    transform: rotate(-200deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateIn {\n  0% {\n    -webkit-transform-origin: center center;\n    -ms-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(-200deg);\n    -ms-transform: rotate(-200deg);\n    transform: rotate(-200deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: center center;\n    -ms-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n.rotateIn {\n  -webkit-animation-name: rotateIn;\n  animation-name: rotateIn;\n}\n\n@-webkit-keyframes rotateInDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(-90deg);\n    -ms-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n.rotateInDownLeft {\n  -webkit-animation-name: rotateInDownLeft;\n  animation-name: rotateInDownLeft;\n}\n\n@-webkit-keyframes rotateInDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n.rotateInDownRight {\n  -webkit-animation-name: rotateInDownRight;\n  animation-name: rotateInDownRight;\n}\n\n@-webkit-keyframes rotateInUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n.rotateInUpLeft {\n  -webkit-animation-name: rotateInUpLeft;\n  animation-name: rotateInUpLeft;\n}\n\n@-webkit-keyframes rotateInUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(-90deg);\n    -ms-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n.rotateInUpRight {\n  -webkit-animation-name: rotateInUpRight;\n  animation-name: rotateInUpRight;\n}\n\n@-webkit-keyframes rotateOut {\n  0% {\n    -webkit-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(200deg);\n    transform: rotate(200deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOut {\n  0% {\n    -webkit-transform-origin: center center;\n    -ms-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: center center;\n    -ms-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(200deg);\n    -ms-transform: rotate(200deg);\n    transform: rotate(200deg);\n    opacity: 0;\n  }\n}\n\n.rotateOut {\n  -webkit-animation-name: rotateOut;\n  animation-name: rotateOut;\n}\n\n@-webkit-keyframes rotateOutDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownLeft {\n  -webkit-animation-name: rotateOutDownLeft;\n  animation-name: rotateOutDownLeft;\n}\n\n@-webkit-keyframes rotateOutDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(-90deg);\n    -ms-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownRight {\n  -webkit-animation-name: rotateOutDownRight;\n  animation-name: rotateOutDownRight;\n}\n\n@-webkit-keyframes rotateOutUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate(-90deg);\n    -ms-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpLeft {\n  -webkit-animation-name: rotateOutUpLeft;\n  animation-name: rotateOutUpLeft;\n}\n\n@-webkit-keyframes rotateOutUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform-origin: right bottom;\n    -ms-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpRight {\n  -webkit-animation-name: rotateOutUpRight;\n  animation-name: rotateOutUpRight;\n}\n\n@-webkit-keyframes slideInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes slideInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    -ms-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.slideInDown {\n  -webkit-animation-name: slideInDown;\n  animation-name: slideInDown;\n}\n\n@-webkit-keyframes slideInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes slideInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    -ms-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.slideInLeft {\n  -webkit-animation-name: slideInLeft;\n  animation-name: slideInLeft;\n}\n\n@-webkit-keyframes slideInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes slideInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    -ms-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.slideInRight {\n  -webkit-animation-name: slideInRight;\n  animation-name: slideInRight;\n}\n\n@-webkit-keyframes slideOutLeft {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n}\n\n@keyframes slideOutLeft {\n  0% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    -ms-transform: translateX(-2000px);\n    transform: translateX(-2000px);\n  }\n}\n\n.slideOutLeft {\n  -webkit-animation-name: slideOutLeft;\n  animation-name: slideOutLeft;\n}\n\n@-webkit-keyframes slideOutRight {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n}\n\n@keyframes slideOutRight {\n  0% {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    -ms-transform: translateX(2000px);\n    transform: translateX(2000px);\n  }\n}\n\n.slideOutRight {\n  -webkit-animation-name: slideOutRight;\n  animation-name: slideOutRight;\n}\n\n@-webkit-keyframes slideOutUp {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n}\n\n@keyframes slideOutUp {\n  0% {\n    -webkit-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    -ms-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n  }\n}\n\n.slideOutUp {\n  -webkit-animation-name: slideOutUp;\n  animation-name: slideOutUp;\n}\n\n@-webkit-keyframes hinge {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    -webkit-transform: rotate(80deg);\n    transform: rotate(80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40% {\n    -webkit-transform: rotate(60deg);\n    transform: rotate(60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  80% {\n    -webkit-transform: rotate(60deg) translateY(0);\n    transform: rotate(60deg) translateY(0);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: translateY(700px);\n    transform: translateY(700px);\n    opacity: 0;\n  }\n}\n\n@keyframes hinge {\n  0% {\n    -webkit-transform: rotate(0);\n    -ms-transform: rotate(0);\n    transform: rotate(0);\n    -webkit-transform-origin: top left;\n    -ms-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    -webkit-transform: rotate(80deg);\n    -ms-transform: rotate(80deg);\n    transform: rotate(80deg);\n    -webkit-transform-origin: top left;\n    -ms-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40% {\n    -webkit-transform: rotate(60deg);\n    -ms-transform: rotate(60deg);\n    transform: rotate(60deg);\n    -webkit-transform-origin: top left;\n    -ms-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  80% {\n    -webkit-transform: rotate(60deg) translateY(0);\n    -ms-transform: rotate(60deg) translateY(0);\n    transform: rotate(60deg) translateY(0);\n    -webkit-transform-origin: top left;\n    -ms-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: translateY(700px);\n    -ms-transform: translateY(700px);\n    transform: translateY(700px);\n    opacity: 0;\n  }\n}\n\n.hinge {\n  -webkit-animation-name: hinge;\n  animation-name: hinge;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%) rotate(-120deg);\n    transform: translateX(-100%) rotate(-120deg);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px) rotate(0deg);\n    transform: translateX(0px) rotate(0deg);\n  }\n}\n\n@keyframes rollIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%) rotate(-120deg);\n    -ms-transform: translateX(-100%) rotate(-120deg);\n    transform: translateX(-100%) rotate(-120deg);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0px) rotate(0deg);\n    -ms-transform: translateX(0px) rotate(0deg);\n    transform: translateX(0px) rotate(0deg);\n  }\n}\n\n.rollIn {\n  -webkit-animation-name: rollIn;\n  animation-name: rollIn;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollOut {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0px) rotate(0deg);\n    transform: translateX(0px) rotate(0deg);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(100%) rotate(120deg);\n    transform: translateX(100%) rotate(120deg);\n  }\n}\n\n@keyframes rollOut {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0px) rotate(0deg);\n    -ms-transform: translateX(0px) rotate(0deg);\n    transform: translateX(0px) rotate(0deg);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(100%) rotate(120deg);\n    -ms-transform: translateX(100%) rotate(120deg);\n    transform: translateX(100%) rotate(120deg);\n  }\n}\n\n.rollOut {\n  -webkit-animation-name: rollOut;\n  animation-name: rollOut;\n}\n"
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
  - 53fdc55e5694adcd02000104
  - 53fdc5745694adcd02000105
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
  - 5254f323d0b5b6ad6d000040
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
  - 53fd30ccc0341ede0200013f
  - 53fd3174c0341ede02000140
  - 53fd3998c0341ede02000142
  - 53fdc8355694adcd02000106
  - 53fdc8c35694adcd02000107
  - 53fd3318c0341ede02000141
  - 53fd39a5c0341ede02000143
  - 5255ffd2d0b5b6ad6d00008d
  - 53fd4808c0341ede02000145
  - 53fd39eac0341ede02000144
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
updatedAt: 2014-08-27T14:07:49.826Z


-->

# jQuery-free JavaScript

## <strong>by <span style="color: #555;">@elijahmanor</span></strong>

<img style="overflow: hidden; position: absolute; top: -600px; box-shadow: none; display: inline-block; left: 100px; background-color: initial; opacity: 0.05; height: 640px; margin: auto; text-align: center;" src="https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/1000px-Vanillin-transparent.png"/>

-----

<!--

_id: 52711a36cdf3fe6b4000005b
master: content-alt
createdAt: 2013-10-30T14:39:50.000Z
updatedAt: 2014-08-27T14:07:49.826Z


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

_id: 53fdc55e5694adcd02000104
master: content-alt
createdAt: 2014-08-27T11:47:42.000Z
updatedAt: 2014-08-27T14:07:49.826Z


-->

# jQuery-free JavaScript

<!-- ![](https://dl.dropboxusercontent.com/u/200135/talks/fluent-conf-review/fluent-conf-profile.png)-->

<center><img src="http://farm8.staticflickr.com/7460/13120425244_fc39b71453_b.jpg" style="width: 650px;" /></center>

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span>&nbsp;<a href='http://twitter.com/elijahmanor' style='color: #ddd; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 53fdc5745694adcd02000105
master: content-alt
createdAt: 2014-08-27T11:48:04.000Z
updatedAt: 2014-08-27T14:07:49.826Z


-->

# jQuery-free JavaScript

<!-- ![](https://dl.dropboxusercontent.com/u/200135/talks/fluent-conf-review/fluent-conf-profile.png)-->

<center><img src="https://dl.dropboxusercontent.com/u/200135/talks/fluent-conf-review/fluent-conf-speaking-hamburger.jpg-large" style="width: 650px;" /></center>

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span>&nbsp;<a href='http://twitter.com/elijahmanor' style='color: #ddd; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 52264f7144439c240800005b
master: full
createdAt: 2013-09-03T21:06:57.000Z
updatedAt: 2014-08-27T14:07:49.826Z


-->

# To jQuery or Not to jQuery?

![When Should I Use jQuery?](https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/why-should-i-use-jquery.png)

-----

<!--

_id: 52faf25281f235b32300006d
master: full
createdAt: 2014-02-12T04:02:26.000Z
updatedAt: 2014-08-27T14:07:49.826Z


-->

# http://youmightnotneedjquery.com

<object data="http://youmightnotneedjquery.com/" type="text/html" style="width: 100%; height: 100%;"></object>

<!--<center><img style="height: 500px" src="https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/youmightnotneedjquery.png" /></center>-->


-----

<!--

_id: 531e647787e717cd0400000a
master: title
createdAt: 2014-03-11T01:18:47.000Z
updatedAt: 2014-08-27T14:07:49.826Z


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
updatedAt: 2014-08-27T14:07:49.827Z


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
updatedAt: 2014-08-27T14:07:49.827Z


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
updatedAt: 2014-08-27T14:07:49.827Z


-->

# It's Battle Tested

![](https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/rockem-sockem.jpg)


-----

<!--

_id: 531e670b90afddc90400000f
master: full
createdAt: 2014-03-11T01:29:47.000Z
updatedAt: 2014-08-27T14:07:49.827Z


-->

# 57.5% of Quantcast Top Million

![](https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/built-with-jquery.png)


-----

<!--

_id: 531e678487e717cd0400000b
master: content
createdAt: 2014-03-11T01:31:48.000Z
updatedAt: 2014-08-27T14:07:49.827Z


-->

# It Fixes Cross-Browser Bugs!

<!--<center>
<blockquote class="twitter-tweet" lang="en"><p>jQuery is very much alive. <a href="https://twitter.com/rwaldron">@rwaldron</a>&#39;s list of 129 browser bugs that jQuery works around in MODERN browsers: <a href="https://t.co/cEGoi6TO3F">https://t.co/cEGoi6TO3F</a></p>&mdash; John Resig (@jeresig) <a href="https://twitter.com/jeresig/statuses/429019936506142720">January 30, 2014</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
<blockquote class="twitter-tweet" lang="en"><p>You Might Not Need jQuery! … assuming you&#39;ll address these bugs in your hand-written code: <a href="https://t.co/j2hrG2nCpX">https://t.co/j2hrG2nCpX</a></p>&mdash; Paul Irish (@paul_irish) <a href="https://twitter.com/paul_irish/statuses/431584056883429376">February 7, 2014</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
</center>
-->

<center><img src="https://dl.dropboxusercontent.com/u/200135/talks/gruntify/jquery-tweets.png" style="height: 500px" /></center>

<script>
$(".presentation-title").html("");
</script>

-----

<!--

_id: 52faf368f79fecb023000054
master: content
createdAt: 2014-02-12T04:07:04.000Z
updatedAt: 2014-08-27T14:07:49.827Z


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
updatedAt: 2014-08-27T14:07:49.827Z


-->

# Browser Bug Breakdown

## 100+ Cross-Browser Bugs

<center><img style="box-shadow: none; border: none; padding: 0; width: 450px;" src="https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/bugs.gif" /></center>


<!--<iframe src="//embed.gettyimages.com/embed/167311807?et=ZkxDsoXTaUCiWzFaa_VVNg&sig=lkUtWQ4N84S3JJRM3rZFVDVOk1n2habUT8CWgXTJT2A=" width="480" height="407" frameborder="0" scrolling="no"></iframe>-->

---

<center><img style="box-shadow: none; border: none; padding: 0; width: 450px;" src="http://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/browser-bug-breakdown.png" /></center>


<!--<iframe height=371 width=480 src="//docs.google.com/spreadsheets/d/1190rU9CYvQwYxfxBWhqt_m_sghvgIxUSreGdmZjolQk/gviz/chartiframe?oid=1526958102" seamless frameborder=0 scrolling=no></iframe>-->

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531e6d02b22f73c50400000b
master: content
createdAt: 2014-03-11T01:55:14.000Z
updatedAt: 2014-08-27T14:07:49.827Z


-->

# Browser Bug Breakdown

## 38 of Bugs are Sizzle Bugs

<center><img style="box-shadow: none; border: none; padding: 0; width: 450px;" src="https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/bacon.gif" /></center>

<!--<iframe src="//embed.gettyimages.com/embed/dv0302111?et=UBk5COJlsk2uCqkA8SLKnQ&sig=0x3pbmbO2AKk6KQf3dfc_4ZVshzS5NPx0y5MjIxHTAo=" width="480" height="400" frameborder="0" scrolling="no"></iframe>-->

---

<center><img style="box-shadow: none; border: none; padding: 0; width: 450px; top: -25px; position: relative;" src="http://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/sizzel-bugs.png" /></center>

<!--<iframe height=371 width=480 src="//docs.google.com/spreadsheets/d/1190rU9CYvQwYxfxBWhqt_m_sghvgIxUSreGdmZjolQk/gviz/chartiframe?oid=1650848818" seamless frameborder=0 scrolling=no></iframe>-->

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531e6c5bd5f663c10400000a
master: content
createdAt: 2014-03-11T01:52:27.000Z
updatedAt: 2014-08-27T14:07:49.828Z


-->

# Browser Bug Breakdown

## 50 IE Specific Bugs

<center><img src="https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/internet-explorer_512x512.png" style="width: 280px; box-shadow: none; position: relative; top: 25px;" /></center>

---

<center><img style="box-shadow: none; border: none; padding: 0; width: 450px;" src="http://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/ie-specific-bugs.png" /></center>

<!--<iframe height=371 width=480 src="//docs.google.com/spreadsheets/d/1190rU9CYvQwYxfxBWhqt_m_sghvgIxUSreGdmZjolQk/gviz/chartiframe?oid=395021372" seamless frameborder=0 scrolling=no></iframe>-->

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531e734b87e717cd0400000c
master: content
createdAt: 2014-03-11T02:22:03.000Z
updatedAt: 2014-08-27T14:07:49.828Z


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
updatedAt: 2014-08-27T14:07:49.828Z


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
updatedAt: 2014-08-27T14:07:49.828Z


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
updatedAt: 2014-08-27T14:07:49.828Z


-->

# Let's Go jQuery-free

<center><img src="https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/unicorn.gif" style="height: 500px;" /></center>

<!--<center><iframe src="//embed.gettyimages.com/embed/165723598?et=-MMOOvIyi0OnavOMNm5zcw&sig=70StwyWTT2vS_ZT1335Qj_wiii9sNcTGAb2rIz3x6iY=" width="414" height="483" frameborder="0" scrolling="no"></iframe></center>-->

<script>
$(".presentation-title").html("");
</script>

-----

<!--

_id: 531e75ea90afddc904000011
master: content
createdAt: 2014-03-11T02:33:14.000Z
updatedAt: 2014-08-27T14:07:49.828Z


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
updatedAt: 2014-08-27T14:07:49.828Z


-->

# The Good, the Bad, & the Ugly

-----

<!--

_id: 531e764290afddc904000012
master: title
createdAt: 2014-03-11T02:34:42.000Z
updatedAt: 2014-08-27T14:07:49.828Z


-->

# Good Browser Feature Parity

-----

<!--

_id: 531f1dc890afddc904000014
master: content
createdAt: 2014-03-11T14:29:28.000Z
updatedAt: 2014-08-27T14:07:49.828Z


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
updatedAt: 2014-08-27T14:07:49.828Z


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
updatedAt: 2014-08-27T14:07:49.828Z


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

_id: 5254f323d0b5b6ad6d000040
master: content
createdAt: 2013-10-09T06:09:39.000Z
updatedAt: 2014-08-27T14:07:49.828Z


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

_id: 5254f9fbd0b5b6ad6d000050
master: content
createdAt: 2013-10-09T06:38:51.000Z
updatedAt: 2014-08-27T14:07:49.828Z


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
updatedAt: 2014-08-27T14:07:49.829Z


-->

# Ugly Browser Feature Parity




-----

<!--

_id: 5254d8d0d0b5b6ad6d000020
master: content
createdAt: 2013-10-09T04:17:20.000Z
updatedAt: 2014-08-27T14:07:49.829Z


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
updatedAt: 2014-08-27T14:07:49.829Z


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
updatedAt: 2014-08-27T14:07:49.829Z


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
updatedAt: 2014-08-27T14:07:49.829Z


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
updatedAt: 2014-08-27T14:07:49.829Z


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
updatedAt: 2014-08-27T14:07:49.829Z


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
updatedAt: 2014-08-27T14:07:49.829Z


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
updatedAt: 2014-08-27T14:07:49.829Z


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
updatedAt: 2014-08-27T14:07:49.829Z


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
updatedAt: 2014-08-27T14:07:49.829Z


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
updatedAt: 2014-08-27T14:07:49.829Z


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
updatedAt: 2014-08-27T14:07:49.829Z


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
updatedAt: 2014-08-27T14:07:49.829Z


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
updatedAt: 2014-08-27T14:07:49.830Z


-->

# Ugly Browser Feature Parity

## Height & Width

![](https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/jquery-core-height.png)

-----

<!--

_id: 5254f173d0b5b6ad6d00003b
master: content
createdAt: 2013-10-09T06:02:27.000Z
updatedAt: 2014-08-27T14:07:49.830Z


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
updatedAt: 2014-08-27T14:07:49.830Z


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
updatedAt: 2014-08-27T14:07:49.830Z


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
updatedAt: 2014-08-27T14:07:49.830Z


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
updatedAt: 2014-08-27T14:07:49.830Z


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
updatedAt: 2014-08-27T14:07:49.830Z


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
updatedAt: 2014-08-27T14:07:49.830Z


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
updatedAt: 2014-08-27T14:07:49.830Z


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
updatedAt: 2014-08-27T14:07:49.830Z


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
var el =  
  document.getElementById("dtl-123"),    
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
updatedAt: 2014-08-27T14:07:49.830Z


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
updatedAt: 2014-08-27T14:07:49.830Z


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
updatedAt: 2014-08-27T14:07:49.831Z


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
updatedAt: 2014-08-27T14:07:49.831Z


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
updatedAt: 2014-08-27T14:07:49.831Z


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

_id: 5254f7bbd0b5b6ad6d00004b
master: content
createdAt: 2013-10-09T06:29:15.000Z
updatedAt: 2014-08-27T14:07:49.831Z


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
updatedAt: 2014-08-27T14:07:49.831Z


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
updatedAt: 2014-08-27T14:07:49.831Z


-->

# Okay, Okay, but what about jQuery's Size?

<center><img src="https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/fat-cat.gif" style="height: 450px;" /></center>

<!--<center><iframe src="//embed.gettyimages.com/embed/113743815?et=r45-eHS_EUGWK6t4nQVXJA&sig=tQjzRGxszj06jQwia-cZ2XMLBYyylxijfJXMwzeMP8Q=" width="507" height="407" frameborder="0" scrolling="no"></iframe></center>-->

<script>
$(".presentation-title").html("");
</script>

-----

<!--

_id: 531e76e9b22f73c50400000e
master: content
createdAt: 2014-03-11T02:37:29.000Z
updatedAt: 2014-08-27T14:07:49.831Z


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
updatedAt: 2014-08-27T14:07:49.831Z


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
updatedAt: 2014-08-27T14:07:49.831Z


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
updatedAt: 2014-08-27T14:07:49.831Z


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
updatedAt: 2014-08-27T14:07:49.831Z


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
updatedAt: 2014-08-27T14:07:49.831Z


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
updatedAt: 2014-08-27T14:07:49.832Z


-->

# http://bit.ly/jquery-builder

[![Unofficial jQuery Builder](https://dl.dropboxusercontent.com/u/200135/talks/jquery-free-javascript/images/unofficial-jquery-builder.png)](http://projects.jga.me/jquery-builder/)

-----

<!--

_id: 5252381fd1a98b157c0000f5
master: content
createdAt: 2013-10-07T04:27:11.000Z
updatedAt: 2014-08-27T14:07:49.832Z


-->

# What About jQuery Alternatives?

## [Zepto.js](http://zeptojs.com) by Thomas Fuchs

* v1.1.3 – 9.2k gzipped & Largely jQuery-compatible API
* IE10+ Support
* Zurb (Foundation 5) replaced Zepto.js with jQuery 2 http://bit.ly/zurb-drop-zepto
	* Speed
	* Industry acceptance 
	* Documentation
	* Support
	<!-- http://zurb.com/article/1293/why-we-dropped-zepto -->

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531fda77d5f663c104000012
master: content
createdAt: 2014-03-12T03:54:31.000Z
updatedAt: 2014-08-27T14:07:49.832Z


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
updatedAt: 2014-08-27T14:07:49.832Z


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
updatedAt: 2014-08-27T14:07:49.832Z


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
updatedAt: 2014-08-27T14:07:49.832Z


-->

# What I Recommend

## Unless you have a really good reason...

<h1 class="catchadream" style='line-height: 1.3em; color: white; text-shadow: 4px 4px 2px black;'><div id="use-jquery">Use jQuery</div></h1>
<script>
$(".slide-72 #use-jquery").addClass("animated pulse");
</script>

_... for Web Sites_

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 531e99cf87e717cd0400000f
master: content
createdAt: 2014-03-11T05:06:23.000Z
updatedAt: 2014-08-27T14:07:49.832Z


-->

# What If I Don't Use jQuery?

## That's okay as long as...

* You and your team have sufficient cross-browser knowledge
* You and your team are able to fix cross-browser bugs
* Your code has sufficient cross-browser tests coverage
* Your browsers all [Cut the Mustard](http://manor.im/cutting-the-mustard)

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 53fd30ccc0341ede0200013f
master: content
createdAt: 2014-08-27T01:13:48.000Z
updatedAt: 2014-08-27T14:07:49.832Z


-->

# What If I Don't Use jQuery?

## That's okay as long as...

* You and your team have sufficient cross-browser knowledge
* You and your team are able to fix cross-browser bugs
* Your code has sufficient cross-browser tests coverage
* Your browsers all [Cut the Mustard](http://manor.im/cutting-the-mustard)

**OR**

* You're building a web application using a framework that has abstractions, cross-browser tests, & a large community (AngularJS, etc)


<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 53fd3174c0341ede02000140
master: content
createdAt: 2014-08-27T01:16:36.000Z
updatedAt: 2014-08-27T14:07:49.832Z


-->

# Use Cases at Dave Ramsey

## jQuery

* Use jQuery for daveramsey.com (website)

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 53fd3998c0341ede02000142
master: content
createdAt: 2014-08-27T01:51:20.000Z
updatedAt: 2014-08-27T14:07:49.832Z


-->

# Use Cases at Dave Ramsey

## jQuery

* Use jQuery for daveramsey.com (website)

**WHY?**

* IE8 Support
* Library and Plugin Dependencies
* Wide range of developer expertise

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 53fdc8355694adcd02000106
master: content
createdAt: 2014-08-27T11:59:49.000Z
updatedAt: 2014-08-27T14:07:49.832Z


-->

# Use Cases at Dave Ramsey

## jQuery

* Used jQuery for last year's online Christmas Budget (web application)

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 53fdc8c35694adcd02000107
master: content
createdAt: 2014-08-27T12:02:11.000Z
updatedAt: 2014-08-27T14:07:49.832Z


-->

# Use Cases at Dave Ramsey

## jQuery

* Used jQuery for last year's online Christmas Budget (web application)

**WHY?**

* It was written using Backbone.js, which depends on jQuery
* It utilized serveral existing jQuery plugins
* It was outsourced and those developers were familiar with jQuery

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 53fd3318c0341ede02000141
master: content
createdAt: 2014-08-27T01:23:36.000Z
updatedAt: 2014-08-27T14:07:49.833Z


-->

# Use Cases at Dave Ramsey

## Non-jQuery

* Don't use jQuery for a single page app (web application) we are currently writting with React, Browserify, & ES6

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 53fd39a5c0341ede02000143
master: content
createdAt: 2014-08-27T01:51:33.000Z
updatedAt: 2014-08-27T14:07:49.833Z


-->

# Use Cases at Dave Ramsey

## Non-jQuery

* Don't use jQuery for a single page app (web application) we are currently writting with React, Browserify, & ES6

**WHY?**

* We only support IE10+
* React provides browser abstraction, support, & community

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 5255ffd2d0b5b6ad6d00008d
master: focus
createdAt: 2013-10-10T01:16:02.000Z
updatedAt: 2014-08-27T14:07:49.833Z


-->

# Are There Exceptions?

<br/><br/>
# ???

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 53fd4808c0341ede02000145
master: focus
createdAt: 2014-08-27T02:52:56.000Z
updatedAt: 2014-08-27T14:07:49.833Z


-->

# Are There Exceptions?

<center><img src="https://dl.dropboxusercontent.com/u/200135/talks/gruntify/yes-of-course.gif" style="width: 650px;" /></center>

<script>
$(".presentation-title").html("jQuery-free JavaScript <span style='text-transform: lowercase;'>by</span> <a href='http://twitter.com/elijahmanor' style='color: #555; text-decoration: none; text-transform: lowercase;'>@elijahmanor</a>");
</script>

-----

<!--

_id: 53fd39eac0341ede02000144
master: focus
createdAt: 2014-08-27T01:52:42.000Z
updatedAt: 2014-08-27T14:07:49.833Z


-->

# Questions?

<pre style="text-align: left; font-size: 1.25em;"><a href="http://elijahmanor.com]" style="margin-left: 200px; color: #555; border-bottom: none;">http://elijahmanor.com</a>
      <a href="http://twitter.com/elijahmanor" style="margin-left: 200px; border-bottom: none; color: #555;">@elijahmanor</a>
       </pre>

<pre><span style="text-transform: lowercase;font-size: 1.25em;">Slides: <a style="text-decoration: none; border-bottom: none;" href="http://bit.ly/jqfreejs">http://bit.ly/jqfreejs</a></span></pre>

<script>
$(".presentation-title").html("jQuery-free JavaScript");
</script>