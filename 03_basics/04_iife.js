// Immediately Invoked Function Expressions (IIFE)

// function chai() {
//     console.log("BD CONNECTED")
// }
// chai()

(function chai() {   // (definition)(execution)//named iife
    console.log("BD CONNECTED")
})();

((name) =>{   // (definition)(execution)//unnamed iife
    console.log("BD CONNECTED TWO")
})("khadija")