var nome = prompt('Qual o seu nome?');
alert('Olá ' + nome);
var cotacao = parseFloat (prompt('Quantos dolares gostaria de comprar Hoje'));
var valorDolar = (5.30);
alert('O dolar hoje custa U$' + valorDolar.toFixed(2));
var cotacaoFinal = cotacao * valorDolar;
alert('A sua compra de U$' + cotacao.toFixed(2) + ' terá o valor final de R$' + cotacaoFinal.toFixed(2));