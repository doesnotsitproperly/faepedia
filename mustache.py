import chevron, html, os

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

spells = {
    "spells": [
        {
            "id": "acidSplash",
            "level": Level.CANTRIP,
            "link": "acid-splash",
            "name": "Acid Splash",
            "school": School.CONJURATION,
            "castingTime": "1 Action",
            "rangeArea": "60 feet",
            "components": "V, S",
            "duration": "Instant",
            "description": "<p>You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.</p><p><b>At higher levels:</b> This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).</p>",
            "classes": classes([ Class.ARTIFICER, Class.SORCERER, Class.WIZARD ])
        },
        {
            "id": "bladeWard",
            "level": Level.CANTRIP,
            "link": "blade-ward",
            "name": "Blade Ward",
            "school": School.ABJURATION,
            "castingTime": "1 Action",
            "rangeArea": "Self",
            "components": "V, S",
            "duration": "1 Round",
            "description": "<p>You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.</p>",
            "classes": classes([ Class.BARD, Class.SORCERER, Class.WARLOCK, Class.WIZARD ])
        }
    ]
}

with open(os.path.join("mustache", "spells.mustache"), "r") as f:
    render = chevron.render(f, spells)

with open("spells.html", "w", encoding="utf-8") as f:
    f.write(render)

for spell in spells.get("spells"):
    link = spell.get("link")

    if spell.get("level") == "Cantrip":
        schoolAndLevel = spell.get("school")
        schoolAndLevel += " cantrip"
    else:
        school = spell.get("school")
        level = spell.get("level")
        schoolAndLevel = f"{level} {school} spell"
    spell["schoolAndLevel"] = schoolAndLevel

    with open(os.path.join("mustache", "spell.mustache"), "r") as f:
        render = chevron.render(f, spell)

    with open(os.path.join("spells", f"{link}.html"), "w", encoding="utf-8") as f:
        f.write(html.unescape(render))
