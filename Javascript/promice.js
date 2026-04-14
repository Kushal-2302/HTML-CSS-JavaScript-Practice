let Task1 = () => {
    return ('Task 1')
}
let Task2 = () => {
    return new Promise((res)=>{
        setTimeout(()=>{
            res('Task 2')
        },2000)
    })
}
let Task3 = () => {
    return ('Task 3')
}

//! Without Async and Await
let mainFun1 = () => {
    console.log(Task1());
    Task2().then((data) => {
        console.log(data)
    })
    console.log(Task3());
}
// mainFun1();


//! With Async and Await
let mainFun2 = async  () => {
    console.log(Task1());
    console.log(await Task2());
    console.log(Task3());
}
mainFun2();