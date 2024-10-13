const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // Split the expression into chunks of 10
    const chunks = expr.match(/.{1,10}/g);
    let decodedMessage = '';

    chunks.forEach(chunk => {
        if (chunk === '**********') {
            decodedMessage += ' '; // Add space for Morse space
        } else {
            let morseLetter = '';

            for (let i = 0; i < chunk.length; i += 2) {
                const bits = chunk.slice(i, i + 2);
                if (bits === '10') {
                    morseLetter += '.'; // Dot
                } else if (bits === '11') {
                    morseLetter += '-'; // Dash
                }
            }
            
            decodedMessage += MORSE_TABLE[morseLetter] || ''; // Add decoded letter
        }
    });

    return decodedMessage;
}

module.exports = {
    decode
}