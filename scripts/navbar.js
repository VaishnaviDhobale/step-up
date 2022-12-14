let marketingDropdown = document.querySelector('.marketing')

marketingDropdown.addEventListener("click",function(){

    let dropdownContent = document.querySelector(".dropdown-marketing");

    if(dropdownContent.classList.contains('show')){
        dropdownContent.classList.remove('show')
    }else{
        dropdownContent.classList.add('show')
    }

})


let searchBtn = document.querySelector(".searchbtn");

searchBtn.addEventListener("click",function(){
    let searchWindow = document.querySelector(".dropdown-search");

    if(searchWindow.classList.contains('show-btn')){
        searchWindow.classList.remove('show-btn')
    }else{
        searchWindow.classList.add('show-btn')
    }
})

let profileBtn = document.querySelector("#user-img")
let profilePopup = document.querySelector(".profile-popup");

profileBtn.addEventListener("click",function(){

    if(profilePopup.classList.contains('show-profile')){
        profilePopup.classList.remove('show-profile')
    }else{
        profilePopup.classList.add('show-profile')
    }

})