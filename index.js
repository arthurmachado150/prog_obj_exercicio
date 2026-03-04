// Comando de instalação da biblioteca
// npm install --save readline-sync
const rl = require('readline-sync')

let op = 0

do{
    console.log('|-------------------------------------------|')
    console.log('|-- 1 = Cilindro ---------------------------|')
    console.log('|-- 2 = Cone     ---------------------------|')
    console.log('|-- 3 = Cubo     ---------------------------|')
    console.log('|-------------------------------------------|')
    console.log('\n')

    op = Number(rl.question(`qual a sua opcao: `))
    console.log(op)

    if(op === 1){
        console.log('Cilindro')
    }else if(op === 2){
        console.log('Cone')
    }else if(op === 3){

    }else{
        console.log(' Opção Inválida! Dijite novamente! ')
    }

}while(op !== 0)

    console.log('fim do programa')