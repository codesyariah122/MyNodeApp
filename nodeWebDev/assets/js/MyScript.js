$(document).ready(function(){
	const homePage = $('.home').attr('href');
	if(location.href === location.href+homePage){
		alert(homePage);
	}

	$('#homepage').hide();
	$(window).scroll(function(){
	if($(this).scrollTop() > 10){
		$('.header-text').hide('slow').slideUp(1000);
		$('.header-content').hide('slow').slideUp(1000);
		$('#homepage').show('slow').fadeIn(1000);
		$('#homepage').html('<i class="fab fa-node"></i>')

		$('#brand').css({
			'font-size': '2.5rem',
			'margin-top':'-5rem',
		})
		$('header').css({
			'display':'inline-block',
			'height':'15vh',
			'background': 'rgba(0, 0, 0, 255)'		
		});
		$('.active').css({
			'height':'5vh'		
		});
		$('#home').css({
			'margin-lef': '5rem'
		});
	}else{
		$('#homepage').hide('slow').slideUp(1000);
		$('.header-text').show('slow').fadeIn(1000);
		$('.header-content').show('slow').fadeIn(1000);
		$('header').css({
			'display':'',
			'height':'35vh',
			'background': '',
		});
		$('#home').css({
			'margin-left':''
		})
	}
})


	$('body').css({
		'background':'url("./assets/images/space2.png")',
		'background-attachment':'fixed',
		'background-position':'center',
		'background-repeat':'no-repeat',
		'background-size':'cover',
		'height':'100vh'
	})
})
