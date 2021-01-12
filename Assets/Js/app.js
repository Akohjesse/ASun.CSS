let menuIcon = document.querySelector(".ri-menu-fill");
let menubar = document.querySelector(".menu-list");
let flag= true;
menuIcon.addEventListener("click", openNavBar);

function openNavBar(){
    if (flag){
       
        menubar.style="display:block;"
        this.className="ri-close-line";
        this.style.color="white";
        menubar.classList.add("animate__slideInRight", "animate__animated");
        
    }
    else{
        this.className="ri-menu-fill";
        menubar.style="display:none;";
        menuIcon.style="color:black";
      
    }
    flag= !flag;
}
