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

      var color = d3.scale.ordinal().range(["#45abed", "#e73a3a"]);

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

      var widgets = "Trickers";
      var sMargin = {top: 10, right: 10, bottom: 10, left: 10},
            sWidth = 1200 - sMargin.left - sMargin.right,
            sHeight = 600 - sMargin.top - sMargin.bottom;

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
            .attr('transform', 'translate(' + (sMargin.left * 2 )+ ', ' + sMargin.top  + ')');
      //set the sankey diagram properties
      var sankey = d3.sankey()
            .nodeWidth(30)
            .nodePadding(20)
            .size([ sWidth - 50, sHeight - 50]);

      var sankeyPath = sankey.link();

      d3.json("origins.json",  function(error, origins) {
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
                  .sort(function(a, b) {
                        return b.dy - a.dy;
                  });
                  link.append('title').text(function(d) {
                        return d.source.name + '→' + d.target.name + '\n' + format(d.value);
                  });
                  /*link.on('mouseenter', function(d) {
                        console.log(d.source.name);
                        return ['<div class="hoverinfo" style="margin-top: 2800px; background-color: rgb(255, 245, 238); width: 1000px; height: 1000px">',
                           '<strong>',d.source.name + '→' + d.target.name,  '</strong>',
                           '<br>Number of Trickers: <strong>', format(d.value), '</strong>',
                           '</div>'].join();
                  });*/

            var node = sankeySVG.append('g').selectAll('.node')
                  .data(origins.nodes)
                        .enter().append('g')
                        .attr('class', 'node')
                        .attr('transform', function(d) {
                               return 'translate(' + d.x + ', ' + d.y + ')';
                              })
                        .call(d3.behavior.drag()
                        .origin(function(d) {
                                    /*d.x = d.x + 10;
                                    d.y = d.y + 10;*/
                                    return d;})
                              .on('dragstart', function() {
                                    this.parentNode.appendChild(this);
                              })
                              .on('drag', dragmove));


                  node.append('rect')
                        .attr('height', function(d) {return d.dy + 10;})
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
                        dataset[iso] = {numTrickers: value, fillColor: '#b53535'};
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
                      return ['<div class="hoverinfo" style="margin-top: 1100px; background-color: rgb(255, 245, 238); width: 200px; height: 50px">',
                          '<strong>', geo.properties.name, '</strong>',
                          '<br>Number of Trickers: <strong>', data.numTrickers, '</strong>',
                          '</div>'].join('');
                  }
            }

      });

//population progress bar

      /*var bar = new ProgressBar.Line('#population-bar', {
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

      bar.animate(0.01);  // Number from 0.0 to 1.0 */
//training bar graph
      var tMargin = {top: 20, right: 30, bottom: 30, left: 40},
            tWidth = 450 - tMargin.left - tMargin.right,
            tHeight = 350 - tMargin.top - tMargin.bottom;

      var x = d3.scale.ordinal()
          .rangeRoundBands([0, tWidth], 0.1);

      var y = d3.scale.linear()
               .range([tHeight, 0]);

      var xAxis = d3.svg.axis()
             .scale(x)
             .orient("bottom");

      var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

      var training_chart = d3.select('#training_chart')
            .attr("width", tWidth + tMargin.left * 4 + tMargin.right)
            .attr("height", tHeight + tMargin.top * 4 + tMargin.bottom)
            .append("g")
            .attr("transform", "translate(" + 100 + "," + (tMargin.top * 3) + ")");

      d3.tsv('training_frequency.txt', type, function (error, data) {
            if (error) throw error;
            x.domain(data.map(function(d) { return d.hours; }));
            y.domain([0, d3.max(data, function(d) { return d.value; })]);

            var tBarWidth = tWidth / (data.length);

            training_chart.append("g")
                  .attr("class", "x axis")
                  .attr("transform", "translate(0," + tHeight + ")")
                  .call(xAxis)
                  .append('text')
                        .attr('transform', 'translate(0,' + 35 + ')')
                        .attr('x', 6)
                        .attr('dx', '12em')
                        .style('text-anchor', 'middle')
                        .text('Hours Per Week');

            training_chart.append("g")
                  .attr("class", "y axis")
                  .call(yAxis)
                  .append("text")
                      .attr("transform", "rotate(-90)")
                      .attr("y", 6)
                      .attr("dy", ".71em")
                      .style("text-anchor", "end")
                      .text("Number of Trickers");

            training_chart.selectAll(".bar")
                  .data(data)
                .enter().append("rect")
                  .attr("class", "bar")
                  .attr("x", function(d) { return x(d.hours); })
                  .attr("y", function(d) { return y(d.value); })
                  .attr("height", function(d) { return tHeight - y(d.value); })
                  .attr("width", x.rangeBand());
            });

      function type(d) {
            d.value = +d.value; // coerce to number
            return d;
      }

