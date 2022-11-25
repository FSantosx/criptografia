const alfa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

module.exports = class Vigenere {
    static init(text, key) {
        return this.cifrar(text, key)
    }

    static cifrar (text, key) {
        const textSplited = text.split('');
        const keySplited = key.split('');

        const textLen = textSplited.length;

        var newKey = [];
        var count = 0;
        
        do {
            if (count >= keySplited.length) count = 0;
            newKey.push(keySplited[count++])
        } while (textLen != newKey.length);;
        console.log(newKey.join(''))

        const cypher = newKey.map((k, i) => {
            if (textSplited[i] == ' ') return ' ';
            let c = (alfa.indexOf(textSplited[i]) + alfa.indexOf(k)) % 26;
            return alfa[c];
        })
        return cypher.join('');
    }

    static decifrar (text, key) {
        const textSplited = text.split('');
        const keySplited = key.split('');

        const textLen = textSplited.length;

        var newKey = [];
        var count = 0;
        
        do {
            if (count >= keySplited.length) count = 0;
            newKey.push(keySplited[count++])
        } while (textLen != newKey.length);;
        console.log(newKey.join(''))

        const cypher = newKey.map((k, i) => {
            if (textSplited[i] == ' ') return ' ';
            let c = (alfa.indexOf(textSplited[i]) - alfa.indexOf(k) + 26) % 26;
            return alfa[c];
        })
        return cypher.join('');
    }
}
