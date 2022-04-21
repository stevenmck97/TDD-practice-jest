function caesarCipher(str, shift) {
    let char = [];
    for (let i = 0; i < str.length; i += 1) {
        char[i] = str[i].charCodeAt(0);
    }

    let cipheredCode = char.map((element) => {
        if ((element < 65 || element > 90) && (element < 97 || element > 122)) {
            return element;
        }

        let shifted = element + shift;
        if (element >= 97) {
            while (shifted > 122) {
                return shifted - 26;
            }
        }
        if (element <= 90) {
            while (shifted > 90) {
                return shifted - 26;
            }
        }
        if (
            (shifted >= 97 && shifted <= 122) ||
            (shifted >= 65 && shifted <= 90)
        ) {
            return shifted;
        }
        return element;
    });

    let cipheredChar = cipheredCode.map((element) => {
        return String.fromCharCode(element);
    });

    return cipheredChar.join("");
}

export default caesarCipher;
