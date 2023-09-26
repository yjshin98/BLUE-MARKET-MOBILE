// gnb 열고 닫기

const closeBtn = document.querySelector(".close");
const dark = document.querySelector(".dark");
const gnb = document.querySelector(".gnb_wrap");
const gnbBar = document.querySelector(".gnb_bar");

gnbBar.onclick = () => {
  gnb.style = "left:0";
  dark.style.display = "block"
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
  searchWrap.style = "top:-100px"
  deleteBtn1.style.display = "none";
  report.style.display = "none"
}

// pop창 관리

const checkBtn1 = document.querySelector(".check1");
const checkBtn2 = document.querySelector(".check2");
const pop1 = document.querySelector(".pop1");
const pop2 = document.querySelector(".pop2");
const closePop1 = document.querySelector(".pop1 button");
const closePop2 = document.querySelector(".pop2 button");

checkBtn1.addEventListener("click",function(){
  pop1.classList.remove("pop1")  
  pop1.style.display = "none"
})
checkBtn2.addEventListener("click",function(){
  pop2.classList.remove("pop2")    
  pop2.style.display = "none"
})

closePop1.addEventListener("click",function(){
  pop1.style.display = "none"  
})
closePop2.addEventListener("click",function(){
  pop2.style.display = "none"
})

// top scroll

const elTop = document.querySelector(".top")

elTop.addEventListener("click",function(){
  window.scrollTo({top:0,behavior:"smooth"})
})

//  search 나타내기
const searchWrap = document.querySelector(".search_wrap");
const searchBtn = document.querySelector(".search a");
const cancleBtn = document.querySelector(".cancle");
const btnSearch = document.querySelector(".search_wrap button");
const text = document.querySelector(".search_wrap input");
const report = document.querySelector(".report");
const deleteBtn1 = document.querySelector(".delete");
const deleteBtn2 = document.querySelector(".del");
const white = document.querySelector(".white");
const searchHead = document.querySelector(".search_header");

searchBtn.addEventListener("click",function(){
  searchWrap.style = "top:0";
  searchWrap.style = "bottom:0";
  searchHead.style = "top:0";
  searchHead.style.display = "flex";
  white.style.display = "block"
  report.style.display = "block";
  deleteBtn1.style.display = "block";  
  
})

cancleBtn.addEventListener("click",function(){
  searchWrap.style = "top:-100px"
  searchHead.style = "top:-100px"
  white.style.display = "none"
  report.style.display = "none"
  deleteBtn1.style.display = "none";
  
})

// 검색기록
  btnSearch.addEventListener("click",function(){
    if(text.value == ""){
      alert("검색어를 입력하세요!");
      return;
    }
    const searchLiA = document.createElement("li");
    const btnX = document.createElement("span");
    const hiddentext = document.querySelector(".hiddentext");
    
    searchLiA.append(text.value);  
    btnX.classList.add("searchX");
    searchLiA.prepend(btnX);
    report.prepend(searchLiA);
    report.style.display = "block";       
        

    const btnX2 = document.querySelectorAll(".searchX");    

    for(let i=0; i<btnX2.length; i++){      
        const del2 = document.querySelectorAll(".report li");
        for(let j=0; j<del2.length; j++){
          if(i === j) {
            btnX2[i].addEventListener("click",function(){ 
            del2[i].remove();
            })            
          }           
        }                 
    }
    
    text.value="";    
    hiddentext.focus();
    text.focus();
    
})

deleteBtn2.addEventListener("click",function(){  
  const del = document.querySelectorAll(".report li")
  for(let i=0;i<del.length;i++){
    del[i].remove();    
  }
  return;
})



