/* let enabled = [
    "Cantrip",
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "Abjuration",
    "Conjuration",
    "Divination",
    "Enchantment",
    "Evocation",
    "Illusion",
    "Necromancy",
    "Transmutation",
    "Artificer",
    "Bard",
    "Cleric",
    "Druid",
    "Paladin",
    "Ranger",
    "Sorcerer",
    "Warlock",
    "Wizard"
] */

const spells = [
    acidSplash = [
        "Cantrip",                             // Level
        "Acid Splash",                         // Name
        "Conjuration",                         // School
        "V, S",                                // Components
        "1 Action",                            // Casting Time
        "Instant",                             // Duration
        "60 ft",                               // Range / Area
        "acid_splash",                         // Link
        "Artificer, Sorcerer, Wizard"          // Classes
    ],
    bladeWard = [
        "Cantrip",                             // Level
        "Blade Ward",                          // Name
        "Abjuration",                          // School
        "V, S",                                // Components
        "1 Action",                            // Casting Time
        "1 Round",                             // Duration
        "Self",                                // Range / Area
        "blade_ward",                          // Link
        "Bard, Sorcerer, Warlock, Wizard"      // Classes
    ],
    boomingBlade = [
        "Cantrip",                             // Level
        "Booming Blade",                       // Name
        "Evocation",                           // School
        "S, M",                                // Components
        "1 Action",                            // Casting Time
        "1 Round",                             // Duration
        "Self (5 ft Radius)",                  // Range / Area
        "booming_blade",                       // Link
        "Artificer, Sorcerer, Warlock, Wizard" // Classes
    ],
    chillTouch = [
        "Cantrip",                             // Level
        "Chill Touch",                         // Name
        "Necromancy",                          // School
        "V, S",                                // Components
        "1 Action",                            // Casting Time
        "1 Round",                             // Duration
        "120 ft",                              // Range / Area
        "chill_touch",                         // Link
        "Sorcerer, Warlock, Wizard"            // Classes
    ],
    controlFlames = [
        "Cantrip",                             // Level
        "Control Flames",                      // Name
        "Transmutation",                       // School
        "S",                                   // Components
        "1 Action",                            // Casting Time
        "Instant or 1 hr",                     // Duration
        "60 ft",                               // Range / Area
        "control_flames",                      // Link
        "Druid, Sorcerer, Wizard"              // Classes
    ],
    createBonfire = [
        "Cantrip",                             // Level
        "Create Bonfire",                      // Name
        "Conjuration",                         // School
        "V, S",                                // Components
        "1 Action",                            // Casting Time
        "Concentration, up to 1 min",          // Duration
        "60 ft",                               // Range / Area
        "create_bonfire",                      // Link
        "Druid, Sorcerer, Warlock, Wizard"     // Classes
    ],
    dancingLights = [
        "Cantrip",                             // Level
        "Dancing Lights",                      // Name
        "Evocation",                           // School
        "V, S, M",                             // Components
        "1 Action",                            // Casting Time
        "Concentration, up to 1 min",          // Duration
        "120 ft",                              // Range / Area
        "dancing_lights",                      // Link
        "Artificer, Bard, Sorcerer, Wizard"    // Classes
    ],
    druidcraft = [
        "Cantrip",                             // Level
        "Druidcraft",                          // Name
        "Transmutation",                       // School
        "V, S",                                // Components
        "1 Action",                            // Casting Time
        "Instant",                             // Duration
        "30 ft",                               // Range / Area
        "druidcraft",                          // Link
        "Druid"                                // Classes
    ],
    eldritchBlast = [
        "Cantrip",                             // Level
        "Eldritch Blast",                      // Name
        "Evocation",                           // School
        "V, S",                                // Components
        "1 Action",                            // Casting Time
        "Instant",                             // Duration
        "120 ft",                              // Range / Area
        "eldritch_blast",                      // Link
        "Warlock"                              // Classes
    ],
    encodeThoughts = [
        "Cantrip",                             // Level
        "Encode Thoughts",                     // Name
        "Enchantment",                         // School
        "S",                                   // Components
        "1 Action",                            // Casting Time
        "8 hr",                                // Duration
        "Self",                                // Range / Area
        "encode_thoughts",                     // Link
        "Wizard"                               // Classes
    ],
    fireBolt = [
        "Cantrip",                             // Level
        "Fire Bolt",                           // Name
        "Evocation",                           // School
        "V, S",                                // Components
        "1 Action",                            // Casting Time
        "Instant",                             // Duration
        "120 ft",                              // Range / Area
        "fire_bolt",                           // Link
        "Artificer, Sorcerer, Wizard"          // Classes
    ],
    friends = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    frostbite = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    greenFlameBlade = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    guidance = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    gust = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    infestation = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    light = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    lightningLure = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    mageHand = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    magicStone = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    mending = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    message = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    mindSliver = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    minorIllusion = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    moldEarth = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    onOff = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    poisonSpray = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    prestidigitation = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    primalSavagery = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    produceFlame = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    rayOfFrost = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    resistance = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    sacredFlame = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    sappingSting = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    shapeWater = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    shillelagh = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    shockingGrasp = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    spareTheDying = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    swordBurst = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    thaumaturgy = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    thornWhip = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    thunderclap = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    tollTheDead = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    trueStrike = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    viciousMockery = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ],
    wordOfRadiance = [
        "Cantrip",                             // Level
        "", // Name
        "", // School
        "", // Components
        "", // Casting Time
        "", // Duration
        "", // Range / Area
        "", // Link
        ""  // Classes
    ]
];

const createRow = (spell) => {
    let tr = document.createElement("tr");

    // Level
    let td = document.createElement("td");
    td.textContent = spell[0];
    tr.appendChild(td);

    // Name (and Link)
    td = document.createElement("td");
    let a = document.createElement("a");
    a.setAttribute("href", "../spells/" + spell[7] + ".html");
    a.textContent = spell[1];
    td.appendChild(a);
    tr.appendChild(td);

    // School
    td = document.createElement("td");
    td.textContent = spell[2];
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
