let opcao = prompt('escolha: gasolina, álcool ou calibrar')
let valor;
switch(opcao){
    case 'gasolina':
         valor = Number(prompt('qual valor?'))
        console.log('você abasteceu ' + (valor / 5) + ' litro(s)')
        break;
    case 'álcool':
         valor = Number(prompt('qual valor?'))
        console.log('você abasteceu ' + (valor / 3) + ' litro(s)')
        break;
    case 'calibrar':
        console.log('pneus calibrados')
        break;
    default:
        console.log('opção não encontrada')
        break;
}