#!/usr/bin/env bash
# Screenshot slides of one deck: pnpm shot <deck-dir-name> <slide>... [-o outdir]
# Example: pnpm shot 2026-11-ki-plattform 1 12 13
set -euo pipefail

root=$(cd "$(dirname "$0")/.." && pwd)
deck=${1:?usage: pnpm shot <deck> <slide>... [-o outdir]}
shift
out="$root/.shots"
slides=()
while [ $# -gt 0 ]; do
  case $1 in
    -o) out=$2; shift 2 ;;
    *) slides+=("$1"); shift ;;
  esac
done
[ ${#slides[@]} -gt 0 ] || { echo "no slide numbers given" >&2; exit 2; }
dir="$root/presentations/$deck"
[ -d "$dir" ] || { echo "no deck: $dir" >&2; exit 2; }

chrome=${CHROME:-}
if [ -z "$chrome" ]; then
  for c in "$HOME"/Library/Caches/ms-playwright/chromium_headless_shell-*/*/chrome-headless-shell \
           "$HOME"/.cache/ms-playwright/chromium_headless_shell-*/*/chrome-headless-shell \
           "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"; do
    [ -x "$c" ] && chrome=$c
  done
fi
[ -n "$chrome" ] || { echo "no Chrome found; set CHROME or run: npx playwright install chromium-headless-shell" >&2; exit 2; }

port=${PORT:-3091}
mkdir -p "$out"
profile=$(mktemp -d)
(cd "$dir" && exec npx slidev --port "$port" >/dev/null 2>&1) &
pid=$!
trap 'pkill -P $pid 2>/dev/null; kill $pid 2>/dev/null; rm -rf "$profile"; true' EXIT

for _ in $(seq 60); do
  curl -s -o /dev/null "http://localhost:$port" && break
  sleep 1
done

for n in "${slides[@]}"; do
  f="$out/$deck-$n.png"
  "$chrome" --headless=new --disable-gpu --user-data-dir="$profile" --window-size=1280,720 \
    --virtual-time-budget=10000 --screenshot="$f" "http://localhost:$port/#/$n?clicks=99" >/dev/null 2>&1
  echo "$f"
done
