const readData = (data) => {
    const body = document.getElementById("body");

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
        p.textContent = data.school + " cantrip";
    } else {
        p.textContent = data.level + " level " + data.school + " spell"
    }

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
    a.setAttribute("href", "../index/spells.html");
    p.appendChild(a);
    body.prepend(p);
}

const populatePage = (spell) => {
    fetch("../json/" + spell + ".json")
        .then(r => r.json())
        .then(d => readData(d));
}
