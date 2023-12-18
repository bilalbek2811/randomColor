const text = document.querySelector("h1");
const button = document.querySelector(".show");
const box = document.querySelectorAll(".box");
const clear = document.querySelector(".clear");
const body = document.querySelector("body");
setInterval(() => {
  box.forEach((el) => {
    el.style.background = randomColor();
    el.style.boxShadow = `0px 9px 9px 0px ${randomColor()}`;
    el.style.transition = `0.5`;
  });
}, 1000);
function randomColor() {
  let square = "#";
  for (let i = 1; i <= 6; i++) {
    square += Math.floor(Math.random() * 10);
  }
  return square;
}
body.style.background = "#000";
//!  interpolasia  `${}`
