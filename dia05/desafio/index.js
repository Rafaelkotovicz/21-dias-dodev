let n1 = Number(prompt('escolha o primeiro número:'))
let n2 = Number(prompt('escolha o sengundo número'))
let operacao = prompt('escolha a operação: s, d, m, sb')

switch(operacao){
    case 's':
        console.log(n1 + n2)
        break;
    case 'd':
        console.log(n1 / n2)
        break;
    case 'm':
        console.log(n1 * n2)
        break;
    case 'sb':
        console.log(n1 - n2)
        break;
    default:
        console.log('operação não encontrada')
        break;
}