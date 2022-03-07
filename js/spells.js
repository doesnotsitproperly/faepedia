const spells = [
    "acid_splash",
    "blade_ward",
    "booming_blade",
    "chill_touch",
    "control_flames",
    "create_bonfire",
    "dancing_lights",
    "druidcraft",
    "eldritch_blast",
    "encode_thoughts",
    "fire_bolt",
    "friends",
    "frostbite",
    "green_flame_blade",
    "guidance",
    "gust",
    "infestation",
    "light",
    "lightning_lure",
    "mage_hand",
    "magic_stone",
    "mending",
    "message",
    "mind_sliver",
    "minor_illusion",
    "mold_earth",
    "poison_spray",
    "prestidigitation",
    "primal_savagery",
    "produce_flame",
    "ray_of_frost",
    "resistance",
    "sacred_flame",
    "sapping_sting",
    "shape_water",
    "shillelagh",
    "shocking_grasp",
    "spare_the_dying",
    "sword_burst",
    "thaumaturgy",
    "thorn_whip",
    "thunderclap",
    "toll_the_dead",
    "true_strike",
    "vicious_mockery",
    "word_of_radiance"
];

const createRow = (data, spell) => {
    let tr = document.createElement("tr");

    // Level
    let td = document.createElement("td");
    td.textContent = data.level;
    tr.appendChild(td);

    // Name (and Link)
    td = document.createElement("td");

    let b = document.createElement("b");

    let a = document.createElement("a");
    a.setAttribute("href", "spells/" + spell + ".html");
    a.textContent = data.name;

    b.appendChild(a);
    td.appendChild(b);
    tr.appendChild(td);

    // School
    td = document.createElement("td");
    td.textContent = " " + data.school;

    let icon = document.createElement("img");
    icon.setAttribute("width", "18");
    switch (data.school) {
        case "Abjuration":
            icon.setAttribute("src", "https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u1f6e1.svg");
            icon.setAttribute("alt", "A shield emoji");
            break;
        case "Conjuration":
            icon.setAttribute("src", "https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u1f500.svg");
            icon.setAttribute("alt", "An emoji of two arrows pointing right while crossing over one another; a shuffle emoji");
            break;
        case "Divination":
            icon.setAttribute("src", "https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u1f52e.svg");
            icon.setAttribute("alt", "A crystal ball emoji");
            break;
        case "Enchantment":
            icon.setAttribute("src", "https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u1f300.svg");
            icon.setAttribute("alt", "A spiral shape emoji");
            break;
        case "Evocation":
            icon.setAttribute("src", "https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u1fa84.svg");
            icon.setAttribute("alt", "An emoji of a wand with sparkles coming out of its end");
            break;
        case "Illusion":
            icon.setAttribute("src", "https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u2753.svg");
            icon.setAttribute("alt", "A red question mark emoji");
            break;
        case "Necromancy":
            icon.setAttribute("src", "https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u2620.svg");
            icon.setAttribute("alt", "An emoji of a cartoon human skull atop an X-shaped pair of bones");
            break;
        case "Transmutation":
            icon.setAttribute("src", "https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u1f501.svg");
            icon.setAttribute("alt", "An emoji of two circular arrows pointing in a clockwise direction; a repeat symbol");
            break;
        default:
            icon.setAttribute("src", "https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u26a0.svg");
            icon.setAttribute("alt", "An emoji of a triangle with an exclamation mark inside; a warning symbol");
            break;
    }

    td.prepend(icon);
    tr.appendChild(td);

    // Components
    td = document.createElement("td");
    td.textContent = data.components;
    tr.appendChild(td);

    // Casting Time
    td = document.createElement("td");
    td.textContent = data.castingTime;
    tr.appendChild(td);

    // Duration
    td = document.createElement("td");
    td.textContent = data.duration;
    tr.appendChild(td);

    // Range / Area
    td = document.createElement("td");
    td.textContent = data.rangeArea;
    tr.appendChild(td);

    document.getElementById("tbody").appendChild(tr);
}

for (let s in spells) {
    fetch("json/" + spells[s] + ".json")
        .then(r => r.json())
        .then(d => createRow(d, spells[s]));
}
