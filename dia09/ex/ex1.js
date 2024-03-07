let nome = prompt('Digite seu nome');
let idade = Number(prompt('Digite sua idade'));
let peso = Number(prompt('Digite seu peso'));
let altura = Number(prompt('Digite sua altura'));
let prof = prompt('Digite sua profissão');
let imc = peso / (altura * altura);
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

if(imc < 18.5){
    console.log('Magreza');
}else if(imc >= 18.5 && imc <= 24.9){
    console.log('Normal');
}else if(imc > 24.9 && imc <= 30){
    console.log('Sobrepeso');
}else if(imc > 30){
    console.log('Obesidade');
}else{
    console.log('Erro');
}
        
console.log('Você nasceu no ano: ' + (2023 - idade ));

let idadeAtual = 0;
for (let ano = anoNascimento; ano <= anoAtual; ano++) {
    console.log(`Ano: ${ano} - Idade: ${idadeAtual}`);
    idadeAtual++;
}

let continuar = 's'

 while(continuar == 's'){
    
    let nome = prompt('Digite seu nome');
let idade = Number(prompt('Digite sua idade'));
let peso = Number(prompt('Digite seu peso'));
let altura = Number(prompt('Digite sua altura'));
let prof = prompt('Digite sua profissão');
let imc = peso / (altura * altura);
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

if(imc < 18,5){
    console.log('Magreza');
}else if(imc >= 18,5 && imc <= 24,9){
    console.log('Normal');
}else if(imc > 24,9 && imc <= 30){
    console.log('Sobrepeso');
}else if(imc > 30){
    console.log('Obesidade');
}else{
    console.log('Erro');
}
        
console.log('Você nasceu no ano: ' + (2023 - idade ));

let idadeAtual = 0;
for (let ano = anoNascimento; ano <= anoAtual; ano++) {
    console.log(`Ano: ${ano} - Idade: ${idadeAtual}`);
    idadeAtual++;
}

    continuar = prompt('Deseja inserir os dados novamente?(s/n)');
 }