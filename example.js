const Interpreter = require('./index');

function testRun() {
    let code = "log('testRun');";
    let interpreter = new Interpreter(code, (interpreter, scope) => {
        wrapper = function (content) {
            content = content ? content.toString() : '';
            return console.log(content);
        };
        interpreter.setProperty(scope, 'log',
            interpreter.createNativeFunction(wrapper));
    });
    interpreter.run();
}

function testStep() {
    let code = "log('testStep');";
    let interpreter = new Interpreter(code, (interpreter, scope) => {
        wrapper = function (content) {
            content = content ? content.toString() : '';
            return console.log(content);
        };
        interpreter.setProperty(scope, 'log',
            interpreter.createNativeFunction(wrapper));
    });

    function runStep() {
        if (interpreter.step()) {
            setTimeout(runStep, 0);
        }
    }

    runStep();
}

testStep();
testRun();


// interpreter.run();