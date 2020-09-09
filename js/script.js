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
    var boxMessaggio = $(".box_messaggio").clone();
    var template = $(".template").clone();
    if (txtMex != "") {
      boxMessaggio.find(".txt").text(txtMex);
      template.append(boxMessaggio);
      template.removeClass("hidden");
      $(".elenco_messaggio").append(template);
    } else {
      console.log("err");
    }
  };

});
