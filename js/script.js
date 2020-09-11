$(document).ready(function() {
  var btnMex = $(".btn-mex");
  // Click
  btnMex.click(function() {
    inviaMessaggio();
  });


  // Invio
  $(".txt-mex").keypress(function(event) {
  tastoInvio(event);
  });

  // Evento sul tasto 'Invio'
  function tastoInvio(event) {
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
        $(".elenco_messaggi.active").append(templateMex);
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
    $(".elenco_messaggi.active").append(templateMex);
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


  // Funzione apri menu messaggio
 $(document).on("click", ".arrow", function() {
   $(this).siblings(".menuMessaggio").toggle();
 });
  // Funzione cancella messaggio
  $(document).on("click", ".cancellaMex", function() {
    $(this).parents(".box_messaggio").remove();
  });

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
    $(".prev_contatto").removeClass("darkgrey");
    $(this).addClass("darkgrey");
    var num = $(this).attr("data-contatto");
    var img = $(this).find(".avatar").attr("src");
    var nomeContatto = $(this).find(".nome_contatto h5").text();
    var ora = $(this).find(".ora h6").text();

    //chat.removeClass("active");
    //var chat = $(".elenco_messaggi").attr("data-chat");
    $(".elenco_messaggi").removeClass("active");
    $(".elenco_messaggi[data-chat="+num+"]").addClass("active");
    //$("info_chat img").attr("src", img);
    alert(img);
    $(".info_chat").find(".txt h5").text(nomeContatto);
    $(".info_chat").find(".txt time").text(ora);
  });

  // Funzione animazione menu
  $(".menuChat").click(function() {
    $(this).addClass("change");
    $(".hide_menu").addClass("visible");
    var counter1 = 30;
    var counter2 = 50;
    var counter3 = 55;
    var counter4 = 55;
    setInterval(function() {
      if (counter1 == 0 && counter2 == 0 && counter3 == 0 && counter4 == 0) {
        clearInterval();
        setTimeout(function() {
          $(".hide_menu").removeClass("visible");
        }, 4000);
      } else {
        counter1--;
        counter2--;
        counter3--;
        counter4--;
        $(".l1").css({marginTop: "-"+counter1+"px"});
        $(".l2").css({marginTop: "-"+counter2+"px"});
        $(".l3").css({marginTop: "-"+counter3+"px"});
        $(".l4").css({marginTop: "-"+counter4+"px"});
      }
    }, 5);
  });

  // Geolocalizzazione

  function longitudine(location) {
	var longitudine = location.coords.longitude;
	console.log(lng);
};

function latitudine(location) {
  var latitudine = location.coords.latitude;
  console.log(lat);
}

var lat = latitudine();
var lng = longitudine();


var error = function( message ) {
	console.log( message );
};

$(".l4").click(function() {
if( navigator.geolocation ) {
	navigator.geolocation.getCurrentPosition( success );
}
});
// Mappa

});


function initMap(lat, lon) {
  var mapOption = {
    center: {lat: 40.782710, lng: -73.965310},
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 13
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOption);
};

  function loadScript() {
    var script = document.createElement("script");
    script.src = 'http://maps.googleapis.com/maps/api/js?AIzaSyC133duXtNjjlqDAeCsz3n-ejNOgtzmBXI&callback=initMap';
    document.body.appendChild(script);
  };


 //window.onload = loadScript();
