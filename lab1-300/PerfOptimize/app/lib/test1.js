var test1 = {};

test1.build = function() {
	var test1win = Ti.UI.createWindow({ title: 'Test 1 Win' }),
		table 	 = Ti.UI.createTableView({ top: 50, backgroundColor: '#fff' }),
		label 	 = Ti.UI.createLabel({ text: 'Some Label', color: '#eee', width: 100, height: 20, top: 15 }),
		close	 = Ti.UI.createButton({ title: 'Close' });
	
	var data = [
		{ title: 'Row 1' },
		{ title: 'Row 2' },
		{ title: 'Row 3' },
		{ title: 'Row 4' },
		{ title: 'Row 5' },
	];
	
	table.setData(data);
	
	close.addEventListener('click', function() {
		test1win.close();
	});
	function doSomething(_event) {
		Ti.API.info('event fired');
		table.setData(_event.data);
		label.text = _event.label;
	}
	Ti.App.addEventListener('bad:idea', doSomething);
	
	test1win.add(label);
	test1win.add(table);
	test1win.rightNavButton = close;
		
	test1win.open({ modal: true });
};
























