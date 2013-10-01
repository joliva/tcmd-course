var images = [],
	notes = [];

notes[0] = 'Together Through Life is the 33rd studio album by Bob Dylan, released on April 28, 2009, on Columbia Records. The album debuted at number one in several countries, including the U.S. and the UK. It is Dylan\'s first number one in Britain since New Morning in 1970.';
notes[1] = "Rumors of the album, reported in Rolling Stone magazine, came as a surprise, with no official press release until March 16, 2009 ‚Äî less than two months before the album's release date.";
notes[2] = "In a conversation with music journalist Bill Flanagan, published on Bob Dylan's official website, Flanagan suggested a similarity of the new record to the sound of Chess Records and Sun Records, which Dylan acknowledged as an effect of 'the way the instruments were played.'";

images[0] = '/dylan.png';
images[1] = '/dylan1.png';
images[2] = '/dylan2.png';

var iIndex = 0,
	nIndex = 0;

// handle the swipe event -- change the liner notes 
// to a random member of the notes array
$.linernotes.addEventListener('swipe', function(e) {
	var index;
	
	while ( (index = Math.round(Math.random() * 2)) == nIndex) {}
	nIndex = index;
	$.linernotes.text = notes[index];
});


// handle the shake event -- change the cover art image
// to a random member of the images array
Ti.Gesture.addEventListener('shake', function(e) {
	var index;
	
	while ( (index = Math.round(Math.random() * 2)) == iIndex) {}
	iIndex = index;
	$.coverart.image = images[index];
});

// handle the orientation change event
// by moving elements to new locations
Ti.Gesture.addEventListener('orientationchange', function(e) {	
	if (Ti.Gesture.isPortrait() == true) {
		// portrait
		$.artist.top='260dp';
		$.artist.left=null;
		$.coverart.top='10dp';
		$.coverart.left=null;
		$.linernotes.left=null;
		$.linernotes.bottom='10dp';
		$.linernotes.width='240dp';
	} else {
		// landscape
		$.artist.top='240dp';
		$.artist.left='250dp';
		$.coverart.top=null;
		$.coverart.left='10dp';
		$.linernotes.left='260dp';
		$.linernotes.bottom= (OS_IOS == true) ? '20dp' : '40dp';
		$.linernotes.width='200dp';
	}
});

$.linernotes.text = notes[0];
$.coverart.image = images[0];

$.index.open();
