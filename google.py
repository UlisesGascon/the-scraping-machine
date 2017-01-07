# Dependencies
from urllib.request import urlopen

import json
from bs4 import BeautifulSoup

finalData = []
currentData = {}

# Soup inicialitation
soup = BeautifulSoup(urlopen("http://google.es"), "html5lib")

# Main loop
if soup.title.string:
    currentData["web-title"] = soup.title.string
if soup.title.string:
    currentData["web2"] = soup.title.string

# Add data collected
finalData.append(currentData)

# Store data collected in the file
text_file = open("google.json", "w")
text_file.write(json.dumps(finalData, sort_keys=True, ensure_ascii=False, indent=4))
text_file.close()