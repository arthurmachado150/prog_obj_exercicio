// Comando de instalação da biblioteca
// npm install --save readline-sync
const rl = require('readline-sync')

// Importando as classes
const Cubo = require('./models/Cubo')
const Cone = require('./models/Cone')
const Cilindro = require('./models/Cilindro')

let op = 0

do{
    console.log('|-------------------------------------------|')
    console.log('|-- 1 = Cilindro ---------------------------|')
    console.log('|-- 2 = Cone     ---------------------------|')
    console.log('|-- 3 = Cubo     ---------------------------|')
    console.log('|-------------------------------------------|')
    console.log('\n')

    op = Number(rl.question(`Qual a sua opcao: `))
    console.log(op)

    if(op === 1){
        let h = Number(rl.question(`Qual o valor da altura: `))
        let r = Number(rl.question(`Qual o valor do raio: `))
        let cil = new Cilindro(r, h)
        let areaBaseCil = cil.calcularAreaBaseCil()
        let areaLateralCil = cil.calcularAreaLateralCil()
        let areaTotalCil = cil.calcularAreaTotalCil()
        let volumeCil = cil.calcularVolumeCil()

        console.log(` A área da Base do cilindro de raio ${r} é: ${areaBaseCil.toFixed(3)} cm²`)
        console.log(` A área Lateral do cilindro de raio ${r} e altura ${h} é: ${areaLateralCil.toFixed(3)} cm²`)
        console.log(` A área Total do cilindro de Ára da Base ${areaBaseCil.toFixed(3)} e Área Lateral ${areaLateralCil.toFixed(3)} é: ${areaTotalCil.toFixed(3)} cm²`)
        console.log(` O volume do cilindro de Área da Base ${areaBaseCil.toFixed(3)} e altura ${h} é: ${volumeCil.toFixed(3)} cm³`)
    }else if(op === 2){
        let h = Number(rl.question(`Qual o valor da altura: `))
        let r = Number(rl.question(`Qual o valor do raio: `))
        let cone = new Cone(h, r)
        let g = cone.calcularGeratrizCone()
        let areaBaseCone = cone.calcularAreaBaseCone()
        let areaLateralCone = cone.calcularAreaLateralCone()
        let areaTotalCone = cone.calcularAreaTotalCone()
        let volumeCone = cone.calcularVolumeCone()

        console.log(` A área da Base do cone de altura ${h} e raio ${r} é: ${areaBaseCone.toFixed(3)} cm²`)
        console.log(` A área Lateral do cone de raio ${r} e geratriz ${g} é: ${areaLateralCone.toFixed(3)} cm²`)
        console.log(` A área Total do cone de raio ${r} e geratriz ${g} é: ${areaTotalCone.toFixed(3)} cm²`)
        console.log(` O volume do cone de altura ${h} e raio ${r} é: ${volumeCone.toFixed(3)} cm³`)
    }else if(op === 3){
        let a = Number(rl.question(`Qual o valor da aresta: `))
        let cubo = new Cubo(a)
        let areaLateral = cubo.calcularAreaLateral()
        let areaTotal = cubo.calcularAreaTotal()
        let volume = cubo.calcularVolume()

        console.log(` A área Lateral do cubo de aresta ${a} é: ${areaLateral} cm²`)
        console.log(` A área Total do cubo de aresta ${a} é: ${areaTotal} cm²`)
        console.log(` O volume do cubo de aresta ${a} é: ${volume} cm³`)
    }else{
        console.log(' Opção Inválida! Dijite novamente! ')
    }

}while(op !== 0)

    console.log('fim do programa')