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

  // Evento sul tasto 'Invio'
  function tastoInvio() {
    if (event.which == 13) {
      inviaMessaggio();
    }
  };

  // Funzione che invia il messaggio
  function inviaMessaggio() {
      var templateMex = $(".template .messaggi").clone();
      var txtMex = $(".txt-mex").val();
      if (txtMex != "") {
        // Trovo gli elementi a cui stampare messaggio e ora
        templateMex.find(".text").text(txtMex);
        // L'elemento 'ora-chat' richiama la 'funzione ora()'
        templateMex.find(".ora-chat").text(ora());

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
    templateMex.find(".ora-chat").text(ora());
    $(".elenco_messaggi").append(templateMex);
  };

  // Funzione orario
  function ora() {
    var d = new Date();
    var ora = d.getHours();
    var minuti = d.getMinutes();
    var orario = ora+":"+minuti;
    return orario;
  };

  $(".lente").click(function() {
    trovaContatto();
  });

  function trovaContatto() {
    var lettere = $(".txt-cerca").val();
    var elencoContatti = ["Michele", "Fabio", "Samuele", "Alessandro B.", "Alessandro L.", "Claudia", "Davide", "Federico"];
    for (i=1; i<=elencoContatti.length; i++) {
      if (elencoContatti[i].includes(lettere)) {
        $(this).addClass("hidden");
      } else {
        console.log("err");
      }
    }
  };


});
