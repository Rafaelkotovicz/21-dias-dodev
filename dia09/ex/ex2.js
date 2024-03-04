let confirmacao = 'n';

while(confirmacao == 'n'){

let nome = prompt('Digite seu nome');
let idade = Number(prompt('Digite sua idade'));
let salario = Number(prompt('Digite seu salário'))

console.log('Nome: ' + nome + '\n' + 'Idade: ' + idade + '\n' + 'Salário: ' + salario);

confirmacao = prompt('Todas as informações estão corretas?(s/n)')

if(confirmacao == 's'){
    let ano = 2024;
    let per = 1.5;
    for(cont = 1; cont < 12; cont++){
        salario = salario * per;
        console.log(ano + ' ' + salario);
        ano++;
        per = per * 2;
    }
}
}

