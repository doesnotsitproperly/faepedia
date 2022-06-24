#!/usr/bin/env pwsh

using namespace System.IO

$rootDir = (Get-Item $PSScriptRoot).Parent.FullName
$buildDir = Join-Path $rootDir "build"

# Build (Step 2)

$directorySeparatorFile = Join-Path $rootDir "directory_separator.txt"
Remove-Item $directorySeparatorFile

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
