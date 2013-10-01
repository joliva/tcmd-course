// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

if (OS_IOS) {
	// Function to test if device is iOS 7 or later
	function isIOS7Plus() {
		// iOS-specific test
		if (Titanium.Platform.name == 'iPhone OS') {
			var version = Titanium.Platform.version.split(".");
			var major = parseInt(version[0],10);

			// Can only test this support on a 3.2+ device
			if (major >= 7)
			{
				return true;
			}
		}
		return false;
	}
	
	if (isIOS7Plus() == true) {
		Alloy.CFG.isIOS7Plus = true;
		
		var statusBarHeight = 20;	// from IOS documentation
		Alloy.CFG.winTopOffset = statusBarHeight;		
	} else {
		Alloy.CFG.isIOS7Plus = false;
		Alloy.CFG.winTopOffset = 0;
	}
	
	Ti.UI.setBackgroundColor('#dcdcdc');	// used to set window default background color
} else {
	Alloy.CFG.winTopOffset = 0;
}
