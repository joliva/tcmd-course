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