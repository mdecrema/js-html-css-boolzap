$(document).ready(function() {
  var parola = $(".txt-cerca").val();
  var insiemeContatti = [];
  var nome = $(".nome_contatto h5").text();
  var btnMex = $(".btn-mex");
  var txtMex = $(".txt-mex");
  var micro = $(".micro");
  var airplane =$(".airplane");
  var template = $(".template").clone();

  /*$(".btn-cerca").click(function() {
    insiemeContatti.push(nome);
    console.log(insiemeContatti);
  });*/

btnMex.click(function() {
    if (validatore()==true) {
    var testo = txtMex.val();
    template.prepend(testo);
    template.removeClass("hidden");
    template.addClass("verde");
    $(".messaggi_inviati").append(template);
  } else if (validatore()==false){
    console.log("err");
  }
});


/*btnMex.click(function() {
  var txt = $(".txt-mex").val();
  if (validatore() == true) {
  console.log(txt);
  micro.addClass("hidden");
  airplane.removeClass("hidden");
} else {
  console.log("err");
}
});*/


function validatore() {
  var check = false;
  if (txtMex != "") {
    check = true;
  } else {
    check = false;
  }
  return check;
};




});
