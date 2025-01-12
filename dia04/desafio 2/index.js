let nome = prompt('qual seu nome?')
let idade = parseInt(prompt('qual sua idade?'))
let cnh = prompt('você tem cnh? sim/não')
let carro = prompt('você tem carro? sim/não')

if(idade < 18 || cnh === 'não'){
    console.log(nome + ', você não pode dirigir')
}else if(idade >= 18 && cnh === 'sim' && carro === 'não'){
    console.log(nome + ', você pode dirigir mas não tem um carro')
}else if(idade >= 18 && cnh === 'sim' && carro === 'sim'){
    console.log(nome + ', você será o motorista!')
}