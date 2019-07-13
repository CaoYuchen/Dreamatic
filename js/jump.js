$(function() {
	$("#preview").on("click touchstart",function(e) {
		// e.preventDefault();
		window.location.href = "./Gallery/Random.html";
	})
	$("#category").on("click touchstart",function() {
		window.location.href = "./category.html";
	})
	// $("#community").on("click touchstart",function() {
	// 	window.location.href = "./community.html";
	// })

	$("#buy").on("click touchstart",function() {
		$("#buyPage").show();
		$(".modual").hide();
	})

	$("#buyButton").on("click touchstart",function() {
		$("#buyPage").hide();
		$(".modual").show();
	})

	$("#developers").on("click touchstart",function() {
		$("#developerPage").show();
		$(".modual").hide();
	})
	$("#community").on("click touchstart",function() {
		$("#communityPage").show();
		$(".modual").hide();
	})
	$("#care").on("click touchstart",function() {
		$("#carePage").show();
		$(".modual").hide();
	})
	$(".OKButton").on("click touchstart",function() {
		$("#developerPage").hide();
		$("#carePage").hide();
		$("#communityPage").hide();
		$(".modual").show();
	})
})