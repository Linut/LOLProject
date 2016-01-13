$(function(){
	$("#com-main-head>div:nth-of-type(1)").addClass('com-main-header');
	var index;
	$(".com-main-heador").mouseover(function(){
		$(this).addClass('com-main-header').siblings().removeClass('com-main-header');
		index = $(this).attr('value');
		 $("#com-main-"+index).css("display","block").siblings().css("display","none");
	});
});