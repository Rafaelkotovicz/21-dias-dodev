let fome = prompt('você está com fome? sim/não');
let dinheiro = prompt('você tem dinheiro? sim/não');
let restaurante = prompt('o restaurante está aberto? sim/não');

if(fome === 'não' || dinheiro === 'não'){
    console.log('hoje o jantar será em casa')
}else if(fome === 'sim' && dinheiro === 'sim' && restaurante === 'não'){
    console.log('peça um delivery')
}else if(fome === 'sim' && dinheiro === 'sim' && restaurante === 'sim'){
    console.log('hoje o jantar será no seu restaurante preferido!')
}