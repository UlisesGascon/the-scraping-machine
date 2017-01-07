var handlebars = require('handlebars'),
    exec = require('child_process').exec,
    fs = require('fs');

var folder = process.argv[1], 
    configFile = process.argv[2], 
    language = process.argv[3],
    config;

// handlebars plugins
require("./hbs_vitamines")(handlebars);

// Validate Arguments from Script
if(configFile){
    config = require(`./${configFile}`);
    if (!language || language === "python"){
        language = "python";
    } else {
        language = "node";
    };
} else {
    throw new Error('MISSING configuration file!');
}

// Validate config file
if(!config.file_name || !config.source_type || !config.url || !Array.isArray(config.data) || !config.data.length > 0){
    throw new Error('WORNG configuration file!');
}

// General Info
console.log(`Current Folder: ${folder}`);
console.log(`Current Config File: ${configFile}`);
console.log(`Code: ${language}`);
//console.log(`Config setup: ${config}`);

// Render templates
console.log("Rendering templates....");

var templateString = fs.readFileSync(`./templates/${language}.hbs`, 'utf-8');
var templateRendered = handlebars.compile(templateString);
templateRendered = templateRendered(config);

console.log("Creating your script file...");
fs.writeFileSync(`./${config.file_name}.${language === "python" ? "py" : "js"}`, templateRendered);

// Executing current scraping script
console.log("Running the script...");

var cmd = language === "python" ? `python3 ${config.file_name}.py` : `node ${config.file_name}`

exec(cmd, function(error, stdout, stderr) {
    if (stdout) console.log(`[exec]Process Child - stdout: ${stdout}`);
    if (stderr) console.log(`[exec]Process Child - stderr: ${stderr}`);
    if (error) console.log(`[exec]Process Child - error: ${error}`);
});