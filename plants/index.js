const myToggle = document.querySelector(".toggle_svg");
const mobNav = document.querySelector(".mobile_nav");
const mobLink = document.querySelectorAll(".mob_link");


const myToggleFunc = (event) => {
    mobNav.classList.toggle("open")
    myToggle.classList.toggle("cross")
}

myToggle.addEventListener("click", myToggleFunc)
mobLink.forEach(link => {
    link.addEventListener("click", myToggleFunc)
})




/* document.addEventListener ("click", (a) => {
    const outNav = a.composedPath().includes(mobNav);

    if (!outNav && mobNav.classList.contains("open")) {
        mobNav.classList.toggle("open")
    }
})
*/
