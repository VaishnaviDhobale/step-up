let userData = [];
let email = document.querySelector("#email");
let name = document.querySelector("#name");
let password = document.querySelector("#pass");
let number = document.querySelector("#mobile-no");
let url = document.querySelector("#web-url");
let form = document.querySelector("#form")




form.addEventListener("submit",getData);


async function getData(e) {
    e.preventDefault()
    try {
        let res = await fetch("https://639dcf8e1ec9c6657bb2fd0d.mockapi.io/signUp")
        console.log(res)
        let data = await res.json()
        checkData(data)
    }
    catch (error) {
        console.log(error)
    }
}





function checkData(data) {
    let obj = {
        name: name.value,
        email: email.value,
        password: password.value,
        number: number.value,
        url: url.value
    }
    let iemail = email.value;
    let n = data.length;
    let flag = true;
    for (let i = 0; i < n; i++) {
        if (iemail == data[i].email) {
            alert("Email is already exists.")
            flag = false;
        }
    }
    if (flag) {
        createAccount(obj)
    }
}





async function createAccount(obj) {
    try{
         let res = await fetch("https://639dcf8e1ec9c6657bb2fd0d.mockapi.io/signUp", {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    })
     if(res.ok){
        let data=await res.json()
        console.log(data)
        alert("Registration Successful")
       setTimeout(redirect,2000)
     }
     else{
        alert("Server Down")
     }
    }
    catch(err){
       console.log(err)
    } 
}

function redirect(){

    window.location.href="Login.html"
}


let homebtn = document.querySelector("#logo-img")

homebtn.addEventListener("click",function(){
   window.location.href="index.html"
})
