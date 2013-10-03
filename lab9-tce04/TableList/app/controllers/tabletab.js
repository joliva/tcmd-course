/*

Add a click event listener to your table. On each click:
Log a message to the console stating that "Row # was clicked" where # is the row number
If the user clicks on the image, change the image to show the /dark_star.png graphic
*/

function tableClick(e) {
	Ti.API.info('Row ' + e.index + ' was clicked');
	Ti.API.info(e.source);
	if (e.source.id == 'leftimage') {
		e.source.image = '/dark_star.png';
	}
}

(function() {
	var data = [];
	
	for (var i=0; i<50; i++) {
		var args={};
		args.heading = 'Row ' + i;
		args.subheading = 'This is a subtitle';
		args.i = i;
		
		data.push(Alloy.createController('tablerow', args).getView());
	}
	
	$.table.data = data;
})();