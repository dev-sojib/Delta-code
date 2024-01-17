// async function random() {
//     throw ("week connection");
//     return "Successful";
// }

// random()
//     .then((result) => {
//         console.log("saved");
//         console.log(result)
//     })
//     .catch((result) => {
//         console.log("rejected")
//         console.log(result)
//     })

// let h1 = document.querySelector('h1');

// function changeColor(color, delay) {
//     return new Promise((success, reject) => {
//         setTimeout(function () {
//             let rannum = Math.floor(Math.random() * 4) + 1;
//             if (rannum < 4) {
//                 reject("Slow net connection");
//             }
//             h1.style.color = color;
//             console.log(`Your color changed to ${color}`);
//             success("successful");
//         }, delay)
//     })
// }

// async function demo() {
//     try {
//         await changeColor("red", 1000);
//         await changeColor("green", 1000);
//         await changeColor("blue", 1000);
//         await changeColor("yellow", 1000);
//     } catch (err) {
//         console.log("error ditected");
//         console.log(err);
//     }
//     let a = 5;
//     console.log(a);
//     console.log(`new number = ${a*a}`);


// }
// demo();


// let factRand = '{"fact":"In the 1930s, two Russian biologists discovered that color change in Siamese kittens depend on their body temperature. Siamese cats carry albino genes that work only when the body temperature is above 98\u00b0 F. If these kittens are left in a very warm room, their points won\u2019t darken and they will stay a creamy white.","length":315}';

// let validfact = JSON.parse(factRand);

// console.log(validfact);

let url = "https://catfact.ninja/fact2";

// fetch(url)
//     .then((req) => {
//         return req.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


async function getdata() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.flct);

    } catch (e) {
        console.log("Error -", e);
    }
    console.log("bye");
}