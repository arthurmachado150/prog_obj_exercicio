
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

class Cubo{
    constructor(aresta){
        this.aresta = aresta
    }

    // cálculo do volume do cubo
    calcularVolumeCubo(){
        return this.aresta * this.aresta * this.aresta
    }

    // cálculo do volume do cubo
    calcularAreaTotalCubo(){
        return 6 * (this.aresta * this.aresta)
    }
}

module.exports = Cubo

class Cone{
    constructor(alturaCone, raioCone){
        this.alturaCone = alturaCone
        this.raioCone = raioCone
    }

    // cálculo do volume do cone
    calcularVolumeCone(){
        return (Math.PI * (this.raioCone * this.raioCone) * this.alturaCone) / 3
    }

    // cálculo do volume do cone
    calcularAreaBaseCone(){
        return Math.PI * (this.raioCone * this.raioCone)
    }
}

module.exports = Cone

