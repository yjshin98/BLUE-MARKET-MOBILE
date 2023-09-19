const closeBtn = document.querySelector(".close");
const dark = document.querySelector(".dark");
const gnb = document.querySelector(".gnb_wrap");
const gnbBar = document.querySelector(".gnb_bar");


gnbBar.onclick = () => {
  gnb.style = "left:0";
  dark.style.display = "block";
  closeBtn.style.display = "block";
}

closeBtn.onclick = () => {
  gnb.style = "left:-290px";
  dark.style.display = "none";
  closeBtn.style.display = "none";
}

dark.onclick = () => {
  gnb.style = "left:-290px";
  dark.style.display = "none";
  closeBtn.style.display = "none";
}

