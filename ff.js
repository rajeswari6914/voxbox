let label=document.querySelector(".label");
let input=document.querySelector(".input");
let button=document.querySelector(".button");
let button2=document.querySelector(".button2");
function lolz(i){
  if(i==0)
  {
    label.innerHTML="OTP";
    input.type="password";
    button.innerHTML="VERIFY";
    button2.style.opacity=1;
    button2.style.margin="30px 0 20px 0";
  }
  else if(i==1)
  {
    label.innerHTML="EMAIL";
    input.type="text";
    button.innerHTML="OTP";
    button2.style.opacity=0;
    button2.style.margin="0 0 0 0";
  }
  }