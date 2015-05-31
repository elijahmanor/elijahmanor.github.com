Reveal.addEventListener('slidechanged', function(event) {
  var header = document.querySelector('.Title');
  var title = event.currentSlide.dataset.title || '';

  header.classList.toggle('Title--show', !!title);
  header.innerHTML = title;
});

var dialog = document.getElementById('dialog');

var modules = window.localStorage.modules;
modules = modules ? JSON.parse(modules) : getModules();
for (var key in modules) {
	if (!modules[key]) {
		var element = document.querySelector('#' + key);
		element.parentNode.removeChild(element);
	}
}

function getModules() {
	var modules = {};
	[].forEach.call(document.querySelectorAll('.slides .stack'), function(module) {
		modules[module.id] = true;
	});
	return modules;
}
dialog.querySelector('#update').addEventListener('click', function() {
	var modules = JSON.parse(window.localStorage.modules);
	[].forEach.call(dialog.querySelectorAll('#dialog input'), function(input) {
		if (!input.checked) {
			var element = document.querySelector('#' + input.name);
			if (element) {
				element.parentNode.removeChild(element);
			}
			modules[input.name] = false;
		} else {
			modules[input.name] = true;
		}
	});
	window.localStorage.modules = JSON.stringify(modules);
	Reveal.configure({ controls: true });
	dialog.close();
});

dialog.querySelector('#cancel').addEventListener('click', function() {
	dialog.close();
});

document.addEventListener('click', function(e) {
	var button = e.target;
	var game, result, specificity, highest;

	if (button.tagName === 'BUTTON' && button.closest('#Specificity')) {
		game = button.closest('.SpecificityGame');

		[].forEach.call(game.querySelectorAll('.Specificity'), function(element) {
			result = SPECIFICITY.calculate(element.querySelector('.Specificity-input').value);
			console.log(element.querySelector('.Specificity-input').value, result);
			specificity = result[0].specificity.split(',');
			element.querySelector('.Specificity-value--inline').innerText = specificity[0];
			element.querySelector('.Specificity-value--ids').innerText = specificity[1];
			element.querySelector('.Specificity-value--classes').innerText = specificity[2];
			element.querySelector('.Specificity-value--elements').innerText = specificity[3];
			element.classList.remove('Specificity--fire');
			highest = highest || { element: element, specificity: specificityToNumber(specificity) };
			highest = highest && specificityToNumber(specificity) > highest.specificity ?
				{ element: element, specificity: specificityToNumber(specificity) } : highest;
		});

		highest.element.classList.add('Specificity--fire');
	}
});

function specificityToNumber(specificity) {
	var multiplier = 1000;

	return specificity.reduce(function(memo, number) {
		number = memo + (number * multiplier);
		multiplier /= 10;
		return number;
	}, 0);
}
