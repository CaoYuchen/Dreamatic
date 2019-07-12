$(function() {
	$("#preview").click(function() {
		window.location.href = "./Gallery/Random.html";
	})
	$("#category").click(function() {
		window.location.href = "./category.html";
	})
	// $("#community").click(function() {
	// 	window.location.href = "./community.html";
	// })

	$("#buy").click(function() {
		$("#buyPage").show();
		$(".modual").hide();
	})

	$("#buyButton").click(function() {
		$("#buyPage").hide();
		$(".modual").show();
	})

	$("#developers").click(function() {
		$("#developerPage").show();
		$(".modual").hide();
	})
	$("#community").click(function() {
		$("#communityPage").show();
		$(".modual").hide();
	})
	$("#care").click(function() {
		$("#carePage").show();
		$(".modual").hide();
	})
	$(".OKButton").click(function() {
		$("#developerPage").hide();
		$("#carePage").hide();
		$("#communityPage").hide();
		$(".modual").show();
	})
})