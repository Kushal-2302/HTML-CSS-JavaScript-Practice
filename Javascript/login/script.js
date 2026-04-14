let loginpage = (e) => {
    e.preventDefault()
    let emailfield = e.target[0]
    let pwdField = e.target[1]
    let error = document.getElementById("error");

    let credentials = {
        email : 'user@gmail.com',
        password : 'user123'
    }
    let {email , password} = credentials;

    if(emailfield.value === email && pwdField.value === password){
        location.href ='../Promise.html'  // this is correct format
        // console.log("login successfull");
    }else{
        // alert('Invalid user')
        emailfield.style.border =  `2px solid red`
        pwdField.style.border = `2px solid red`
        error.innerHTML = "<p class=err>Invalid Login</p>"

    }
}