(function($){
	'use strict';

	var $grveBar = $('#grve-theme-bar'),
		$bar = $grveBar.find('.grve-bar'),
		$closeBtnPopup = $grveBar.find('.grve-popup-close-btn'),
		$closeBtn = $grveBar.find('.grve-bar-close-btn'),
		$openBtn = $grveBar.find('.grve-bar-open-btn'),
		$modalBtn = $grveBar.find('.grve-bar-modal-btn'),
		$popUp = $grveBar.find('.grve-bar-popup'),
		$shareBtn = $grveBar.find('.grve-bar-share-btn'),
		themeBarCookie = 'grve-theme-bar';


	$closeBtn.on('click',function( event ){
		var $that = $(this);
		event.preventDefault();
		$that.addClass('hide');
		$popUp.removeClass('open');
		$bar.fadeOut(300,function(){
			$openBtn.addClass('show');
			$grveBar.addClass('hide');
		});
		if ( document.cookie.indexOf( themeBarCookie ) < 0 ) {
			var theDate = new Date(),
				later = new Date( theDate.getTime() + 1*24*60*60*1000 );
			document.cookie = themeBarCookie + '=true; SameSite=Lax; Path=/; Expires=' + later.toGMTString()+';';
		}
	});

	$openBtn.on('click',function( event ){
		var $that = $(this);
		event.preventDefault();
		$that.removeClass('show');
		$bar.fadeIn(300,function(){
			$closeBtn.removeClass('hide');
			$grveBar.removeClass('hide');
		});
	});

	$modalBtn.on('click',function( event ){
		event.preventDefault();
		$popUp.addClass('open');
		$shareBtn.removeClass('open');
		var $scroller = $popUp.find('.grve-popup-scroller');
		$scroller.scrollTop(0);
	});

	$shareBtn.on('click', '.grve-bar-icon-btn',function( event ){
		event.preventDefault();
		$shareBtn.addClass('open');
		$popUp.removeClass('open');
	});

	$closeBtnPopup.on('click', function( event ){
		event.preventDefault();
		if ( $popUp.hasClass('open') ) {
			$popUp.removeClass('open');
		}
	});

	$(document).on('click', function(event) {
		if ( !$(event.target).closest('#grve-theme-bar').length && $popUp.hasClass('open') ) {
			$popUp.removeClass('open');
		}
	});

	$(document).on('click', function(event) {
		if ( !$(event.target).closest('#grve-theme-bar').length && $shareBtn.hasClass('open') ) {
			$shareBtn.removeClass('open');
		}
	});

	$(function() {
		if ( document.cookie.indexOf( themeBarCookie ) < 0 ) {
			setTimeout(function(){
				$bar.fadeIn(300,function(){
					$closeBtn.removeClass('hide');
				});
			},6000);
		} else {
			$openBtn.addClass('show');
		}
	});

})(jQuery);