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
    // postData(text,id)
    obj.title = text;
    obj.id = id;
    console.log(obj);
    console.log(Object.keys(obj).length);
  });
}

addDashboard.addEventListener("click", async function (e) {
  e.preventDefault();
  // console.log(Object.keys(obj).length)
  if (Object.keys(obj).length == 2) {
    //   async function postData(e){
    console.log("hello i am working");

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
          }),
        }
      );

      if (res.ok) {
        let data = res.json();
        console.log(data);
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

function createCard1(title) {
  return `
    <div>
        <div>

            <div class="dashboard-heading">
                <h4>${title}</h4>
                <p>Data Range: Monthly</p>
            </div>

            <div class= "dashboard-icons">
                <span class="material-symbols-outlined">
                    delete
                </span>
                <span class="material-symbols-outlined">
                    edit
                </span>
            </div>

        </div>

        <div class="textarea-box">

            <textarea type="text" readonly></textarea>

        </div>
    </div>
    `;
}

function createCard2(title) {
  return `
    <div>
    <div>
        <div class="dashboard-heading">
            <h4>${title}</h4>
            <p>Data Range: Monthly</p>
        </div>

        <div  class="dashboard-icons">
            <span class="material-symbols-outlined">
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

function createCard3(title) {
  return `
    <div>
        <div>
            <div class="dashboard-heading">
                <h4>Landing page Performance</h4>
                <p>Data Range: Monthly</p>
            </div>

            <div class= "dashboard-icons">
                <span class="material-symbols-outlined">
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
