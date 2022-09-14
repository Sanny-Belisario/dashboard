google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var grafico = [];
    //var titulo = [['Data', 'Entrada', 'Saída']];
    //    grafico.push(titulo);
        
    //console.log(moviments);
    //console.log(moviments[0]);
    moviments[0].forEach((item) => {
        //console.log(item.Input);
        if(item.dateInput = item.dateOutput){
            var dataE = item.dateInput.split("-");
            var dataFormat =  dataE[0];
            var dataS = item.dateOutput.split("-");
            var dataFormat =  dataS[0];
            //console.log([parseInt(dataFormat, 10), parseFloat(item.valorInput), parseFloat(item.valorOutput)]);
            grafico.push([parseInt(dataFormat, 10), parseFloat(item.valorInput), parseFloat(item.valorOutput)]);
        }
    })
    console.log(grafico);
    //var data = google.visualization.arrayToDataTable([grafico]);
    //console.log(data);
    var graficoNovo = grafico.map(Number);
    var data = google.visualization.arrayToDataTable([
        graficoNovo
      ]);
    var options = {
        title: 'Entradas e Saídas',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}