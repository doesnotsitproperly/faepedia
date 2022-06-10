fetch("spells.json")
    .then((response) => response.json())
    .then((spells) => {
        // This should work in the reverse way, only showing spells with the given aspect
        const hideSpell = (spellAspect) => {
            spellAspect = spellAspect.toLowerCase();

            for (const spell of spells.array) {
                if (spell.level == spellAspect || spell.school == spellAspect) {
                    document.getElementById(spell.name).hidden = true;
                } else {
                    for (const spellClass of spell.classes) {
                        if (spellClass == spellAspect) {
                            document.getElementById(spell.name).hidden = true;
                        }
                    }
                }
            }
        }

        for (const [ key, _ ] of new URLSearchParams(window.location.search)) {
            hideSpell(key);
        }
    });
