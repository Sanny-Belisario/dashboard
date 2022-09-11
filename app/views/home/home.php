<?php if ( ! defined('URL_BASE')) exit; ?>

<!--Load the AJAX API-->
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript">
	google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

	function drawChart() {
		var jsonData = $.ajax({
          url: "controller/MovimentsController/buscaSaldo",
          dataType: "json",
		  type: "GET",
          async: false
          }).responseText;
          
      // Create our data table out of JSON data loaded from server.
      var data = new google.visualization.DataTable(jsonData);

	  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
	  chart.draw(data, {width: 400, height: 240});
	}
</script>
<div class="wrap">
	<div id="chart_div" style="width: 100%; height: 500px;"></div>
</div> 