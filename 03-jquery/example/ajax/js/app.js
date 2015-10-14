/* Hangman file */

$(document).ready(function () {
  
    $.get("api/msg.html", function(tmpl){
      $(".trivia").html(tmpl);
    });
  
    $.getJSON("api/trivia.json", function(json){
      $(".trivia").html(json[0].title);
      console.log( "success" );
    })
    .done(function() {
      console.log( "second success" );
    })
    .fail(function() {
      console.log( "error" );
    })
    .always(function() {
      console.log( "complete" );
    });
  
    
    $.get("http://randomword.setgetgo.com/get.php", function(tmpl){
      $(".trivia").html(tmpl);
    });    
  
});

var displayTrivia = function(json){
  
}
