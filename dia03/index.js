let nome = prompt('Digite seu nome');
let idade = prompt('Digite sua idade');
let altura = prompt('Digite sua altura');
let peso = prompt('Digite sua peso');
let anoNascimento = 2023 - idade;
let imc = peso / (altura * altura);


console.log('Olá ' + nome + ', você tem ' + idade + ' anos, nasceu em '+ anoNascimento +', tem ' + altura + ' de altura, pesa ' + peso + ' seu IMC é ' + imc + ' Kg/m2');