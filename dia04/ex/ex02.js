let nome = prompt('Qual seu nome?');
let idade = Number(prompt('Qual sua idade?'));
let cm = prompt('Possui cnh?');
let carro = prompt('Possui carro?');

if(idade < 18 || cm === 'não'){
    console.log(nome +', você não pode dirigir')
}else if(idade >= 18 && cm === 'sim' && carro === 'não'){
    console.log(nome + ', você pode dirigir mas você não tem carro')
}else if(idade >= 18 && cm === 'sim' && carro === 'sim'){
    console.log(nome + ', você será motorista!')
}