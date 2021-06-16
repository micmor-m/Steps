const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");
const lineOne = document.querySelector("#one-line");
const lineTwo = document.querySelector("#two-line");
const lineThree = document.querySelector("#three-line");
const circleTwo = document.querySelector("#two");
const circleThree = document.querySelector("#three");
const circleFour = document.querySelector("#four");
let state = 1;

btnNext.addEventListener("click", () => {
  if (state < 4) {
    state++;
    console.log("state", state);
  }
  handleState();
});

btnPrev.addEventListener("click", () => {
  if (state > 1) {
    state--;
    console.log("state", state);
  }
  handleState();
});

// Update css class for the BTNs
function handleState() {
  if (state === 1) {
    btnPrev.classList.add("disable");
    lineOne.classList.remove("active");
    circleTwo.classList.remove("active");
  } else if (state === 2) {
    btnPrev.classList.add("btnActive");
    btnPrev.classList.remove("disable");
    lineOne.classList.add("active");
    circleTwo.classList.add("active");
    lineTwo.classList.remove("active");
    circleThree.classList.remove("active");
  } else if (state === 3) {
    btnNext.classList.add("btnActive");
    btnNext.classList.remove("disable");
    lineTwo.classList.add("active");
    circleThree.classList.add("active");
    lineThree.classList.remove("active");
    circleFour.classList.remove("active");
  } else if (state === 4) {
    btnNext.classList.add("disable");
    lineThree.classList.add("active");
    circleFour.classList.add("active");
  }
}
