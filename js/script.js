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

truncateDecimals = function (number, digits) {
    var multiplier = Math.pow(10, digits),
        adjustedNum = number * multiplier,
        truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

    return truncatedNum / multiplier;
};


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

//world map
      var series = [
             ["ATG",2],["ARG",2],["AUS",13],["AUT",5],["AZE",1],["BEL",1],
             ["BRA",3],["CAN",16],["CHL",2],["CRI",1],["CZE",6],["DNK",1],
             ["EST",1],["FIN",4],["FRA",3],["DEU",31],["GRC",4],["GTM",1],
             ["HKG",1],["HUN",1],["IND",2],["IRL",2],["ISR",7],["ITA",3],
             ["JAM",1],["KOR",1],["LTU",7],["MYS",2],["MUS",1],["MEX",2],
             ["MAR",4],["NLD",7],["NZL",2],["NOR",9],["PER",1],["PRT",1],
             ["ROU",1],["SRB",1],["SGP",3],["SVK",1],["ZAF",1],["ESP",4],
             ["SWE",8],["CHE",3],["THA",2],["TUN",3],["GBR",11],["USA",134],
             ["URY",3]
      ];

      var dataset = {};
      //array of only values from series data
      var onlyValues = series.map(function(obj){ return obj[1]; });
      //min and max values from series
      var minValue = Math.min.apply(null, onlyValues),
           maxValue = 31;//Math.max.apply(null, onlyValues);

       //paletteScale for map
       var paletteScale = d3.scale.linear()
                 .domain([minValue,maxValue])
                 .range(["#eec262","#fa5757"]);

      //loop to add country data to dataset with corresponding color from the scale
      series.forEach(function(item){ //
      // item example value ["USA", 70]
            var iso = item[0],
                  value = item[1];
                  if (iso == 'USA') {
                        dataset[iso] = {numTrickers: value, fillColor: '#b53535'}
                  } else {
                        dataset[iso] = { numTrickers: value, fillColor: paletteScale(value) };
                  }

      });

      var tricker_map = new Datamap({
            element: document.getElementById('map-container'),
            projection: 'mercator',
            fills: {
                  defaultFill: 'rgba(197, 221, 236, 0.9)'
            },
            data: dataset,
            geographyConfig: {
                  borderColor: '#DEDEDE',
                  highlightBorderWidth: 2,
                  // don't change color on mouse hover
                  highlightFillColor: function(geo) {
                      return geo['fillColor'] || '#F5F5F5';
                  },
                  // only change border
                  highlightBorderColor: '#B7B7B7',
                  // show desired information in tooltip
                  popupTemplate: function(geo, data) {
                      // don't show tooltip if country don't present in dataset

                      if (!data) { return ; }
                      // tooltip content
                      return ['<div class="hoverinfo" style="margin-top: 2400px; background-color: rgb(255, 245, 238); width: 200px; height: 50px">',
                          '<strong>', geo.properties.name, '</strong>',
                          '<br>Number of Trickers: <strong>', data.numTrickers, '</strong>',
                          '</div>'].join('');
                  }
            }

      });

//population progress bar

      var bar = new ProgressBar.Line('#population-bar', {
              strokeWidth: 4,
              easing: 'easeInOut',
              duration: 1400,
              color: '#feb569',
              trailColor: '#eee',
              trailWidth: 1,
              svgStyle: {width: '100%', height: '100%'},
              text: {
                style: {
                  // Text color.
                  // Default: same as stroke color (options.color)
                  color: '#999',
                  position: 'absolute',
                  right: '0',
                  top: '30px',
                  padding: 0,
                  margin: 0,
                  transform: null
                },
                autoStyleContainer: false
              },
              from: {color: '#feb569'},
              to: {color: '#ED6A5A'},
              step: (state, bar) => {

                bar.setText( truncateDecimals(bar.value() * 0.03 + 0.0001, 4 ) + ' %');
              }
      });

      bar.animate(0.01);  // Number from 0.0 to 1.0

})(window.d3);
