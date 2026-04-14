//! fetch() - then(), catch()

// let apidata = fetch('https://api.github.com/users')
// console.log(apidata);

// let respdata = apidata.then((data)=>{
//     return data.json()
// })
// console.log(respdata);

// respdata.then((arr)=>{
//     console.log(arr);
// })




//! fetch() - async await
let fetchApi = async () => {
    let root = document.getElementById('root')
    try{
        let apidata = await fetch('https://api.github.com/users')
        // console.log(apidata)
        let array = await apidata.json()
        array.map((elem)=>{
            // console.log(elem.login);
            root.innerHTML += `
                <div class="card">
                    <div><img src=${elem.avatar_url}></div>
                    <p>${elem.login}</p>
                </div>
            `
        })
    }catch(error){
        console.log(`url is not present : ${error}`);
    }
}
fetchApi();