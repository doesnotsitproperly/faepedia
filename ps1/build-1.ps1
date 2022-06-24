#!/usr/bin/env pwsh

using namespace System.IO

$rootDir = (Get-Item $PSScriptRoot).Parent.FullName
$buildDir = Join-Path $rootDir "build"

# Build (Step 1)

if (Test-Path $buildDir) {
    Remove-Item $buildDir -Recurse
}
New-Item $buildDir -ItemType "directory" | Out-Null

$directorySeparatorFile = Join-Path $rootDir "directory_separator.txt"
[File]::WriteAllText($directorySeparatorFile, [Path]::DirectorySeparatorChar)
