var margin = {top: -60, right: 0, bottom: 0, left: 0},
    width = 1050 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var first100Cases = [
    ["22-01-2020", "23-01-2020","19-02-2020"],
    ["22-01-2020","24-01-2020","07-02-2020"],
    ["23-01-2020", "24-01-2020", "21-02-2020"],
    ["24-01-2020", "25-01-2020", "12-02-2020"],
    ["26-01-2020", "27-01-2020", "18-02-2020"],
    ["26-01-2020", "27-01-2020", "20-02-2020"],
    ["24-01-2020", "27-01-2020", "04-02-2020"],
    ["27-01-2020", "28-01-2020","18-02-2020"],
    ["27-01-2020", "29-01-2020", "23-02-2020"],
    ["28-01-2020", "29-01-2020", "09-02-2020"],
    ["27-01-2020", "29-01-2020", "10-02-2020"],
    ["29-01-2020","29-01-2020", "12-02-2020"],
    ["28-01-2020", "30-01-2020", "09-02-2020"],
    ["30-01-2020", "30-01-2020", "17-02-2020"],
    ["30-01-2020", "31-01-2020", "17-02-2020"],
    ["29-01-2020","31-01-2020", "20-02-2020"],
    ["30-01-2020","31-01-2020", "11-02-2020"],
    ["31-01-2020","01-02-2020", "27-02-2020"],
    ["03-02-2020","03-02-2020", "22-02-2020"],
    ["03-02-2020","03-02-2020", "29-02-2020"],
    ["03-02-2020","04-02-2020", "18-02-2020"],
    ["02-02-2020","03-02-2020", "09-02-2020"],
    ["02-02-2020","03-02-2020", "21-02-2020"],
    ["03-02-2020", "04-02-2020", "15-02-2020"],
    ["03-02-2020", "04-02-2020", "12-02-2020"],
    ["28-01-2020", "04-02-2020", "09-02-2020"],
    ["04-02-2020", "05-02-2020", "21-02-2020"],
    ["04-02-2020", "05-02-2020", "22-02-2020"],
    ["03-02-2020", "05-02-2020", "12-02-2020"],
    ["06-02-2020", "06-02-2020","14-02-2020"],
    ["01-02-2020", "06-02-2020", "17-02-2020"],
    ["05-02-2020", "06-02-2020", "19-02-2020"],
    ["02-02-2020", "06-02-2020", "19-02-2020"],
    ["06-02-2020", "07-02-2020", "12-02-2020"],
    ["04-02-2020", "07-02-2020", "11-02-2020"],
    ["06-02-2020", "07-02-2020", "02-03-2020"],
    ["07-02-2020", "08-02-2020", "18-02-2020"],
    ["06-02-2020", "08-02-2020", "16-02-2020"],
    ["07-02-2020", "08-02-2020", "12-02-2020"],
    ["06-02-2020", "08-02-2020", "07-03-2020"],
    ["06-02-2020", "09-02-2020", "19-02-2020"],
    ["08-02-2020", "10-02-2020", "14-02-2020"],
    ["09-02-2020", "10-02-2020", "24-02-2020"],
    ["10-02-2020", "10-02-2020", "07-03-2020"],
    ["10-02-2020", "11-02-2020", "17-02-2020"],
    ["10-02-2020", "11-02-2020", "26-02-2020"],
    ["11-02-2020", "12-02-2020", "21-02-2020"],
    ["11-02-2020", "12-02-2020", "21-02-2020"],
    ["11-02-2020", "12-02-2020", "28-02-2020"],
    ["12-02-2020", "12-02-2020", "14-03-2020"],
    ["12-02-2020", "13-02-2020", "01-03-2020"],
    ["12-02-2020", "13-02-2020", "19-02-2020"],
    ["12-02-2020", "13-02-2020", "26-02-2020"],
    ["11-02-2020", "13-02-2020", "21-02-2020"],
    ["12-02-2020", "13-02-2020", "25-02-2020"],
    ["13-02-2020", "13-02-2020", "26-02-2020"],
    ["12-02-2020", "13-02-2020", "01-03-2020"],
    ["12-02-2020", "13-02-2020", "04-03-2020"],
    ["12-02-2020", "13-02-2020", "25-02-2020"],
    ["13-02-2020", "14-02-2020", "21-02-2020"],
    ["13-02-2020", "14-02-2020", "23-02-2020"],
    ["12-02-2020", "14-02-2020", "17-02-2020"],
    ["12-02-2020", "14-02-2020", "20-02-2020"],
    ["13-02-2020", "14-02-2020", "02-03-2020"],
    ["14-02-2020", "14-02-2020", "29-02-2020"],
    ["14-02-2020", "15-02-2020", "02-03-2020"],
    ["14-02-2020", "15-02-2020", "21-02-2020"],
    ["14-02-2020", "15-02-2020", "05-03-2020"],
    ["14-02-2020", "15-02-2020", "27-02-2020"],
    ["14-02-2020", "15-02-2020", "26-02-2020"],
    ["15-02-2020", "15-02-2020", "07-03-2020"],
    ["15-02-2020", "16-02-2020", "29-02-2020"],
    ["15-02-2020", "16-02-2020", "18-02-2020"],
    ["12-02-2020", "17-02-2020", "25-02-2020"],
    ["17-02-2020", "17-02-2020", "27-02-2020"],
    ["17-02-2020", "17-02-2020", "28-02-2020"],
    ["17-02-2020", "18-02-2020", "27-02-2020"],
    ["17-02-2020", "18-02-2020", "25-02-2020"],
    ["18-02-2020", "19-02-2020", "21-02-2020"],
    ["18-02-2020", "19-02-2020", "21-02-2020"],
    ["19-02-2020", "20-02-2020", "07-03-2020"],
    ["19-02-2020", "20-02-2020", "07-03-2020"],
    ["19-02-2020", "21-02-2020", "24-02-2020"],
    ["21-02-2020", "21-02-2020", "02-03-2020"],
    ["21-02-2020", "22-02-2020", "28-02-2020"],
    ["18-02-2020", "22-02-2020", "25-02-2020"],
    ["24-02-2020", "26-02-2020", "11-03-2020"],
    ["25-02-2020", "26-02-2020", "07-03-2020"],
    ["26-02-2020", "27-02-2020", "14-03-2020"],
    ["26-02-2020", "27-02-2020", "07-03-2020"],
    ["27-02-2020", "28-02-2020", "05-03-2020"],
    ["28-02-2020", "29-02-2020", "14-03-2020"],
    ["29-02-2020", "01-03-2020", "11-03-2020"],
    ["27-02-2020", "01-03-2020", "06-03-2020"],
    ["27-02-2020", "03-03-2020", "07-03-2020"],
    ["03-03-2020", "03-03-2020", "13-03-2020"],
    ["03-03-2020", "04-03-2020", "09-03-2020"],
    ["03-03-2020", "06-03-2020", "09-03-2020"],
    ["02-03-2020", "08-03-2020", "11-03-2020"],
    ["22-02-2020", "08-03-2020", "09-03-2020"]
]
    
