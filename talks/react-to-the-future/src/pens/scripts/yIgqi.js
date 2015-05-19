(function() {
  function runScripts() {
    var bodyScripts = 'body script:not([src])';
    Array.prototype.forEach.call(document.querySelectorAll(bodyScripts), function setJSXType(element) {
      element.setAttribute('type', 'text/jsx');    
    });
  };

  if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', runScripts, false);
  } else {
    window.attachEvent('onload', runScripts);
  }
})();