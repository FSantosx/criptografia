const alfa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

module.exports = class Cesar {

    static init(text, key = 3) {
        return Cesar.encript(text, key)
    }

    static encript(text, key) {
        const nText = Cesar.normalization(text)
        const textSplited = nText.split('');
        const newText = textSplited.map(t => {
            if (t == ' ') return ' '
            let c = ((alfa.indexOf(t) + parseInt(key)) % 26)
            return alfa[c]
        })
        return newText.join('')
    }

    static decript(arr) {
        console.clear();
        console.log(arr);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Mensagem a ser cifrada: ', message => {
            readline.question('Chave de deslocamento: ', key => {
                const cifra = cypher.init(message, key);
                console.log(`Mensagem original: ${message}`);
                console.log(`Mensagem cifrada : ${cifra}`);
                readline.question("Deseja continuar? (s)im / (n)ao \n", op => {
                    if (op == 's') menu()
                    else process.exit()
                })
            });
        })
    }

    static normalization(text) {
        text = text.toLowerCase();
        text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
        text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
        return text;
    }
}