var node_radius = 5,
    padding = 1,
    cluster_padding = 10,
    num_nodes = 100;

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    // .style("border", "solid")
  .append("g")
    .attr("class", "graphClass")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var gridline1 = d3.select(".graphClass")
                    .append("line")
                    .attr("class", "gridLine")
                    .attr("x1", 200.33)
                    .attr("y1", 120)
                    .attr("x2", 200.33)
                    .attr("y2", 560)
                    .attr("stroke", "#f1cf54")
                    .attr("stroke-width", 1)
                    .style("opacity", 1);

var gridline2 = d3.select(".graphClass")
            .append("line")
            .attr("class", "gridLine")
            .attr("x1", 530.33)
            .attr("y1", 120)
            .attr("x2", 530.33)
            .attr("y2", 560)
            .attr("stroke", "#f1cf54")
            .attr("stroke-width", 1)
            .style("opacity", 1);

var gridline3 = d3.select(".graphClass")
            .append("line")
            .attr("class", "gridLine")
            .attr("x1", 860.33)
            .attr("y1", 120)
            .attr("x2", 860.33)
            .attr("y2", 560)
            .attr("stroke", "#f1cf54")
            .attr("stroke-width", 1)
            .style("opacity", 1);


// Foci
var foci = {
    "initial": { x: 64, y: 245, color: "#797979" },
    "admission": { x: 220, y: 245, color: "#4e7387" },
    "confirmed": { x: 530, y: 245, color: "#8a0000" },
    "discharged": { x: 860, y: 245, color: "#b4ad52" },
};

// Create node objects
var nodes = d3.range(0, num_nodes).map(function(o, i) {
	return {
		id: "node" + i,
		x: foci.initial.x + Math.random(),
		y: foci.initial.y + Math.random(),
		radius: node_radius,
		choice: "initial",
	}
});


// Force-directed layout
var force = d3.layout.force()
	.nodes(nodes)
	.size([width, height])
	.gravity(0)
	.charge(0)
	.friction(.65)
	.on("tick", tick)
	.start();
    
// Draw circle for each node.
var circle = svg.selectAll("circle")
	.data(nodes)
  .enter().append("circle")
	.attr("id", function(d) { return d.id; })
	.attr("class", "node")
	.style("fill", function(d) { return foci[d.choice].color; });    

