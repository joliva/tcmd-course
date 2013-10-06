var Paypal = require('ti.paypal');

var win = Ti.UI.currentWindow;
var u = Ti.Android != undefined ? 'dp' : 0;

var status = Ti.UI.createLabel({
    top: 50 + u, height: 45 + u, color: '#333',
    text: 'Loading, please wait...'
});
win.add(status);

var button;
function addButtonToWindow() {
    if (button) {
        win.remove(button);
        button = null;
    }
    button = Paypal.createPaypalButton({
        // NOTE: height/width only determine the size of the view that the button is embedded in - the actual button size
        // is determined by the buttonStyle property!
        width: 194 + u, height: 37 + u,
        buttonStyle: Paypal.BUTTON_194x37, // The style & size of the button
        bottom: 50 + u,

        language: 'en_US',
        textStyle: Paypal.PAYPAL_TEXT_DONATE, // Causes the button's text to change from "Pay" to "Donate"

        //appID: '<<<YOUR APP ID HERE>>>', // The appID issued by Paypal for your application; for testing, feel free to delete this property entirely.
        paypalEnvironment: Paypal.PAYPAL_ENV_SANDBOX, // Sandbox, None or Live

        feePaidByReceiver: false,
        enableShipping: false, // Whether or not to select/send shipping information

        preapprovalKey: '<<YOUR PREAPPROVAL KEY HERE>>', // Don't know how to get a PreApproval key? See the note below.
        preapproval: { // The payment itself
            type: Paypal.PREAPPROVAL_TYPE_AGREE_AND_PAY, // The type of PreApproval
            currency: 'USD',
            ipnUrl: 'http://www.appcelerator.com/',
            merchantName: 'Dev Tools',
            memo: 'For the orphans and widows in the world!'
        }
    });

    // Events available
    button.addEventListener('paymentCancelled', function (e) {
        status.text = 'Payment Cancelled.';
        // The button should only be used once; so after a payment is cancelled, succeeds, or errors, we must redisplay it.
        addButtonToWindow();
    });
    button.addEventListener('paymentSuccess', function (e) {
        status.text = 'Payment Success.  TransactionID: ' + e.transactionID + ', Reloading...';
        // The button should only be used once; so after a payment is cancelled, succeeds, or errors, we must redisplay it.
        addButtonToWindow();
    });
    button.addEventListener('paymentError', function (e) {
        status.text = 'Payment Error,  errorCode: ' + e.errorCode + ', errorMessage: ' + e.errorMessage;
        // The button should only be used once; so after a payment is cancelled, succeeds, or errors, we must redisplay it.
        addButtonToWindow();
    });
    button.addEventListener('unknownResponse', function (e) {
        status.text = 'Unknown Response, statusCode: ' + e.statusCode;
        // The button should only be used once; so after a payment is cancelled, succeeds, or errors, we must redisplay it.
        addButtonToWindow();
    });

    button.addEventListener('buttonDisplayed', function () {
        status.text = 'The button was displayed!';
    });
    button.addEventListener('buttonError', function () {
        status.text = 'The button failed to display!';
    });

    win.add(button);
}
addButtonToWindow();

/*
    Getting a PreApproval key is pretty simple. You will need to set up your server to make a request to PayPal's
    servers. Your request might look something like the below.
    
    Please look at PayPal's documentation to find out more.
    
    var http = Ti.Network.createHTTPClient({
    	onload: function(evt) {
            Ti.API.info('success!');
            alert(this.responseText);
            Ti.API.info(this.responseText);
        },
        onerror: function(evt) {
            Ti.API.info('error...' + evt);
            alert(evt);
        }
    });
    http.open('POST', 'https://svcs.sandbox.paypal.com/AdaptivePayments/Preapproval');
    
    var payload = 'requestEnvelope.errorLanguage=en_US' +
        '&cancelUrl=http://appc.me/' +
        '&returnUrl=http://appc.me/' +
        '&currencyCode=USD' +
        '&startingDate=2011-11-10' +
        '&endingDate=2011-11-15' +
        '&maxAmountPerPayment=30' +
        '&maxNumberOfPayments=4' +
        '&maxTotalAmountOfAllPayments=120' +
        '&pinType=NOT_REQUIRED' +
        '&senderEmail=<< YOUR BUYER EMAIL ID >>';
    
    http.setRequestHeader('charset', 'utf-8');
    http.setRequestHeader('Content-Type', 'text/xml');
    http.setRequestHeader('X-PAYPAL-DEVICE-IPADDRESS', '127.0.0.1');
    http.setRequestHeader('X-PAYPAL-APPLICATION-ID', 'APP-80W284485P519543T');
    http.setRequestHeader('X-PAYPAL-RESPONSE-DATA-FORMAT', 'JSON');
    http.setRequestHeader('X-PAYPAL-REQUEST-DATA-FORMAT', 'NV');
    http.setRequestHeader('X-PAYPAL-SECURITY-SIGNATURE', '<< YOUR API SIGNATURE >>');
    http.setRequestHeader('X-PAYPAL-SECURITY-PASSWORD', '<< YOUR API PASSWORD >>');
    http.setRequestHeader('X-PAYPAL-SECURITY-USERID', '<< YOUR API USERNAME >>');
    
    http.send(payload);
    
*/