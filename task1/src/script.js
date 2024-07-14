/* Menu Bar Mobile */
let burger = document.querySelector("#burger");
let close = document.querySelector("#close");
let menuBar = document.querySelector("#menubar");

/* Show Menu */
burger.onclick = () => {
  menuBar.classList.toggle("top-0");
  menuBar.classList.toggle("-top-[200%]");
};

/* Hide Menu */
close.onclick = () => {
  menuBar.classList.add("-top-[200%]");
  menuBar.classList.remove("top-0");
};




/* ---------------
    Number Counter
------------------ */
let valueDisplays = document.querySelectorAll(".num");

valueDisplays.forEach((valueDisplays) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplays.getAttribute("data-val"));
  let duration = Math.floor(2000 / endValue);
  let counter = setInterval(() => {
    startValue += 1;
    valueDisplays.textContent = startValue + "+";
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
});

/* ---------------
    Scroll To Our Services
------------------ */
let arrowBtnScrollDown = document.querySelector(".arrowScrollDown");
const services = document.getElementById("services");

arrowBtnScrollDown.onclick = () => {
  services.scrollIntoView({ behavior: "smooth", block: "end" });
  };


  
/* ---------------
    Scroll To Top
------------------ */
let arrowBtnScrollUp = document.querySelector(".arrowScrollUp");

window.onscroll = () => {
  if (window.scrollY >= 200) {
    arrowBtnScrollUp.style.opacity = window.scrollY >= 300 ? 1 : 0.5;
  } else {
    arrowBtnScrollUp.style.opacity = 0;
  }
};

arrowBtnScrollUp.onclick = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
