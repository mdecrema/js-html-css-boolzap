$(document).ready(function() {
  var btnMex = $(".btn-mex");

  btnMex.click(function() {
    inviaMessaggio();
  });

  $(".txt-mex").keypress(function(event) {
    console.log(event.keyCode);
    if (event.which == 13) {
      inviaMessaggio();
    }
  });

  function inviaMessaggio() {
    var templateMex = $(".template .messaggi").clone();
    var txtMex = $(".txt-mex").val();
    if (txtMex != "") {
      templateMex.find(".text").text(txtMex);
      templateMex.addClass("right");
      $(".elenco_messaggi").append(templateMex);
    } else {
      console.log("err");
    }
  };

});
