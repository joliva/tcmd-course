function tableClick(e) {
	Ti.API.info('Row ' + e.index + ' was clicked');
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