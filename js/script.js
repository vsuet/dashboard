function clickBurger() {
    const el = document.querySelector('#left-content');
    el.classList.add("active");
}

function clickClose() {
    const el = document.querySelector('#left-content');
    el.classList.remove("active");
}