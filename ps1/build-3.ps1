#!/usr/bin/env pwsh

$rootDir = (Get-Item $PSScriptRoot).Parent.FullName
$buildDir = Join-Path $rootDir "build"

# Build (Step 3)

foreach ($item in Get-ChildItem $rootDir) {
    if ($item.Name -ne "build") {
        Remove-Item $item -Recurse
    }
}

foreach ($item in Get-ChildItem $buildDir) {
    Copy-Item $item $rootDir -Recurse
}

Remove-Item $buildDir -Recurse
