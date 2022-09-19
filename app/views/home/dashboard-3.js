//Montagem do grafico
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    //Cria um table que será adicionado ao gráfico
    var data = new google.visualization.DataTable();
    //Adiciona as colunas
    data.addColumn('number', 'Dia');
    data.addColumn('number', 'Entrada');
    data.addColumn('number', 'Saída');

    var grafico = [];

    //Passa por todos os dados do json para popular o grafico
    moviments[0].forEach((item) => {
        var input;
        var data;
        //Pega apenas o dia da data
        var dataN = item.data.split("-");
        data = dataN[2];
        //Pega o valor de entrada
        var valorI = Math.trunc(item.valorInput);
        input = JSON.parse(JSON.stringify(valorI));
        //Pega o valor de saída
        var valorO = Math.trunc(item.valorOutput);
        var output = JSON.parse(JSON.stringify(valorO));
        //Adiciona no grafico
        grafico.push([parseInt(data), parseInt(input), parseInt(output)]);
    })

    data.addRows(grafico);

    var options = {
        title: "Density of Precious Metals, in g/cm^3",
        width: 600,
        height: 400,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chart.draw(data, options);
}