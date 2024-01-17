let h1 = document.querySelector('h1');

// function changeColor(color, delay, nextColor) {
//     setTimeout(function () {
//         h1.style.color = color;
//         if (nextColor) nextColor();
//     }, delay)
// }

// changeColor("red", 1000, ()=>{
//     changeColor("yellow", 1000, ()=>{
//         changeColor("green",1000);
//     });
// });





function changeColor(color, delay) {
    return new Promise((success, reject)=>{
        setTimeout(function () {
        h1.style.color = color;
        success("successful")
    }, delay)
    })
}

changeColor("red",1000)
.then(()=>{
    return changeColor("green",1000);
})
.then(()=>{
    return changeColor("yellow",1000);
})
.then(()=>{
    changeColor("blue",1000);
})





function uploadDb() {
    return new Promise((success, failure) => {
        let internetSpreed = Math.floor(Math.random() * 10) + 1;
        if (internetSpreed > 4) {
            success("Successful");
        } else {
            failure(`Internet Spreed is too slow ${internetSpreed}mbps`);
            return (internetSpreed)
        }
    })
}

uploadDb("SOhanur")
    .then((resl) => {
        console.log('data1: Uploaded');
        console.log(resl);
        return uploadDb("rahman");
    })

    .then((resl) => {
        console.log('data2: uploaded');
        console.log(resl);

    })

    .catch((resl) => {
        console.log(resl);
        console.log('Rejected');
    })