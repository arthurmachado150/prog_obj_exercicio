
// r = raio do cone e h = altura do cone
class Cone{
    constructor(h, r){
        this.h = h
        this.r = r
    }

    // cálculo da geratriz do cone
    calcularGeratrizCone(){
        return (this.h * this.h) + (this.r * this.r)
    }
    
    // cálculo da área da base do cone
    calcularAreaBaseCone(){
        return Math.PI * (this.r * this.r)
    }

    // cálculo da área lateral do cone
    calcularAreaLateralCone(){
        return Math.PI * this.r * this.calcularGeratrizCone()
    }

    // cálculo da área total do cone
    calcularAreaTotalCone(){
        return Math.PI * this.r * (this.calcularGeratrizCone() + this.r)
    }

    // cálculo do volume do cone
    calcularVolumeCone(){
        return (Math.PI * (this.r * this.r) * this.h) / 3
    }
}

module.exports = Cone