$(function($){
	$.supersized({
		// Functionality
		slide_interval          :   8000,		// Length between transitions
		transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	2000,		// Speed of transition
		// Components							
		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		slides 					:  	[			// Slideshow Images
		{image : 'pic/slide/V0.2/This_Night.jpg'},
		{image : 'pic/slide/V0.2/This_Dawn.jpg'},
		{image : 'pic/slide/V0.2/00000569.jpg'},
		{image : 'pic/slide/V0.2/00000321.jpg'},
		{image : 'pic/slide/V0.2/00000144.jpg'},
		{image : 'pic/slide/V0.2/00000064.jpg'},
		{image : 'pic/slide/V0.2/00000058.jpg'},
		{image : 'pic/slide/V0.2/00000065.jpg'},
		{image : 'pic/slide/FISH_ShuiMo_1.png'},
		{image : 'pic/slide/Scene-5-enslaved.jpg'},
		{image : 'pic/slide/Scene-1-Birth.jpg'},
		{image : 'pic/slide/Scene-3-lost.jpg'},
		{image : 'pic/slide/Scene-4-exhaust.jpg'},
		{image : 'pic/slide/FISH_screenshot_00.jpg'},
		{image : 'pic/slide/FISH_screenshot_07.jpg'},
		{image : 'pic/slide/FISH_screenshot_12.jpg'},
		{image : 'pic/slide/FISH_screenshot_16.jpg'},
		{image : 'pic/slide/FISH_screenshot_22.jpg'},
		{image : 'pic/slide/FISH_screenshot_01.jpg'},
		{image : 'pic/slide/4.jpg'},
		{image : 'pic/slide/5.jpg'},
		{image : 'pic/slide/6.jpg'},
		{image : 'pic/slide/7.jpg'},
		{image : 'pic/slide/8.jpg'},
		{image : 'pic/slide/9.jpg'},
		{image : 'pic/slide/10.jpg'}
		]
	});
});

$(function(){
	$('div.Menu').click(function(event) {
		event.stopPropagation();
	});
	$('div.ContentBox').click(function(event) {
		event.stopPropagation();
	});
	$(document).click(function(event) {
		$('div.ContentBox').fadeOut(1000);
	});

	$('div.ContentBoxFeedback').click(function(event) {
		event.stopPropagation();
	});
	$(document).click(function(event) {
		$('div.ContentBoxFeedback').fadeOut(1000);
	});

});


function switchTab(Locale){
$(function(){
	if(Locale == 'CN'){
		$("#MenuContentEN").css('display','none');
		$("#MenuContentCN").fadeIn(1700);
	}else if(Locale == 'EN') {
		$("#MenuContentCN").css('display','none');
		$("#MenuContentEN").fadeIn(1700);
	}
});
}

function showContent(index) {
$(function(){
	if($('#'+index+'Content').css('display') == 'none' | $('#'+index+'Content').css('display') == ''){
		$('#'+index+'Content').fadeIn(500);
		$('.ContentBox').not('#'+index+'Content').css('display','none');
	}else{
		$('#'+index+'Content').fadeOut(1000);
	}
});
}







