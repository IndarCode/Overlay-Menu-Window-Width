(function(){

	var winHeight = $(window).height();
	var winWidth = $(window).width();

	$('body holder').css({'width':winWidth });
	$('.container').css({'width': winWidth + 38 , 'height' : winHeight });

})();