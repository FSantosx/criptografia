console.clear()
const analisys = require('./analise')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// readline.question('Mensagem a ser analisada: ', message => {
//     const analise = analisys.frequency(message);
//     console.log(`Analise de frequencia : ${analise}`);
//     readline.close()
// })

readline.question('Mensagem a ser descifrada: ', message => {
    readline.question("Chave de deslocamento", key => {
        const analise = analisys.decript(message, key);
        console.log(`Frase original: ${analise}`);
    })
})