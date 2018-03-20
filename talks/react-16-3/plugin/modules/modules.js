(function(modules) {
  modules.init = function() {
    this.removeModules();
    this.updateDemos();
    this.updateExtendedContent();
    this.updateResourcesContent();

    this.dialog = this.buildDialog();
    this.dialog.querySelector('#update').addEventListener('click', this.update.bind(this));
    this.dialog.querySelector('#cancel').addEventListener('click', this.cancel.bind(this));

    Reveal.configure({
      keyboard: {
        87: this.keypress.bind( this ), // 'w'
        71: function() { // 'g'
            var lastViewedSlide = window.localStorage.lastViewedSlide ?
              JSON.parse( window.localStorage.lastViewedSlide ) : {
              indexh: 0,
              indexv: 0
            };
            Reveal.slide( lastViewedSlide.indexh, lastViewedSlide.indexv );
        },
        65: function() {
          var isAnnotated = window.localStorage.isAnnotated !== "true";
          window.localStorage.isAnnotated = isAnnotated;
          document.body.classList.toggle('is-annotated', isAnnotated);
        }
      }
    });

    Reveal.addEventListener( 'slidechanged', function( event ) {
      var lastViewedSlide = {
        indexh: event.indexh,
        indexv: event.indexv
      };
      window.localStorage.lastViewedSlide = JSON.stringify( lastViewedSlide ); 
    } );
  };

  modules.updateDemos = function() {
    var areDemosOffline = window.localStorage.areDemosOffline === 'true';

    if (areDemosOffline) {
      [].forEach.call(document.querySelectorAll('iframe[data-offline]'), function(iframe) {
        iframe.src = iframe.dataset.offline;
      });
    } else {
      [].forEach.call(document.querySelectorAll('iframe[data-offline]'), function(iframe) {
        iframe.src = iframe.dataset.online;
      });
    }
  };

  modules.updateExtendedContent = function() {
    var extendedContent = window.localStorage.extendedContent === 'true';

    if (!extendedContent) {
      [].forEach.call(document.querySelectorAll("section[data-state*='extended'], .fragment[data-extended]"), function(extended) {
        extended.parentNode.removeChild(extended);
      });
    }
  };

  modules.updateResourcesContent = function( isRecording ) {
    var isRecording = window.localStorage.isRecording === 'true';
    if (isRecording) {
      [].forEach.call(document.querySelectorAll("section[data-state='resources']"), function(extended) {
        extended.parentNode.removeChild(extended);
      });
    }    
  };

  modules.removeModules = function() {
    var modules = window.localStorage.modules;

    modules = modules ? JSON.parse(modules) : this.getModules();
    for (var key in modules) {
      if (!modules[key]) {
        var element = document.querySelector('#' + key);
        if (element) {
          element.parentNode.removeChild(element);
        }
      }
    }
  };

  modules.getModules = function() {
    var sections = document.querySelectorAll('.slides > section');
    var modules = {};

    [].forEach.call(sections, function(module) {
      modules[module.id] = true;
    });

    return modules;
  };

  modules.update = function() {
    var modules = JSON.parse(window.localStorage.modules);
    var enabledModule = false;

    [].forEach.call(this.dialog.querySelectorAll('#dialog .modules input'), function(input) {
      if (!input.checked) {
        var element = document.querySelector('#' + input.name);
        if (element) {
          element.parentNode.removeChild(element);
        }
        modules[input.name] = false;
      } else {
        if (!modules[input.name]) {
          enabledModule = true;
        }
        modules[input.name] = true;
      }
    });
    window.localStorage.modules = JSON.stringify(modules);

    var areDemosOffline = this.dialog.querySelector('#chkOfflineDemos').checked;
    window.localStorage.areDemosOffline = areDemosOffline;
    this.updateDemos(areDemosOffline);

    var isRecording = this.dialog.querySelector('#chkIsRecording').checked;
    window.localStorage.isRecording = isRecording;

    var extendedContent = this.dialog.querySelector('#chkExtendedContent').checked;
    var reenabledExtendedContent = window.localStorage.extendedContent !== extendedContent.toString();
    window.localStorage.extendedContent = extendedContent;
    this.updateExtendedContent( extendedContent );
    this.updateResourcesContent( isRecording );

    this.dialog.close();

    if (enabledModule || reenabledExtendedContent) {
      setTimeout(function() {
        document.location.reload();
      }, 1000);
    }
  };

  modules.cancel = function() {
    this.dialog.close();
  };

  modules.buildDialog = function() {
    var dialog = document.createElement('dialog');
    var areDemosOffline = window.localStorage.areDemosOffline === 'true' ? 'checked="checked"' : '';
    window.localStorage.extendedContent = window.localStorage.extendedContent || 'true';
    var hasExtendedContent = window.localStorage.extendedContent === 'true' ? 'checked="checked"' : '';
    var isRecording = window.localStorage.isRecording === 'true' ? 'checked="checked"' : '';
    var template = '<h2>Modules</h2><ul class="modules"></ul><h2>Options</h2><ul class="options"><li><label><input id="chkExtendedContent" type="checkbox" ' + hasExtendedContent + '> Extended Content</label></li><li><label><input id="chkOfflineDemos" ' + areDemosOffline + ' type="checkbox" /> Offline Demos</label></li><li><label><input id="chkIsRecording" type="checkbox" ' + isRecording + '> Is Recording</label></li></ul><div class="actions"><button id="update">Update</button> <button id="cancel">Cancel</button></div>';

    dialog.id = 'dialog';
    dialog.innerHTML = template;

    document.body.appendChild(dialog);

    return dialog;
  };

  modules.keypress = function() {
    var items = [];
    var modules = window.localStorage.modules;

    if (!this.dialog.hasAttribute('open')) {
      modules = modules ? JSON.parse(modules) : this.getModules();
      for (var key in modules) {
        var module = modules[key];
        var moduleName = _.startCase(key).replace( 'J Query', 'jQuery' );
        items.push('<li><input name="' + key + '" type="checkbox" ' + (module ? 'checked="checked" ' : '') + '" /> ' + moduleName + '</li>');
      }
      window.localStorage.modules = JSON.stringify(modules);

      this.dialog.querySelector('.modules').innerHTML = items.join('');
      this.dialog.showModal();
    } else {
      this.dialog.close();
    }
  };
}(window.modules = window.modules || {}));
