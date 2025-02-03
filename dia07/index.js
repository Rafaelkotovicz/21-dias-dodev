let condicao = true

while(condicao){
    let idade = Number(prompt('digite sua idade'))
    if(idade < 18){
        console.log('você é menor de idade')
        condicao = false
    }
}