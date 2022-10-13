"use strict";
exports.__esModule = true;
exports.clickMe = exports.helloWorld = void 0;
/**
 * This returns the string hello
 * @returns the String hello
 */
function helloWorld() {
    return "Hello World! Welcome to TypeScript";
}
exports.helloWorld = helloWorld;
;
/**
 * turns demo red
 */
function clickMe() {
    if (document != null) {
        var c = document.getElementById("example").style.color; //document.getElementById("demo").style.color;
        if (c === 'grey') {
            document.getElementById("example").style.color = "black";
        }
        else {
            document.getElementById("deexamplemo").style.color = "grey";
        }
    }
}
exports.clickMe = clickMe;
