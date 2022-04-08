#!/bin/env python3

import chevron, html, os, shutil
from spells import spells
from util import toCamelCase, toKebabCase

if os.path.isdir("build"):
    shutil.rmtree("build")
os.mkdir("build")
os.mkdir(os.path.join("build", "backgrounds"))
os.mkdir(os.path.join("build", "classes"))
os.mkdir(os.path.join("build", "css"))
os.mkdir(os.path.join("build", "js"))
os.mkdir(os.path.join("build", "spells"))

# spells.html
with open("spells.mustache", "r") as f:
    for spell in spells.get("spells"):
        spell["id"] = toCamelCase(spell.get("name"))
        spell["link"] = toKebabCase(spell.get("name"))

    render = chevron.render(f, spells)
with open(os.path.join("build", "spells.html"), "w", encoding="utf-8") as f:
    f.write(render)

# spells/*.html
for spell in spells.get("spells"):
    link = spell.get("link")

    school = spell.get("school")
    level = spell.get("level")
    spell["schoolAndLevel"] = f"{school} cantrip" if spell.get("level") == "Cantrip" else f"{level} {school} spell"

    with open("spell.mustache", "r") as f:
        render = chevron.render(f, spell)
    with open(os.path.join("build", "spells", f"{link}.html"), "w", encoding="utf-8") as f:
        f.write(html.unescape(render))

# All the other files
for file in os.listdir("backgrounds"):
    shutil.copy(os.path.join("backgrounds", file), os.path.join("build", "backgrounds"))
for file in os.listdir("classes"):
    shutil.copy(os.path.join("classes", file), os.path.join("build", "classes"))
for file in os.listdir("css"):
    shutil.copy(os.path.join("css", file), os.path.join("build", "css"))
for file in os.listdir("js"):
    shutil.copy(os.path.join("js", file), os.path.join("build", "js"))
files = [
    "404.html",
    "backgrounds.html",
    "classes.html",
    "equipment.html",
    "feats.html",
    "index.html",
    "logo.svg",
    "magic-items.html",
    "monsters.html",
    "races.html",
    "vehicles.html"
]
for file in files:
    shutil.copy(file, "build")
