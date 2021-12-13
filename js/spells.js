const spells = [
    acidSplash = [
        "Cantrip",                    // Level
        "Acid Splash",                // Name
        "Conjuration",                // School
        "V, S",                       // Components
        "1 Action",                   // Casting Time
        "Instant",                    // Duration
        "60 ft",                      // Range / Area
        "Artificer, Sorcerer, Wizard" // Classes
    ],
    bladeWard = [
        "Cantrip",
        "Blade Ward",
        "Abjuration",
        "V, S",
        "1 Action",
        "1 Round",
        "Self",
        "Bard, Sorcerer, Warlock, Wizard"
    ],
    boomingBlade = [
        "Cantrip",
        "Booming Blade",
        "Evocation",
        "S, M",
        "1 Action",
        "1 Round",
        "Self (5 ft Radius)",
        "Artificer, Sorcerer, Warlock, Wizard"
    ],
    chillTouch = [
        "Cantrip",
        "Chill Touch",
        "Necromancy",
        "V, S",
        "1 Action",
        "1 Round",
        "120 ft",
        "Sorcerer, Warlock, Wizard"
    ],
    controlFlames = [
        "Cantrip",
        "Control Flames",
        "Transmutation",
        "S",
        "1 Action",
        "Instant or 1 hr",
        "60 ft",
        "Druid, Sorcerer, Wizard"
    ],
    createBonfire = [
        "Cantrip",
        "Create Bonfire",
        "Conjuration",
        "V, S",
        "1 Action",
        "Concentration, Up to 1 min",
        "60 ft",
        "Druid, Sorcerer, Warlock, Wizard"
    ],
    dancingLights = [
        "Cantrip",
        "Dancing Lights",
        "Evocation",
        "V, S, M",
        "1 Action",
        "Concentration, Up to 1 min",
        "120 ft",
        "Artificer, Bard, Sorcerer, Wizard"
    ],
    druidcraft = [
        "Cantrip",
        "Druidcraft",
        "Transmutation",
        "V, S",
        "1 Action",
        "Instant",
        "30 ft",
        "Druid"
    ],
    eldritchBlast = [
        "Cantrip",
        "Eldritch Blast",
        "Evocation",
        "V, S",
        "1 Action",
        "Instant",
        "120 ft",
        "Warlock"
    ],
    encodeThoughts = [
        "Cantrip",
        "Encode Thoughts",
        "Enchantment",
        "S",
        "1 Action",
        "8 hr",
        "Self",
        "Wizard"
    ],
    fireBolt = [
        "Cantrip",
        "Fire Bolt",
        "Evocation",
        "V, S",
        "1 Action",
        "Instant",
        "120 ft",
        "Artificer, Sorcerer, Wizard"
    ],
    friends = [
        "Cantrip",
        "Friends",
        "Enchantment",
        "S, M",
        "1 Action",
        "Concentration, Up to 1 min",
        "Self",
        "Bard, Sorcerer, Warlock, Wizard"
    ],
    frostbite = [
        "Cantrip",
        "Frostbite",
        "Evocation",
        "V, S",
        "1 Action",
        "Instant",
        "60 ft",
        "Artificer, Druid, Sorcerer, Warlock, Wizard"
    ],
    greenFlameBlade = [
        "Cantrip",
        "Green-Flame Blade",
        "Evocation",
        "S, M",
        "1 Action",
        "Instant",
        "Self (5 ft Radius)",
        "Artificer, Sorcerer, Warlock, Wizard"
    ],
    guidance = [
        "Cantrip",
        "Guidance",
        "Divination",
        "V, S",
        "1 Action",
        "Concentration, Up to 1 min",
        "Touch",
        "Artificer, Cleric, Druid"
    ],
    gust = [
        "Cantrip",
        "Gust",
        "Transmutation",
        "V, S",
        "1 Action",
        "Instant",
        "30 ft",
        "Druid, Sorcerer, Wizard"
    ],
    infestation = [
        "Cantrip",
        "Infestation",
        "Conjuration",
        "V, S, M",
        "1 Action",
        "Instant",
        "30 ft",
        "Druid, Sorcerer, Warlock, Wizard"
    ],
    light = [
        "Cantrip",
        "Light",
        "Evocation",
        "V, M",
        "1 Action",
        "1 hr",
        "Touch",
        "Artificer, Bard, Cleric, Sorcerer, Wizard"
    ],
    lightningLure = [
        "Cantrip",
        "Lightning Lure",
        "Evocation",
        "V",
        "1 Action",
        "Instant",
        "Self (15 ft Radius)",
        "Artificer, Sorcerer, Warlock, Wizard"
    ],
    mageHand = [
        "Cantrip",
        "Mage Hand",
        "Conjuration",
        "V, S",
        "1 Action",
        "1 min",
        "30 ft",
        "Artificer, Bard, Sorcerer, Warlock, Wizard"
    ],
    magicStone = [
        "Cantrip",
        "Magic Stone",
        "Transmutation",
        "V, S",
        "1 Bonus Action",
        "1 min",
        "Touch",
        "Artificer, Druid, Warlock"
    ],
    mending = [
        "Cantrip",
        "Mending",
        "Transmutation",
        "V, S, M",
        "1 min",
        "Instant",
        "Touch",
        "Artificer, Bard, Cleric, Druid, Sorcerer, Wizard"
    ],
    message = [
        "Cantrip",
        "Message",
        "Transmutation",
        "V, S, M",
        "1 Action",
        "1 Round",
        "120 ft",
        "Artificer, Bard, Sorcerer, Wizard"
    ],
    mindSliver = [
        "Cantrip",
        "Mind Sliver",
        "Enchantment",
        "V",
        "1 Action",
        "1 Round",
        "60 ft",
        "Sorcerer, Warlock, Wizard"
    ],
    minorIllusion = [
        "Cantrip",
        "Minor Illusion",
        "Illusion",
        "S, M",
        "1 Action",
        "1 min",
        "30 ft",
        "Bard, Sorcerer, Warlock, Wizard"
    ],
    moldEarth = [
        "Cantrip",
        "Mold Earth",
        "Transmutation",
        "S",
        "1 Action",
        "Instant or 1 hr",
        "30 ft",
        "Druid, Sorcerer, Wizard"
    ],
    onOff = [
        "Cantrip",
        "On/Off",
        "Transmutation",
        "V, S",
        "1 Action",
        "Instant",
        "60 ft",
        "Sorcerer, Warlock, Wizard"
    ],
    poisonSpray = [
        "Cantrip",
        "Poison Spray",
        "Conjuration",
        "V, S",
        "1 Action",
        "Instant",
        "10 ft",
        "Artificer, Druid, Sorcerer, Warlock, Wizard"
    ],
    prestidigitation = [
        "Cantrip",
        "Prestidigitation",
        "Transmutation",
        "V, S",
        "1 Action",
        "Up to 1 hr",
        "10 ft",
        "Artificer, Bard, Sorcerer, Warlock, Wizard"
    ],
    primalSavagery = [
        "Cantrip",
        "Primal Savagery",
        "Transmutation",
        "S",
        "1 Action",
        "Instant",
        "Self",
        "Druid"
    ],
    produceFlame = [
        "Cantrip",
        "Produce Flame",
        "Conjuration",
        "V, S",
        "1 Action",
        "10 min",
        "Self",
        "Druid"
    ],
    rayOfFrost = [
        "Cantrip",
        "Ray of Frost",
        "Evocation",
        "V, S",
        "1 Action",
        "Instant",
        "60 ft",
        "Artificer, Sorcerer, Wizard"
    ],
    resistance = [
        "Cantrip",
        "Resistance",
        "Abjuration",
        "V, S, M",
        "1 Action",
        "Concentration, Up to 1 min",
        "Touch",
        "Artificer, Cleric, Druid"
    ],
    sacredFlame = [
        "Cantrip",
        "Sacred Flame",
        "Evocation",
        "V, S",
        "1 Action",
        "Instant",
        "60 ft",
        "Cleric"
    ],
    sappingSting = [
        "Cantrip",
        "Sapping Sting",
        "Necromancy",
        "V, S",
        "1 Action",
        "Instant",
        "30 ft",
        "Wizard"
    ],
    shapeWater = [
        "Cantrip",
        "Shape Water",
        "Transmutation",
        "S",
        "1 Action",
        "Instant or 1 hr",
        "30 ft",
        "Druid, Sorcerer, Wizard"
    ],
    shillelagh = [
        "Cantrip",
        "Shillelagh",
        "Transmutation",
        "V, S, M",
        "1 Bonus Action",
        "1 min",
        "Touch",
        "Druid"
    ],
    shockingGrasp = [
        "Cantrip",
        "Shocking Grasp",
        "Evocation",
        "V, S",
        "1 Action",
        "Instant",
        "Touch",
        "Artificer, Sorcerer, Wizard"
    ],
    spareTheDying = [
        "Cantrip",
        "Spare the Dying",
        "Necromancy",
        "V, S",
        "1 Action",
        "Instant",
        "Touch",
        "Artificer, Cleric"
    ],
    swordBurst = [
        "Cantrip",
        "Sword Burst",
        "Conjuration",
        "V",
        "1 Action",
        "Instant",
        "Self (5 ft Radius)",
        "Artificer, Sorcerer, Warlock, Wizard"
    ],
    thaumaturgy = [
        "Cantrip",
        "Thaumaturgy",
        "Transmutation",
        "V",
        "1 Action",
        "Up to 1 min",
        "30 ft",
        "Cleric"
    ],
    thornWhip = [
        "Cantrip",
        "Thorn Whip",
        "Transmutation",
        "V, S, M",
        "1 Action",
        "Instant",
        "30 ft",
        "Artificer, Druid"
    ],
    thunderclap = [
        "Cantrip",
        "Thunderclap",
        "Evocation",
        "S",
        "1 Action",
        "Instant",
        "Self (5 ft Radius)",
        "Artificer, Bard, Druid, Sorcerer, Warlock, Wizard"
    ],
    tollTheDead = [
        "Cantrip",
        "Toll the Dead",
        "Necromancy",
        "V, S",
        "1 Action",
        "Instant",
        "60 ft",
        "Cleric, Warlock, Wizard"
    ],
    trueStrike = [
        "Cantrip",
        "True Strike",
        "Divination",
        "S",
        "1 Action",
        "Concentration, Up to 1 Round",
        "30 ft",
        "Bard, Sorcerer, Warlock, Wizard"
    ],
    viciousMockery = [
        "Cantrip",
        "Vicious Mockery",
        "Enchantment",
        "V",
        "1 Action",
        "Instant",
        "60 ft",
        "Bard"
    ],
    wordOfRadiance = [
        "Cantrip",
        "Word of Radiance",
        "Evocation",
        "V, M",
        "1 Action",
        "Instant",
        "5 ft",
        "Cleric"
    ]
];

