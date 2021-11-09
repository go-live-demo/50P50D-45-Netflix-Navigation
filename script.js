const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav_boxs = document.querySelectorAll(".nav");

open_btn.addEventListener("click", () => {
  nav_boxs.forEach( el => {
    el.classList.add("visible");
  })
})

close_btn.addEventListener("click", () => {
  nav_boxs.forEach( el => {
    el.classList.remove("visible");
  })
})