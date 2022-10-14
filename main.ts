/**
 * This returns the string hello
 * @returns the String hello
 */
 function helloWorld (): String {
    return "Hello World! Welcome to TypeScript";
};

/**
 * turns demo red
 */
 function clickMe() {
    if(document != null){
        let c = document.getElementById("example").style.color;//document.getElementById("demo").style.color;
        if(c === 'grey'){
            document.getElementById("example").style.color = "black";
        }else{
            document.getElementById("example").style.color = "grey";
        }
    }    
}

export {helloWorld, clickMe}