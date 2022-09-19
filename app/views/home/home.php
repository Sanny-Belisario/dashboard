<?php if ( ! defined('URL_BASE')) exit; 
//Busca o controller onde traz os dados do grafico
$moviments = new MainController();
$moviment = $moviments->buscaSaldo();
?>

<div class="wrap">
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <script type="text/javascript">
    //Transforma o array do php em um json
    var moviments = JSON.parse('<?= json_encode($moviment);?>');
  </script>
  <script src="<?php echo URL_BASE ?>/app/views/home/dashboard.js"></script>
  <script src="<?php echo URL_BASE ?>/app/views/home/dashboard-2.js"></script>
  <script src="<?php echo URL_BASE ?>/app/views/home/dashboard-3.js"></script>
	<div id="curve_chart" style="width: 100%; height: 500px;"></div>
	<div id="columnchart_values" style="width: 100%; height: 500px;"></div>
	<div id="chart_div" style="width: 100%; height: 500px;"></div>
</div> 