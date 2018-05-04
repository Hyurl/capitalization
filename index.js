function capitalize(text, noHyphen) {
    text = text.replace(/\b[a-zA-Z0-9]/g, function (char) {
        return char.toUpperCase();
    });
    return noHyphen ? text.replace(/-/g, "") : text;
}

function hyphenate(text, lowerCase, hyphen) {
    hyphen = hyphen || "-";
    text = text.replace(/[A-Z]/g, function (char) {
        return hyphen + (lowerCase ? char.toLowerCase() : char);
    });
    return text[0] === hyphen ? text.substring(1) : text;
}

function camelCase(text, ucfirst) {
    text = text.replace(/_[a-zA-Z0-9]/g, function (char) {
        return char.slice(1).toUpperCase();
    });
    return (ucfirst ? text[0].toUpperCase() : text[0].toLowerCase()) + text.slice(1);
}

function underline(text, keepCase) {
    return hyphenate(text, !keepCase, "_");
}

exports.capitalize = capitalize;
exports.hyphenate = hyphenate;
exports.camelCase = camelCase;
exports.underline = underline;