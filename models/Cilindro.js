class Cilindro{
    constructor(raioCil, alturaCil){
        this.raioCil = raioCil
        this.alturaCil = alturaCil
    }

    // cálculo da área da base do cilindro
    calcularAreaBaseCil(){
        return Math.PI * (this.raioCil * this.raioCil)
    }

    // cálculo do volume do cilindro
    calcularVolumeCil(){
        return this.calcularAreaBaseCil() * this.alturaCil
    }
}

module.exports = Cilindro