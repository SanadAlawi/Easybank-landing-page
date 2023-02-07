let nav = document.querySelector("nav")
let main = document.querySelector("main")
let open_nav = document.querySelector("nav .open-nav")
let close_nav = document.querySelector("nav .close-nav")

open_nav.addEventListener("click", () => {
    nav.classList.add("active")
    main.classList.add("active")
})
close_nav.addEventListener("click", () => {
    nav.classList.remove("active")
    main.classList.remove("active")
})