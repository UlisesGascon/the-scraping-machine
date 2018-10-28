![shieldsIO](https://img.shields.io/github/issues/UlisesGascon/the-scraping-machine.svg)
![shieldsIO](https://img.shields.io/github/release/UlisesGascon/the-scraping-machine.svg)
![shieldsIO](https://img.shields.io/github/license/UlisesGascon/the-scraping-machine.svg)
![shieldsIO](https://img.shields.io/david/UlisesGascon/the-scraping-machine.svg)

### :warning: WARNING: this repo is not maintained anymore


# The scraping machine

**Under development - More news soon**

![gilling_machine](https://upload.wikimedia.org/wikipedia/commons/a/ac/PSM_V39_D312_A_gilling_machine.jpg)

### This is just the beginning of a long journey

**Let's make web scraping fun again!**

*From a JSON Config file... you can create a web scraping script and see the output.*

### Concept

1. You just need to define your needs in a JSON file, like [demo.json](examples/google_python/demo.json)
2. The you execute `node index demo.json` in order to start the process in [index.js](examples/google_python/index.js)
    - First it validates the arguments and data
    - Then decides the language to use. *For now only Python +3 (Beautiful Soup) and Node.js (X-ray) supported*
    - Then render all the info in the handlebars template, like [templates/python.hbs](templates/python.hbs) or [templates/node.hbs](templates/node.hbs)
3. The script file is generated, like [google.py](examples/google_python/google.py) or [google.js](examples/google_node/google.js)
4. The script will be executed as a process child by Node generating the final output, like [google.json](examples/google_python/google.json)

#### Demo

**Inside demo.json:**

```json
{
	"source_type": "url",
	"url": "http://google.es",
	"file_name": "google",
	"data": [
		{
			"name": "web-title",
			"type": "selector",
			"query": "title"
		}, {
			"name": "web2",
			"type": "selector",
			"query": "title"
		}
	]
}
```

**Start the machine**

- For Python script output:

```bash
    node index.js demo.json 
```
```bash
    node index.js demo.json python
```


- For Node script output
```bash
    node index.js demo.json js
```

```bash
    node index.js demo.json node
```

**Output**

- [Nodejs file](examples/google_node/google.js) or [Python file](examples/google_python/google.py)
- json file with the scraping results
```json
[
    {
        "web-title": "Google",
        "web2": "Google"
    }
]
```

### Testing

You can test your changes...

```bash
npm test
```

### Future Implementations

- [ ] Support for Node.js ([X-Ray](https://www.npmjs.com/package/x-ray)).
- [ ] Support for CSS3 Selectors.
- [ ] Support for recursive queries.
- [ ] Support for "follow links", like a crawler.
- [ ] Implementation as CLI
- [x] Basic Testing
- [x] esLint Support
- [x] JSDoc Support
- [x] Basic Gulp Tasks
- [x] Example Folder

### Achievements

### v.0.0.3

**Features:**
- Added support to JSDoc
- Added Gulp Tasks
- Added Basic Testing with Mocha, Chai and Istanbul
- Added .editorconfig
- Added esLint support
- Added example folder
- Added support to Node.js

**Notes:**
Main target: Improved Proof of concept


### v.0.0.2

**Features:**
- Roadmap added
- Added File strucutre
- Defined a minimal json strcuture
- Added minimal validation
- Added a template engine
- Added support for python
- Added dynamic information from the setup config file

**Notes:**
Main target: Proof of concept

### v.0.0.1

**Features:**

**Notes:**
Just a "Hello world"
