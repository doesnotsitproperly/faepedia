const populatePage = (spell) => {
    fetch("../json/spells/" + spell + ".json")
        .then(result => result.json())
        .then(data => {
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
        
            let icon = document.createElement("span");
            switch (data.school) {
                case "Abjuration":
                    icon.textContent = "🛡️";
                    break;
                case "Conjuration":
                    icon.textContent = "🔀";
                    break;
                case "Divination":
                    icon.textContent = "🔮";
                    break;
                case "Enchantment":
                    icon.textContent = "🌀";
                    break;
                case "Evocation":
                    icon.textContent = "🪄";
                    break;
                case "Illusion":
                    icon.textContent = "❓";
                    break;
                case "Necromancy":
                    icon.textContent = "☠️";
                    break;
                case "Transmutation":
                    icon.textContent = "🔁";
                    break;
                default:
                    icon.textContent = "⚠️";
                    break;
            }
            p.prepend(icon);
        
            let b = document.createElement("b");
            b.textContent = data.name;
            b.appendChild(document.createElement("br"));
            p.prepend(b);
        
            body.prepend(p);
            
            // Classes
            p = document.createElement("p");
            p.textContent = "Classes:";
            for (let i in data.classes) {
                if (i > 0) {
                    p.textContent += ",";
                }
                p.textContent += " " + data.classes[i];
            }
            body.appendChild(p);
        
            // Return link
            p = document.createElement("p");
            let a = document.createElement("a");
            a.textContent = "Back to Spells";
            a.setAttribute("href", "../spells");
            p.appendChild(a);
            body.prepend(p);
        });
}
