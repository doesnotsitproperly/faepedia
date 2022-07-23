#!/usr/bin/env node

import * as fs from "node:fs";
import * as path from "node:path";
import * as url from "node:url";

import Handlebars from "handlebars";

import { renderData } from "./data.js";
import { equal, kebabCase, pluralize, read, write } from "./functions.js";

const rootDir = url.fileURLToPath(new URL(".", import.meta.url));
const buildDir = path.join(rootDir, "build");
const handlebarsDir = path.join(rootDir, "handlebars");
const htmlDir = path.join(rootDir, "html");

const dataDir = path.join(buildDir, "data");

if (fs.existsSync(buildDir)) {
    fs.rmSync(buildDir, { recursive: true });
}
fs.mkdirSync(buildDir);

fs.mkdirSync(path.join(buildDir, "backgrounds"));
fs.mkdirSync(path.join(buildDir, "equipment"));
fs.mkdirSync(path.join(buildDir, "spells"));

fs.mkdirSync(dataDir);

Handlebars.registerHelper("equal", equal);
Handlebars.registerHelper("kebabCase", kebabCase);
Handlebars.registerHelper("pluralize", pluralize);
Handlebars.registerHelper("write", write);

// JSON API

let spellsData = [];
for (const i in renderData.spells) {
    const spell = Object.assign({}, renderData.spells[i]);

    spell.school = spell.school.replace(new RegExp(/🛡️|🔀|🔮|😵‍💫|🪄|❓|☠️|🔁| /, "g"), "");
    spell.description = [];
    for (const j in renderData.spells[i].description) {
        spell.description.push(renderData.spells[i].description[j].replace(new RegExp(/<b>|<\/b>|<li>|<\/<li>|<p>|<\/p>|<ul>|<\/ul>/, "g"), ""));
    }

    spellsData.push(spell);
}

const spellsString = JSON.stringify(spellsData, null, 4);
fs.writeFileSync(path.join(dataDir, "spells.json"), spellsString);

// Backgrounds

const backgroundsText = read(path.join(handlebarsDir, "backgrounds.handlebars"));
const backgroundsRender = Handlebars.compile(backgroundsText);
fs.writeFileSync(path.join(buildDir, "backgrounds.html"), backgroundsRender(renderData));

const backgroundText = read(path.join(handlebarsDir, "background.handlebars"));
const backgroundRender = Handlebars.compile(backgroundText);
for (const background of renderData.backgrounds) {
    fs.writeFileSync(path.join(buildDir, "backgrounds", kebabCase(background.name) + ".html"), backgroundRender(background));
}

// Equipment

const equipmentText = read(path.join(handlebarsDir, "equipment.handlebars"));
const equipmentRender = Handlebars.compile(equipmentText);
fs.writeFileSync(path.join(buildDir, "equipment.html"), equipmentRender(renderData));

const itemText = read(path.join(handlebarsDir, "item.handlebars"));
const itemRender = Handlebars.compile(itemText);
for (const item of renderData.equipment) {
    fs.writeFileSync(path.join(buildDir, "equipment", kebabCase(item.name) + ".html"), itemRender(item));
}

// Spells

const spellsText = read(path.join(handlebarsDir, "spells.handlebars"));
const spellsRender = Handlebars.compile(spellsText);
fs.writeFileSync(path.join(buildDir, "spells.html"), spellsRender(renderData));

const spellText = read(path.join(handlebarsDir, "spell.handlebars"));
const spellRender = Handlebars.compile(spellText);
for (const spell of renderData.spells) {
    fs.writeFileSync(path.join(buildDir, "spells", kebabCase(spell.name) + ".html"), spellRender(spell));
}

// Other files

const dirs = [
    path.join(rootDir, "js"),
    path.join(htmlDir, "classes")
];
for (const dir of dirs) {
    const newDir = path.join(buildDir, path.basename(dir));
    fs.mkdirSync(newDir);
    for (const file of fs.readdirSync(dir)) {
        fs.copyFileSync(path.join(dir, file), path.join(newDir, file));
    }
}

const files = [
    "404.html",
    "classes.html",
    "feats.html",
    "index.html",
    "magic-items.html",
    "monsters.html",
    "races.html",
    "vehicles.html"
];
for (const file of files) {
    fs.copyFileSync(path.join(htmlDir, file), path.join(buildDir, file));
}
fs.copyFileSync(path.join(rootDir, "icon.svg"), path.join(buildDir, "icon.svg"));
fs.copyFileSync(path.join(rootDir, "style.css"), path.join(buildDir, "style.css"));
fs.copyFileSync(path.join(rootDir, "LICENSE"), path.join(buildDir, "LICENSE"));
fs.copyFileSync(path.join(rootDir, "README.md"), path.join(buildDir, "README.md"));
