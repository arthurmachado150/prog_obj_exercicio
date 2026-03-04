class Cubo{
    constructor(aresta){
        this.aresta = aresta
    }

    // cálculo da Área Lateral do cubo
    calcularAreaLateralCubo(){
        return 4 * (this.aresta * this.aresta)
    }

    // cálculo da Área Total do cubo
    calcularAreaTotalCubo(){
        return 6 * (this.aresta * this.aresta)
    }

    // cálculo do volume do cubo
    calcularVolumeCubo(){
        return (this.aresta * this.aresta * this.aresta)
    }

}

module.exports = Cubo