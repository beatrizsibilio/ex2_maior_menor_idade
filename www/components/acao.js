// This is a JavaScript file

var nome, idade, maiorIdade = "<img class='imagem' src='img/maior.jpg'>", menorIdade = "<img class='imagem' src='img/bebe.jpg'>";

$(document).on("click","#verificar", function(){
  nome = $('#nome').val();
  idade = $('#idade').val();

  mostrarMenorIdade = function(){
      $("#resultado").html(nome+", você ainda é menor de idade!<br>"+ menorIdade);
  }
  
  mostrarMaiorIdade = function(){
    $("#resultado").html(nome+", você já é maior de idade!<br>"+ maiorIdade);
  }

  if(idade < 18) {
    mostrarMenorIdade();
  } else {
    mostrarMaiorIdade();
  }
});