var chai = require("chai"),
    expect = chai.expect,
    gutil = require('gulp-util'),
    exec = require('child_process').exec,
    fs = require('fs');

chai.use(require('chai-fs'));

function runTheMachine (cmd, callback) {
    exec(cmd, function(error, stdout, stderr) {
        //if (stdout) console.log(`[exec]Process Child - stdout: ${stdout}`);
        if (stderr) console.log(`[exec]Process Child - stderr: ${stderr}`);
        if (error) console.log(`[exec]Process Child - error: ${error}`);
        callback();
    });
}


function cleanUp (file){
    fs.exists(file, function(exists) {
        if(exists) {
            fs.unlinkSync(file);
        } else {
            gutil.colors.red(`${File} not found, so not deleting.`);
        }
    });
}

describe("Python tests", function() {
    before(function(done) {
        runTheMachine("node index test/asserts/basic_query.json", done)
    });

    describe("Output:", function(){
        it("Python script creation", function() {
            expect('./test.py').to.be.a.file();
        });
        it("Python script content", function() {
            expect('./test.py').to.be.a.file().and.equal('./test/asserts/test.py');
        });
        it("JSON file creation", function() {
            expect('./test.json').to.be.a.file();
        });
        it("JSON file content", function() {
            expect('./test.json').to.be.a.file().and.equal('./test/asserts/test.json');
        });
    })
    
    after(function() {
        cleanUp("./test.py");
        cleanUp("./test.json");
    });
});


describe("Node.js output test", function() {
    before(function(done) {
        runTheMachine("node index test/asserts/basic_query.json Node", done)
    });

    describe("Output:", function(){
        it("Nodejs script creation", function() {
            expect('./test.js').to.be.a.file();
        });
        it("Nodejs script content", function() {
            expect('./test.js').to.be.a.file().and.equal('./test/asserts/test.js');
        });
        it("JSON file creation", function() {
            expect('./test.json').to.be.a.file();
        });
        it("JSON file content", function() {
            expect('./test.json').to.be.a.file().and.equal('./test/asserts/test.json');
        });
    })
    
    after(function() {
        cleanUp("./test.js");
        cleanUp("./test.json");
    });
});
