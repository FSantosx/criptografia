console.clear()
const cypher = require('./vigenere');


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Mensagem a ser cifrada: ', message => {
    readline.question('Chave de deslocamento: ', key => {
        const cifra = cypher.init(message, key);
        console.log(`Mensagem original: ${message}`);
        console.log(`Mensagem cifrada : ${cifra}`);

        const descf = cypher.decifrar(cifra, key);
        console.log(`Mensagem cifrada: ${cifra}`);
        console.log(`Mensagem decifrada : ${descf}`);
        readline.close();
    });
})