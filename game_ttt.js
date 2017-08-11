var game_1 = new tic_tac_toe.Game()

$(function(){
	
	$.get("http://ce-sample-api.herokuapp.com/tic_tac_toe_games/5.json",function(res){
			game_1.getRawBoard();
		});
		
	function loadBoard(){
		var i = 1
		var savedMoves = game_1.rawBoard
		for(var moves = 0; moves < savedMoves.length; moves++){
			$("#box-"+i).text(savedMoves[moves])
			i++
			}
		console.log('loaded')
		console.log(game_1.rawBoard)
		}
	
	function makeButtons(){
		var i = 1	
		for(var x = 0; x <=2; x++){
			for(var y = 0; y <=2; y++){
				//if($("#box-"+i).text !== ''){
				$("#box-"+i).data("x", x).data("y", y).on("click",function(){
					$(this).text(game_1.player_turn)						
					game_1.place($(this).data('x'), $(this).data('y'))
					game_1.convertArray()
					game_1.saveBoard()
					game_1.getWinner()
					if(game_1.winner == true){
						alert("We have a winner")
						
					}
				})
				//}
				i++
			}
		}
	}
	
	makeButtons()

	$("#reset").hide()
	$("table").hide()
	$("#start").click(function(){
		loadBoard()
		var id = game_1.gameId
		game_1.getRawBoard(id)
		game_1.setTurn()
		$("#start").fadeOut()
		$("#reset").fadeIn()
		$("table").fadeIn()
		if(game_1.winner == true){
				alert("We have a winner.")
				game_1.saveBoard()
		}

	})


	$("#reset").click(function(){
		game_1.newGame()
	})
})
