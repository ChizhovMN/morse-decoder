const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const arr = Object.entries(MORSE_TABLE);
    let decodeMessage = '';
    const newMorse = Object.fromEntries(arr.map((letter) => {
        let newLetter = '';
        for (let i = 0; i < letter[0].length; i++) {
            if (letter[0][i] == '.') { newLetter += '10' }
            if (letter[0][i] == '-') { newLetter += '11' }
        }
        if (newLetter.length != 10 && newLetter.length < 10) {
            for (let i = newLetter.length; i < 10; i++) {
                newLetter = '0' + newLetter;
            }
        }
        letter[0] = newLetter;
        return [letter[0], letter[1]]
    }
    ).concat([['**********', ' ']]));
    for (let i = 0; i < expr.length; i += 10) {
        if (expr.slice(i, i + 10) in newMorse) {
            decodeMessage += newMorse[expr.slice(i, i + 10)]
        }
    }
    return decodeMessage

}

module.exports = {
    decode
}