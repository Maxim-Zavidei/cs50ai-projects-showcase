function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}

jQuery(document).ready(function() {
	
	// Display background images
	$('.top-content').backstretch(staticDir + "main/img/backgrounds/1.jpg");
	$('.section-5-container').backstretch(staticDir + "main/img/backgrounds/2.jpg");

	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});

	// Changes the background color of the navbar based on the scroll
	$('.top-content .text').waypoint(function(direction) {
		$('nav').toggleClass('navbar-no-bg');
		$('.top-nav-link').css('visibility', direction === "up" ? 'hidden' : 'visible');
	});

	$(window).on('wheel', function(event) {
		$(':focus').blur();
	});
});
