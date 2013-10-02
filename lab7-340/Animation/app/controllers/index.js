var animation = require('alloy/animation');

function boxClick(e) {
	var box = e.source;
	
	switch(box) {
	case $.box1:
		$.box1.animate({
			opacity: 0,
			duration: 2000
		}, function() {
			$.box1.animate({
				opacity: 1,
				duration: 2000
			});
		});
		break;
	case $.box2:
		var top = $.box2.top;
		$.box2.animate({
			top: Ti.Platform.displayCaps.platformHeight + 20,
			duration: 2000
		}, function() {
			$.box2.animate({
				top: top,
				duration: 2000
			});
		});
		break;
	case $.box3:
		animation.shake($.box3, 30);
		break;
	}
}

$.index.open();
