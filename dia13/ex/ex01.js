class Computador{
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd
    
    
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd
    }

    exibirInformacoes(){
        console.log(this.tipo, this.processador, this.video, this.armazenamento, this.memoriaRam, this.ssd);
    }
}

let meuPc = new Computador("notebook", "i5", "integrada", 256, 8, true);
meuPc.exibirInformacoes();