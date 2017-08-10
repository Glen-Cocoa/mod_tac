var tic_tac_toe = (function(){

	var module = {}
	
/*
	var boardArray = game_1.getBoard()
	var convertedArray = ""
	var gameArray = []
	
	this.convertArray = function(){
		boardArray.reduce(function(prev, curr) {
			return convertedArray = prev.concat(curr);
			});
		console.log(convertedArray)
		}
	

convertArray()
console.log(convertedArray)
	
	this.postGameBoard = function(){
	var obj = {tic_tac_toe_game:{data: {board: convertedArray }}}
	$.post('http://ce-sample-api.herokuapp.com/tic_tac_toe_games/5.json', obj, function(res){
		console.log(res)
			})
	}
	*/
	
	module.Board = function(length){
		this.length = length

		this.getValues = function(length){
			var values = [] 
			for (var x = 0; x < length; x++){
				values[x] = []
				for (var y = 0; y < length; y++){
					values[x][y] = ''
					}
				}
			return values
			}
		this.values = this.getValues(this.length)

		this.getBoard = function(){
			return this.values
			}

		this.place = function(x_coord,y_coord,character){
			this.values[x_coord][y_coord] = character;
			}
		}
	

	module.Game = function(){
		this.board = new module.Board(3)
		this.turn_count = 0
		this.player_turn = "X"

		this.getBoard = function(){
			var board_instance = this.board
			var board_values = board_instance.getBoard()
			return board_values
			}

		this.setTurn = function(){
			this.turn_count ++
			if (this.turn_count % 2 == 0){
				this.player_turn = "X"
				}
			else{
				this.player_turn = "O"
				}
			if (this.turn_count >= 9){
				alert('This game is a tie!')
			}
			
			}

		this.place = function(x_coord,y_coord){
			var current_player = this.player_turn
			this.board.place(x_coord,y_coord,current_player)
			this.setTurn()
			}

		this.printBoard = function(){
			var board_values = this.board.getBoard()
			for (var x = 0; x < 3; x++){
				console.log(board_values[x])
				}
			}

		this.checkSame = function(coord_list){
			var board_values = this.getBoard()
			var value = null
			for (var index = 0; index < coord_list.length; index++){
				var coords = coord_list[index]
				var x = coords[0]
				var y = coords[1]
				var coord_value = board_values[x][y]
				if (value == null){
					value = coord_value
					continue
					}
				if (coord_value != value){
					return false
					}
				}
			return value
			}

		this.WINNING_COORDINATES = [
			[
				[0,0],
				[0,1],
				[0,2]
				],
			[
				[1,0],
				[1,1],
				[1,2]
				],
			[
				[2,0],
				[2,1],
				[2,2]
				],
			[
				[0,0],
				[1,0],
				[2,0]
				],
			[
				[0,1],
				[1,1],
				[2,1]
				],
			[
				[0,2],
				[1,2],
				[2,2]
				],
			[
				[0,0],
				[1,1],
				[2,2]
				],
			[
				[0,2],
				[1,1],
				[2,0]
				]
			]
		this.winner = false
		this.getWinner = function(){
			for (var index = 0; index < this.WINNING_COORDINATES.length; index++){
				var coord_list = this.WINNING_COORDINATES[index]
				var winner = this.checkSame(coord_list)
				if (winner != false){
					this.winner = true
					return winner
					}
				}
			return null
			}
	}					
	return module
		
})()

console.log(tic_tac_toe)


