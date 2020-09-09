$(document).ready(function() {
  var btnMex = $(".btn-mex");
  // Click
  btnMex.click(function() {
    inviaMessaggio();
  });
  // Invio
  $(".txt-mex").keypress(function() {
  tastoInvio();
  });

  function tastoInvio() {
    var check = false;
    if (event.which == 13) {
      inviaMessaggio();
      check = true;
    } else {
      check = false;
    }
    return check;
  };

  // Funzione che invia il messaggio
  function inviaMessaggio() {
      var templateMex = $(".template .messaggi").clone();
      var txtMex = $(".txt-mex").val();
      if (txtMex != "") {
        templateMex.find(".text").text(txtMex);
        templateMex.addClass("right");
        $(".elenco_messaggi").append(templateMex);
        $(".txt-mex").val("");
        setTimeout(function() {
          risposta();
        }, 1000);
      } else {
        console.log("err");
      }
  };

  // Funzione di risposta
  function risposta() {
    var templateMex = $(".template .messaggi").clone();
    templateMex.find(".text").text("ok");
    $(".elenco_messaggi").append(templateMex);
  };

  // Funzione orario
  function ora() {
    var data = data();
    console.log(data);
  }


});
