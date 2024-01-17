// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector('button');

// btn.addEventListener('click', async () => {
//     let country = document.querySelector('input').value;
//     let dataarr = await universities(country);
//     show(dataarr);
// })

// function show(data) {

//     let list = document.querySelector('#list');
//     list.innerText = "";
//     for (datas of data) {
//         let li = document.createElement('li');
//         li.innerText = datas.name;
//         list.appendChild(li);
//     }
// }

// async function universities(country) {
//     try {
//         let rel = await axios.get(url + country);
//         return rel.data;
//     } catch (err) {
//         return "error-" + err
//     }

// }

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector('button');

btn.addEventListener('click', async () => {
    let country = document.querySelector('#input1').value;
    let dataarr = await universities(country);
    show(dataarr);
})

function show(data) {
    let state = document.querySelector('#input2').value;
    let list = document.querySelector('#list');
    list.innerText = "";
    for (let i = 0; i < data.length; i++) {
        if (state !== "") {
            const stateProvince = data[i]['state-province'];
            if (stateProvince === state) {
                let li = document.createElement('li');
                li.innerText = data[i].name;
                list.appendChild(li);
                let p = document.createElement('p');
                p.innerText = data[i]['state-province']
                li.appendChild(p);
                state = "";
            }
        }
        else {
            // let li = document.createElement('li');
            // li.innerText = datas.name;
            // list.appendChild(li);
            console.log('error')
        }
    }
}

async function universities(country) {
    try {
        let rel = await axios.get(url + country);
        return rel.data;
    } catch (err) {
        return "error-" + err
    }

}
