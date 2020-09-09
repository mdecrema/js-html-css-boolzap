$(document).ready(function() {
  var parola = $(".txt-cerca").val();
  var insiemeContatti = [];
  var nome = $(".nome_contatto h5").text();
  var btnMex = $(".btn-mex");
  var txtMex = $(".txt-mex").val();
  var micro = $(".micro");
  var airplane =$(".airplane");


  btnMex.click(function() {
    inviaMessaggio();
  });

  function inviaMessaggio() {
    var template = $(".template .box_messaggio").clone();
    if (txtMex != "") {
      template.find(".txt").text(txtMex);
      template.removeClass("hidden");
      $(".elenco_messaggi").append(template);
    } else {
      console.log("err");
    }
  };

});
