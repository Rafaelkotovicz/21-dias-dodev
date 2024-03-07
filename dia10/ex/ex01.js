let lista = [];
let indice = [];
let contador = 0;

const num = parseInt(prompt('Digite um número'));

for(let i = 0; i <= 10; i++){
    const elemento = parseInt(prompt('Digite o elemento' + i + 1 +':'));
    lista[i] = elemento;
}

for(let i = 0; i <= 10; i++){
    if(lista[i] === num){
        indice[contador] = i;
        contador++;
    }
}

console.log(`O número ${num} foi encontrado nos índices: ${indice}`);