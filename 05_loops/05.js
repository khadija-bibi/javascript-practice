const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     
// } )

// coding.forEach((val) => {console.log(val);})
// function printMe(item) {
//    console.log(item) 
// }
// coding.forEach(printMe)

// coding.forEach((item, index, array) => {console.log(item, index, array);})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]

myCoding.forEach(
    (item) => {
        console.log(item.languageName);
    }
)