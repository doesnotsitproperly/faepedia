#!/usr/bin/env python3

import os, shutil

if os.path.isdir("build"):
    shutil.rmtree("build")
os.mkdir("build")
os.mkdir(os.path.join("build", "backgrounds"))
os.mkdir(os.path.join("build", "classes"))
os.mkdir(os.path.join("build", "css"))
os.mkdir(os.path.join("build", "js"))
os.mkdir(os.path.join("build", "spells"))
os.mkdir(os.path.join("build", "races"))

# Create individual spell pages
os.system("php" + " " + os.path.join("php", "build.php"))

# All the other files
for file in os.listdir("backgrounds"):
    shutil.copy(os.path.join("backgrounds", file), os.path.join("build", "backgrounds"))
for file in os.listdir("classes"):
    shutil.copy(os.path.join("classes", file), os.path.join("build", "classes"))
for file in os.listdir("css"):
    shutil.copy(os.path.join("css", file), os.path.join("build", "css"))
for file in os.listdir("js"):
    shutil.copy(os.path.join("js", file), os.path.join("build", "js"))
for file in os.listdir("races"):
    shutil.copy(os.path.join("races", file), os.path.join("build", "races"))
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
