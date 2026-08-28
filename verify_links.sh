#!/usr/bin/env bash
B="https://ftgtours.esggo.co"
JS=$(curl -s "$B/" | grep -oE "/assets/index-[A-Za-z0-9_-]+\.js" | head -1)
echo "JS: $JS"
curl -s "$B$JS" -o site_check.js
echo "contact text count: $(grep -c '聯絡我們' site_check.js)"
echo "old broken /corporate-travel count: $(grep -c 'href=\"/corporate-travel\"' site_check.js)"
echo "hash #/contact count: $(grep -c '#/contact' site_check.js)"
echo "hash #/esg-impact-note count: $(grep -c '#/esg-impact-note' site_check.js)"