//kicking bar graph
            var kMargin = {top: 20, right: 30, bottom: 30, left: 40},
                  kWidth = 450 - tMargin.left - tMargin.right,
                  kHeight = 300 - tMargin.top - tMargin.bottom;

            var kx = d3.scale.linear()
                  .range([0, kWidth]);

            var ky = d3.scale.ordinal()
                  .rangeRoundBands([kHeight, 0], 0.1);

            var kXAxis = d3.svg.axis()
                   .scale(kx)
                   .orient("bottom");

            var kYAxis = d3.svg.axis()
                  .scale(ky)
                  .orient("left");

            var kicks_chart = d3.select('#kicks_chart')
                  .attr("width", kWidth + kMargin.left * 4 + kMargin.right)
                  .attr("height", kHeight + kMargin.top * 4 + kMargin.bottom)
                  .append("g")
                  .attr("transform", "translate(" + 120 + "," + (kMargin.top * 3) + ")");

            d3.csv('popular_kicks.csv', type, function (error, data) {
                  if (error) throw error;

                  ky.domain(data.map(function(d) {return d.kick; }));
                  kx.domain([0, d3.max(data, function(d) { return d.value; })]);

                  var kBarWidth = kWidth / (data.length);

                  kicks_chart.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + kHeight + ")")
                        .call(kXAxis)
                        .append('text')
                              .attr('transform', 'translate(0,' + 35 + ')')
                              .attr('x', 6)
                              .attr('dx', '12em')
                              .style('text-anchor', 'middle')
                              .text('Number of Favorites');

                  kicks_chart.append("g")
                        .attr("class", "y axis")
                        .call(kYAxis)
                        .append("text")
                            .attr("transform", "translate(120, -10)")
                            .attr("y", 6)
                            .attr('dx', '3em')
                            .style("text-anchor", "end")
                            .style('font-size', '18px')
                            .text("Kicks");

                  kicks_chart.selectAll(".bar")
                        .data(data)
                      .enter().append("rect")
                        .attr("class", "bar")
                        .attr("y", function(d) { return ky(d.kick); })
                        .attr("x",function(d) { kx(d.value); })
                        .attr("width", function(d) { return  kx(d.value); })
                        .attr("height", ky.rangeBand());
                  });
