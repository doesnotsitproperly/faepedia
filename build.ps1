#!/usr/bin/env pwsh

$buildDir = Join-Path $PSScriptRoot "build"

if (Test-Path $buildDir) {
    Remove-Item $buildDir -Recurse
}
New-Item $buildDir -ItemType "directory" | Out-Null
New-Item (Join-Path $buildDir "spells") -ItemType "directory" | Out-Null

php (Join-Path $PSScriptRoot "php" "build.php")

$items = @(
    "backgrounds"
    "classes"
    "css"
    "js"
    "races"
    "404.html"
    "backgrounds.html"
    "classes.html"
    "equipment.html"
    "feats.html"
    "index.html"
    "logo.svg"
    "magic-items.html"
    "monsters.html"
    "races.html"
    "vehicles.html"
)
foreach ($item in $items) {
    Copy-Item (Join-Path $PSScriptRoot $item) $buildDir -Recurse
}
