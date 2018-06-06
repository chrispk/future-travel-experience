---
layout: default
title: On The Ground
permalink: /on-the-ground/
---

<div class="fte-content-bg bg-otg-news visible-md visible-lg">
  <div class="container fte-content-bg-box-shadow"></div>
</div>
<div class="fte-content">
	<section class="section">
		<div class="container news-lead">
			<div class="row">
				<div class="col-md-8">
					{%- include news-lead.html -%}
				</div>
				<div class="col-md-4">
					{%- include sidebar-lead.html -%}
				</div>
			</div>
		</div>
	</section>
<div class="clearfix"></div>
<div class="container">
	<?php include ('inc/ticker-bar.php'); ?>

</div>

<br />

<div class="container"> 
  <div class="row">
    <div class="col-md-8">
      <?php include ('inc/news-featured.php'); ?>
    </div>
    <div class="col-md-4">
      <?php include ('inc/sidebar-events-next.php'); ?>
      <?php include ('inc/sidebar-events-more.php'); ?>
    </div>
  </div>
</div>

<br />

<?php include ('inc/ad-row.php'); ?>


<?php include ('inc/news-home.php'); ?>

<br />

<?php include ('inc/events-slider.php'); ?>

<br />

<?php include ('inc/news-home-2.php'); ?>

<?php include ('inc/social-media.php'); ?>

<?php include ('inc/subscribe-bar.php'); ?>

<?php include ('inc/footer.php'); ?>

</div>