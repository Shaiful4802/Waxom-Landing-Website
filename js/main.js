
// sticky header nav style start

let navbar = document.querySelector("#nav");

 window.addEventListener("scroll", function(){
    let scroll_value = window.scrollY;
    if (scroll_value > 100) {
        navbar.classList.add("sticky_menu")
    } else {
        navbar.classList.remove("sticky_menu")
    }
 })

// sticky header nav style end



