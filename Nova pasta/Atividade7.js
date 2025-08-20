const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Escolha uma opção: ", (esc) => {
    esc = parseInt(esc);

    if (isNaN(esc)) {
        console.log("Essa Opcao não existe!!")
        rl.close();
    } else {
        if (esc === 1) {
            rl.question("Coloque o primeiro numero: ", (n1) => {
                n1 = parseInt(n1);

                rl.question("Coloque o segundo nuemero: ", (n2) => {
                    n2 = parseInt(n2);


                    if (isNaN(n1) || isNaN(n2)) {
                        console.log("Essa opcao é invalida!!");
                        rl.close();
                    } else {
                        console.log("A suma dos dois valores é: ", (n1 + n2));
                    }
                    rl.close();
                });
            });

        } else if (esc === 2) {
            rl.question("Coloque o primeiro numero: ", (n1) => {
                n1 = parseInt(n1);

                rl.question("Coloque o segundo numero: ", (n2) => {
                    n2 = parseInt(n2);

                    if (isNaN(n1) || isNaN(n2)) {
                        console.log("Essa Opcao esta errada!!");
                    } else {
                        console.log("A subtração dos dois valores é: ", (n1 - n2));
                    }
                    rl.close();
                });
            });

        } else if (esc === 3) {
            rl.question("Coloque o primeiro numero: ", (n1) => {
                n1 = parseInt(n1);

                rl.question("Coloque o segundo numero: ", (n2) => {
                    n2 = parseInt(n2);


                    if (isNaN (n1) || isNaN (n2)){
                        console.log("Opção invalida!!");
                    }else{
                        console.log("A Multiplicação dos dois numero é: ", (n1 * n2));
                    }
                    rl.close();
                });
            });

        } else if( esc === 4){
            rl.question("Coloque o primeiro numero: ", (n1) => {
                n1 = parseInt(n1);

                rl.question("Coloque o segundo numero: ", (n2) => {
                    n2 = parseInt(n2);


                    if(isNaN (n1) || isNaN (n2)){
                        console.log("Opção invalida!!");
                    }else{
                        console.log("A Divição entre os dois numeros é: ", (n1 / n2));
                    }
                    rl.close();
                })
            })
        }
    }
});

