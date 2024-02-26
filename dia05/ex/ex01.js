let n1 = Number(prompt('Digite um número'));
let n2 = Number(prompt('Digite outro número'))
let operacao = prompt('Digite uma operação matemática');

switch(operacao){
    case 'soma':
        console.log(n1 + n2)
        break;
    case 'subtração':
        console.log(n1 - n2)
        break;
    case 'multiplicação':
        console.log(n1 * n2)
        break;
    case 'divisão':
        console.log(n1 / n2)
        break;
    default: 
        console.log('erro')
        break;
}