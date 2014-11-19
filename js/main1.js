$('#background_cycler').hide();
function cycleImages(){
	// $('#caption .type').empty();
	var $active = $('#background-slider .active');
	var $next = ($('#background-slider .active').next().length > 0) ? $('#background-slider .active').next() : $('#background-slider img:first');
	$next.css('z-index',2);//move the next image up the pile
	$active.fadeOut(2000,function(){//fade out the top image
		$active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
		$next.css('z-index',3).addClass('active');//make the next image the top one
	});
};

$(window).load(function(){
	$('#background-slider').fadeIn(2000);//fade the background back in once all the images are loaded
});

var text = $('#background-slider .active').data('title');
$('#caption span.type').typed({
	// strings: [text],
	strings: ['Artists','Designers','Directors','Musicians','Photographers','Writers'],
	typeSpeed: 40,
	colors: ['#f29f81','#704638','#c87e57','#f7d693','#f87a6c','#976d5d'],
	backDelay: 2200,
	loop: true,
	callback: function(){
		console.log('Typed finished');
		// setInterval('cycleImages()', 3500);
	},
	reachedCallback: function(){
		console.log('Reached');
		cycleImages();
	}
});
