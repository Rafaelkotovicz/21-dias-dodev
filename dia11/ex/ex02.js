let modelos = [];
let anos = [];
let valores = [];
let continuar = true;
let contador = 0;

while(continuar){
    let modelo = prompt('Digite o modelo do carro');
    let ano = prompt('Digite o ano do carro')
    let valor = prompt('Digite o valor do carro')

    modelos[contador] = modelo;
    anos[contador] = ano;
    valores[contador] = valor;
    let condicao = prompt('Deseja cadastrar mais algum carro?')
    if(condicao != 's'){
        continuar = false;
    }
    contador++;
}
console.log(modelos + '\n' + anos + '\n' + valores);