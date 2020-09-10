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
    if (minuti < 10) {
      minuti = "0"+minuti;
    }
    var orario = ora+":"+minuti;
    return orario;
  };


  // Funzione di ricerca contatti 
  $(".txt-cerca").keyup(function() {
    // Prende come valore le lettere passate nell'input
    var lettere = $(this).val().toLowerCase();
    var contatti = $(".nome_contatto h5");
    // 'Each' esegue un ciclo sui vari contatti
    contatti.each(function() {
      var nome = $(this).text().toLowerCase();
      // Se i contatti analizzati contengono le lettere passate
      if (nome.includes(lettere) == true) {
        // Allora rimaranno visibili
        $(this).parents(".prev_contatto").show();
      } else {
        // Altrimenti veranno nascosti
        $(this).parents(".prev_contatto").hide();
      }
    });
  });


});
