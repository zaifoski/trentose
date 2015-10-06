//alert("The script is loaded");

// we wait till the entire document loads
// before we apply our code
$( document ).ready(function() {
 
    // we delegate the "click" event to a 
    // function we created
    $( "button" ).click(function( event ) {
              
        // we execute some function
        alert( "Thanks for visiting!" );
      
       // we modify the content of the element
       $("button").html("Click again");
      
       // we modify the aspect of the element
       $("button").css("background", "blue");
 
    });
 
  //alert("The document is loaded");
 
});