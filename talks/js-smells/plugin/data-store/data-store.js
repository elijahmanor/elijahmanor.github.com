(function(dataStore) {
  dataStore.init = function() {
    var stores = document.querySelectorAll('[data-store]');

    [].forEach.call(stores, function(element) {
      var key = element.getAttribute('data-store');
      var value;

      if (key) {
        value = window.localStorage[key];
        element.innerHTML = window.localStorage[key] || '';
      }
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
