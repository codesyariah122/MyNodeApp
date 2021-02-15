$(document).ready(function(){
	$('.card-about').hide('slow').slideUp(1000);

	$('#card-about').on('click', function(){
		$('.card-about').show('slow').fadeIn(1000);
		$('#card-about').hide('slow').slideUp(1000);
	})

	$('.card-contact').hide('slow').slideUp(1000);

	$('#card-contact').on('click', function(){
		$('.card-contact').show('slow').fadeIn(1000);
		$('#card-contact').hide('slow').slideUp(1000);
	})

	$('body').css({
		'background': 'url("images/bg-2.jpg")',
		'background-attachment': 'fixed',
		'background-position': 'center',
		'background-repeat': 'no-repeat',
		'background-size': 'cover',
		'height': '100vh',
	})

	$('button').on('click', function(){
		let button = $(this).attr('id');

		switch(button){
			case "home":
				url = '/';
			break;

			case "back-home":
				url = '/';
			break;

			case "about":
				url = '/about';
			break;

			case "contact":
				url = '/contact';
			break;
		}

		location.replace(url);

	})
})