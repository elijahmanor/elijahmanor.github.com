document.addEventListener('click', function(e) {
	var button = e.target;
	var game, result, specificity, highest;

	if (button.tagName === 'BUTTON') {
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
