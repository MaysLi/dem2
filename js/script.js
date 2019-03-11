var lineChartData = {
	//X坐标数据
	labels : ["周一","周二","周三","周四","周五","周六","周日"],
	datasets : [
		{
			//统计表的背景颜色
			fillColor : "rgba(255,255,255,0)",
			//统计表画笔颜色
			strokeColor : "#f60",
			//点的颜色
			pointColor : "#f60",
			//点边框的颜色
			pointStrokeColor : "#fff",
			//鼠标触发时点的颜色
			pointHighlightFill : "#fff",
			//鼠标触发时点边框的颜色
			pointHighlightStroke : "rgba(220,220,220,1)",
			//Y坐标数据
			data : [1,4,3,6,2,9,10]
		},
		{
			fillColor : "rgba(255,255,255,0)",
			strokeColor : "rgba(92, 184, 92, 1)",
			pointColor : "rgba(23, 126, 23, 1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(151,187,205,1)",
			data : [8,4,2,7,5,4,3]
		}
	]

}

window.onload = function(){
	var ctx = document.getElementById("canvas").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, {
		responsive: true
	});
}