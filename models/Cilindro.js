class Cilindro{
    constructor(r, h){
        this.h = h
        this.r = r
    }

    // cálculo da área da base do cilindro
    calcularAreaBaseCil(){
        return Math.PI * (this.r * this.r)
    }

    // cálculo da área lateral do cilindro
    calcularAreaLateralCil(){
        return 2 * Math.PI * this.r * this.h
    }

    // cálculo da área total do cilindro
    calcularAreaTotalCil(){
        return 2 * (this.calcularAreaBaseCil() + this.calcularAreaLateralCil())
    }

    // cálculo do volume do cilindro
    calcularVolumeCil(){
        return this.calcularAreaBaseCil() * this.h
    }
}

module.exports = Cilindro