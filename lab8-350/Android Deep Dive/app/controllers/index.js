function shareViaIntent() {
	// hide keyboard
	Ti.UI.Android.hideSoftKeyboard();
	
	// the type parameter defines the mime type of the data to be shared
    var intent = Ti.Android.createIntent({
        action: Ti.Android.ACTION_SEND,
        type: 'text/plain'
    });
    //Android developer docs provide info on required and optional extra data fields with intents
    intent.putExtra(Ti.Android.EXTRA_SUBJECT, 'Sharing via Intent');
    intent.putExtra(Ti.Android.EXTRA_TEXT, $.text.value);
    try {
        // Start the activity and pass the intent object
        Ti.Android.currentActivity.startActivity(intent);
    } catch (ex) {
        // Handle Exception if no suitable apps installed
        Ti.UI.createNotification({
        	message: 'No sharing apps installed!',
        	duration: Ti.UI.NOTIFICATION_DURATION_LONG
        }).show();
    }
}

$.index.open();
