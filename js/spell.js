const body = document.getElementById("body");

const populatePage = (spell) => {
    let requestURL = "../json/" + spell + ".json";
    let request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();

    request.onload = onLoad = () => {
        let response = request.response;

        let p = document.createElement("p");
        if (response.level == "Cantrip") {
            p.textContent = response.school + " cantrip";
        } else {
            p.textContent = response.level + " level " + response.school + " spell"
        }

        let b = document.createElement("b");
        b.textContent = response.name;
        b.appendChild(document.createElement("br"));
        p.prepend(b);

        body.appendChild(p);

        p = document.createElement("p");

        let span = document.createElement("span");
        span.textContent = "Casting Time: " + response.castingTime;
        span.appendChild(document.createElement("br"));
        p.appendChild(span);

        span = document.createElement("span");
        span.textContent = "Range / Area: " + response.rangeArea;
        span.appendChild(document.createElement("br"));
        p.appendChild(span);

        span = document.createElement("span");
        span.textContent = "Components: " + response.components;
        if (response.materials != "") {
            span.textContent += " " + response.materials;
        }
        span.appendChild(document.createElement("br"));
        p.appendChild(span);

        span = document.createElement("span");
        span.textContent = "Duration: " + response.duration;
        p.appendChild(span);

        body.appendChild(p);

        p = document.createElement("p");
        p.textContent = response.description;
        if (response.atHigherLevels != "") {
            span = document.createElement("span");
            span.textContent = "At higher levels: " + response.atHigherLevels;
            span.prepend(document.createElement("br"));
            p.appendChild(span);
        }
        body.appendChild(p);

        p = document.createElement("p");
        p.textContent = "Classes: " + response.classes;
        body.appendChild(p);
    }
}

