let nome;
let idade;
let altura;
let peso;

nome = prompt('digite seu nome');
idade = parseInt(prompt('digite sua idade'));
altura = parseFloat(prompt('digite sua altura'));
peso = parseFloat(prompt('digite seu peso'));

let anoNascimento = 2024 - idade;
let imc = peso / (altura * altura);

console.log(nome + ', você tem ' + idade + ' anos, nasceu em ' + anoNascimento + ', tem ' + altura + ' de altura, pesa ' + peso + 'kg, seu imc é ' + imc + 'kg/m2');