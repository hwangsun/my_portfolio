/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main');

	var filter = "win16|win32|win64|mac|macintel"; 
	if ( navigator.platform ) { 
		if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) { 				
			// Height fix (mostly for iOS).
			window.setTimeout(function() {
				$window.scrollTop($window.scrollTop() + 1);
			}, 0);
		} 
	}

// Footer.	
	var doit;
	$window.on('load', function () {

		var windowWidth = $window.width();
		
		if(windowWidth <= 980) {
			$footer.insertAfter($main);
		} 
		else {
			$footer.appendTo($header);
		}

		$(window).bind("resize", function(event) {
			if (this == event.target){
				
				clearTimeout(doit);
				doit = setTimeout(function() {
					windowWidth = $window.width();
					
					if(windowWidth <= 980) {
						$footer.insertAfter($main);
					} 
					else {
						$footer.appendTo($header);
					}
				}, 100);
			}
		});
	});

})(jQuery);