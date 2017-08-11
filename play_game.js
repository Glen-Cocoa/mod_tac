function play_two_players(){
  $(document).ready(function(){
	  $(".box").on("click",function(){
    if(this.text === '') { 
     counter++
        if(counter == 9){
          alert("The game is a draw. Play again!")
       }
       else if(counter % 2 == 0){
         $(this).text("X")
         check_for_winner()
         check_for_winner()
       }
       else {
         $(this).text("O")
         check_for_winner()	
       }
     }
   });
  });
}