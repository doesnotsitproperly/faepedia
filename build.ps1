#!/usr/bin/env pwsh

using namespace System.IO

$buildDir = Join-Path $PSScriptRoot "build"

if (Test-Path $buildDir) {
    Remove-Item $buildDir -Recurse
}
New-Item $buildDir -ItemType "directory" | Out-Null

$directorySeparatorFile = Join-Path $PSScriptRoot "directory_separator.txt"
[File]::WriteAllText($directorySeparatorFile, [Path]::DirectorySeparatorChar)
php (Join-Path $PSScriptRoot "php" "build.php")
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
    Copy-Item (Join-Path $PSScriptRoot $item) $buildDir -Recurse
}
