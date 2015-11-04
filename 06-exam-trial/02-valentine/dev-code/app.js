/* your code should go here */
var tmpl="<li>"+
         "<img src=\"IMG\">"+
         "<h2>NAME</h2>"+
         "<button class=\"opt-choose\""+ 
         "value=\"THEME\">Choose</button>"+    
         "</li>"

var tmpl2 = "<h2>Preview </h2>"+
      "<div class=\"card\"> "+ 
          "<div class=\"picture\">"+
           " <img src=\"img/IMG.jpg\">"+
          "</div>"+
          "<div class=\"message\">"+
            "<h2>Dear <span id=\"cardTo\">TO,</span><h2>"+
            "<p id=\"cardMsg\">MSG</p>"+

            "<p id=\"cardFrom\">FROM</p>"+
          "</div>  </div>"
            
            
$(document).ready(function(){
  
    for(var i=0; i< data.length; i++){
      var item = tmpl.replace("IMG", data[i].img);
      item = item.replace("NAME", data[i].name);
      item = item.replace("THEME", data[i].id);
      $(".themes").append(item);
    }
    $(".opt-choose").click(function(){
        var from = $("#inputFrom").val();
        var to = $("#inputTo").val();
        var msg = $("#inputMsg").val();
        if(from == "" ||
           to == "" ||
           msg == ""
          )
        {
            alert("Please enter values");    
            from = "";    
            to = "";    
            msg = "";
        }
        else {
            var theme = $(this).val();
            var item = tmpl2.replace("TO", to);
            item = item.replace("FROM", from);
            item = item.replace("MSG", msg);
            item = item.replace("IMG", theme);
            $("#preview").append(item);
            $("#preview").toggleClass('hidden','done');
        }
    });
    
});







