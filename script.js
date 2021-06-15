const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");

let state = 1;

btnNext.addEventListener("click", () => {
  if (state < 4) {
    state++;
    console.log("state", state);
  }
});

btnPrev.addEventListener("click", () => {
  if (state > 1) {
    state--;
    console.log("state", state);
  }
});

if (state === 1) {
} else if (state === 2) {
} else if (state === 3) {
} else if (state === 4) {
}
