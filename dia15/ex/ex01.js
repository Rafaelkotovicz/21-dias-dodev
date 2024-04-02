let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [11, 2, 33, 4, 55, 6, 77, 8, 99, 10];

function novoArray(arrayUm, arrayDois){
    let terceiroArray = [];
    let contador = 0;

    for(let i = 0; i < arrayUm.length; i++){
        for(let j = 0; j < arrayDois.length; j++){
            if(arrayUm[i] == arrayDois[j]){
                novoArray[contador] = arrayUm[i];
                contador++
                j = arrayDois.length;
            }
        }
    }
    return terceiroArray;
}
console.log(novoArray(array1, array2));