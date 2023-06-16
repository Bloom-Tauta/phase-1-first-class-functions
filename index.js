function receivesAFunction(callback) {
    callback();
};

function returnsANamedFunction() {
    function noReturn() {
        console.log("No return here.")
    }
    return noReturn;
};

function returnsAnAnonymousFunction() {
    return function () {return 'What is this?'}
};