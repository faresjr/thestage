$(function (){
	"use strict";
	// adjust slider
	var winH = $(window).height(),
		navH = $(".navbar").innerHeight();	
	$(".slider, .carousel-item").height(winH - navH);
	// featured work shuffle
	$(".featured-works ul li").on("click",function () {
		$(this).addClass("active").siblings().removeClass("active");
		if ($(this).data("class") === "all") {
			$(".shuffle-imgs .col-sm").show();
		}else {
			$(".shuffle-imgs .col-sm").hide();
			$($(this).data("class")).show();
		}
	});
});