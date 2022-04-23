import styleString from "./css";

let styleContent = document.getElementById("styleContent");
let styleText = document.querySelector("#styleText");
// const btnPause = document.querySelector("#btnPause");
const btnPause = document.getElementById("btnPause");
// const btnSlow = document.querySelector("#btnSlow");
const btnSlow = document.getElementById("btnSlow");
// const btnNormal = document.querySelector("#btnNormal");
// const btnFast = document.querySelector("#btnFast");
const btnFast = document.getElementById("btnFast");

const pause = () => {
    btnPause.innerHTML = "播放";
    flag = 1; // 暂停
    clock && window.clearTimeout(clock); // 取消定时器
}
const play = () => {
    btnPause.innerHTML = "暂停";
    flag = 0;
    step();
}

const pauseAndPlay = () =>(flag === 0 ? pause : play).call(null);
const slow = () => speed = speed >= 10 ? speed + 10 : speed + 1;
const fast = () => speed = speed > 0 ? (speed > 10 ? speed - 10 : speed - 1) : 0;

btnPause.onclick = pauseAndPlay;
btnSlow.onclick = slow;
btnFast.onclick = fast;

let srtFinal = "";
let n= 0;
let flag = 0;
let speed = 0;
let clock;
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
    clock = setTimeout(step,speed * 10);
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

