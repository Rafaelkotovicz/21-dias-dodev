let alunos = [];
let notas = [];
let continuar = true;
let contador = 0;

while(continuar){
   let nome = prompt('Digite o nome do aluno ' + contador);
   let nota = Number(prompt('Digte a nota do aluno ' + contador));
   alunos[contador] = nome;
   notas[contador] = nota;
   contador++
   let condicao = prompt('Deseja adicionar mais algum aluno?');
   if(condicao != 's'){
    continuar = false;
   }
}
console.log('Notas dos alunos: ')
for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i] + '-' + notas[i])
}
let somaDasNotas = 0;
for(let i = 0; i < alunos.length; i++){
    somaDasNotas += notas[i];
}
let media = somaDasNotas / alunos.length;
console.log('A soma das notas é: ' + somaDasNotas);
console.log('A média das notas é: ' + media);