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
    ['Working', 'Experience'],
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 3],
    [5, 3],
    [6, 3],
    [7, 3],
    [8, 3],
    [9, 3],
    [10, 3]
  ]);

  var options = {
    title: 'Working vs. Experience',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis: {
      title: 'Years of Working'
    },
    vAxis: {
      title: 'Years of Experience'
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}

google.setOnLoadCallback(drawChart);
