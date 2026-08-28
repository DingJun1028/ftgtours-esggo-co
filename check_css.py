import urllib.request
import re

url = "https://ftgtours.esggo.co/"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
try:
    html = urllib.request.urlopen(req).read().decode("utf-8")
    print("HTML length:", len(html))
    css_files = re.findall(r'/assets/[^"\']+\.css', html)
    print("CSS files in HTML:", css_files)
    if not css_files:
        print("WARNING: No CSS file referenced in HTML!")
    for css in css_files:
        css_url = "https://ftgtours.esggo.co" + css
        try:
            res = urllib.request.urlopen(urllib.request.Request(css_url, headers={"User-Agent": "Mozilla/5.0"}))
            print(f"{css_url} -> Status {res.status}, size {len(res.read())} bytes")
        except Exception as e:
            print(f"{css_url} -> ERROR: {e}")
except Exception as e:
    print("HTML fetch error:", e)
