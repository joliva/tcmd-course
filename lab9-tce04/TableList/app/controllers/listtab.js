/*

Add an itemclick event listener to your list. On each click:
Log a message to the console stating that "Item # was clicked" where # is the row number
If the user clicks on the image, change the image to show the /dark_star.png graphic. You will need a reference to
the item, to update its leftimage.image property. Don't forget to update the item by calling the section's updateItemAt()
method
*/

function listClick(e) {
	Ti.API.info('Item ' + e.itemIndex + ' was clicked');
	
	if (e.bindId == 'leftimage') {
		var row = e.section.getItemAt(e.itemIndex);
		row.leftimage.image = '/dark_star.png';
		
		e.section.updateItemAt(e.itemIndex, row);
	}
}

(function() {
	var data = [];
	
	for (var i = 0; i < 50; i++) {
		args={};
		args.heading = { text: 'Item ' + i };
		args.subheading = { text: 'This is a subtitle' };
		args.leftimage = (i%2) ? {image: '/dark_heart.png'} : {image: '/dark_skull.png'};
		args.template = (i%2) ? 'odd' : 'even';
		args.i = i;
	    data.push(args);
	}
		
	$.section.insertItemsAt(0, data);
})();