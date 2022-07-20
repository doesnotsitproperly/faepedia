const fs = require("node:fs");
const path = require("node:path");
const handlebars = require("handlebars");
const { renderData } = require("./data.cjs");
const { equal, kebabCase, pluralize, read, write } = require("./functions.cjs");

const rootDir = path.dirname(__dirname);
const buildDir = path.join(rootDir, "build");
const handlebarsDir = path.join(rootDir, "handlebars");

if (fs.existsSync(buildDir)) {
    fs.rmSync(buildDir, { recursive: true });
}
fs.mkdirSync(buildDir);

fs.mkdirSync(path.join(buildDir, "equipment"));
fs.mkdirSync(path.join(buildDir, "spells"));

handlebars.registerHelper("equal", equal);
handlebars.registerHelper("kebabCase", kebabCase);
handlebars.registerHelper("pluralize", pluralize);
handlebars.registerHelper("write", write);

// Equipment

const equipmentText = read(path.join(handlebarsDir, "equipment.handlebars"));
const equipmentRender = handlebars.compile(equipmentText);
fs.writeFileSync(path.join(buildDir, "equipment.html"), equipmentRender(renderData));

const itemText = read(path.join(handlebarsDir, "item.handlebars"));
const itemRender = handlebars.compile(itemText);
for (const item of renderData.equipment) {
    fs.writeFileSync(path.join(buildDir, "equipment", kebabCase(item.name) + ".html"), itemRender(item));
}

// Spells

const spellsText = read(path.join(handlebarsDir, "spells.handlebars"));
const spellsRender = handlebars.compile(spellsText);
fs.writeFileSync(path.join(buildDir, "spells.html"), spellsRender(renderData));

const spellText = read(path.join(handlebarsDir, "spell.handlebars"));
const spellRender = handlebars.compile(spellText);
for (const spell of renderData.spells) {
    fs.writeFileSync(path.join(buildDir, "spells", kebabCase(spell.name) + ".html"), spellRender(spell));
}

const dirs = [
    "backgrounds",
    "classes",
    "css",
    "js",
    "races"
];
for (const item of dirs) {
    const oldDirPath = path.join(rootDir, item);
    const newDirPath = path.join(buildDir, item);

    fs.mkdirSync(newDirPath);

    for (const file of fs.readdirSync(oldDirPath)) {
        fs.copyFileSync(path.join(oldDirPath, file), path.join(newDirPath, file));
    }
}

const files = [
    "404.html",
    "backgrounds.html",
    "classes.html",
    "feats.html",
    "index.html",
    "logo.svg",
    "magic-items.html",
    "monsters.html",
    "races.html",
    "vehicles.html",
    "LICENSE",
    "README.md"
];
for (const item of files) {
    fs.copyFileSync(path.join(rootDir, item), path.join(buildDir, item));
}
