// =================== Up Button ===================
let upBtn = document.querySelector(".up");
window.addEventListener("scroll", () => {
  this.scrollY >= document.documentElement.clientHeight
    ? upBtn.classList.add("show")
    : upBtn.classList.remove("show");
});
upBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// =================== Current Year ===================
let scroller = document.createElement("div");
scroller.classList.add("scroller");
document.body.appendChild(scroller);

window.addEventListener("scroll", () => {
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});
// =================== Current Year ===================
let year = document.querySelector('#current-year')
year.innerHTML = new Date().getFullYear()