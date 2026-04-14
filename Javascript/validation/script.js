let validation = (e) => {
    e.preventDefault();
    let err = document.getElementById('error');

    let emailField = e.target[0];
    let pwdField = e.target[1];

    if(emailField.value === "" || emailField.value === null) {
        emailField.style.border = `2px solid red`
        err.innerHTML = `<p style=color:red>Email field is Empty</p>`
    }else{
        if(pwdField.value === "" || pwdField === null){
            pwdField.style.border =`2px solid red`
            err.innerHTML = `<p style=color:red>Password Field is Empty</p>`
        }else{
            err.innerHTML = `<p style=color:green>Welcome</p>`
        }
    }
}