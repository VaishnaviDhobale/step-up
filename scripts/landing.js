$("#menu-close").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});
$(".menu-togglee").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

let createBtn = document.getElementById("create-btn");

createBtn.addEventListener("click", () => {
    window.location.href = "choose-template.html"
})

