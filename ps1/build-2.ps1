#!/usr/bin/env pwsh

$rootDir = (Get-Item $PSScriptRoot).Parent.FullName
$buildDir = Join-Path $rootDir "build"

# Build (Step 2)

$items = @(
    "backgrounds"
    "classes"
    "css"
    "js"
    "races"
    "404.html"
    "backgrounds.html"
    "classes.html"
    "feats.html"
    "index.html"
    "logo.svg"
    "magic-items.html"
    "monsters.html"
    "races.html"
    "vehicles.html"
    "LICENSE"
    "README.md"
)
foreach ($item in $items) {
    Copy-Item (Join-Path $rootDir $item) $buildDir -Recurse
}
