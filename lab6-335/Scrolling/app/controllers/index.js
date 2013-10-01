var prevPlayer = $.player1;
prevPlayer.color = 'red';

function setPlayer(e) {
	var curPlayer = e.source;
	var player = curPlayer.player;
	
	if (curPlayer != prevPlayer) {
		prevPlayer.color = 'black';
		prevPlayer = curPlayer;
		curPlayer.color = 'red';
	}
	
	if (player != null) {		
		for (var i=1; i<4; i++) {
			$['image' + i].image = '/' + player + i + '.jpg';
		}
 	}
}

$.index.open();
