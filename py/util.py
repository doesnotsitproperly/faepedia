class Level:
    CANTRIP = "Cantrip"
    FIRST = "1st level"
    SECOND = "2nd level"
    THIRD = "3rd level"
    FOURTH = "4th level"
    FIFTH = "5th level"
    SIXTH = "6th level"
    SEVENTH = "7th level"
    EIGHTH = "8th level"
    NINTH = "9th level"

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

# HTML
def bold(s: str) -> str:
    return "<b>" + s + "</b>"
def paragraph(s: str) -> str:
    return "<p>" + s + "</p>"
def unorderedList(*s: str) -> str:
    items = ""
    for item in s:
        items += "<li>" + item + "</li>"
    return "<ul>" + items + "</ul>"

# Formatting
def toCamelCase(s: str) -> str:
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
def toKebabCase(s: str) -> str:
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