// For smoother initial transition to settling spots.
circle.transition()
	.duration(900)
	.delay(function(d,i) { return i * 5; })
	.attrTween("r", function(d) {
		var i = d3.interpolate(0, d.radius);
		return function(t) { return d.radius = i(t); };
	});

var datesString = first100Cases[0][0].split('-');
datesString[1] = (parseInt(datesString[1])-1).toString();
var dates = new Date(datesString[2],datesString[1],datesString[0]);
var month = "";
var datesString0 = "";
var datesString1 = "";
var datesString2 = "";
var choices = d3.keys(foci);
d3.select(".timeDisplay").text(month + "January  " + dates.getDate() + "  2020");
let timeout, i = 0;

function incrementDates(){
    i++;
    dates.setDate(dates.getDate() + 1);
    if(dates.getMonth() == 0){
        month = "January";
    }else if(dates.getMonth() == 1){
        month  = "Feburary";
    }
    else if(dates.getMonth() == 2){
        month  = "March";
    }
    d3.select(".timeDisplay").text(month + "  " + dates.getDate() + "  2020");
    var choice =  0;
    for(var j = 0;j<100;j++){
        datesString0List = first100Cases[j][0].split('-'); //admission
        datesString0List[1] = (parseInt(datesString0List[1])-1).toString();
        datesString0 = new Date(datesString0List[2],datesString0List[1],datesString0List[0]);

        datesString1List = first100Cases[j][1].split('-'); // confirmed
        datesString1List[1] = (parseInt(datesString1List[1])-1).toString();
        datesString1 = new Date(datesString1List[2],datesString1List[1],datesString1List[0]);

        datesString2List = first100Cases[j][2].split('-'); //discharged
        datesString2List[1] = (parseInt(datesString2List[1])-1).toString();
        datesString2 = new Date(datesString2List[2],datesString2List[1],datesString2List[0]);

        

        if(dates.getTime() == datesString0.getTime()){
            choice =  d3.keys(foci)[1];
            nodes[j].cx = foci[choice].x;
            nodes[j].cy = foci[choice].y;
            nodes[j].choice = "admission";
        }

        if(dates.getTime() == datesString1.getTime()){
            choice =  d3.keys(foci)[2];
            nodes[j].cx = foci[choice].x;
            nodes[j].cy = foci[choice].y;
            nodes[j].choice = "confirmed";
        }

        if(dates.getTime() == datesString2.getTime()){
            choice =  d3.keys(foci)[3];
            nodes[j].cx = foci[choice].x;
            nodes[j].cy = foci[choice].y;
            nodes[j].choice = "discharged";
        }

    }
    force.resume();
    // Run it again in a few seconds.
    if(i==52) return;

    timeout = setTimeout(incrementDates, 400);

}

incrementDates(i);

    // Run function periodically to make things move.
// let timeout, i = 0;

function timer() {
    
    i++;
    // Random place for a node to go
    var choices = d3.keys(foci);
    var foci_index = Math.floor( Math.random() * choices.length );
    var choice = d3.keys(foci)[foci_index];
    
    // Update random node
    var random_index = Math.floor( Math.random() * nodes.length );
    nodes[random_index].cx = foci[choice].x;
    nodes[random_index].cy = foci[choice].y;
    nodes[random_index].choice = choice;
    
    force.resume();
    
    // Run it again in a few seconds.
    if(i==11) return;

    // timeout = setTimeout(timer, 500);
}

// timeout = setTimeout(timer, 100);

// timer(i);


//
// Force-directed boiler plate functions
//


function tick(e) {
  circle
	.each(gravity(.051 * e.alpha))
  	.each(collide(.5))
  	.style("fill", function(d) { return foci[d.choice].color; })
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });
}


// Move nodes toward cluster focus.
function gravity(alpha) {
  return function(d) {
    d.y += (foci[d.choice].y - d.y) * alpha;
    d.x += (foci[d.choice].x - d.x) * alpha;
  };
}



// Resolve collisions between nodes.
function collide(alpha) {
  var quadtree = d3.geom.quadtree(nodes);
  return function(d) {
	  var r = d.radius + node_radius + Math.max(padding, cluster_padding),
        nx1 = d.x - r,
        nx2 = d.x + r,
        ny1 = d.y - r,
        ny2 = d.y + r;
    quadtree.visit(function(quad, x1, y1, x2, y2) {
      if (quad.point && (quad.point !== d)) {
        var x = d.x - quad.point.x,
            y = d.y - quad.point.y,
            l = Math.sqrt(x * x + y * y),
            r = d.radius + quad.point.radius + (d.choice === quad.point.choice ? padding : cluster_padding);
        if (l < r) {
          l = (l - r) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          quad.point.x += x;
          quad.point.y += y;
        }
      }
      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    });
  };
}    