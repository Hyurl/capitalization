function capitalize(text, noHyphen = false) {
    text = text.replace(/\b[a-z]/g, char => char.toUpperCase());
    return noHyphen ? text.replace(/\-/g, "") : text;
}

function hyphenate(text, lowerCase = false) {
    text = text.replace(/[A-Z]/g, char => {
        return "-" + (lowerCase ? char.toLowerCase(): char);
    });
    return text[0] === "-" ? text.substring(1) : text;
}

function ucfirst(text) {
    return text[0].toUpperCase() + text.substring(1);
}

exports.capitalize = capitalize;
exports.hyphenate = hyphenate;
exports.ucfirst = ucfirst;