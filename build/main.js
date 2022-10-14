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
        var c = document.getElementById("example").style.color;
        if (c === 'grey') {
            document.getElementById("example").style.color = "black";
        }
        else {
            document.getElementById("example").style.color = "grey";
        }
    }
}
export { helloWorld, clickMe };
//# sourceMappingURL=main.js.map