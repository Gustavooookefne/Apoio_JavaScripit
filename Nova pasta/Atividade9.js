const { log } = require('console');
const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Coloque um numero: ", (esc) => {
    esc = parseInt(esc);

    if(isNaN(esc)){
        console.log("Opção invalida!!")
    }else{
        function fatorial(num){
            if(num === 0 || num === 1){
             return 1;   
            }else{
                return num * fatorial (num - 1);
            }
        }
        console.log("O resultado é: ", fatorial(esc))
    }

})

