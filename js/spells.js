const school = {
    abjuration: "abjuration",
    conjuration: "conjuration",
    divination: "divination",
    enchantment: "enchantment",
    evocation: "evocation",
    illusion: "illusion",
    necromancy: "necromancy",
    transmutation: "transmutation"
};

const _class = {
    artificer: "artificer",
    bard: "bard",
    cleric: "cleric",
    druid: "druid",
    paladin: "paladin",
    ranger: "ranger",
    sorcerer: "sorcerer",
    warlock: "warlock",
    wizard: "wizard"
};

class Spell {
    name;
    level;
    school;
    classes;
    constructor(name, level, school, classes) {
        this.name = name;
        this.level = level;
        this.school = school;
        this.classes = classes;
    }
}

const spells = [
    new Spell("acidSplash", 0, school.conjuration, [
        _class.artificer,
        _class.sorcerer,
        _class.wizard
    ]),
    new Spell("bladeWard", 0, school.abjuration, [
        _class.bard,
        _class.sorcerer,
        _class.warlock,
        _class.wizard
    ]),
    new Spell("boomingBlade", 0, school.evocation, [
        _class.artificer,
        _class.sorcerer,
        _class.warlock,
        _class.wizard
    ]),
    new Spell("chillTouch", 0, school.necromancy, [
        _class.sorcerer,
        _class.warlock,
        _class.wizard
    ]),
    new Spell("controlFlames", 0, school.transmutation, [
        _class.druid,
        _class.sorcerer,
        _class.wizard
    ]),
    new Spell("createBonfire", 0, school.abjuration, [
        _class.druid,
        _class.sorcerer,
        _class.warlock,
        _class.wizard
    ]),
    new Spell("dancingLights", 0, school.evocation, [
        _class.artificer,
        _class.bard,
        _class.sorcerer,
        _class.wizard
    ]),
    new Spell("druidcraft", 0, school.transmutation, [
        _class.druid
    ]),
    new Spell("eldritchBlast", 0, school.evocation, [
        _class.warlock
    ]),
    new Spell("encodeThoughts", 0, school.enchantment, [
        _class.wizard
    ]),
    new Spell("fireBolt", 0, school.evocation, [
        _class.artificer,
        _class.sorcerer,
        _class.wizard
    ])
];

let showSpells = {
    cantrips: true,
    firstLevel: true,
    secondLevel: true,
    thirdLevel: true,
    fourthLevel: true,
    fifthLevel: true,
    sixthLevel: true,
    seventhLevel: true,
    eighthLevel: true,
    ninthLevel: true,
    abjuration: true,
    conjuration: true,
    divination: true,
    enchantment: true,
    evocation: true,
    illusion: true,
    necromancy: true,
    transmutation: true,
    artificer: true,
    bard: true,
    cleric: true,
    druid: true,
    paladin: true,
    ranger: true,
    sorcerer: true,
    warlock: true,
    wizard: true
};

const hideSpell = (spellAspect) => {
    for (let spell of spells) {
        if (spell.level == spellAspect || spell.school == spellAspect) {
            document.getElementById(spell.name).hidden = true;
        }
        else {
            for (let c of spell.classes) {
                if (c == spellAspect) {
                    document.getElementById(spell.name).hidden = true;
                }
            }
        }
    }
}

let searchParams = new URLSearchParams(window.location.search);
for (let pair of searchParams.entries()) {

}
