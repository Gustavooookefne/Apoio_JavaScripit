const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual e sua idade: ", (idade) => {
    idade = parseInt(idade);

    if(isNaN(idade)){
        console.log("Coloque um numero valido");
    }else{
        if(idade >= 18){
            console.log("Voce é maior de idade!!");
        }else{
            console.log("Voce é menor de idade")
        }
    }
    rl.close();
});