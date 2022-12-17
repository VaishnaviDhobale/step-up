
let product = document.getElementById("product");
let submenues = document.querySelector(".submenues");
let middle = document.querySelector(".middle");
product.addEventListener("mousemove", () => {
  middle.style.display = "none";
  submenues.style.display = "block";

  submenues.innerHTML = `<div class="main-sub">
  <div class="product-submenu">
    <div class="product-submenu-1">
    <div><i class="fa-solid fa-arrow-up-from-bracket"></i><p id="one">All-in-One-Suite</p></div>
    <div><i class="fa-solid fa-chart-simple"></i><p>Marketing Bay</p></div>
    <div><i class="fa-solid fa-trophy"></i><p>CRM & Sales Bay</p></div>
    <div><i class="fa-solid fa-headphones-simple"></i><p>Service Bay</p></div>
    </div>
    <div class="product-submenu-2"></div>
  </div>
  <div class="product-submenu-3">
  <div class="plans">
          <p>ALL PLANS</p>
          <hr></hr>
          <div class="sub-plan">
            <div>
              <i class="fa-solid fa-list"></i>
              <div>
                <strong>Free</strong>
                <p>Useful for solopreneurs Free for teams of up to 15 members</p>
              </div>
            </div>
            <div>
              <i class="fa-solid fa-medal"></i>
              <div>
                <strong>Basic</strong>
                <p>Best suited for basic users who have a limited customer base</p>
              </div>
            </div>
            <div>
              <i class="fa-solid fa-arrow-up-right-dots"></i>
              <div>
                <strong>Growth</strong>
                <p>Ideal for startups to manage their business and scale faster</p>
              </div>
            </div>
            <div>
              <i class="fa-solid fa-shield"></i>
              <div>
                <strong>Pro</strong>
                <p>Great for teams that require additional features to grow the business 7x</p>
              </div>
            </div>
            <div class="more">
              <i class="fa-solid fa-gear"></i>
              <p>Compare all plans<i class="fa-solid fa-arrow-right"></i></p>
            </div>
          </div>
        </div>
  </div>
  </div>`;

  let oneData = document.querySelector(".product-submenu-2");
  oneData.innerHTML = `<div class="main">
<div class="left">
  <p><a href="">Marketing Automation</a></p>
  <p><a href="">Email Marketing</a></p>
  <p><a href="">mail Sequences</a></p>
  <p><a href="">Landing Pages</a></p>
  <p><a href="">Web Forms</a></p>
  <p><a href="">360 Degree Customer View</a></p>
  <p><a href="">Appointment Scheduling Software</a></p>
  <p><a href="">Contact Management Software</a></p>
  <p><a href="">Why EngageBay CRM?</a></p>
</div>
<div class="right">
  <p><a href="">Free CRM</a></p>
  <p><a href="">Sales CRM</a></p>
  <p><a href="">CRM Database</a></p>
  <p><a href="">Free Live Chat Software</a></p>
  <p><a href="">Macros</a></p>
  <p><a href="">SLA</a></p>
  <p><a href="">Views</a></p>
</div>
</div>`;

  let test = document.querySelectorAll(".product-submenu-1>div");

  test[0].addEventListener("click", () => {
    for (let i = 0; i < 4; i++) {
      if (i == 1 || i == 2 || i == 3) {
        test[i].style.background = "white";
        test[i].style.color = "black";
      }
    }
    test[0].style.backgroundColor = "rgb(189, 241, 189)";
    test[0].style.color = "green";
    oneData.innerHTML = `<div class="main">
<div class="left">
  <p><a href="">Marketing Automation</a></p>
  <p><a href="">Email Marketing</a></p>
  <p><a href="">mail Sequences</a></p>
  <p><a href="">Landing Pages</a></p>
  <p><a href="">Web Forms</a></p>
  <p><a href="">360 Degree Customer View</a></p>
  <p><a href="">Appointment Scheduling Software</a></p>
  <p><a href="">Contact Management Software</a></p>
  <p><a href="">Why EngageBay CRM?</a></p>
</div>
<div class="right">
  <p><a href="">Free CRM</a></p>
  <p><a href="">Sales CRM</a></p>
  <p><a href="">CRM Database</a></p>
  <p><a href="">Free Live Chat Software</a></p>
  <p><a href="">Macros</a></p>
  <p><a href="">SLA</a></p>
  <p><a href="">Views</a></p>
</div>
</div>`;
  });

  test[1].addEventListener("click", () => {
    oneData.innerHTML = null;
    for (let i = 0; i < 4; i++) {
      if (i == 0 || i == 2 || i == 3) {
        test[i].style.background = "white";
        test[i].style.color = "black";
      }
    }
    test[1].style.background = "#fbd5cb";
    test[1].style.color = "#f64716";

    oneData.innerHTML = `<div class="main">
<div class="left">
  <p><a href="">Marketing Automation</a></p>
  <p><a href="">Email Marketing</a></p>
  <p><a href="">Push Notifications</a></p>
  <p><a href="">Email Sequences</a></p>
  <p><a href="">Web Forms</a></p>
  <p><a href="">SMS Marketing</a></p>
</div>
<div class="right">
  <p><a href="">Inbound Marketing</a></p>
  <p><a href="">Site Messaging</a></p>
  <p><a href="">Contact Segmentation</a></p>
  <p><a href="">Landing Pages</a></p>
  <p><a href="">Email Templates</a></p>
  <p><a href="">Bulk SMS Marketing</a></p>
</div>
</div>`;
  });

  test[2].addEventListener("click", () => {
    oneData.innerHTML = null;
    for (let i = 0; i < 4; i++) {
      if (i == 0 || i == 1 || i == 3) {
        test[i].style.background = "white";
        test[i].style.color = "black";
      }
    }
    test[2].style.background = "#f2e8c6";
    test[2].style.color = "#edb705";
    oneData.innerHTML = `<div class="main">
<div class="left">
  <p><a href="">360 Degree Customer View</a></p>
  <p><a href="">Project Management</a></p>
  <p><a href="">Contact Management Software</a></p>
  <p><a href="">Free CRM</a></p>
  <p><a href="">Lead Management</a></p>
  <p><a href="">CRM Email Integration</a></p>
  <p><a href="">Sales Tools</a></p>
</div>
<div class="right">
  <p><a href="">Lead Scoring</a></p>
  <p><a href="">Appointment Scheduling Software</a></p>
  <p><a href="">CRM Telephony</a></p>
  <p><a href="">Sales CRM</a></p>
  <p><a href="">Employee Engagement</a></p>
  <p><a href="">Deal Management</a></p>
  <p><a href="">CRM Text Messaging</a></p>
</div>
</div>`;
  });

  test[3].addEventListener("click", () => {
    oneData.innerHTML = null;
    for (let i = 0; i < 4; i++) {
      if (i == 0 || i == 2 || i == 1) {
        test[i].style.background = "white";
        test[i].style.color = "black";
      }
    }
    test[3].style.background = "#dee6ec";
    test[3].style.color = "rgb(30, 164, 236)";
    oneData.innerHTML = `<div class="main">
<div class="left">
  <p><a href="">Free Live Chat Software</a></p>
  <p><a href="">Macros</a></p>
  <p><a href="">SLA</a></p>
  <p><a href="">Views</a></p>
  <p><a href="">Tickets</a></p>
</div>
<div class="right">
  <p><a href="">Service Automations</a></p>
  <p><a href="">Canned Responses</a></p>
  <p><a href="">Support Groups</a></p>
  <p><a href="">Custom Ticket Views</a></p>
  <p><a href="">Helpdesk Reports</a></p>
</div>
</div>`;
  });
});

