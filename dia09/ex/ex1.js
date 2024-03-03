let nome = prompt('Digite seu nome');
let idade = prompt('Digite sua idade');
let peso = prompt('Digite seu peso');
let altura = prompt('Digite sua altura');
let prof = prompt('Digite sua profissão');
let imc = peso / (altura * altura);
let condicao;
let anoNascimento = prompt('Digite seu ano de nascimento');
let anoAtual = 2023;

console.log('Nome: ' + nome + '\n' + 'Idade: ' + idade + '\n' + 'Peso: ' + peso + '\n' + 'Altura: ' + altura + '\n' + 'Profissão: ' + prof);

if(idade >= 18){
    console.log('Pode beber');
}else{
    console.log('Não pode beber');
}

console.log('Sua idade em meses: ' + (idade * 12));
console.log('Sua idade em semanas: ' + (idade * 7));
console.log('Sua idade em dias: ' + (idade * 365));
console.log('Seu imc é: ' + imc);

switch(condicao){
    case imc < '18,5':
        console.log('Magreza');
        break;
    case imc >= '18,5' && imc <= '24,9':
        console.log('Normal');
        break;
    case imc > '24,9' && imc <= '30':
        console.log('Sobrepeso')
        break;
    case imc > '30':
        console.log('Obesidade');
        break;
    default:
        console.log('Erro');
        break;
}
console.log('Você nasceu no ano: ' + (idade - 2023));

let idadeAtual = 0;
for (let ano = anoNascimento; ano <= anoAtual; ano++) {
    console.log(`Ano: ${ano} - Idade: ${idadeAtual}`);
    idadeAtual++;
}