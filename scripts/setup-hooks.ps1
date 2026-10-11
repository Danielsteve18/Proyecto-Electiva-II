#!/usr/bin/env pwsh
# scripts/setup-hooks.ps1
# Activa los git hooks del repo (core.hooksPath -> .githooks).
$ErrorActionPreference = "Stop"
git config core.hooksPath .githooks
Write-Host "OK: core.hooksPath = .githooks (hooks instalados)"
