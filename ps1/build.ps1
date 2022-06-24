#!/usr/bin/env pwsh

pwsh (Join-Path $PSScriptRoot "build-1.ps1")
php (Join-Path (Get-Item $PSScriptRoot).Parent.FullName "php" "build.php")
pwsh (Join-Path $PSScriptRoot "build-2.ps1")
