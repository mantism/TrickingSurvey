$(document).ready(function() {
      var map = new Datamap({
            element: document.getElementById('map-container'),
            projection: 'mercator'
      });




});

(function(d3) {

      //gender pie chart
      var genderData = [
            {label: 'Male', count: 315},
            {label: 'Female', count: 11}
      ];

      var width = 360;
      var height = 360;
      var radius = Math.min(width, height) / 2;

      var color = d3.scale.ordinal().range(["#4f98d3", "#e73a3a"]);

      var svg = d3.select('#chart').append('svg').attr('width', width).attr('height', height).append('g').attr('transform', 'translate(' + (width/2) +  ',' + (height/2) + ')');

      var arc = d3.svg.arc().outerRadius(radius);
      var pie = d3.layout.pie().value(function(d) { return d.count; }).sort(null);
      var path = svg.selectAll('path').data(pie(genderData)).enter().append('path').attr('d', arc).attr('fill', function(d, i) {
            return color(d.data.label);
      });
})(window.d3);
