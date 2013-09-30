var args = arguments[0] || {};

$.leftImage.image = 'image' + args.leftVal.toUpperCase() + '.png';
$.leftImage.myImage = args.leftVal;
$.rightImage.myImage = args.rightVal;
$.title.text = args.title
$.subtitle.text = args.subtitle;

$.row.handleClick = function(src) {
	// update image
	switch (src.id) {
	case 'leftImage':
			switch (src.myImage) {
			case 'a':
					src.myImage = 'b';
					src.image = 'imageB.png';
					break;
			case 'b':
					src.myImage = 'c';
					src.image = 'imageC.png';
					break;
			case 'c':
					src.myImage = 'a';
					src.image = 'imageA.png';
					break;
			}
			break;
	case 'rightImage':
			switch (src.myImage) {
			case 'blue':
					src.myImage = 'red';
					src.image = 'notificationUnreadBadge.png';
					break;
			case 'red':
					src.myImage = 'blue';
					src.image = 'notificationBadge.png';
					break;
			}
			break;
	}
}