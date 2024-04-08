class formaDeBolo {
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }

    assar(){
        console.log("Assando bolo de " + this.saborDaMassa)
    }
}

let boloFesta = new formaDeBolo("chocolate", "Nutella")
let boloPremium = new formaDeBolo("baunilha", "coco")

boloFesta.saborDaMassa = "floresta negra"

boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()