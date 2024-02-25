let fome = prompt('Você está com fome? (sim/não)');
let dinheiro = prompt('Você tem dinherio? (sim/não)');
let restaurante = prompt('O restaurante está aberto? (sim/não)')

if(fome === 'não' || dinheiro === 'não'){
    console.log('Hoje a janta será em casa')
}else if(fome === 'sim' && dinheiro === 'sim' && restaurante === 'não'){
    console.log('Peça um delivery!')
}else if(fome === 'sim' && dinheiro === 'sim' && restaurante === 'sim'){
    console.log('Hoje o jantar será no seu restaurante preferido!')
}

