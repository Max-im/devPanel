(function($) {

	/*1. HEADER*/
	/*==================================================*/
	
	// topLine
	// --------------------------------------------------
	$('.topLine__socItem_hide').on('click', menuResizing);



	// slider
	// --------------------------------------------------
	sliderResizing();
	$(window).resize(sliderResizing);






	/*2. MAIN*/
	/*==================================================*/
	
	// aboutMe
	// --------------------------------------------------	
	activeToggle('.aboutMe__selfInfoWrap .fa', 'aboutMe_active')




	// experience
	// --------------------------------------------------	
	tmplMaker('popup.json', '#popupTmp', '.popupInputTmpl');




	// portfolio
	// --------------------------------------------------
	var mixer = mixitup('.mixItUpWrap');
	slidePortOverlay('.portfolio__imgWrap', '.portfolio__overlay');
	$('.experience__button').fancybox({
		'overlayShow': true,
		'overlayOpacity': .6,
		'overlayColor': '#333',
		'showCloseButton': 'show'
	});



	/*3. FOOTER*/
	/*==================================================*/
	tmplMaker('skills.json', '#skillsTmp', '.tmplSkillsInput');




	/*4. COMMON*/
	/*==================================================*/
	$('.topLine__menuItem').on('click', mainMenuSwitch);
	animateScreen('.section__header', 'zoomIn')	



	/*5. FUNCTIONS*/
	/*==================================================*/

	function animateScreen(elementSelector ,effect){
		$(window).scroll( function(){
			let winHeight = $(window).height();
			let winTop = $(window).scrollTop();
			$(elementSelector).each(
				function(el){
					let elTop = $(this).offset().top;
					if((winTop+winHeight) > elTop && winTop < elTop){
						$(this).addClass('animated '+effect).css('opacity', 1);

					}else{
						$(this).removeClass('animated '+effect).css('opacity', 0);
					}
				}
			);
		});
	}


	function tmplMaker(jsonFile, inputSelector, outputSelector){
		$.getJSON('../json/'+jsonFile, function(data){
			let tmpl = $(inputSelector).html();
			let html = Mustache.to_html(tmpl, data);
			$(outputSelector).html(html);
		});
	}


	function slidePortOverlay(elem, child){
		$(elem).hover(
			function(){
				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				$(this).find(child).slideDown(function(){
					$(this).find('.portfolio__linkBlock')
						.css("display", "block")
						.addClass('animated fadeInUp');
					$(this).find('.portfolio__link:first-child')
						.css({
							display: "inlineBlock"
						})
						.addClass('animated bounceInLeft');
					$(this).find('.portfolio__link:last-child')
						.css({
							display: "inlineBlock"
						})
						.addClass('animated bounceInRight');
				});
			},
			function(){
				$(this).find(child).slideUp(function(){
					$(this).find('.portfolio__linkBlock')
						.css("display", "none")
						.removeClass('animated fadeInUp');


					$(this).find('.portfolio__link:first-child')
						.removeClass('animated bounceInLeft');
					$(this).find('.portfolio__link:last-child')
						.removeClass('animated bounceInRight');
				});
			}
		);
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

