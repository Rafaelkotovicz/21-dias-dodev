let mediaGeral = 0
let quantidadeHomem = 0
let qmtn7 = 0
let maiorNotaHomem = 0
let totalNotas = 0
let totalAlunos = 0
let contador = true

while(contador){
    let nota = Number(prompt("digite a nota do aluno"))
    let sexo = prompt("digite o sexo do aluno (m/f)")

    totalNotas += nota
    totalAlunos ++

    if(sexo === 'm'){
        quantidadeHomem ++
        if(nota > maiorNotaHomem){
            maiorNotaHomem = nota
        }else if(sexo === 'f' && nota > 7){
            qmtn7 ++
        }
    }

    let continuar = prompt("deseja cadastrar outro aluno? (s/n)")
    if(continuar === "n"){
        contador = false
    }
}

mediaGeral = totalNotas / totalAlunos

console.log('média geral: ' + mediaGeral)
console.log('quantidade de homens que enviaram notas: ' + quantidadeHomem)
console.log('quantidade de mulheres com nota acima de 7: ' + qmtn7)
console.log('maior nota entre os homens: ' + maiorNotaHomem)

