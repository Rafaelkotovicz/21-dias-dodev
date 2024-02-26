let opcao = Number(prompt('Abastecer com gasolina(1), \nabastecer com álcool(2), \ncalibrar os pneus(3)'));
let valor;
let litros;

switch(opcao){
    case 1:
        valor = Number(prompt('Qual valor?'))
        litros = 5
        console.log((valor / litros) + ' litros de gasolina')
        break;
    case 2:
        valor = Number(prompt('Qual valor?'))
        litros = 3;
        console.log((valor / litros) + ' litros de álcool')
        break;
    case 3:
        console.log('Pneus calibrados')
        break;
    default:
        console.log('erro')
        break;
}