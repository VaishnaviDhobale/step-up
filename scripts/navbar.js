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

let dashboardBtn = document.querySelector(".dashboard-button");
let dropdownSetup = document.querySelector(".dropdown-setup");

dashboardBtn.addEventListener("click", function () {
  if (dropdownSetup.classList.contains("show-dashboard")) {
    dropdownSetup.classList.remove("show-dashboard");
  } else {
    dropdownSetup.classList.add("show-dashboard");
  }
});

let addReport = document.querySelector(".add-reports");
let dashboardBox = document.querySelector(".dashboard-box");

addReport.addEventListener("click", function () {
  if (dashboardBox.classList.contains("show-dashboard-box")) {
    dashboardBox.classList.remove("show-dashboard-box");
  } else {
    dashboardBox.classList.add("show-dashboard-box");
  }
});

// <--------------ADD Dashboard-------------->

let addDashboard = document.querySelector(".dashboard-add-btn");
let cardArea = document.querySelector(".dashboard-section");
let inputButtons = document.querySelectorAll(".checkbox");

let obj = {};
for (inputBtn of inputButtons) {
  inputBtn.addEventListener("click", function (e) {
    let id = e.target.dataset.id;
    let text = e.path[2].children[1].children[0].innerText;
    let description = ""
    // postData(text,id)
    obj.title = text;
    obj.id = id;
    obj.description=""
    console.log(obj);
    // console.log(Object.keys(obj).length);
  });
}

addDashboard.addEventListener("click", async function (e) {
  e.preventDefault();
  // console.log(Object.keys(obj).length)
  if (Object.keys(obj).length == 3) {
    //   async function postData(e){
    console.log("hello i am working");
    dashboardBox.classList.remove("show-dashboard-box")
    // async function postData(text,id){
    try {
      let res = await fetch(
        "https://639b2fee31877e43d6853e66.mockapi.io/dashboard/Dashboard",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: obj.title,
            boxtype: obj.id,
            description:obj.description
          }),
        }
      );

      if (res.ok) {
        let data = res.json();
        console.log(data);
        displayCards()
      } else {
        console.log("Server Down");
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("Fill details");
  }
});

displayCards()

async function displayCards(){
    try {
        let res = await fetch("https://639b2fee31877e43d6853e66.mockapi.io/dashboard/Dashboard")
        let data = await res.json()
        renderData(data)
        selectDeleteButton()
        selectEditButton()
        searchTask(data)
    } catch (error) {
        console.log(error) 
    }
    
}

function renderData(data){
    cardArea.innerHTML=`
    ${data.map((item)=>{
        let id = item.boxtype
        let title = item.title
        let dataId = item.id
        let description = item.description
        if(id==1){
           return createCard1(title,dataId,description,id)
        }else if(id==2){
           return createCard2(title,dataId)
        }else if(id==3){
           return createCard3(title,dataId)
        }

    }).join("")}
    `
}


function createCard1(title,dataId,description,id) {
  return `
    <div class="card" data-id="${dataId}" data-class="${id}">
        <div>

            <div class="dashboard-heading">
                <h4>${title}</h4>
                <p>Data Range: Monthly</p>
            </div>

            <div class= "dashboard-icons">
                <span class="material-symbols-outlined delete-button">
                    delete
                </span>
                <span class="material-symbols-outlined editable">
                    edit
                </span>
            </div>

        </div>

        <div class="textarea-box">

            <textarea type="text" class="dashboard-textarea" readonly>${description}</textarea>

        </div>
    </div>
    `;
}

