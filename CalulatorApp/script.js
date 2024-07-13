/* --------------------------
    Calculator Functions
-----------------------------*/
const display_result = document.querySelector(".display .result");
const display_equation = document.querySelector(".display .equation");

/* When click into key add value */

const AddToDisplay = (input) => {
  /* Check if the display has = key when change it */

  if (display_result.innerHTML.includes("=")) {
    /* Check if the key is operator  */
    if (isOperator(input)) {
      display_equation.innerHTML = display_result.innerHTML;
      display_result.innerHTML = display_result.innerHTML.slice(1) + input;
    } else {
    /* Else when the key is number */
      display_equation.innerHTML = display_result.innerHTML;
      display_result.innerHTML = "";
      display_result.innerHTML += input;
    }
  } else if (display_result.innerHTML == "Error") {

  /* Handle The Error */
    display_result.innerHTML = "";
    display_result.innerHTML += input;
  } else {

  /* OtherWise */
    display_result.innerHTML += input;
  }
};

/* Function that clear the display */

const clearDisplay = () => {
  display_result.innerHTML = "";
  display_equation.innerHTML = "";
};

/* Function Calculate the value */

const Result = () => {

  try {
    /* If The Number division By zero */
    
    if (display_result.innerHTML.includes("/0")) {
      display_result.innerHTML = "Error";
      display_equation.innerHTML = "";
    } else {
      display_equation.innerHTML = display_result.innerHTML;
      display_result.innerHTML = `=${eval(display_result.innerHTML)}`;
    }
  } catch (error) {
    display_result.innerHTML = "Error";
    display_equation.innerHTML = "";
  }
};

/* Function delete last element when click it */

const backwards = () => {

  /* Handle The Error */
  if (display_result.innerHTML == "Error") {
    display_result.innerHTML = "";
    display_result.innerHTML += input;
  }

  /* Check if the display has = key when change it */

  if (display_result.innerHTML.includes("=")) {
    display_result.innerHTML = display_result.innerHTML.slice(1);
    display_result.innerHTML = display_result.innerHTML.slice(0, -1);
  } else {
    display_result.innerHTML = display_result.innerHTML.slice(0, -1);
  }
};

/* function check if the input is opreator return boolean  */
const isOperator = (input) => {
  return ["+", "-", "*", "/"].includes(input);
};

/* --------------
    Change Mode
----------------- */

const ModeBtn = document.querySelector("#modeBtn");

const ChangeMode = () => {
  if (document.body.classList == "light") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");

    ModeBtn.classList.add("dark");
    ModeBtn.classList.remove("light");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");

    ModeBtn.classList.remove("dark");
    ModeBtn.classList.add("light");
  }
};