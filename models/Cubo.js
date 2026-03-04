class Cubo{
    constructor(a){
        this.a = a
    }

    // cálculo da Área Lateral do cubo
    calcularAreaLateral(){
        return 4 * (this.a * this.a)
    }

    // cálculo da Área Total do cubo
    calcularAreaTotal(){
        return 6 * (this.a * this.a)
    }

    // cálculo do volume do cubo
    calcularVolume(){
        return (this.a * this.a * this.a)
    }
}

module.exports = Cubo