#!/usr/bin/env bash
set +e

node -v > /tmp/node-version.txt 2>&1
npm -v >> /tmp/node-version.txt 2>&1
which node >> /tmp/node-version.txt 2>&1
uname -a >> /tmp/node-version.txt 2>&1

npm run generate > /tmp/generate.log 2>&1
GENERATE_EXIT=$?

rm -rf .output/public
mkdir -p .output/public

{
  echo "<!doctype html><meta charset=\"utf-8\"><title>Netlify diagnostic</title><pre>"
  echo "date: $(date -u)"
  echo "pwd: $(pwd)"
  echo "NODE_VERSION: ${NODE_VERSION:-<unset>}"
  echo "NODE_ENV: ${NODE_ENV:-<unset>}"
  echo "CI: ${CI:-<unset>}"
  echo "PATH: $PATH"
  echo "---- node/npm ----"
  cat /tmp/node-version.txt
  echo ""
  echo "nuxt: $(node -p "require('./node_modules/nuxt/package.json').version" 2>&1)"
  echo "vite engines: $(node -p "JSON.stringify(require('./node_modules/vite/package.json').engines)" 2>&1)"
  echo ""
  echo "generate_exit=$GENERATE_EXIT"
  echo "---- generate log (tail) ----"
  tail -300 /tmp/generate.log 2>&1
  echo "</pre>"
} > .output/public/index.html

cd dist 2>/dev/null || true
exit 0
