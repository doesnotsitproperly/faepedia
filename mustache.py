import chevron, os

class Level:
    CANTRIP = "Cantrip"

class School:
    ABJURATION = "🛡️ Abjuration"
    CONJURATION = "🔀 Conjuration"
    DIVINATION = "🔮 Divination"
    ENCHANTMENT = "😵‍💫 Enchantment"
    EVOCATION = "🪄 Evocation"
    ILLUSION = "❓ Illusion"
    NECROMANCY = "☠️ Necromancy"
    TRANSMUTATION = "🔁 Transmutation"

class Class:
    ARTIFICER = "Artificer"
    BARD = "Bard"
    CLERIC = "Cleric"
    DRUID = "Druid"
    PALADIN = "Paladin"
    RANGER = "Ranger"
    SORCERER = "Sorcerer"
    WARLOCK = "Warlock"
    WIZARD = "Wizard"

def classes(array):
    string = ""
    for c in array:
        if string == "":
            string += c
        else:
            string += f", {c}"
    return string

with open(os.path.join("mustache", "spells.mustache"), "r") as f:
    render = chevron.render(f, {
        "spells": [
            {
                "id": "acidSplash",
                "level": Level.CANTRIP,
                "link": "spells/acid_splash",
                "name": "Acid Splash",
                "school": School.CONJURATION,
                "castingTime": "1 Action",
                "rangeArea": "60 feet",
                "duration": "Instant",
                "classes": classes([ Class.ARTIFICER, Class.SORCERER, Class.WIZARD ])
            },
            {
                "id": "bladeWard",
                "level": Level.CANTRIP,
                "link": "spells/blade_ward",
                "name": "Blade Ward",
                "school": School.ABJURATION,
                "castingTime": "1 Action",
                "rangeArea": "Self",
                "duration": "1 Round",
                "classes": classes([ Class.BARD, Class.SORCERER, Class.WARLOCK, Class.WIZARD ])
            }
        ]
    })

with open("spells.html", "w", encoding="utf-8") as f:
    f.write(render)
