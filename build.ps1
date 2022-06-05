#!/usr/bin/env pwsh

using namespace System
using namespace System.IO

$buildDir = Join-Path $PSScriptRoot "build"
$backgroundsDir = Join-Path $buildDir "backgrounds"
$classesDir = Join-Path $buildDir "classes"
$cssDir = Join-Path $buildDir "css"
$jsDir = Join-Path $buildDir "js"
$racesDir = Join-Path $buildDir "races"
$spellsDir = Join-Path $buildDir "spells"

if (Test-Path $buildDir) {
    Remove-Item $buildDir -Recurse
}
New-Item $buildDir -ItemType "directory" | Out-Null
New-Item $backgroundsDir -ItemType "directory" | Out-Null
New-Item $classesDir -ItemType "directory" | Out-Null
New-Item $cssDir -ItemType "directory" | Out-Null
New-Item $jsDir -ItemType "directory" | Out-Null
New-Item $racesDir -ItemType "directory" | Out-Null
New-Item $spellsDir -ItemType "directory" | Out-Null

try {
    php (Join-Path $PSScriptRoot "php" "build.php")
} catch {
    Write-Output "Error calling PHP"
}

function CopyFiles {
    param ([String] $Directory)

    $name = $Directory.Split([Path]::DirectorySeparatorChar)[-1]
    foreach ($item in Get-ChildItem (Join-Path $PSScriptRoot $name)) {
        Copy-Item $item $Directory
    }
}

CopyFiles $backgroundsDir
CopyFiles $classesDir
CopyFiles $cssDir
CopyFiles $jsDir
CopyFiles $racesDir

$files = @(
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
)
foreach ($file in $files) {
    Copy-Item (Join-Path $PSScriptRoot $file) $buildDir
}
