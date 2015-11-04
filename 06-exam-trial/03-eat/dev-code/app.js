/* your code should go here */
var tmpl="<div> <img src=\"IMAGE\"><h2>NAME</h2><p>CAL calories</p><button id=\"NAMEL\" value=\"CAL\">Add</button></div>";

$(document).ready(function(){
  
    var tot = 0;
    $(".nodrink").hide();
    $(".added").hide();
    
    // we add elements dynamically 
    for(var i=0; i< data.length; i++){
      var item = tmpl.replace("IMAGE", data[i].image);
      item = item.replace("NAME", data[i].name);
      item = item.replace("NAMEL", (data[i].name).toLowerCase());
      item = item.replace(/CAL/g, data[i].calories);
      $(".food").append(item);
    }
    
    var newTotal = 0;
    
    $("button").click(function(){
        newTotal = parseInt(newTotal) + parseInt($(this).val());
        $("#total").html(newTotal);
    });
    
});