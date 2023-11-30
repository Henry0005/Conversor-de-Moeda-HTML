var NomeUsuario = "Henrique";
var valorEmDolar = 64;
var cotacaoDoDolar = 4.88; // Valor fixo, precisa ser atualizado manualmente

var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);

alert("Olá " + NomeUsuario + "! o valor em reais é R$ " + valorEmReal);
