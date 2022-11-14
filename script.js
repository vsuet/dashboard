const burger = document.getElementById("burger");
const body = document.body;
const header = document.getElementById("header");
// const hrHead = document.getElementById("header-hr");

burger.addEventListener("click", burgerOpening);

function burgerOpening() {
    burger.classList.toggle("active");
    body.classList.toggle("noscroll");
    header.classList.toggle("visible");
    // hrHead.classList.toggle("lineNew");
}