submenues.addEventListener("mousemove", () => {
  submenues.style.display = "block";
  middle.style.display = "none";
});

submenues.addEventListener("mouseleave", () => {
  submenues.style.display = "none";
  middle.style.display = "block";
});

product.addEventListener("mouseleave", () => {
  submenues.style.display = "none";
  middle.style.display = "block";
});

// Resources js
let reso = document.getElementById("resources");
// let submenues=document.querySelector(".submenues")

reso.addEventListener("mousemove", () => {
  submenues.innerHTML = null;
  middle.style.display = "none";
  submenues.style.display = "block";
  submenues.innerHTML = `<div class="main-sub">
  <div class="resSubMenu">
    <div class="resSubMenu-1">
      <p>Landing Pages Guide</p>
      <p>Inbound Marketing Guide</p>
      <p>Website Popups Guide</p>
      <p>Marketing Automation Guide</p>
      <p>Email Marketing Guide</p>
      <p>Lead Generation Guide</p>
      <p>CRM Guide</p>
      <p>Helpdesk Guide</p>
      <p>Integrations</p>
      <p>Case Study</p>
    </div>
    <div class="resSubMenu-2">
      <!-- append here -->
    </div>s
  </div>
  <div class="plans">
    <p>ALL PLANS</p>
    <hr>
    </hr>
    <div class="sub-plan">
      <div>
        <i class="fa-solid fa-list"></i>
        <div>
          <strong>Free</strong>
          <p>Useful for solopreneurs Free for teams of up to 15 members</p>
        </div>
      </div>
      <div>
        <i class="fa-solid fa-medal"></i>
        <div>
          <strong>Basic</strong>
          <p>Best suited for basic users who have a limited customer base</p>
        </div>
      </div>
      <div>
        <i class="fa-solid fa-arrow-up-right-dots"></i>
        <div>
          <strong>Growth</strong>
          <p>Ideal for startups to manage their business and scale faster</p>
        </div>
      </div>
      <div>
        <i class="fa-solid fa-shield"></i>
        <div>
          <strong>Pro</strong>
          <p>Great for teams that require additional features to grow the business 7x</p>
        </div>
      </div>
      <div class="more">
        <i class="fa-solid fa-gear"></i>
        <p>Compare all plans<i class="fa-solid fa-arrow-right"></i></p>
      </div>
    </div>
  </div>
</div>`;

  let resoData = document.querySelectorAll(".resSubMenu-1>p");
  resoDataFun(resoData);
});

