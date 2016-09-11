/* Dynamic top menu positioning
 *
 */

var num = 50; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});

//USE SCROLL WHEEL FOR THIS FIDDLE DEMO

//mobile menu active
$(function(){
		$('nav').slicknav();
	});