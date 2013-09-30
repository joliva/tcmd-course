(function() {
	var rows = [];
	
	for (var i=0; i<8; i++) {
		var args = {};
		args.title = 'This is row ' + i;
		args.subtitle = 'Subtitle ' + i;
		args.leftVal = (i%2 == 0) ? 'a' : 'b';
		args.rightVal = 'blue';
		
		var row = Alloy.createController('row', args).getView();
		row.number = i;
		rows.push(row);
	}
	
	var args = {};
	args.title = 'This is last row';
	args.subtitle = 'The last subtitle';
	args.leftVal = 'c';
	args.rightVal = 'blue';
	
	var row = Alloy.createController('row', args).getView();
	row.number = 'last';
	rows.push(row);
	
	$.tblview.data = rows;
	
	$.tblview.addEventListener('click', function(e) {
		e.row.handleClick(e.source);
	});
})();

$.index.open();
