var output = document.getElementById('output');

document.querySelector('.Autocomplete')
  .addEventListener('input', function(e) {
  	// Make Ajax call for autocomplete 
  	output.value += 'Autocomplete: ' + e.target.value + '\n'; 
	});
