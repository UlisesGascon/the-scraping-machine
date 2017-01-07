![shieldsIO](https://img.shields.io/github/issues/UlisesGascon/the-scraping-machine.svg)
![shieldsIO](https://img.shields.io/github/release/UlisesGascon/the-scraping-machine.svg)
![shieldsIO](https://img.shields.io/github/license/UlisesGascon/the-scraping-machine.svg)
![shieldsIO](https://img.shields.io/david/UlisesGascon/the-scraping-machine.svg)

# The scraping machine

![gilling_machine](https://upload.wikimedia.org/wikipedia/commons/a/ac/PSM_V39_D312_A_gilling_machine.jpg)

### This is just the beginning of a long journey

**Let's make web scraping fun again!**

*From a JSON Config file... you can create a web scraping script and see the output.*

### Demo Concept

1. You just need to define your needs in a JSON file, like [demo.json](demo.json)
2. The you execute `node index demo.json` in order to start the process
    - First it validates the arguments and data
    - Then render all the info in the handlebars template, like [templates/python.hbs](templates/python.hbs)
3. The script file is generated, like [google.py](google.py)
4. The script will be executed as a process child by Node generating the final output, like [google.json](google.json)

### Future Implementations

- [ ] Support for Node.js ([X-Ray](https://www.npmjs.com/package/x-ray)).
- [ ] Support for CSS3 Selectors.
- [ ] Support for recursive queries.
- [ ] Support for "follow links", deep scraping.
- [ ] Implementation as CLI
