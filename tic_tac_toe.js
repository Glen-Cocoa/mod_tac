var tic_tac_toe = (function(){

	var module = {}
	
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
		this.convertedArray = ""
		this.rawBoard = ""
		this.gameId = ""

		this.getBoard = function(){
			var board_values = this.board.getBoard()
			//console.log('gottedboard')
			return board_values
			
		}
		
		var boardArray = this.getBoard()
		
		this.saveBoard = function(id){
			id = this.gameId
			var obj = {tic_tac_toe_game:{data: {board: convertedArray }}}
			$.post("http://ce-sample-api.herokuapp.com/tic_tac_toe_games/5.json", obj, function(res){
				})
			console.log(obj)
			}
		
		this.parseBoard = function (array, piece){
			var _this = this
			piece = 3
			array = _this.rawBoard
			if(_this.rawBoard.length > 1){ 
			_this.board.values = []
			for(var i = 0; i < array.length; i += piece){
				_this.board.values.push(array.slice(i, i + piece))
				}
			}
			//console.log('parsed')
			console.log(_this.rawBoard)
		}
		
		this.convertArray = function(){
			boardArray.reduce(function(prev, curr) {
			return this.convertedArray = prev.concat(curr);
				});
				//console.log('converted')
			}
		
		this.incrementTurn = function(){
		for(var i = 0; i < this.rawBoard.length; i++){
			if(this.rawBoard[i] != ""){
			this.turn_count++
				}
			}
			console.log(this.turn_count)
		}
		
		this.setTurn = function(){
			if (this.turn_count % 2 == 0){
				this.player_turn = "X"
				}
			else{
				this.player_turn = "O"
				}
			if (this.turn_count >= 9){
				alert('This game is a tie!')
			}
			this.turn_count ++
			}
		
		this.getRawBoard = function(id){
		var _this = this
		this.gameId = id
		$.get('http://ce-sample-api.herokuapp.com/tic_tac_toe_games/5.json',function(res){
			_this.rawBoard = res.data.board
			//console.log(_this.rawBoard)
			_this.parseBoard()
			//console.log(_this.rawBoard)
			_this.incrementTurn()
			//console.log(_this.gameId)
			})
			//console.log('rawBoard received')
			//console.log(_this)
		}
		

	this.place = function(x_coord,y_coord){
			var current_player = this.player_turn
			this.board.place(x_coord,y_coord,current_player)
			this.setTurn()
			//console.log('placed')
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
		
		this.newGame = function(id){
			id = this.gameId
		var obj = {tic_tac_toe_game:{data:{board:[""]}}}
		//$.post('http://ce-sample-api.herokuapp.com/tic_tac_toe_games/.json',obj,function(res){
		//	})
		$.get('http://ce-sample-api.herokuapp.com/tic_tac_toe_games/5.json',obj,function(res){
						
		(console.log(obj))
			for(i=0;i<10;i++){
				$('#box-'+i).text(' ')
			}
		});
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