function createCard2(title,dataId) {
  return `
    <div class="card" data-id="${dataId}">
    <div>
        <div class="dashboard-heading">
            <h4>${title}</h4>
            <p>Data Range: Monthly</p>
        </div>

        <div  class="dashboard-icons">
            <span class="material-symbols-outlined delete-button">
                delete
            </span>
            <span class="material-symbols-outlined">
                edit
            </span>
        </div>
    </div>
    <div class="subscriber-count">
        <div>
            <h1>0</h1>
            <h3>Sent</h3>
        </div>
        <div>
            <h1>0</h1>
            <h3>Hard Bounces</h3>
        </div>
        <div>
            <h1>0</h1>
            <h3>Soft Bounces</h3>
        </div>
        <div>
            <h1>0</h1>
            <h3>Spam</h3>
        </div>
        <div>
            <h1>0</h1>
            <h3>Unsubscribes</h3>
        </div>
        <!-- <div>
            <h1>0</h1>
            <h3>Sent</h3>
        </div> -->
    </div>
</div>

    `;
}

function createCard3(title,dataId) {
  return `
    <div class="card" data-id="${dataId}">
        <div>
            <div class="dashboard-heading">
                <h4>${title}</h4>
                <p>Data Range: Monthly</p>
            </div>

            <div class= "dashboard-icons">
                <span class="material-symbols-outlined delete-button">
                    delete
                </span>
                <span class="material-symbols-outlined">
                    edit
                </span>
                </div>
            </div>
        <div class="blank-img">
            <img src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/themev2/img/no-data-images/C-1.svg"/>
        </div>
    </div>

    `;
}


function selectDeleteButton(){
   let deleteButtons = document.querySelectorAll(".delete-button")
   for(let deleteButton of deleteButtons){
      deleteButton.addEventListener("click",function(e){
         let id = e.path[3].dataset.id
         deleteData(id)
      })
   }
}


async function deleteData(id){
    try {
    let res = await fetch(`https://639b2fee31877e43d6853e66.mockapi.io/dashboard/Dashboard/${id}`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json'
        }
    })

        let data = await res.json()
        console.log("item deleted")
        displayCards()

    } catch (error) {
        console.log(error)
    }
    
}

// let dashboardTextarea = document.querySelector(".dashboard-textarea")

function selectEditButton(){
    let editButtons = document.querySelectorAll(".editable")
    for(let editButton of editButtons){
        editButton.addEventListener("click",function(e){
            let editButtonTarget = e.target
             let textArea = e.path[3].children[1].children[0]
             let id = e.path[3].dataset.id
             let boxType = e.path[3].dataset.class
             let title = e.path[2].children[0].children[0].innerText
            //  console.log(title)
             testing(editButtonTarget,textArea,id,boxType,title)
        })
    }
}



async function testing(editButtonTarget,textArea,id,boxType,title){
 
    if(editButtonTarget.innerText == 'edit'){

        editButtonTarget.innerText = 'done'
        textArea.removeAttribute('readonly')

      }else if( editButtonTarget.innerText == 'done'){

        editButtonTarget.innerText = 'edit'
        textArea.readOnly = true
        let value = textArea.value
        // console.log(textArea.value)
         patchReq(value,id,boxType,title)
       
     }
}


async function patchReq(value,id,boxType,title){
    try {
        let res = await fetch(`https://639b2fee31877e43d6853e66.mockapi.io/dashboard/Dashboard/${id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                'title': title,
                'boxtype': boxType,
                'description' : value
            })
     
        })
        console.log(res.ok)
        let data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


// <---------------------------Drag Property------------------------------>

// let cards = document.querySelectorAll('.card')
// let headers = document.querySelectorAll('.delete-button')
// // console.log(headers)
// // for(let header in headers){
//   for(let card of cards){
//     // console.log(card)
//     card.addEventListener('mousedown',()=>{
//       // console.log(card)
//       card.addEventListener('mousemove',onDrag)
//      });

//      document.addEventListener('mouseup',()=>{
//       card.removeEventListener('mousemove',onDrag)
//      });


//      function onDrag({movementX,movementY}){
//       let getStyle = window.getComputedStyle(card);
//       let left = parseInt(getStyle.left)
//       let top = parseInt(getStyle.top)
//       console.log(left)
//       card.style.left = `${left + movementX}px`
//       card.style.top = `${top + movementY}px`
//      }

//   } 
// }
// console.log(card)







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