function resoDataFun(data) {
  let updatedResoData = document.querySelector(".resSubMenu-2");
  updatedResoData.innerHTML = `
      <p>The Basics</p>
      <p>How To Choose</p>
      <p>Templates</p>
      <p>Traffic Generation Tips</p>
      <p>Landing Page Recipes</p>
      <p>Best Practices</p>`;

  data[0].addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
      if (i != 0) {
        data[i].style.background = "white";
        data[i].style.color = "black";
      } else {
        data[0].style.backgroundColor = "#c8d3e3";
        data[0].style.color = "#135ece";
      }
    }
    updatedResoData.innerHTML = `
      <p>The Basics</p>
      <p>How To Choose</p>
      <p>Templates</p>
      <p>Traffic Generation Tips</p>
      <p>Landing Page Recipes</p>
      <p>Best Practices</p>`;
  });

  data[1].addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
      if (i != 1) {
        data[i].style.background = "white";
        data[i].style.color = "black";
      } else {
        data[i].style.backgroundColor = "#c8d3e3";
        data[i].style.color = "#135ece";
      }
    }
    updatedResoData.innerHTML = `
      <p>The Basics</p>
      <p>Inbound vs Outbound</p>
      <p>Engaging Web Visitors</p>
      <p>Engagement and Conversions</p>
      <p>Nurturing Web Visitors</p>
      <p>Closing Deals</p>`;
  });

  data[2].addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
      if (i != 2) {
        data[i].style.background = "white";
        data[i].style.color = "black";
      } else {
        data[i].style.backgroundColor = "#c8d3e3";
        data[i].style.color = "#135ece";
      }
    }
    updatedResoData.innerHTML = `
      <p>What are Web Popups?</p>
      <p>Types of Web Popups</p>
      <p>Advantages of Web Popups</p>
      <p>Tips and Tricks</p>`;
  });

  data[3].addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
      if (i != 3) {
        data[i].style.background = "white";
        data[i].style.color = "black";
      } else {
        data[i].style.backgroundColor = "#c8d3e3";
        data[i].style.color = "#135ece";
      }
    }
    updatedResoData.innerHTML = `
      <p>The Basics</p>
      <p>Segmenting Leads</p>
      <p>Automated Email Templates</p>
      <p>Email Personalization</p>
      <p>Tools and Platforms</p>`;
  });

  data[4].addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
      if (i != 4) {
        data[i].style.background = "white";
        data[i].style.color = "black";
      } else {
        data[i].style.backgroundColor = "#c8d3e3";
        data[i].style.color = "#135ece";
      }
    }
    updatedResoData.innerHTML = `
      <p>Introduction</p>
      <p>Advantages</p>
      <p>Elements</p>
      <p>Value Ladder</p>
      <p>Lead Nurturing</p>
      <p>Landing Pages</p>
      <p>Strategies</p>
      `;
  });

  data[5].addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
      if (i != 5) {
        data[i].style.background = "white";
        data[i].style.color = "black";
      } else {
        data[i].style.backgroundColor = "#c8d3e3";
        data[i].style.color = "#135ece";
      }
    }
    updatedResoData.innerHTML = `
      <p>What Is a Lead?n</p>
      <p>Importance of Lead</p>
      <p>Generation</p>
      <p>Lead and Prospect</p>
      <p>Master Lead Generation</p>
      <p>Lead Generation Best</p>
      <p>Practices</p>
      `;
  });

  data[6].addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
      if (i != 6) {
        data[i].style.background = "white";
        data[i].style.color = "black";
      } else {
        data[i].style.backgroundColor = "#c8d3e3";
        data[i].style.color = "#135ece";
      }
    }
    updatedResoData.innerHTML = `
      <p>What is CRM?</p>
      <p>Sales CRM</p>
      <p>Email Marketing CRM</p>
      <p>CRM with Marketing Automation</p>
      <p>Sales Automation</p>
      <p>Sales Management</p>
      <p>Sales Pipeline</p>
      <p>Small Business Marketing Automation</p>`;
  });

  data[7].addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
      if (i != 7) {
        data[i].style.background = "white";
        data[i].style.color = "black";
      } else {
        data[i].style.backgroundColor = "#c8d3e3";
        data[i].style.color = "#135ece";
      }
    }
    updatedResoData.innerHTML = `
      <p>Helpdesk Software</p>
      <p>Especially Small</p>
      <p>Purpose of Helpdesk Software</p>
      <p>Right Helpdesk Software</p>
      <p>Resolve Angry Customer</p>
      <p>Main Features of Help Desk</p>
      <p>EngageBay's Helpdesk</p>`;
  });

  data[8].addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
      if (i != 8) {
        data[i].style.background = "white";
        data[i].style.color = "black";
      } else {
        data[i].style.backgroundColor = "#c8d3e3";
        data[i].style.color = "#135ece";
      }
    }
    updatedResoData.innerHTML = `
      <p>Zapier</p>
      <p>SendGrid</p>
      <p>Mailgun</p>
      <p>Mandrill</p>
      <p>Xero</p>`;
  });

  data[9].addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
      if (i != 9) {
        data[i].style.background = "white";
        data[i].style.color = "black";
      } else {
        data[i].style.backgroundColor = "#c8d3e3";
        data[i].style.color = "#135ece";
      }
    }
    updatedResoData.innerHTML = `
      <p>All In One Case Study</p>
      <p>Affordability Case Study</p>`;
  });

  submenues.addEventListener("mousemove", () => {
    submenues.style.display = "block";
    middle.style.display = "none";
  });

  submenues.addEventListener("mouseleave", () => {
    submenues.style.display = "none";
    middle.style.display = "block";
  });

  reso.addEventListener("mouseleave", () => {
    submenues.style.display = "none";
    middle.style.display = "block";
  });
}


// for slider
let slides=document.querySelectorAll(".slide")
var count=0;
slides.forEach((ele,index)=>{
  ele.style.left=`${index*100}%`
});
// bug is here
function goPre(){
    count--
  slide_div()
}
function goNext(){
  if(count<slides.length-1){
   count++
  }
  slide_div()
}
function slide_div(){
  slides.forEach((ele,index)=>{
    ele.style.transform=`translateX(-${count*100}%)`
  })
}


// --------------------Login Method------------------------

let loginbtn = document.querySelector(".login-user")

loginbtn.addEventListener("click",function(){
   window.location.href="Login.html"
})

let homebtn = document.querySelector(".home-btn")

homebtn.addEventListener("click",function(){
   window.location.href="index.html"
})

let blogbtn = document.querySelector(".blog-btn")

blogbtn.addEventListener("click",function(){
   window.location.href="blog.html"
})