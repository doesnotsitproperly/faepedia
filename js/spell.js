const readData = (data) => {
    const body = document.getElementsByTagName("body")[0];

    // Casting Time, Range / Area, Components, Duration
    let p = document.createElement("p");

    let span = document.createElement("span");
    span.textContent = "Casting Time: " + data.castingTime;
    span.appendChild(document.createElement("br"));
    p.appendChild(span);

    span = document.createElement("span");
    span.textContent = "Range / Area: " + data.rangeArea;
    span.appendChild(document.createElement("br"));
    p.appendChild(span);

    span = document.createElement("span");
    span.textContent = "Components: " + data.components;
    if (data.materials != "") {
        span.textContent += " " + data.materials;
    }
    span.appendChild(document.createElement("br"));
    p.appendChild(span);

    span = document.createElement("span");
    span.textContent = "Duration: " + data.duration;
    p.appendChild(span);

    body.prepend(p);

    // Name, Level, School
    p = document.createElement("p");

    if (data.level == "Cantrip") {
        p.textContent = " " + data.school + " cantrip";
    } else {
        p.textContent = data.level + " level " + data.school + " spell"
    }

    let img = document.createElement("img");
    img.setAttribute("width", "20");
    switch (data.school) {
        case "Abjuration":
            img.setAttribute("src", "https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u1f6e1.svg");
            img.setAttribute("alt", "A shield emoji");
            break;
        case "Conjuration":
            img.setAttribute("src", "https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u1f500.svg");
            img.setAttribute("alt", "An emoji of two arrows pointing right while crossing over one another; a shuffle emoji");
            break;
        case "Divination":
            img.setAttribute("src", "https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u1f52e.svg");
            img.setAttribute("alt", "A crystal ball emoji");
            break;
        case "Enchantment":
            img.setAttribute("src", "https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u1f300.svg");
            img.setAttribute("alt", "A spiral shape emoji");
            break;
        case "Evocation":
            img.setAttribute("src", "https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u1fa84.svg");
            img.setAttribute("alt", "An emoji of a wand with sparkles coming out of its end");
            break;
        case "Illusion":
            img.setAttribute("src", "https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u2753.svg");
            img.setAttribute("alt", "A red question mark emoji");
            break;
        case "Necromancy":
            img.setAttribute("src", "https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u2620.svg");
            img.setAttribute("alt", "An emoji of a cartoon human skull atop an X-shaped pair of bones");
            break;
        case "Transmutation":
            img.setAttribute("src", "https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u1f501.svg");
            img.setAttribute("alt", "An emoji of two circular arrows pointing in a clockwise direction; a repeat symbol");
            break;
        default:
            img.setAttribute("src", "https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u26a0.svg");
            img.setAttribute("alt", "An emoji of a triangle with an exclamation mark inside; a warning symbol");
            break;
    }
    p.prepend(img);

    let b = document.createElement("b");
    b.textContent = data.name;
    b.appendChild(document.createElement("br"));
    p.prepend(b);

    body.prepend(p);
    
    // Classes
    p = document.createElement("p");
    p.textContent = "Classes: " + data.classes;
    body.appendChild(p);

    // Return link
    p = document.createElement("p");
    let a = document.createElement("a");
    a.textContent = "Back to Spells";
    a.setAttribute("href", "../spells.html");
    p.appendChild(a);
    body.prepend(p);
}

const populatePage = (spell) => {
    fetch("../json/" + spell + ".json")
        .then(r => r.json())
        .then(d => readData(d));
}
