$(document).ready(function() {
  var parola = $(".txt-cerca").val();
  var insiemeContatti = [];
  var nome = $(".nome_contatto h5").text();
  var btnMex = $(".btn-mex");
  var txtMex = $(".txt-mex");

  /*$(".btn-cerca").click(function() {
    insiemeContatti.push(nome);
    console.log(insiemeContatti);
  });*/

btnMex.click(function() {
  var txt = $(".txt-mex").val();
  if (attivaBtn() == true) {
  console.log(txt)
} else {
  console.log("err");
}
});


function attivaBtn() {
  var check = false;
  var micro = $(".micro");
  var airplane =$(".airplane");
  if (txtMex != "") {
    check = true;
  } else {
    check = false;
  }
  return check;
}


});
