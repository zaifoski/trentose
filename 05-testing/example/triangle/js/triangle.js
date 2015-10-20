/* Main Try > file */

TryAngle = {
    /* Constants */
    SIDE_EQUILATERAL : "equilateral",
    SIDE_ISOSCELES   : "isosceles",
    SIDE_SCALENE     : "scalene",
    
    ANGLE_ACUTE     : "acute",
    ANGLE_OBTUSE    : "obtuse",
    ANGLE_RIGHT     : "right",
    
    /* Checks if the sides a, b, c belong to a valid rectangle */
    isTriangle : function(a, b, c){        
        return true;                                
    },
    
    /* Returns the type of rectangle. It assumes a valid triangle as input. */    
    getTypeBySidesLength : function(a, b, c){
        return this.SIDE_EQUILATERAL;                 
    },    
    
    /* Returns the type of rectangle. It assumes a valid triangle as input. */    
    getTypeByAngles : function(a, b, c){
        return this.ANGLE_ACUTE;         
    }
};