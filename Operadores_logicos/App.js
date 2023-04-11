const readline = require('readline').createInterface ({
    input : process.stdin,
    output : process.stdout
});

console.log('Esse programa vai checar se você é maior de 18 e tem habilitação para saber se você pode entrar no kart')
console.log('E também precisamos verificar se você está na lista de presença do horario');

readline.question('Qual o ano do seu nascimento?', ano => {
    if(ano > 2005){
        console.log('Você não tem 18 anos');
    }else{
        readline.question("Você tem habilitação? (Sim/Não)", temHabilitacao =>{
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Você não tem habilitação para entrar no kart');
            }else{
                readline.question('Qual seu nome?' , nome =>{
                    switch(nome){
                        case 'Edson' :
                            console.log ('Bem vindo ao kart Edson');
                            break;
                        case 'Camily' :
                            console.log('Bem vinda ao kart Camily');
                            break;
                        default :
                        console.log("Seu nome não foi identificado na lista de presença");
                    }
                })
            }
        })
    }
})

