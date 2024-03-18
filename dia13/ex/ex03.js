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

    Tempo(distanciaM){
        let resultado = distanciaM / (this.velocidadeMaxima / this.aceleracao);
        return "tempo em segundos: " + resultado;
    }
}


class Corrida{
    nome
    tipo
    distancia
    participantes = []
    vencedor = ''
    constructor(nome, tipo, distancia){
        this.nome = nome
        this.tipo = tipo
        this.distancia = distancia
        this.participantes = []
        this.vencedor = ''
    }

    Tempo(distanciaM){
        let resultado = distanciaM / (this.velocidadeMaxima / this.aceleracao);
        return "tempo em segundos: " + resultado;
    } 

    OVencedor(){
        let menorTempo = this.participantes[0].Tempo(this.distancia);
        let vencedor = this.participantes[0];

        for(let i = 1; i < this.participantes.length; i++){
            let atempo = this.participantes[i].Tempo(this.distancia);
            if(atempo < menorTempo){
                menorTempo = atempo;
                vencedor = this.participantes[i]
            }
        }
        return this.vencedor = vencedor;
    }

    EVencedor(){
        alert('vencedor: ' + this.vencedor.nome)
    }
    
}

let corrida = new Corrida('corrida', 'rua', 1000,);
corrida.participantes[0] = new Carro('gtr', 700, 400, 5)
corrida.participantes[1] = new Carro('uno mille', 10000, 1000, 1)
corrida.participantes[2] = new Carro('fit', 70, 120, 10)

corrida.OVencedor();
corrida.EVencedor();
