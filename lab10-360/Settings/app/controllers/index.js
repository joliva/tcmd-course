function setLayout() {
	var val = Ti.App.Properties.getBool('rtl_preference');
	if (val) {
		$.fugitiveImage.left = null;
		$.fugitiveImage.right = 10;
		$.vitalsView.left = 10;
		$.vitalsView.right = 110;
	} else {
		$.fugitiveImage.left = 10;
		$.fugitiveImage.right = null;
		$.vitalsView.left = 110;
		$.vitalsView.right = 10;
	}
}

Ti.App.addEventListener('resume', function() {
	setLayout();
});

setLayout();
$.index.open();
