$(window).scroll(function() {
	var height = 
	$(window).scrollTop();
  if(height > 90) {
		$('.header').addClass('active');
	} else {
		$('.header').removeClass('active');
	}
});