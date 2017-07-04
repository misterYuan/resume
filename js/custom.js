// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/tm-bg-slide-1.jpg", 
	 		 "images/tm-bg-slide-2.jpg",
			 "images/tm-bg-slide-3.jpg"
	 			], 	{duration: 2600, fade: 1300});
		});
})
// $(function () {
// 	$('body').css({'background-image': "url(images/tm-bg-slide-1.jpg)"});
// })