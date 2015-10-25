/* Hangman file */

var tmpl = 
    '<div class="col-sm-6 col-md-4"> ' +
    '   <div class="thumbnail">      ' +
    '      <div class="caption"> ' +
    '        <h3>TITLE</h3> ' +
    '      </div> ' +
    '        <p> ' +
    '        <a href="http://www.imdb.com/title/IMDB" class="btn btn-primary" role="button">Details</a> ' +
    '        </p> ' +    
    '    </div> ' +
    '  </div>  ' ;

$(document).ready(function () {
  
    // The OMDB service allows calls for any origin via resource sharing:
    // https://en.wikipedia.org/wiki/Same-origin_policy#Cross-Origin_Resource_Sharing
    // so we don't need to provide a JSONP callback
    // http://www.omdbapi.com/?s=<keyword to search>
    // there are more parameters as documented here: http://omdbapi.com
      
  
    $.getJSON("http://www.omdbapi.com/?s=love", function(json){      
      console.log("we process the output");
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

    console.log("normal stuff");
  
});

