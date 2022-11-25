const alfa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

module.exports = class Analise {

    static init(text) {
        Analise.frequency(text)
    }

    static frequency(text) {
        const charMap = {};

        for (const char of text.toLowerCase()) {
            if (!charMap[char]) {
                charMap[char] = 1;
            } else {
                charMap[char] = charMap[char] + 1;
            }
        }
        const arr = []
        for (let [keyC, valueC] of Object.entries(charMap)) {
            arr.push(`${keyC} = ${valueC}`)
        }
        return arr
    }

    static decript(text, key = 3){
        const textSplited = text.split('');
        const newText = textSplited.map(t => {
            if (t == ' ') return ' '
            let c = ((alfa.indexOf(t) - parseInt(key)) % 26)
            return alfa[c]
        })
        return newText.join('')
    }

}
