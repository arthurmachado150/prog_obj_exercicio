// Comando de instalação da biblioteca
// npm install --save readline-sync
const rl = require('readline-sync')

// Importando as classes
const Cubo = require('./models/Cubo')

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
        console.log('Cilindro')
    }else if(op === 2){
        console.log('Cone')
    }else if(op === 3){
        let a = Number(rl.question(`Qual o valor da aresta: `))
        let cubo = new Cubo(a)
        let areaLateral = cubo.calcularAreaLateral()
        let areaTotal = cubo.calcularAreaTotal()
        let volume = cubo.calcularVolume()

        console.log(` A área Lateral do cubo de aresta ${a} é: ${areaLateral} cm²`)
        console.log(` A área Total do cubo de aresta ${a} é: ${areaTotal} cm²`)
        console.log(` O volume do cubo de aresta ${a} é: ${volume} cm²`)
    }else{
        console.log(' Opção Inválida! Dijite novamente! ')
    }

}while(op !== 0)

    console.log('fim do programa')