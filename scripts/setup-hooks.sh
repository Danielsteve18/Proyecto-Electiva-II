#!/bin/sh
# scripts/setup-hooks.sh
# Activa los git hooks del repo (core.hooksPath -> .githooks).
set -e
git config core.hooksPath .githooks
echo "OK: core.hooksPath = .githooks (hooks instalados)"
