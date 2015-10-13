/* Main Try > file */
function hideMessages() {
  $("h1").hide();
}

$(document).ready(function(){
  hideMessages();
  $(".msg-default").show();

  $(".btn-verify").click(function() {
    var l1 = parseFloat($("#side_a").val());
    var l2 = parseFloat($("#side_b").val());
    var l3 = parseFloat($("#side_c").val());

    if (l1 == "" || l2 == "" || l3 == "") {
      hideMessages();
      $(".msg-nodata").show();
      return;
    }

    if (isNaN(l1) || isNaN(l2) || isNaN(l3)) {
      hideMessages();
      $(".msg-nodata").show()
      return;
    }

    if (!TryAngle.isTriangle(l1,l2,l3)) {
      hideMessages();
      $(".msg-notriangle").show();
      return;
    }

    if (l1 == l2 && l2 == l3) {
      hideMessages();
      $(".msg-equilateral").show();
    } else if (l1 == l2 || l2 == l3 || l1 == l3) {
      hideMessages();
      $(".msg-isosceles").show();
    } else {
      hideMessages();
      $(".msg-scalene").show();
    }
  });
});

TryAngle = {
    /* Checks if the sides a, b, c belong to a valid rectangle */
    isTriangle : function(a, b, c){
        return ((a + b) > c) && ((b + c) > a) && ((a + c) > b);
    }
};
