class formaDeBolo {
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
}

let boloFesta = new formaDeBolo("Massa de chocolate", "Recheio de Nutella")

console.log(boloFesta.saborRecheio)