import urllib.request

B = "https://ftgtours.esggo.co"
# get JS path from homepage
hp = urllib.request.urlopen(B + "/", timeout=30).read().decode("utf-8", "ignore")
js = [u for u in hp.split('"') if u.startswith("/assets/index-") and u.endswith(".js")]
js_url = B + js[0]
js_body = urllib.request.urlopen(js_url, timeout=30).read().decode("utf-8", "ignore")

print("JS:", js_url)
print("contact page text '聯絡我們' in JS:", js_body.count("聯絡我們"))
print("old broken href=\"/corporate-travel\" in JS:", js_body.count('href="/corporate-travel"'))
print("hash #/contact in JS:", js_body.count("#/contact"))
print("hash #/esg-impact-note in JS:", js_body.count("#/esg-impact-note"))