//flips chart
      var fMargin = {top: 20, right: 30, bottom: 30, left: 20},
            fWidth = 450 - fMargin.left - fMargin.right,
            fHeight = 300 - fMargin.top - fMargin.bottom;

      var fx = d3.scale.linear()
            .range([0, fWidth]);

      var fy = d3.scale.ordinal()
            .rangeRoundBands([fHeight, 0], 0.1);

      var fXAxis = d3.svg.axis()
             .scale(fx)
             .orient("bottom");

      var fYAxis = d3.svg.axis()
            .scale(fy)
            .orient("left");

      var flips_chart = d3.select('#flips_chart')
            .attr("width", fWidth + fMargin.left * 4 + fMargin.right)
            .attr("height", fHeight + fMargin.top * 4 + fMargin.bottom)
            .append("g")
            .attr("transform", "translate(" + 140 + "," + (fMargin.top * 3) + ")");

      d3.csv('popular_flips.csv', type, function (error, data) {
            if (error) throw error;

            fy.domain(data.map(function(d) {return d.flip; }));
            fx.domain([0, d3.max(data, function(d) { return d.value; })]);

            var fBarWidth = fWidth / (data.length);

            flips_chart.append("g")
                  .attr("class", "x axis")
                  .attr("transform", "translate(0," + fHeight + ")")
                  .call(fXAxis)
                  .append('text')
                        .attr('transform', 'translate(0,' + 35 + ')')
                        .attr('x', 6)
                        .attr('dx', '12em')
                        .style('text-anchor', 'middle')
                        .text('Number of Favorites');

            flips_chart.append("g")
                  .attr("class", "y axis")
                  .call(fYAxis)
                  .append("text")
                      .attr("transform", "translate(120, -10)")
                      .attr("y", 6)
                      .attr('dx', '3em')
                      .style("text-anchor", "end")
                      .style('font-size', '18px')
                      .text("Flips");

            flips_chart.selectAll(".bar")
                  .data(data)
                .enter().append("rect")
                  .attr("class", "bar")
                  .attr("y", function(d) { return fy(d.flip); })
                  .attr("x",function(d) { fx(d.value); })
                  .attr("width", function(d) { return  fx(d.value); })
                  .attr("height", fy.rangeBand());
            });

//twists chart
      var twMargin = {top: 20, right: 30, bottom: 30, left: 40},
            twWidth = 450 - twMargin.left - twMargin.right,
            twHeight = 300 - twMargin.top - twMargin.bottom;

      var twx = d3.scale.linear()
            .range([0, fWidth]);

      var twy = d3.scale.ordinal()
            .rangeRoundBands([twHeight, 0], 0.1);

      var twXAxis = d3.svg.axis()
             .scale(twx)
             .orient("bottom");

      var twYAxis = d3.svg.axis()
            .scale(twy)
            .orient("left");

      var twists_chart = d3.select('#twists_chart')
            .attr("width", twWidth + twMargin.left * 4 + twMargin.right)
            .attr("height", twHeight + twMargin.top * 4 + twMargin.bottom)
            .append("g")
            .attr("transform", "translate(" + 150 + "," + (twMargin.top * 3) + ")");

      d3.csv('popular_twists.csv', type, function (error, data) {
            if (error) throw error;

            twy.domain(data.map(function(d) {return d.twist; }));
            twx.domain([0, d3.max(data, function(d) { return d.value; })]);

            var twBarWidth = fWidth / (data.length);

            twists_chart.append("g")
                  .attr("class", "x axis")
                  .attr("transform", "translate(0," + twHeight + ")")
                  .call(twXAxis)
                  .append('text')
                        .attr('transform', 'translate(0,' + 35 + ')')
                        .attr('x', 6)
                        .attr('dx', '12em')
                        .style('text-anchor', 'middle')
                        .text('Number of Favorites');

            twists_chart.append("g")
                  .attr("class", "y axis")
                  .call(twYAxis)
                  .append("text")
                      .attr("transform", "translate(120, -10)")
                      .attr("y", 6)
                      .attr('dx', '3em')
                      .style("text-anchor", "end")
                      .style('font-size', '18px')
                      .text("Twists");

            twists_chart.selectAll(".bar")
                  .data(data)
                .enter().append("rect")
                  .attr("class", "bar")
                  .attr("y", function(d) { return twy(d.twist); })
                  .attr("x",function(d) { twx(d.value); })
                  .attr("width", function(d) { return  twx(d.value); })
                  .attr("height", twy.rangeBand());
            });
})(window.d3);