/* Main Try > file */

$(document).ready(function(){  
             

});

TryAngle = {

    
    /* Checks if the sides a, b, c belong to a valid rectangle */
    isTriangle : function(a, b, c){        
        return a + b > c && b + c > a && a + c > b;
    }
};