// DARK MODE
const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){
  document.body.classList.add("dark");
  toggle.textContent="☀️";
}

toggle.onclick=()=>{
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    toggle.textContent="☀️";
    localStorage.setItem("theme","dark");
  }else{
    toggle.textContent="🌙";
    localStorage.setItem("theme","light");
  }
};

// SEE MORE / LESS BIO
const btn=document.getElementById("toggleBio");
const more=document.getElementById("moreText");
const dots=document.getElementById("dots");

btn.onclick=()=>{
  if(more.style.display==="inline"){
    more.style.display="none";
    dots.style.display="inline";
    btn.textContent="See More";
  }else{
    more.style.display="inline";
    dots.style.display="none";
    btn.textContent="See Less";
  }
};

// SCROLL REVEAL
const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top<window.innerHeight-100){
      el.classList.add("active");
    }
  });
});

// PROGRESS BAR
window.onscroll=()=>{
  let winScroll=document.documentElement.scrollTop;
  let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
  let scrolled=(winScroll/height)*100;
  document.getElementById("progressBar").style.width=scrolled+"%";
};

// TYPING EFFECT
const text=["Flutter Developer","Django Developer","Backend Engineer","Mobile App Builder"];
let i=0,j=0,current="",isDeleting=false;

function type(){
  current=text[i];

  if(!isDeleting){
    j++;
    document.querySelector(".typing span").textContent=current.substring(0,j);
    if(j===current.length){
      isDeleting=true;
      setTimeout(type,1000);
      return;
    }
  }else{
    j--;
    document.querySelector(".typing span").textContent=current.substring(0,j);
    if(j===0){
      isDeleting=false;
      i=(i+1)%text.length;
    }
  }

  setTimeout(type,isDeleting?60:100);
}

type();