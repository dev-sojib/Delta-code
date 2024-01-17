// Get random cat fact

// let url = "https://catfact.ninja/fact";

// async function getData() {
//     try {
//         let fact = await fetch(url);
//         let res = await fact.json();
//         return res.fact;

//     } catch (e) {
//         return "error-"+e;
//     }
// }

// let btn = document.querySelector("button");

// btn.addEventListener('click',async function(){
//     document.querySelector('h2').innerText = await getData();
// })


//Get random dog image
// let url = "https://dog.ceo/api/breeds/image/random";

// async function getData() {
//     try {
//         let fact = await axios.get(url);
//         return fact.data.message;        ;

//     } catch (e) {
//         return "error-"+e;
//     }
// }

// let btn = document.querySelector("button");

// btn.addEventListener('click',async function(){
//     let img = document.querySelector('img');
//     img.setAttribute('src', await getData());
// })


// let url = "https://icanhazdadjoke.com/";
// async function getData() {
//     const header = { headers: { Accept: "application/json" } }
//     let rel = await axios.get(url, header);
//     console.log(rel.data.joke);
// }