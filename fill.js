let images=["3.jpg","1.jpg","2.jpg","4.png"];
let smimg=["33.png","11.jpg","22.jpg","44.png"];
let carousel = document.querySelector(".on");
let car = document.querySelector(".smblk");
let pan=document.querySelector(".wpanel");
let panbtn=document.querySelector(".panel");
setInterval(function() {startCarousel();}, 3000);
var index = 1;

startCarousel = () => {
  carousel.style.backgroundImage = `url(${images[index]})`;
  car.style.backgroundImage = `url(${smimg[index++]})`;
  if(index > images.length - 1) index = 0;
}
function adimg(){
  carousel.style.opacity="0.4";
  car.style.display="block";
}
function rmimg(){
  carousel.style.opacity="1";
  car.style.display="none";
}
function ripmimg(){
  carousel.style.opacity="1";
  car.style.display="none";
  loli(1);
}
function rrmimg(){
  carousel.style.opacity="1";
  car.style.display="none";
  loli(2);
  cpanel();
}
function mpopen()
{
  window.open("./musicPlayer.html","_self");
}
function home(){
  window.open("#home","_self");
}
function panel(){
  pan.style.display="block";
  pan.style.animation="0.5s ltr";
  pan.style.opacity=1;
  pan.style.transform="translateX(0%)";
  panbtn.style.transform="translateX(-100%)";
  panbtn.style.opacity=0;
  panbtn.style.animation="linear 0.4s rtl";
}
function cpanel(){
  pan.style.animation="linear 0.4s rtl";
  pan.style.opacity=0;
  pan.style.transform="translateX(-100%)";
  panbtn.style.transform="translateX(0%)";
  panbtn.style.opacity=1;
  panbtn.style.animation="linear 0.4s ltr";
}
function pdis(){
  panbtn.style.transform="translateX(-100%)";
  panbtn.style.opacity=0;
  panbtn.style.animation="linear 0.4s rtl";
}
function share(i){
  if(i==0){
    window.open("https://www.instagram.com/_pratyut_/");
  }
  else if(i==1){
    window.open("#");
  }
  else if(i==2){
    window.open("#");
  }
}
let vi=3;
function loli(i)
{
  if(vi==i){
    return;
  }
  var reveals = document.querySelectorAll(".reveal");
  reveals[vi].classList.remove("active");
  reveals[i].classList.add("active");
  vi=i;
}
function msop(j){
  console.log(j);
  window.open("./musicPlayer.html","_self");
}