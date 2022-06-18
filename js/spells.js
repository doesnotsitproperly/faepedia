const toKebabCase = (text) => {
    let newString = "";
    for (const char of text) {
        if (char == " ") {
            newString += "-";
        } else {
            newString += char.toLowerCase();
        }
    }
    return newString;
}

const getSpellAspects = (spell) => {
    return [
        toKebabCase(spell.children[0].textContent),
        spell.children[2].textContent.toLowerCase(),
        spell.children[6].textContent.toLowerCase()
    ];
}

const styleRows = (rows) => {
    let color = true;
    for (const row of rows) {
        if (color) {
            row.style.backgroundColor = "#743d58";
            color = false;
        } else {
            row.style.backgroundColor = "#5b3045";
            color = true;
        }
    }
}

const spells = Array.from(document.getElementsByTagName("tr"));
spells.shift();
let filteredSpells = [];

const showSpell = (spellAspect) => {
    for (const spell of spells) {
        const [ level, school, classes ] = getSpellAspects(spell);
        if (level == spellAspect || school.includes(spellAspect) || classes.includes(spellAspect)) {
            filteredSpells.push(spell);
            spell.hidden = false;
        }
    }
    styleRows(filteredSpells);
}
const hideSpell = (spellAspect) => {
    for (const spell of filteredSpells) {
        const [ level, school, classes ] = getSpellAspects(spell);
        if (level != spellAspect && !school.includes(spellAspect) && !classes.includes(spellAspect)) {
            filteredSpells = filteredSpells.filter((value) => {
                return value != spell;
            });
            spell.hidden = true;
        }
    }
    styleRows(filteredSpells);
}

let aspects = [];
for (const [ key, _ ] of new URLSearchParams(window.location.search)) {
    aspects.push(key.toLowerCase());
}
if (aspects.length > 0) {
    for (const spell of spells) {
        spell.hidden = true;
    }
    for (const aspect of aspects) {
        if (filteredSpells.length > 0) {
            hideSpell(aspect);
        } else {
            showSpell(aspect);
        }
    }
}
