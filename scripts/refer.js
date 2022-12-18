let marketingDropdown = document.querySelector(".marketing");

marketingDropdown.addEventListener("click", function () {
  let dropdownContent = document.querySelector(".dropdown-marketing");

  if (dropdownContent.classList.contains("show")) {
    dropdownContent.classList.remove("show");
  } else {
    dropdownContent.classList.add("show");
  }
});

let searchBtn = document.querySelector(".searchbtn");

searchBtn.addEventListener("click", function () {
  let searchWindow = document.querySelector(".dropdown-search");

  if (searchWindow.classList.contains("show-btn")) {
    searchWindow.classList.remove("show-btn");
  } else {
    searchWindow.classList.add("show-btn");
  }
});

let profileBtn = document.querySelector("#user-img");
let profilePopup = document.querySelector(".profile-popup");

profileBtn.addEventListener("click", function () {
  if (profilePopup.classList.contains("show-profile")) {
    profilePopup.classList.remove("show-profile");
  } else {
    profilePopup.classList.add("show-profile");
  }
});


// <-----------------Search function-------------------->

let searchItem = document.querySelector('.searchTask')

function searchTask(data){
  searchItem.addEventListener('input',function(){
     let filterData = data.filter((item)=>{
         return item.title.toLowerCase().includes(searchItem.value.toLowerCase())
     })
     renderData(filterData)
 })
}

// <-----------------Sidebar function-------------------->

function openside() {
  document.querySelector("#side-window").style.width = "250px";
}

function closeside() {
  document.querySelector("#side-window").style.width = "0";
}



// <-----------Landing page change------------

let landingPage = document.querySelector('.landing-page');

landingPage.addEventListener("click",function(){
   window.location.href = "landingPage.html"
})



let userName = document.querySelector("#username")

userName.innerText = localStorage.getItem("userName")