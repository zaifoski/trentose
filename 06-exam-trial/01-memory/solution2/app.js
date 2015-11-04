/* Memory game main file */

/* index to last valid card */
var index = 1;

/* car template */
var tmplCARDS = "<li id='NUMBER' class='done'> <h3>NUMTEXT</h3></li>"

$(document).ready(function () {

  // loading card when the page loads 
  for (var i = 0; i < data.length; i++) {
    $(".cards").append(tmplCARDS.replace("NUMBER", data[i]).replace("NUMTEXT", data[i]));
  }
  
  // handling the start of the game
  $(".opt-start").click(function (event) {
    
    // hiding the cards
    $(".cards li").toggleClass("done hidden"); //removeClass("done").addClass("hidden");

    // handling when the user click on a card
    $(".cards").on("click", "li", function (event) {
      
      // we uncover the card by default
      $(this).removeClass("hidden").addClass("done");

      // we check whether number of the card correspond to the expected one (in increasing order)
      if ($(this).text() != index) {  //  or $(this).id       
        alert("You Lost");
      } else { 
        index++;
      }

      // we checked whether the user has won
      if (index > data.length) {
        alert("You Won");
      }

    });

  });
});