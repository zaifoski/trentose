var tmpl = "<li>" + 
               "<div class='preview'> " +
               "    <img class='logo' src='img/package.png'> " +
               "</div>" +
               "<div class='details'>" +
               "  <a>TITLE</a>" +
               "</div>"+
            "</li>";


$( document ).ready(function() {
    
     var fnAddProduct = function(product){
       $(".items").append(tmpl.replace("TITLE", product));  
     };
  
     $(".btn-add").click(function(){
         var product = $("#product").val();
         fnAddProduct(product);
     });        

    $( ".items" ).on( "click", "li", function(event) {
      //$(event.currentTarget).remove();
      $(event.currentTarget).addClass("selected");
      
    });  
  
    // we add elements dynamically 
    for(var i=0; i< products.length; i++){
      fnAddProduct(products[i].name);
    }

});