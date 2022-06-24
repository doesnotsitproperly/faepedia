#!/usr/bin/env pwsh

pwsh (Join-Path $PSScriptRoot ".github" "build-1.ps1")
php (Join-Path $PSScriptRoot "php" "build.php")
pwsh (Join-Path $PSScriptRoot ".github" "build-2.ps1")
