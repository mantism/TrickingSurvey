$(document).ready(function() {


});


$(function() {
      $('#menuButton').button({
            icons: {primary: null},
            text: false
      }).addClass('ButtonClass').append('<img height="25" src="res/menu.png" width="25" />' ).button();
      $('#menuButton').click(function() {
            $('#myScrollspy').toggle("fast",  function(){
                  $('#myScrollspy').css('right',0);
            });
      });

});

(function(d3) {

      //gender pie chart
      var genderData = [
            {label: 'Male', count: 315},
            {label: 'Female', count: 11}
      ];
      var gTotal = 0;
      for (var i = 0; i < genderData.length; i++) {
            gTotal += genderData[i].count;
      }

      var width = window.innerWidth;
      var height = 500;
      var radius = 175;

      var color = d3.scale.ordinal().range(["#4f98d3", "#e73a3a"]);

      var svg = d3.select('#chart').append('svg').attr('width', width).attr('height', height).append('g').attr('transform', 'translate(' + (width/4 - 100) +  ',' + (height/2) + ')');

      var arc = d3.svg.arc().outerRadius(radius);
      var pie = d3.layout.pie().value(function(d) { return d.count; }).sort(null);
      var path = svg.selectAll('path').data(pie(genderData)).enter().append('path').attr('d', arc).attr('fill', function(d, i) {
            return color(d.data.label);
      });

      //gender legend
      var legendRectSize = 25;
      var legendSpacing = 12;

      var legend = svg.selectAll('.legend')
            .data(color.domain())
            .enter()
            .append('g')
            .attr('class','legend')
            .attr('transform', function(d,i){
                  var height = legendRectSize + legendSpacing;
                  var offset =  height * color.domain().length / 2;
                  var horz =  5.5 * legendRectSize * (i + 4) - width/2;
                  var vert =  height * 6;
                  return 'translate(' + horz+ ',' + vert + ')';
            });

            legend.append('rect')
            .attr('width', legendRectSize)
            .attr('height', legendRectSize)
            .style('fill', color)
            .style('stroke', color);

            legend.append('text')
            .attr('x', legendRectSize + legendSpacing)
            .attr('y', legendRectSize - legendSpacing)
            .text(function(d, i) {
                  return  genderData[i].count + '/ ' +  gTotal + ' ' + d ;
            });

//sankey setup

var widgets = "Widgets";
var sMargin = {top: 10, right: 10, bottom: 10, left: 10},
      sWidth = 1000 - sMargin.left - sMargin.right,
      sHeight = 500 - sMargin.top - sMargin.bottom;

var formatNumber = d3.format(",.0f"),
      format = function(d) {
            return formatNumber(d) + " " + widgets;
      },
      sColor = d3.scale.category20();
//appends svg canvas to the page
var sankeySVG = d3.select('#originsChart').append('svg')
      .attr('width', sWidth + sMargin.left - sMargin.right)
      .attr('height', sHeight + sMargin.top - sMargin.bottom)
      .append('g')
      .attr('transform', 'translate(' + (sMargin.left * 4 )+ ', ' + 0 + ')');
//set the sankey diagram properties
var sankey = d3.sankey()
      .nodeWidth(30)
      .nodePadding(20)
      .size([ sWidth - 50, sHeight - 50]);

var sankeyPath = sankey.link();

d3.json("../data/origins.json",  function(error, origins) {
      sankey
            .nodes(origins.nodes)
            .links(origins.links)
            .layout(32);

      var link = sankeySVG.append('g').selectAll('.link')
            .data(origins.links)
            .enter().append('path')
            .attr('class', 'link')
            .attr('d', sankeyPath)
            .style('stroke-width', function(d) { return Math.max(1, d.dy); })
            .sort(function(a, b) { return b.dy - a.dy; });

            link.append('title').text(function(d) {
                  return d.source.name + '→' + d.target.name + '\n' + format(d.value);
            });

            var node = sankeySVG.append('g').selectAll('.node')
                  .data(origins.nodes)
                        .enter().append('g')
                              .attr('class', 'node')
                              .attr('transform', function(d) {
                                   return 'translate(' + d.x + ', ' + d.y + ')';
                              })
                              .call(d3.behavior.drag()
                                    .origin(function(d) {return d;})
                                    .on('dragstart', function() {
                                          this.parentNode.appendChild(this);
                                    })
                                    .on('drag', dragmove));
            node.append('rect')
                  .attr('height', function(d) {return d.dy;})
                  .attr('width', sankey.nodeWidth())
                  .style('fill', function(d) {
                        return d.color = sColor(d.name.replace(/ .*/, " "));
                  })
                  .style('stroke', function(d) {
                        return d3.rgb(d.color).darker(2);
                  })
                  .append('title').text(function(d) {
                        return d.name + '\n' + format(d.value);
                  });

            node.append('text')
                  .attr('x', -6)
                  .attr('y', function(d) { return d.dy / 2; })
                  .attr('dy', '.35em')
                  .attr('text-anchor', 'end')
                  .attr('transform', null)
                  .text( function(d) { return d.name; })
                  .filter(function(d) { return d.x < width / 2; })
                  .attr('x', 6 + sankey.nodeWidth())
                  .attr('text-anchor', 'start');

            function dragmove(d) {
                  d3.select(this).attr( 'transform' ,
                  'translate(' +
                  (d.x = Math.max(0, Math.min(sWidth - d.dx, d3.event.x))) + ', ' +
                  (d.y = Math.max(0, Math.min(sHeight - d.dy, d3.event.y))) + ')' );
                  sankey.relayout();
                  link.attr('d', sankeyPath);
            }
});

})(window.d3);
