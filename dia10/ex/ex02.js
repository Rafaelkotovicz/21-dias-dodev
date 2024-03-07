let tamanhoArray = Number(prompt('Qual o tamanho da lista?'))
let lista = [];
lista.length = tamanhoArray;
let contador = 0;
let indice;
let continuar = true;

while(continuar){
    indice = prompt('Adicione um número');
    lista[contador] = indice;
    contador++
    if(indice == tamanhoArray){
        continuar = false;
    }
 }
 
 for(let i = tamanhoArray; i == lista.length && i > 0; i--){
     console.log(lista.reverse());
 }

 for(let i = 0; i < lista.length; i++){
    console.log(lista);
 }
