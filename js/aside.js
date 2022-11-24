var aside = document.getElementById("oc-aside");

var state = false;
function obr1() {
    var block = document.getElementById("g-aside");
    var block2 = document.getElementById("g-section");

    if (state == false) {
        state = true
    
        block.classList.add("abpap__aside--close");
        block2.classList.add("abpap__section--close");
    } 
    
    else if (state == true) {
        state = false
    
        block.classList.remove("abpap__aside--close");
        block2.classList.remove("abpap__section--close");
    }
};

aside.addEventListener("click", obr1);