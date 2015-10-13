var tmpl = "<li>" + 
               "<div class='preview'> " +
               "    <img class='logo' src='img/package.png'> " +
               "</div>" +
               "<div class='details'>" +
               "  <a>TITLE</a>" +
               "</div>"+
            "</li>";


$( document ).ready(function() {
    
    // Adding handlers to the Add button
    $(".btn-add").click(function(){
      var newItem = $("#product").val();      
      $(".items").prepend(tmpl.replace("TITLE",newItem));      
    });
    
  
    // we add elements dynamically 
    for(var i=0; i< products.length; i++){
      var item = tmpl.replace("TITLE", products[i].name);
      $(".items").append(item);
    }
  
    // list items
    //$(".items li").click(function(){
    //  console.log("user clicked");
    //});  
  
    $(".items").on("click", "li", function(){
      console.log("user clicked");
    });    
  

});