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

  // Funzione che modifica l'icona da microfono a box_messaggio
  $(".txt-mex").keyup(function() {
    // Prendo il contenuto del campo input
    var caratteri = $(".txt-mex").val();
    // Se il contenuto è diverso da 'vuoto'
    if (caratteri != "") {
      // Allora mi verrà mostrata l'icona del messaggio
      $(".micro").hide();
      $(".airplane").show();
    } else {
      // Altrimenti icona del microfono
      $(".micro").show();
      $(".airplane").hide();
    }
  });

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
        // Ottieni una risposta dopo un secondo
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

  $(".arrow").on("click", function() {
    apriMenuMex();
  });
  // Funzione apri menu messaggio
  function apriMenuMex() {
    $(".menuMessaggio").toggle();
    setTimeout(function() {
      $(".menuMessaggio").css({display: "none"});
    }, 3000);
  };
  // Funzione cancella messaggio
  function cancellaMex() {
    $(this).parents(".box_messaggio").remove();
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

  // Funzione cambia chat
  $(".prev_contatto").click(function() {

    $(this).css({backgroundColor: "darkgrey"});
    var num = $(this).attr("data-contatto");

    var chat = $(".elenco_messaggi.active");
    chat.removeClass("active");
    //var chat = $(".elenco_messaggi").attr("data-chat");
    var chatActive = $(".elenco_messaggi").attr("data-chat", num);
    chatActive.addClass("active");
  });

  // Funzione animazione menu
  $(".menuChat").mouseenter(function() {
    var counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;
    var counter4 = 0;
  });



});
