#!/usr/bin/env pwsh

$rootDir = (Get-Item $PSScriptRoot).Parent.FullName
$buildDir = Join-Path $rootDir "build"

# Build (Step 1)

if (Test-Path $buildDir) {
    Remove-Item $buildDir -Recurse
}
New-Item $buildDir -ItemType "directory" | Out-Null

New-Item (Join-Path $buildDir "equipment") -ItemType "directory" | Out-Null
New-Item (Join-Path $buildDir "spells") -ItemType "directory" | Out-Null
