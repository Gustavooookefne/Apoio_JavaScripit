const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Coloque um numero: ", (esc) => {
    esc = parseInt(esc);

    if (isNaN(esc)) {
        console.log("Essa opção é invalida!!")
    } else {
        if (esc % 2 === 0) {
            console.log("O numero é par");
        } else {
            console.log("O numero é inpar");
        }
    }


})