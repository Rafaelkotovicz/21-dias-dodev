let nome = prompt('digite seu nome')
let cpf = Number(prompt('digite seu cpf'))
let condicao = true
let saldo = 1000
let maiorValor
let media
let totalTransacoes = 0
let totalValoresInseridos = 0

do{
    let valor = Number(prompt('digite um valor'))

    if(valor > totalTransacoes){
        totalTransacoes = valor
    }
    
    if(valor > maiorValor){
        maiorValor += valor
    }

    let opcao = prompt('digite 1 para deposito ou 2 para saque')

    if(opcao === '1'){
        if(valor > saldo || valor < 0){
            console.log('saldo insuficiente ou número negativo')
        }
        saldo += valor
        totalTransacoes ++
    }else if(opcao === '2'){
        if(valor > saldo || valor < 0){
            console.log('saldo insuficiente ou número negativo')
        }
        saldo -= valor
        totalTransacoes ++  
    }

    media = totalValoresInseridos / totalTransacoes

    let continuar = prompt('deseja continuar? s/n')

    if(continuar === 'n'){
        condicao = false
    }
}while(condicao)

console.log(`saldo total: ${saldo}`)
console.log(`maior valor inserido: ${maiorValor}`)
console.log(`média dos valores inseridos: ${media}`)