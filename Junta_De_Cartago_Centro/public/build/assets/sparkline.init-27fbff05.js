import"./jquery.sparkline.min-a397d84d.js";$(document).ready(function(){var a=function(){var r=["#6658dd","#1abc9c"],o=$("#sparkline1").data("colors");o&&(r=o.split(",")),$("#sparkline1").sparkline([0,23,43,35,44,45,56,37,40],{type:"line",width:"100%",height:"165",chartRangeMax:50,lineColor:r[0],fillColor:C(r[0],.3),highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)",maxSpotColor:!1,minSpotColor:!1,spotColor:!1,lineWidth:1}),$("#sparkline1").sparkline([25,23,26,24,25,32,30,24,19],{type:"line",width:"100%",height:"165",chartRangeMax:40,lineColor:r[1],fillColor:C(r[1],.3),composite:!0,highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)",maxSpotColor:!1,minSpotColor:!1,spotColor:!1,lineWidth:1});var r=["#4a81d4"],o=$("#sparkline2").data("colors");o&&(r=o.split(",")),$("#sparkline2").sparkline([3,6,7,8,6,4,7,10,12,7,4,9,12,13,11,12],{type:"bar",height:"165",barWidth:"10",barSpacing:"3",barColor:r});var r=["#4fc6e1","#f7b84b","#e3eaef","#f1556c"],o=$("#sparkline3").data("colors");o&&(r=o.split(",")),$("#sparkline3").sparkline([20,40,30,10],{type:"pie",width:"165",height:"165",sliceColors:r});var r=["#2d7bf4","#4eb7eb"],o=$("#sparkline4").data("colors");o&&(r=o.split(",")),$("#sparkline4").sparkline([0,23,43,35,44,45,56,37,40],{type:"line",width:"100%",height:"165",chartRangeMax:50,lineColor:r[0],fillColor:"transparent",lineWidth:2,highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)",maxSpotColor:!1,minSpotColor:!1,spotColor:!1}),$("#sparkline4").sparkline([25,23,26,24,25,32,30,24,19],{type:"line",width:"100%",height:"165",chartRangeMax:40,lineColor:r[1],fillColor:"transparent",composite:!0,lineWidth:2,maxSpotColor:!1,minSpotColor:!1,spotColor:!1,highlightLineColor:"rgba(0,0,0,1)",highlightSpotColor:"rgba(0,0,0,1)"});var r=["#e3eaef","#6c757d"],o=$("#sparkline6").data("colors");o&&(r=o.split(",")),$("#sparkline6").sparkline([3,6,7,8,6,4,7,10,12,7,4,9,12,13,11,12],{type:"line",width:"100%",height:"165",lineColor:r[0],lineWidth:2,fillColor:"rgba(227,234,239,0.3)",highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)"}),$("#sparkline6").sparkline([3,6,7,8,6,4,7,10,12,7,4,9,12,13,11,12],{type:"bar",height:"165",barWidth:"10",barSpacing:"5",composite:!0,barColor:r[1]});var r=["#36404c"],o=$("#sparkline7").data("colors");o&&(r=o.split(",")),$("#sparkline7").sparkline([4,6,7,7,4,3,2,1,4,4,5,6,3,4,5,8,7,6,9,3,2,4,1,5,6,4,3,7],{type:"discrete",width:"280",height:"165",lineColor:r});var r=["#64c5b1","#5553ce"],o=$("#sparkline8").data("colors");o&&(r=o.split(",")),$("#sparkline8").sparkline([10,12,12,9,7],{type:"bullet",width:"280",height:"80",targetColor:r[0],performanceColor:r[1]});var r=["#6658dd","#1abc9c"],o=$("#sparkline9").data("colors");o&&(r=o.split(",")),$("#sparkline9").sparkline([4,27,34,52,54,59,61,68,78,82,85,87,91,93,100],{type:"box",width:"280",height:"80",boxLineColor:r[0],boxFillColor:"transparent",whiskerColor:r[1],medianColor:r[1],targetColor:r[1]});var r=["#0acf97","#e3eaef","#ff679b"],o=$("#sparkline10").data("colors");o&&(r=o.split(",")),$("#sparkline10").sparkline([1,1,0,1,-1,-1,1,-1,0,0,1,1],{height:"80",width:"100%",type:"tristate",posBarColor:r[0],negBarColor:r[1],zeroBarColor:r[2],barWidth:8,barSpacing:3,zeroAxis:!1})},e=function(){var r=500,o=-1,f=-1,t,h=0,s=[],b=30;$("html").mousemove(function(n){var l=n.pageX,p=n.pageY;o>-1&&(h+=Math.max(Math.abs(l-o),Math.abs(p-f))),o=l,f=p});var c=function(){var n=new Date,l=n.getTime();if(t&&t!=l){var p=Math.round(h/(l-t)*1e3);s.push(p),s.length>b&&s.splice(0,1),h=0;var g=["#f1556c"],d=$("#sparkline5").data("colors");d&&(g=d.split(",")),$("#sparkline5").sparkline(s,{tooltipSuffix:" pixels per second",type:"line",width:"100%",height:"165",chartRangeMax:77,maxSpotColor:!1,minSpotColor:!1,spotColor:!1,lineWidth:1,lineColor:g,fillColor:C(g[0],.3),highlightLineColor:"rgba(24,147,126,.1)",highlightSpotColor:"rgba(24,147,126,.2)"})}t=l,setTimeout(c,r)};setTimeout(c,r)};a(),e();var i;$(window).resize(function(r){clearTimeout(i),i=setTimeout(function(){a(),e()},300)})});function C(a,e){var i=parseInt(a.slice(1,3),16),r=parseInt(a.slice(3,5),16),o=parseInt(a.slice(5,7),16);return e?"rgba("+i+", "+r+", "+o+", "+e+")":"rgb("+i+", "+r+", "+o+")"}