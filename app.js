// // console.log("Hello World");
// // // alert("k xa?");
// let response = prompt("What is your name?");
// // // console.log(response);
// // alert("Hello" + " " + response);
// // (searching element from html /document)
// let output = document.querySelector("#output");
// console.log(output);
// // (to display output in the website using JS)
// output.innerText = response;
let yourName = document.querySelector("#yourName");
let theirName = document.querySelector("#theirName");
let output = document.querySelector("#output");
let singlepeople = ["dinesh", "prajjwal", "bikash"] //Declaring an array in js
function calculate() {
    let name1 = yourName.value
    let name2 = theirName.value
    if (name1.length == 0 || name2.length == 0) {
        output.innerText = "Please Enter Name !!"
    }
    // multiple output at same time at console bikash jatha
    // console.log(name1, name2);
    // generating random value
    else {
        if (singlepeople.includes(name1.toLowerCase())) {
            output.innerText = "single forever"

        }

        else {
            let lovePercent = parseInt(Math.random() * 100)
            output.innerText = name1 + " and " + name2 + " are in " + lovePercent + "% of love"
            // assigning value to created variable

        }
        yourName.value = ""
        theirName.value = ""
    }
}