
let userEmail = document.querySelector("#email");
let userPass = document.querySelector("#pass");
let form = document.querySelector("form");
let userEmailAdd = localStorage.getItem("userEmail") || null;
let userPassword = localStorage.getItem("userPassword") || null;
let userName= localStorage.getItem("userName")|| null;


// let obj={};

form.addEventListener("submit", getData);

async function getData(e) {
    e.preventDefault()
    try {
        let res = await fetch("https://639dcf8e1ec9c6657bb2fd0d.mockapi.io/signUp")
        console.log(res)
        let data = await res.json()
        // let newData = JSON.stringify(data);
         checkData(data)
        // console.log(data)
    }
    catch (error) {
        console.log(error)
    }
}


function checkData(data) {
    //     obj.email=userEmail.value;
    // obj.pass=userPass.value;
    let obj = {
        email: userEmail.value,
        password: userPass.value
    }

    let flag = true;
    let n = data.length;
    for (let i = 0; i < n; i++) {
        // console.log(obj.email,data[i].email)
        if (obj.email == data[i].email && obj.password == data[i].password) {
            localStorage.setItem("userEmail", obj.email)
            localStorage.setItem("userPassword", obj.password)
            localStorage.setItem("userName",data[i].name)
            alert("Login Successful")
            flag = false;
            setTimeout(redirect, 2000)
        }
    }
    if (flag) {
        alert("Wrong Credentials")
    }
    console.log(data)
}




function redirect() {
    window.location.href = "navbar.html"
}

