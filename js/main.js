$(document).ready(function() {
	
	$("#d-mytaobao").mouseover(function() {
		$(this).css('background-color', '#fff');
		$("#d-mytaobao div").removeClass('yingchang');
		$("#d-mytaobao div").addClass('xianshi');

	});
	$("#d-mytaobao").mouseout(function() {
		$(this).css('background-color', '#f2f2f2');
		$("#d-mytaobao div").removeClass('xianshi');
		$("#d-mytaobao div").addClass('yingchang');
	});

	$("#d-mark").mouseover(function() {
		$(this).css('background-color', '#fff');
		$("#d-mark div").removeClass('yingchang');
		$("#d-mark div").addClass('xianshi');

	});
	$("#d-mark").mouseout(function() {
		$(this).css('background-color', '#f2f2f2');
		$("#d-mark div").removeClass('xianshi');
		$("#d-mark div").addClass('yingchang');
	});

	$("#d-shop").mouseover(function() {
		$(this).css('background-color', '#fff');
		$("#d-shop div").removeClass('yingchang');
		$("#d-shop div").addClass('xianshi');

	});
	$("#d-shop").mouseout(function() {
		$(this).css('background-color', '#f2f2f2');
		$("#d-shop div").removeClass('xianshi');
		$("#d-shop div").addClass('yingchang');
	});


});