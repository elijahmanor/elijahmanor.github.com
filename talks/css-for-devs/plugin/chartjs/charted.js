/*
    Reveal-chart - A plugin to integrate chartjs with revealjs
    Copyright (C) 2013-2015  Sagar DV <dvenkatsagar@gmail.com>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var RevealChart = window.RevealChart || (function(){
	// Get the chart item related to the iframe
	var getOptItem = function(opt,id){
		if (!opt.items){
			return null;
		}
		for (var j = 0; j < opt.items.length; j++){
			if(opt.items[j].selector.substring(1) == id){
				return opt.items[j];
			}
		}
	}

	var plotChart = function(item,id){
		// plot the appropriate graph
		switch(item.type){
			case "line":
				module[id].item.chart = module[id].item.Line(item.data,item.options);
				break;
			case "bar":
				module[id].item.chart = module[id].item.Bar(item.data,item.options);
				break;
			case "radar":
				module[id].item.chart = module[id].item.Radar(item.data,item.options);
				break;
			case "polararea":
				module[id].item.chart = module[id].item.PolarArea(item.data,item.options);
				break;
			case "pie":
				module[id].item.chart = module[id].item.Pie(item.data,item.options);
				break;
			case "doughnut":
				module[id].item.chart = module[id].item.Doughnut(item.data,item.options);
				break;
		}
	}

	// Load chart into iframe
	var loadChart = function(event){

		function loading(e){
			// remove event listener after loading to that it doesnt fire multiple times
			e.target.removeEventListener("load",loading,false);
			// get id of frame
			var id = e.target.getAttribute("id").replace(/-/g,"_").toString();

			// create charts object with id as property
			module[id] = {};

			// get iframe document
			module[id].doc = e.target.contentDocument || e.target.contentWindow.document;

			// write empty canvas as iframe contents
			module[id].doc.open();
			module[id].doc.write('<html><body><canvas></canvas></body></html>');
			module[id].doc.close();

			// create new chart with context
			module[id].item = new Chart(module[id].doc.querySelector("canvas").getContext("2d"));
			module[id].item.chart = null;

			// get the appropriate item data
			var optitem = getOptItem(options,e.target.getAttribute("id"));

			if (optitem != null){
				// change canvas size
				module[id].item.canvas.style.width = optitem.canvas.width;
				module[id].item.canvas.style.height = optitem.canvas.height;

				// plot chart
				plotChart(optitem,id);
			}
		}

		// Get all iframes
		var iframes = event.currentSlide.querySelectorAll("iframe");
		for (var i = 0; i < iframes.length; i++ ){
			// check if iframe has data-chart attribute
			if (iframes[i].hasAttribute("data-chart")){
				// load a blank page into iframe
				iframes[i].src = "";
				iframes[i].srcdoc = "";
				if(iframes[i].addEventListener)
					iframes[i].addEventListener('load',loading);
				else if(iframe.attachEvent)
					iframes[i].attachEvent('onload',loading);
			}
		}
	}

	// main
	var module = {};
	// check if chart option is given or not
	var options = Reveal.getConfig().chart || {};
	options.path = options.path || "plugin/chartjs/Chart.min.js"
	options.items = options.items || [];
	for (var i = 0; i < options.items.length; i++){
		options.items[i].canvas = options.items[i].canvas || {};
		if(["line","bar","radar"].indexOf(options.items[i].type) > -1){
			options.items[i].data = options.items[i].data || {};
		}else{
			options.items[i].data = options.items[i].data || [];
		}
		options.items[i].options = options.items[i].options || {};
		options.items[i].canvas.width = options.items[i].canvas.width || "250px";
		options.items[i].canvas.height = options.items[i].canvas.height || "150px";
	}

		Reveal.addEventListener('ready', function(e1){
			loadChart(e1);
			Reveal.addEventListener('slidechanged', function(e2){
				loadChart(e2)
			});
		});
	return module;
})();
