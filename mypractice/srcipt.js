let user = () => {
    let userName = prompt("Enter username")
    if (userName === "" || userName === null) {
        let bool = confirm("Do you wnt to exit ?");
        bool ? console.log("Thank you") : user();
    }else{
        console.log("Valid user");
    }
}
user()