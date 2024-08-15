let hamburger = document.querySelector(".hamburger")
let resMenu = document.querySelector(".res-menu")


let hamcount = 0;

hamburger.addEventListener("click", ()=>{
    if(hamcount % 2 == 0){
        resMenu.style.display = "flex"
        hamburger.innerHTML = "&#10006;"
    }
    else{
        resMenu.style.display = "none"
        hamburger.innerHTML = "&#9776;"
    }
    hamcount++
})