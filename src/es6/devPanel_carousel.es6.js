module.exports = function($) {
	


	setTimeout(function(){

		$('.courses').owlCarousel({
			items: 5,
			pagination: false,
			navigation: true
		});
		$('.owl-prev').addClass('svg__lnr-chevron-right');
	}, 1000);


};