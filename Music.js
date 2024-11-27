let m=0;
let im=document.querySelector(".plimg");
let song=document.querySelector(".mysong");
let dic=document.querySelector(".disk");
let sl=document.getElementById("mr");
let ico=document.querySelector(".ico");
let bgic=document.querySelector(".cov");
let li=document.querySelector(".iih");

let sngs = ["closer.mp3","down.mp3","roses.mp3","brownies.mp3"];
let bgi=["2.jpg","1.jpg","3.jpg","4.png"];
let cvr=["22.jpg","11.jpg","33.png","44.png"];
let ari=[0,0,0,0];

function plpa(){
    if(m==0)
    {
        play();
    }
    else{
        im.src="./play.png";
        song.pause();
        dic.style.animationPlayState = "paused";
        m=0;
    }
}

function play(){
    im.src="./pause.png";
    song.play();
    dic.style.animationPlayState = "running";
    m=1;
}

function pause(){
    im.src="./play.png";
    dic.style.animationPlayState = "paused";
    m=0;
    sl.value=0;
}

song.addEventListener("ended", function(){
    song.currentTime = 0;
    pause();
});

let p=0;
let i=0;

function lik(){
    console.log("position ",p," value ",ari[p]);
    if(ari[p]==0)
    {
        ari[p]=1;
        li.style.display="block";
    }
    else if(ari[p]==1)
    {
        ari[p]=0;
        li.style.display="none";
    }
    console.log("position ",p," updated value ",ari[p]);
}
function llik(){
    console.log("ppposition ",p," value ",ari[p]);
    if(ari[p]==1)
    {
        li.style.display="block";
    }
    else if(ari[p]==0)
    {
        li.style.display="none";
    }
}
function next(){
    if((p+1)<sngs.length){
        p=p+1;
        llik();
        song.setAttribute('src', sngs[p]);
        ico.style.backgroundImage="url("+cvr[p]+")";
        bgic.style.backgroundImage="linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("+bgi[p]+")";
        if(m==1)
        {
            play();
        }
        else{
            pause();
        }
    }
}

function back(){
    if((p-1)>=0){
        p=p-1;
        llik();
        song.setAttribute('src', sngs[p]);
        ico.style.backgroundImage="url("+cvr[p]+")";
        bgic.style.backgroundImage="linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("+bgi[p]+")";
        if(m==1)
        {
            play();
        }
        else{
            pause();
        }
    }
}

let slc=document.querySelector(".slidecontainer");
let o=0;
let slider = document.getElementById("myRange");
let out=slider.value;
let mt=document.querySelector(".sou");
song.volume = (out/100);

slider.oninput = function(){
    out= this.value;
    if(out<=1){
        mt.src="mut.png";
    }
    else if(out>=90)
    {
        mt.src="max.png";
    }
    else{
        mt.src="sou.png";
    }
    song.volume = (out/100);
}

function vol(){
    if(o==0)
    {
        slc.style.display="block";
        o=1;
    }
    else
    {
        slc.style.display="none";
        o=0;
    }
}

sl.oninput = function(){
    let op = song.duration/1000;
    ou = this.value;
    song.currentTime = ou*op;
}

function UpdateSlider(){
    sl.value = song.currentTime * 1000 / song.duration;
}

setInterval(UpdateSlider, 1);

const NBR_OF_BARS = 85;

const ctx = new AudioContext();

const audioSource = ctx.createMediaElementSource(song);

const analayzer = ctx.createAnalyser();

audioSource.connect(analayzer);
audioSource.connect(ctx.destination);

const frequencyData = new Uint8Array(analayzer.frequencyBinCount);
analayzer.getByteFrequencyData(frequencyData);
console.log("frequencyData", frequencyData);

const visualizerContainer = document.querySelector(".visualizer-container");

for( let i = 0; i < NBR_OF_BARS; i++ ) {
const bar = document.createElement("DIV");
bar.setAttribute("id", "bar" + i);
bar.setAttribute("class", "visualizer-container__bar");
visualizerContainer.appendChild(bar);
}

function renderFrame() 
{
    analayzer.getByteFrequencyData(frequencyData);
    for( let i = 0; i < NBR_OF_BARS; i++ ) 
        {
            const index = (i + 10)*2;
            const fd = frequencyData[index];
            const bar = document.querySelector("#bar" + i);
            if( !bar ) 
                {
                    continue;
                }
            const barHeight = Math.max(5, fd || 0);
            bar.style.height = barHeight + "px";
    }       
     window.requestAnimationFrame(renderFrame);
}
renderFrame();