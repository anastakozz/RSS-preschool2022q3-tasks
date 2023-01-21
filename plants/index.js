const myToggle = document.querySelector(".toggle_svg");
const mobNav = document.querySelector(".mobile_nav");
const mobLink = document.querySelectorAll(".mob_link");



const myToggleFunc = (event) => {
    mobNav.classList.toggle("open")
}

myToggle.addEventListener("click", myToggleFunc)
mobLink.forEach(link => {
    link.addEventListener("click", myToggleFunc)
})






