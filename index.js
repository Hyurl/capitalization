function capitalize(text, noHyphen) {
    text = text.replace(/\b[a-z]/g, function (char) {
        return char.toUpperCase();
    });
    return noHyphen ? text.replace(/\-/g, "") : text;
}

function hyphenate(text, lowerCase) {
    text = text.replace(/[A-Z]/g, function (char) {
        return "-" + (lowerCase ? char.toLowerCase() : char);
    });
    return text[0] === "-" ? text.substring(1) : text;
}

function ucfirst(text) {
    return text[0].toUpperCase() + text.substring(1);
}

exports.capitalize = capitalize;
exports.hyphenate = hyphenate;
exports.ucfirst = ucfirst;