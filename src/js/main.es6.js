(function($) {
	sliderResizing();
	$('.topLine__socItem_hide').on('click', menuResizing);
	$(window).resize(sliderResizing);
	$('.topLine__menuItem').on('click', mainMenuSwitch);

	activeToggle('.aboutMe__selfInfoWrap .fa', 'aboutMe_active')
	$('.experience__button').on('click', slideAddBlock);	
	slidePortOverlay('.portfolio__imgWrap', '.portfolio__overlay');





	function slidePortOverlay(elem, child){

		$(elem).hover(
			function(){
				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				$(this).find(child).slideDown(function(){
					$(this).find('.portfolio__linkBlock')
						.css("display", "block")
						.addClass('animated fadeInUp');
					$(this).find('.portfolio__link:first-child')
						.css("display", "inlineBlock")
						.addClass('animated bounceInLeft');
					$(this).find('.portfolio__link:last-child')
						.css("display", "inlineBlock")
						.addClass('animated bounceInRight');
				});
			},
			function(){
				$(this).find(child).slideUp(function(){
					$(this).find('.portfolio__linkBlock')
						.css("display", "none")
						.removeClass('animated fadeInUp');
				});
			}
		);
	}

	function slideAddBlock(e){
		let elem =	$(this).closest('.experience__item').children('.experience__additionBlock');
		let btn =	$(this).closest('.experience__item').children('.experience__button');
		if(elem.hasClass('active')){
			$(this).closest('.experience__item').css("borderRadius", '5px');
			elem.removeClass('active');
			btn.text('Read More');
			elem.slideUp();
		}
		else{
			$(this).closest('.experience__item').css("borderRadius", '5px 5px 0 0');
			elem.addClass('active');
			btn.text('Close');
			elem.slideDown();
		}
	}


	function activeToggle( target, myClass){
		$(target).hover(
			function(){
				$(this).addClass(myClass);
			},
			function(){
				$(this).removeClass(myClass);
			}
		)
	}


	function mainMenuSwitch(e){
		e.preventDefault();
		let selectorId = ($(this).attr('data-menu'));
		$('.main__item').hide();
		$(selectorId).show();
		let faClass = $(this).find('.fa').attr('class');
		let menuTxt = $(this).find('.topLine__linkDisc').text();
		$('.slider__circleFa').fadeOut(function(){
			$(this).removeClass().addClass('slider__circleFa '+ faClass);
		}).fadeIn();
		$('.slider__header').fadeOut(function(){
			$(this).text(menuTxt);	
		}).fadeIn(1500);
	}

	function sliderResizing(){
		let wh = $(window).height();
		let topMenuHeight = $('.topLine').height();
		let sliderHeight = $('.slider').height(wh - topMenuHeight);
	}

	function menuResizing(e){
		e.preventDefault();
		let btn = $(this).find('.fa');
		console.log(btn);
		if($(btn).hasClass('fa-chevron-down')){
			$(btn).removeClass('fa-chevron-down');
			$(btn).addClass('fa-chevron-up');
			$('.topLine__socItem').slideDown();
		}
		else{
			$(btn).addClass('fa-chevron-down');
			$(btn).removeClass('fa-chevron-up');	
			$('.topLine__socItem:not(.topLine__socItem_hide)').slideUp();
		}
	}




})(jQuery);


// {
// 	{
// 		"name": "json",
// 		"color": #3f3b59;
// 		"link":
// 	}
// 	{
// 		"name": "jquery",
// 		"color": #0768ac;
// 		"link":
// 	}
// 	{
// 		"name": "js",
// 		"color": #f0db4f;
// 		"link":
// 	}

// 	{
// 		"name": "bem",
// 		"color": #309ed8;
// 		"link":
// 	}

// 	{
// 		"name": "svg",
// 		"color": #c76000;
// 		"link":
// 	}

// 	{
// 		"name": "canvas",
// 		"color": #a23200;
// 		"link":
// 	}

// 	{
// 		"name": "ajax",
// 		"color": #016dc5;
// 		"link":
// 	}
// 	{
// 		"name": "silver",
// 		"color": #000;
// 		"link":
// 	}

// 	{
// 		"name": "react",
// 		"color": #64e3ff;
// 		"link":
// 	}

// 	{
// 		"name": "photoshop",
// 		"color": #1d498c;
// 		"link":
// 	}

// 	{
// 		"name": "mocha",
// 		"color": #8a6343;
// 		"link":
// 	}

// 	{
// 		"name": "git",
// 		"color": #f05033;
// 		"link":
// 	}

// 	{
// 		"name": "wp",
// 		"color": #00a7da;
// 		"link":
// 	}

// 	{
// 		"name": "npm",
// 		"color": #cb3837;
// 		"link":
// 	}

// 	{
// 		"name": "bootstrap",
// 		"color": #62488a;
// 		"link":
// 	}

// 	{
// 		"name": "sass",
// 		"color": #cc6699;
// 		"link":
// 	}

// 	{
// 		"name": "bower",
// 		"color": #ffcc2f;
// 		"link":
// 	}

// 	{
// 		"name": "css",
// 		"color": #0070bb;
// 		"link":
// 	}

// 	{
// 		"name": "gulp",
// 		"color": #eb4a4b;
// 		"link":
// 	}

// 	{
// 		"name": "html",
// 		"color": #e44d26;
// 		"link":
// 	}




// }