var tmpl = "<li>" +
               "<div class='preview'> " +
               "    <img class='logo' src='img/package.png'> " +
               "</div>" +
               "<div class='details'>" +
               "  <a>TITLE</a>" +
               "</div>"+
            "</li>";

function addElement(title) {
  $(".items").append(tmpl.replace("TITLE",title));
}

function loadElementsFromArray(array) {
  $.each(array,function(key,value) {
    addElement(value.name);
  });
}

function removeAllElement() {
  $(".items li").remove();
}

$(document).ready(function() {
    loadElementsFromArray(products);

    $(".btn-add").click(function() {
      if ($("#product").val() == "") {
        alert("Error: fill in the product name");
        return;
      }

      removeAllElement();
      loadElementsFromArray(products);
      $("#search-kw").val("");

      products.push(
        {
          name: $("#product").val(),
          desc: ""
        }
      );

      addElement($("#product").val());
      $("#product").val("");
    });

    // Cancellazione elementi
    $(".btn-remove").click(function() {
      if ($(".selected").length == 0) {
        alert("Error: select one or more element to be deleted");
        return;
      }

      var i=0;
      while ($(".selected").length != 0) {
        var element = $(".selected")[i];
        var li_content = $(".selected").find("a")[i].text;
        element.remove();
      }
    });

    // Ricerca
    $(".btn-search").click(function() {
      var keyword = $("#search-kw").val();
      var regex = new RegExp(".*"+keyword+".*","gi");

      removeAllElement();

      if (keyword == "") {
        loadElementsFromArray(products);
        return;
      }

      $.each(products,function(key,value) {
        if (value.name.match(regex) || value.desc.match(regex)) {
          addElement(value.name);
        }
      });
    });

    // Selezione item al click
    $(".items").on("click","li",function(event) {
      var productName = event.currentTarget;
      if ($(productName).hasClass("selected")) {
        $(productName).removeClass("selected");
      } else {
        $(productName).addClass("selected");
      }
    });
});
