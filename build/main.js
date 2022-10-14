/**
 * This returns the string hello
 * @returns the String hello
 */
function helloWorld() {
    return "Hello World! Welcome to TypeScript";
}
;
/**
 * turns demo red
 */
function clickMe() {
    if (document != null) {
        var c = document.getElementById("example").style.fontSize;
        var d = document.getElementById("example").style.color;
        if (c === '16px' && d === 'black') {
            document.getElementById("example").style.fontSize = "24px";
            document.getElementById("example").style.color = "brown";
        }
        else {
            document.getElementById("example").style.fontSize = "16px";
            document.getElementById("example").style.color = "black";
        }
    }
}
console.log(helloWorld());
export { helloWorld, clickMe };
//# sourceMappingURL=main.js.map