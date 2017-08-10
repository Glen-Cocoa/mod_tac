var game_1 = new tic_tac_toe.Game()

$(function(){
	
	function getSavedMoves(){
		$.get('http://ce-sample-api.herokuapp.com/tic_tac_toe_games/5.json',function(res){
			var i = 1
			var savedMoves = res.data.board
			for(var moves = 0; moves < savedMoves.length; moves++){

				$("#box-"+i).text(savedMoves[moves])
				i++
			}

		})
	}
	
	getSavedMoves()
	
	var boardArray = game_1.getBoard()
	var convertedArray = ""
	var gameArray = []
	

	function convertArray(){
		boardArray.reduce(function(prev, curr) {
			return convertedArray = prev.concat(curr);
			});
		}
	

convertArray()
	
	function postGameBoard(){
	var obj = {tic_tac_toe_game:{data: {board: convertedArray }}}
	$.post('http://ce-sample-api.herokuapp.com/tic_tac_toe_games/5.json', obj, function(res){
		console.log(res)
			})
	}


	function makeButtons(){
		var i = 1	
		for(var x = 0; x <=2; x++){
			for(var y = 0; y <=2; y++){
				$("#box-"+i).data("x", x).data("y", y).on("click",function(){
					$(this).text(game_1.player_turn)						
					game_1.place($(this).data('x'), $(this).data('y'))
					convertArray()
					postGameBoard()
					game_1.getWinner()
					if(game_1.winner){
						alert("We have a winner")
					}
					
				})
				i++
				
			}
		}
	}


	makeButtons()

	$("#reset").hide()
	$("table").hide()
	$("#btn2").click(function(){
		
		$("#btn2").fadeOut()
		$("#reset").fadeIn()
		$("table").fadeIn()
		if(game_1.winner == true){
				alert("We have a winner.")
		}

	})


	$("#reset").click(function(){
		var obj = {tic_tac_toe_game:{data:{board:[""]}}}
					for(i=0;i<10;i++){
				$('#box-'+i).text(' ')
		$.post('http://ce-sample-api.herokuapp.com/tic_tac_toe_games/5.json',obj,function(res){
						})
		$.get('http://ce-sample-api.herokuapp.com/tic_tac_toe_games/5.json',obj,function(res){
						})

			}
	})
})
