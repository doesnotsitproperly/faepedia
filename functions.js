import * as fs from "node:fs";

const bold = (s) => `<b>${s}</b>`;

const equal = (i, j) => i == j;

const joinList = (...s) => s.join(", ");

const kebabCase = (s) => {
    let newString = "";
    for (const char of s) {
        if (char == " ") {
            newString += "-";
        } else {
            newString += char.toLowerCase();
        }
    }
    return newString;
}

const paragraph = (s) => `<p>${s}</p>`;

const pluralize = (number, units) => {
    let newString = `${number} ${units}`
    if (number > 1 || number < 1) {
        newString += "s";
    }
    return newString;
}

const read = (path) => {
    return fs.readFileSync(path, { encoding: "utf8" }, (err, _) => {
        if (err) {
            throw err;
        }
    });
}

const unorderedList = (...s) => {
    let items = "";
    for (const item of s) {
        items += `<li>${item}</li>`;
    }
    return `<ul>${items}</ul>`;
}

const write = (s) => s;

export {
    bold,
    equal,
    joinList,
    kebabCase,
    paragraph,
    pluralize,
    read,
    unorderedList,
    write
};
