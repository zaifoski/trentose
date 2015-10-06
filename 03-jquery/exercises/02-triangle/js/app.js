/* Main Try > file */

$(document).ready(function(){  
        
    $(".results h1").hide();
    $(".results h1.msg-default").show();
    
    $(".btn-verify").click(function(event){    
        // the magic happens here. 
        var a = parseInt($("#side_a").val());
        var b = parseInt($("#side_b").val());
        var c = parseInt($("#side_c").val());
        
        if (isNaN(a) || isNaN(b) || isNaN(c)){
            $(".results h1").hide();
            $(".results h1.msg-nodata").show();
            return;
        } 
        
        if (TryAngle.isTriangle(a, b, c)){
            $(".results h1").hide();
            $(".results h1.msg-notriangle").show();             return;
        };
        
        
    });        

});

TryAngle = {

    
    /* Checks if the sides a, b, c belong to a valid rectangle */
    isTriangle : function(a, b, c){        
        return a + b > c && b + c > a && a + c > b;
    }
};