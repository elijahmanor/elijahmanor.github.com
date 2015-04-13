(function(dataStore) {
  dataStore.init = function() {
    [].forEach.call(document.querySelectorAll('[data-store]'), function(element) {
      var key = element.getAttribute('data-store');
      if (key) { element.innerHTML = window.localStorage[key]; }
    });

    document.addEventListener('input', function(e) {
    	var element = e.target;
    	var dataStore = element.getAttribute('data-store');

    	if (dataStore) {
    		window.localStorage[dataStore] = element.innerHTML;
    	}
    });
  };
}(window.dataStore = window.dataStore || {}));
//<h3 data-store="introduction-social" contenteditable></h3>
