$(function() {
	var current = 0;
	var imgs = $('img.roll-img')
	var total = imgs.length;
	imgs.hide();
	$('img.active').show();
	$('#previous').on('click', function() {
        current = (current-1+total) % total;
        imgs.hide();
        imgs.eq(current).show();
	});
	$('#next').on('click', function() {
        current = (current+1) % total;
        imgs.hide();
        imgs.eq(current).show();
	});
});