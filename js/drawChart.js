
var wid = $( window ).width();
    hgt = $( window ).height();

function draw(topSix, score) {
    $("body").empty();
    $("body").append('<h3 style="text-align:center;margin-top:4%;"> 测试结果 </h3>' +
                     '<div id="chart" style="margin-top:5%;margin-left:5%;display:inline-block;"></div>');
    var size = Math.min(wid, hgt);
    if(wid > hgt) {
        size = size * 0.8;
    }
    var config = {
        w: size - 200,
        h: size - 200,
        maxValue: 100,
        levels: 5,
        ExtraWidthX: 200
    }
    RadarChart.draw("#chart", topSix, config);
}
