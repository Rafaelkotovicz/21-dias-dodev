let modelos = [];
let anos = [];
let valores = [];
let continuar = true;
let contador = 0;

while(continuar){
    let modelo = prompt('Digite o modelo do carro');
    modelos[contador] = modelo;
    let ano = prompt('Digite o ano do carro');
    anos[contador] = ano;
    let valor = prompt('Digite o valor do carro');
    valores[contador] = valor;
    contador++;

    let condicao = prompt('Deseja cadastrar mais algum carro?')
    if(condicao != 's'){
        continuar = false;
    }
}
console.log('Cadastro de carros:');
for(let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + ' ' + anos[i] + ' ' + valores[i]);
}