const snakeify = (str) => {
    let newString = "";
    for (letter in str) {
        if (str[letter] == " " || str[letter] == "-" || str[letter] == "/") {
            newString += "_";
        } else {
            newString += str[letter];
        }
    }
    return newString.toLowerCase();
}

const createRow = (spell) => {
    let tr = document.createElement("tr");

    // Level
    let td = document.createElement("td");
    td.textContent = spell[0];
    tr.appendChild(td);

    // Name (and Link)
    td = document.createElement("td");

    let b = document.createElement("b");

    let a = document.createElement("a");
    a.setAttribute("href", "../spells/" + snakeify(spell[1]) + ".html");
    a.textContent = spell[1];

    b.appendChild(a);
    td.appendChild(b);
    tr.appendChild(td);

    // School
    td = document.createElement("td");
    td.textContent = " " + spell[2];

    let icon = document.createElement("span");
    icon.setAttribute("class", "material-icons md-18 slateblue");
    switch (spell[2]) {
        case "Abjuration":
            icon.textContent = "shield";
            break;
        case "Conjuration":
            icon.textContent = "sync_alt";
            break;
        case "Divination":
            icon.textContent = "visibility";
            break;
        case "Enchantment":
            icon.textContent = "psychology";
            break;
        case "Evocation":
            icon.textContent = "auto_fix_high";
            break;
        case "Illusion":
            icon.textContent = "contact_support";
            break;
        case "Necromancy":
            icon.textContent = "close";
            break;
        case "Transmutation":
            icon.textContent = "cached";
            break;
        default:
            icon.textContent = "warning";
            break;
    }

    td.prepend(icon);
    tr.appendChild(td);

    // Components
    td = document.createElement("td");
    td.textContent = spell[3];
    tr.appendChild(td);

    // Casting Time
    td = document.createElement("td");
    td.textContent = spell[4];
    tr.appendChild(td);

    // Duration
    td = document.createElement("td");
    td.textContent = spell[5];
    tr.appendChild(td);

    // Range / Area
    td = document.createElement("td");
    td.textContent = spell[6];
    tr.appendChild(td);

    document.getElementById("tbody").appendChild(tr);
}

for (let s in spells) {
    createRow(spells[s]);
}
