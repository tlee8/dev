//Thomas Lee
//SoftDev2
//K#15 -- Scattered
//2019-03-22

var data = [
  [12779.379640000001,75.32],
  [3822.1370840000004,65.554],
  [9065.800825,72.39],
  [36319.235010000004,80.653],
  [13171.63885,78.553],
  [7006.580419,72.889],
  [9645.06142,78.782],
  [8948.102923,78.273],
  [6025.374752000001,72.235],
  [6873.262326000001,74.994],
  [5728.353514,71.878],
  [5186.050003,70.259],
  [1201.637154,60.916000000000004],
  [3548.3308460000003,70.19800000000001],
  [7320.880262000001,72.567],
  [11977.57496,76.195],
  [2749.320965,72.899],
  [9809.185636,75.53699999999999],
  [4172.838464,71.752],
  [7408.905561,71.421],
  [19328.70901,78.74600000000001],
  [18008.50924,69.819],
  [42951.65309,78.242],
  [10611.46299,76.384],
  [11415.805690000001,73.747]
]

var width = 1000;
var height = 500;
var margin = 50;

var chart = d3.select(".chart")
    .attr('width', width)
    .attr('height', height)

var xscale = d3.scaleLinear()
             .domain([0, 50000])
             .range([margin, width - margin]);
var yscale = d3.scaleLinear()
             .domain([0, 100])
             .range([height - margin, margin]);

var x_axis = d3.axisBottom().scale(xscale);
var y_axis = d3.axisLeft().scale(yscale);
chart.append("g")
    .attr("transform", "translate(0," + (height - margin) + ")")
    .call(x_axis)
chart.append("g")
    .attr("transform", "translate(" + margin + ",0)")
    .call(y_axis)

chart.append("g")
     .selectAll("scatterdots")
     .data(data)
     .enter()
     .append("svg:circle")
         .attr("fill", "LightCoral")
         .attr("cx", function (d) { return xscale(d[0]); })
         .attr("cy", height)
         .transition()
             .duration(function (d, i) { return 50 * d[1] })
             .attr("cy", function (d) { return yscale(d[1]); })
             .attr("r", 7);

chart.append("text")
     .attr("class", "title")
     .attr("x", width / 2)
     .attr("y", margin / 2)
     .text("Correlation between GDP per Capita and Life Expectancy");

chart.append("text")
     .attr("class", "label")
     .text("GDP per capita (2000 dollars)")
     .attr("x", width / 2)
     .attr("y", height - margin / 3)

chart.append("text")
     .attr("class", "label")
     .attr("x", 0 - height / 2)
     .attr("y", margin / 3)
     .attr("transform", "rotate(-90)")
     .text("Life Expectancy (years)");
