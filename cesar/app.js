const cypher = require('./cesar');

console.clear()

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('Mensagem a ser cifrada: ', message => {
    readline.question('Chave de deslocamento: ', key => {
        const cifra = cypher.init(message, key);
        console.log(`Mensagem original: ${message}`);
        console.log(`Mensagem cifrada : ${cifra}`);
    });
})

