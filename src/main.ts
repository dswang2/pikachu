import styleString from "./css";

let styleContent = document.getElementById("styleContent");
let styleText = document.querySelector("#styleText");
const btnPause = document.querySelector("#btnPause");
const btnSlow = document.querySelector("#btnSlow");
const btnNormal = document.querySelector("#btnNormal");
const btnFast = document.querySelector("#btnFast");
btnPause.addEventListener('click',(e)=>{
    (flag === 0 ? pause : play).call(null);
})
function pause(){
    btnPause.innerHTML = "播放";
    flag = 1; // 暂停
}
function play(){
    btnPause.innerHTML = "暂停";
    flag = 0;
    step();
}
btnSlow.addEventListener('click',(e)=>{
    speed = 5;
})
btnNormal.addEventListener('click',(e)=>{
    speed = 2;
})
btnFast.addEventListener('click',(e)=>{
    speed = 0;
})

let srtFinal = "";
let n= 0;
let flag = 0;
let speed = 0;
function step(){
    srtFinal = srtFinal + trans(styleString[n]);
    styleText.innerHTML = srtFinal;
    styleContent.innerHTML = styleString.substring(0,n);
    window.scrollTo(0,99999); /*这是window的滚动条*/
    styleText.scroll(0,99999); /*这是div的滚动条*/
    n += 1;
    if(n >= styleString.length){
        srtFinal = "";
        n = 0;
        pause();
        return;
    }
    if(flag === 1){
        return;
    }
    setTimeout(()=>{
        step();
    },speed * 10);
}
function trans(ch){
    switch(ch){
        case '\n':
            return '<br>';
        case ' ':
            return '&nbsp;';
        default:
            return ch;
    }
}
step();

