class Level:
    cantrip = "Cantrip"
    first = "1st level"
    second = "2nd level"
    third = "3rd level"
    fourth = "4th level"
    fifth = "5th level"
    sixth = "6th level"
    seventh = "7th level"
    eighth = "8th level"
    ninth = "9th level"

class School:
    abjuration = "🛡️ Abjuration"
    conjuration = "🔀 Conjuration"
    divination = "🔮 Divination"
    enchantment = "😵‍💫 Enchantment"
    evocation = "🪄 Evocation"
    illusion = "❓ Illusion"
    necromancy = "☠️ Necromancy"
    transmutation = "🔁 Transmutation"

class Class:
    artificer = "Artificer"
    bard = "Bard"
    cleric = "Cleric"
    druid = "Druid"
    paladin = "Paladin"
    ranger = "Ranger"
    sorcerer = "Sorcerer"
    warlock = "Warlock"
    wizard = "Wizard"

# HTML
def bold(s: str) -> str:
    return "<b>" + s + "</b>"
def paragraph(s: str) -> str:
    return "<p>" + s + "</p>"
def unordered_list(*s: str) -> str:
    items = ""
    for item in s:
        items += "<li>" + item + "</li>"
    return "<ul>" + items + "</ul>"

# Formatting
def to_camel_case(s: str) -> str:
    first = True
    newString = ""
    for c in s:
        if first:
            newString += c.lower()
            first = False
        elif c == ' ':
            pass
        else:
            newString += c
    return newString
def to_kebab_case(s: str) -> str:
    newString = ""
    for c in s:
        if c.isupper():
            newString += c.lower()
        elif c == ' ':
            newString += '-'
        else:
            newString += c
    return newString

seperator = ", "
