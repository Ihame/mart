$(document).ready(function(){
	$(".cars").click(function(){
	$(".product_gallery>li").hide();
	$(".car_cat").fadeIn("slow");
});
		$(".vintage").click(function(){
	$(".product_gallery>li").hide();
	$(".vintage_cat").fadeIn("slow");
});
			$(".trucks").click(function(){
	$(".product_gallery>li").hide();
	$(".truck_cat").fadeIn("slow");
});
				$(".sports").click(function(){
	$(".product_gallery>li").hide();
	$(".sport_cat").fadeIn("slow");
});
	$(".all").click(function(){
	$(".product_gallery>li").fadeIn("slow");
});

});
