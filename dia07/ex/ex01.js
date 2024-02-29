let mediaGeral = 0;
let qntHomens = 0;
let qntMulheresAcimaDe7 = 0;
let maiorNotaHomens;
let contador = 1;

while(contador <= 10){
    nota = Number(prompt('Digite a nota do ' + contador + '° aluno'));
    sexo = prompt('Digite o sexo do aluno (m/f)');

    if(sexo == 'm'){
        if(nota > maiorNotaHomens){
            maiorNotaHomens = nota;
        }
        qntHomens++
    }

    if(sexo == 'f' && nota > 7){
        qntMulheresAcimaDe7++
    }
    
    mediaGeral += nota
    contador++
}

mediaGeral = mediaGeral / 10;

console.log('A média dos alunos foi: ' + mediaGeral);
console.log('A quantidade de homens cadastrados foi: ' + qntHomens);
console.log('A quantidade de mulheres que tiveram nota acima de 7 foi: ' + qntMulheresAcimaDe7);
console.log('A maior nota entre os homens foi: ' + maiorNotaHomens);
