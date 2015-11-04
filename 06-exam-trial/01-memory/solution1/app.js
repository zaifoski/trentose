/* your code should go here */

var tmp= '<li id="numb" class="done"> <h3>value</h3> </li> ' 
var tmp1;
var tmp2;


// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet

$(document).ready(function(){
    var n=0;
    for (var i=0; i<10; i++){
        tmp1=tmp.replace("numb", data[i]);
        tmp2=tmp1.replace("value", data[i]);
        $(".cards").append(tmp2);
    }
    
    $(".opt-start").click(function(){
            $(".done").addClass("hidden");
            $(".hidden").removeClass("done");
    
        $("#1").click(function(){
            //console.log("user clicked");
            $("#1").addClass("done");
            $(".done").removeClass("hidden");
            if (n==0){n++;}else{
                    alert("You lost");
                    $(".done").hide();
                    $(".hidden").hide();
                    $(".opt-start").hide();
                    $(".cards").append("<center><strong>Reload the page to play again</strong></center>");
                }
        });
        $("#2").click(function(){
            //console.log("user clicked");
            $("#2").addClass("done");
            $(".done").removeClass("hidden");
            if (n==1){n++;}else{alert("You lost");
                    $(".done").hide();
                    $(".hidden").hide();
                    $(".opt-start").hide();
                    $(".cards").append("<center><strong>Reload the page to play again</strong></center>");}
        });
        $("#3").click(function(){
            //console.log("user clicked");
            $("#3").addClass("done");
            $(".done").removeClass("hidden");
            if (n==2){n++;}else{alert("You lost");
                    $(".done").hide();
                    $(".hidden").hide();
                    $(".opt-start").hide();
                    $(".cards").append("<center><strong>Reload the page to play again</strong></center>");}
        });
        $("#4").click(function(){
            //console.log("user clicked");
            $("#4").addClass("done");
            $(".done").removeClass("hidden");
            if (n==3){n++;}else{alert("You lost");
                    $(".done").hide();
                    $(".hidden").hide();
                    $(".opt-start").hide();
                    $(".cards").append("<center><strong>Reload the page to play again</strong></center>");}
        });
        $("#5").click(function(){
            //console.log("user clicked");
            $("#5").addClass("done");
            $(".done").removeClass("hidden");
            if (n==4){n++;}else{alert("You lost");
                    $(".done").hide();
                    $(".hidden").hide();
                    $(".opt-start").hide();
                    $(".cards").append("<center><strong>Reload the page to play again</strong></center>");}
        });
        $("#6").click(function(){
            //console.log("user clicked");
            $("#6").addClass("done");
            $(".done").removeClass("hidden");
            if (n==5){n++;}else{alert("You lost");
                    $(".done").hide();
                    $(".hidden").hide();
                    $(".opt-start").hide();
                    $(".cards").append("<center><strong>Reload the page to play again</strong></center>");}
        });
        $("#7").click(function(){
            //console.log("user clicked");
            $("#7").addClass("done");
            $(".done").removeClass("hidden");
            if (n==6){n++;}else{alert("You lost");
                    $(".done").hide();
                    $(".hidden").hide();
                    $(".opt-start").hide();
                    $(".cards").append("<center><strong>Reload the page to play again</strong></center>");}
        });
        $("#8").click(function(){
            //console.log("user clicked");
            $("#8").addClass("done");
            $(".done").removeClass("hidden");
            if (n==7){n++;}else{alert("You lost");
                    $(".done").hide();
                    $(".hidden").hide();
                    $(".opt-start").hide();
                    $(".cards").append("<center><strong>Reload the page to play again</strong></center>");}
        });
        $("#9").click(function(){
            //console.log("user clicked");
            $("#9").addClass("done");
            $(".done").removeClass("hidden");
            if (n==8){n++;}else{alert("You lost");
                    $(".done").hide();
                    $(".hidden").hide();
                    $(".opt-start").hide();
                    $(".cards").append("<center><strong>Reload the page to play again</strong></center>");}
        });
        $("#10").click(function(){
            //console.log("user clicked");
            $("#10").addClass("done");
            $(".done").removeClass("hidden");
            if (n==9){alert("You Won");
                    $(".done").hide();
                    $(".hidden").hide();
                    $(".opt-start").hide();
                    $(".cards").append("<center><strong>YOU WON! Reload the page to play again</strong></center>");}else{alert("You lost");
                    $(".done").hide();
                    $(".hidden").hide();
                    $(".opt-start").hide();
                    $(".cards").append("<center><strong>Reload the page to play again</strong></center>");}
        });
        
    });
    

    
  
});



/*
<li id="0" class="hidden">
          <h3>1</h3>         
        </li> 
        <li id="1" class="done">
          <h3>2</h3>
        </li>    
        <li id="2" class="done">
          <h3>3</h3>
        </li>               
        <li id="3" class="hidden">
          <h3>4</h3>
        </li> 
*/






