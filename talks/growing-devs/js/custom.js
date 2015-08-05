Reveal.addEventListener('slidechanged', function(event) {
  var header = document.querySelector('.Title');
  var title = event.currentSlide.dataset.title || '';

  header.classList.toggle('Title--show', !!title);
  header.innerHTML = title;
});

Reveal.addEventListener('fragmentshown', function(event) {
  document.querySelector('.present[data-markdown] .DeveloperTitles').classList.add('DeveloperTitles--animate');
});

document.addEventListener('webkitAnimationEnd', function(e) {
  if (e.target.closest('.Status')) {
    //document.body.parentNode.classList.remove('statusSkill--change');
  }
});

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  ]);

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}

google.setOnLoadCallback(drawChart);
