const number1 = 240;
const number2 = 150;
const number3 = 200;
const number4 = 170;

let innerNm1 = 0;
let innerNm2 = 0;
let innerNm3 = 0;
let innerNm4 = 0;

const navbar = document.querySelector("nav");
const nums = document.querySelectorAll(".num");

function getYPosition() {
  var top = window.pageYOffset || document.documentElement.scrollTop;
  return top;
}

const interval = (num, el, innerNum) => {
  setInterval(() => {
    if (innerNum < num) {
      innerNum += 1;
      el.innerHTML = innerNum;
    }
  }, 3);
};

function stopInterval() {
  clearInterval(interval);
}

const incNums = () => {
  nums.forEach((num) => {
    if (num.classList.contains("firstNum")) {
      if (innerNm1 > number1) {
        stopInterval();
      } else {
        interval(number1, num, innerNm1);
      }
    }
    if (num.classList.contains("secNum")) {
      if (innerNm2 > number2) {
        stopInterval();
      } else {
        interval(number2, num, innerNm2);
      }
    }
    if (num.classList.contains("thrdNum")) {
      if (innerNm3 > number3) {
        stopInterval();
      } else {
        interval(number3, num, innerNm2);
      }
    }
    if (num.classList.contains("furthNum")) {
      if (innerNm4 > number4) {
        stopInterval();
      } else {
        interval(number4, num, innerNm2);
      }
    }
  });
};

const numHandler = () => {
  if (getYPosition() >= 1000 && getYPosition() <= 1030) {
    console.log("sss");
    incNums();
  }
};

const darkNav = () => {
  const topPosition = getYPosition();
  console.log(topPosition);
  if (topPosition > 25) {
    navbar.style.backgroundColor = "black";
    navbar.style.boxShadow = "0px 6px 5px 0px rgba(48, 44, 44, 0.808)";
    navbar.style.zIndex = "2";
  } else {
    navbar.style.backgroundColor = "#0D1117";
    navbar.style.boxShadow = "none";
    navbar.style.zIndex = "2";
  }
};

document.addEventListener("scroll", getYPosition);

document.addEventListener("scroll", darkNav);
document.addEventListener("scroll", numHandler);
