<?php if ( ! defined('URL_BASE')) exit; 
$moviments = new MainController();
$moviments = $moviments->buscaSaldo();
?>

<div class="wrap">
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <script type="text/javascript">var moviments = JSON.parse('<?= json_encode($moviments);?>');</script>
  <script src="<?php echo URL_BASE ?>/app/views/home/dashboard.js"></script>
	<div id="curve_chart" style="width: 100%; height: 500px;"></div>
</div> 