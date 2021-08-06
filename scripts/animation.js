//=========== requiring  & variables
let about = document.querySelector(".about")
let store = document.querySelector(".store")
    //nav
let burger_menu = document.querySelector(".burger_menu")
let nav = document.querySelector(".nav")
let line = document.querySelector(".line")

//loading animation start
window.addEventListener("load", () => {
    gsap.fromTo('.filler', { width: '0%' }, { duration: 1, width: '100%', ease: Power1.easeOut })
    gsap.fromTo(".loading", { opacity: '100%' }, { duration: 1, delay: 2, opacity: "0%", display: "none" })
})

//========= All Event listners
//nav click

burger_menu.addEventListener("click", () => {
        openClose_menu_burger()
    })
    //burger menu opening

let openClose_menu_burger = () => {
    line.classList.toggle("open_burger");
    nav.classList.toggle("nav_open");
}