/* Hangman file */

$(document).ready(function () {
  
  /*
    $.get("api/trivia.html", function(tmpl){
      $(".trivia").html(tmpl);
    }).fail(function(){
      alert("Error loading");
    });
  
  */
  /*
    $.getJSON("api/trivia.json", function(json){
      displayTrivia(json);
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
  
  */
  
  /*

    $.getJSON("http://randomword.setgetgo.com/get.php?callback=?", function(data){
      $(".trivia").html(data.Word);
    }).fail(function(){
      alert("Fail!!");
    });  
  */
  
   var url = "http://randomword.setgetgo.com/get.php";
    $.ajax({
        type: "GET",
        url: url,
        dataType: "jsonp",
        jsonpCallback: 'processWord'
    });
  
  
  
});

var displayTrivia = function(json){
  $.each(json, function(i, item){
    $(".trivia").append(item.title);
  });        
}
var processWord = function(data){
  alert(data.Word);
}

