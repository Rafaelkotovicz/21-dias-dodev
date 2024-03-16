class Carro{
    nome
    potencia
    velocidadeMaxima
    aceleracao
    constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
    }

    tempo(distanciaM){
        let resultado = distanciaM / (this.velocidadeMaxima / this.aceleracao);
        return "tempo em segundos: " + resultado;
    }
}

let novoCarro = new Carro('gtr', 700, 350, 5);
console.log(novoCarro.tempo(1000));