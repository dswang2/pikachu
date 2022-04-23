const $4d16f358eedbf528$var$styleString = `\n/*鼻子*/\n.nose {\n    background-color: black;\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    left: 50%; /*鼻子居中的写法*/\n    transform: translateX(-50%); /*鼻子居中的写法*/\n    top: 140px;\n    border-radius: 20px/16px;\n    z-index: 1;\n}\n.nose::before{\n    content: ""; /*伪元素必须加content，否则看不见*/\n    position: absolute;\n    top: 8px;\n    left: -1px;\n    background-color: #ffe600;\n    width: 22px;\n    height: 12px;\n}\n.nose>.triangle {\n    border: 10px solid black;\n    border-color: black transparent transparent;\n    position: absolute;\n    top: 8px;\n    left: 0px;\n}\n/*鼻子的悬浮动画*/\n/*动画*/\n@keyframes wave {\n    0%{\n        transform: translateX(-50%) rotate(0deg); /*如果不加translateX，此前设置的偏移就会被覆盖掉*/\n    }\n    33%{\n        transform: translateX(-50%) rotate(5deg);\n    }\n    66%{\n        transform: translateX(-50%) rotate(-5deg);\n    }\n    100%{\n        transform: translateX(-50%) rotate(0deg);\n    }\n}\n/*启动动画*/\n.nose:hover{\n    transform-origin: center bottom; /*动画的中心点，左右是center，上下是bottom*/\n    animation: wave 300ms infinite linear;\n}\n/*画眼睛*/\n.eye{\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    top: 100px;\n    left: 50%;\n    margin-left: -32px;\n    border-radius: 50%;\n    background-color: black;\n}\n.eye.left{\n    transform: translateX(-100px);\n}\n.eye.right{\n    transform: translateX(100px);\n}\n.eye::before{\n    content: "";\n    display: block; /*伪元素默认是行内元素，只有设置成块级元素，宽度才有效*/\n    width: 32px;\n    height: 32px;\n    background-color: white;\n    position: relative;\n    border-radius: 50%;\n    top: 5px;\n    left: 6px;\n}\n/*画嘴巴-上嘴唇*/\n.month{\n    width: 210px;\n    height: 200px;\n    position: absolute;\n    top: 170px;\n    left: 50%;\n    overflow: hidden;\n    transform: translateX(-50%);\n}\n.month .up{\n    background-color:#ffe600 ;\n    position: relative;\n    top: -44px;\n}\n\n.month .up .lip{\n    background-color:#ffe600 ;\n    border: 3px solid black;\n    border-top-width: 0px;\n    border-top-color: #ffe600;\n    position: relative;\n    left: 50%;\n    margin-left: 50px;\n    width: 100px;\n    height: 30px;\n    z-index: 1;\n}\n\n.month .up .left{\n    border-right-width: 0px;\n        border-right-color: #ffe600;\n    border-radius: 0 0 0 50px;\n    transform: rotate(-15deg) translateX(-156px);\n}\n.month .up .right{\n    top: 24px;\n    border-left-width: 0px;\n    border-left-color: #ffe600;\n    border-radius: 0 0 50px 0px;\n    transform: rotate(15deg) translateX(-51px);\n}\n\n.month .up .hideLine {\n    background-color: #ffe600;\n    position: absolute;\n    left: 50%;\n    width: 100px;\n    height: 30px;\n    transform: translateX(-50%) translateY(-36px);\n    z-index: 3;\n}\n\n\n/*画嘴巴-下嘴唇*/\n.month .down{\n    width: 180px;\n    height: 150px;\n    position: absolute;\n    top: 0px;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.month .down .circle-out{\n    position: absolute;\n    width: 150px;\n    height: 1000px;\n    left: 50%;\n    bottom: 0;\n    background-color: #9b000a;\n    overflow: hidden;\n    transform: translateX(-50%);\n    border-radius: 80px/337px;\n    z-index: -1;\n}\n\n.month .down .circle-out .cirgle-in{\n    position: absolute;\n    width: 150px;\n    height: 1000px;\n    bottom: 100px;\n    left: 50%;\n    top: 880px;\n    transform: translateX(-50%);\n    border-radius: 100px;\n    background-color: #ff485f;\n}\n\n.face{\n    border: 1px solid black;\n    background-color: red;\n    position: absolute;\n    width: 88px;\n    height: 88px;\n    top: 200px;\n    left: 50%;\n    border-radius: 50%;\n    margin-left: -44px;\n}\n.face.right{\n    transform: translateX(150px);\n}\n.face.left{\n    transform: translateX(-150px);\n}\n.center{\n    position: absolute;\n    border: 1px solid red;\n    width: 0;\n    height: 100vh;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n}`;
var $4d16f358eedbf528$export$9099ad97b570f7c = $4d16f358eedbf528$var$styleString;


const $ca7b339a1b24dc80$var$player = {
    n: 0,
    strFinal: "",
    flag: 0,
    speed: 0,
    clock: undefined,
    init: ()=>{
        $ca7b339a1b24dc80$var$player.bindEvents();
        // player.step();
        $ca7b339a1b24dc80$var$player.pause();
    },
    ui: {
        styleContent: document.getElementById("styleContent"),
        styleText: document.querySelector("#styleText"),
        btnPause: document.getElementById("btnPause")
    },
    events: {
        "#btnPause": "pauseAndPlay",
        "#btnSlow": "slow",
        "#btnFast": "fast"
    },
    bindEvents: ()=>{
        for(let key in $ca7b339a1b24dc80$var$player.events)if ($ca7b339a1b24dc80$var$player.events.hasOwnProperty(key)) // @ts-ignore
        document.querySelector(key).onclick = $ca7b339a1b24dc80$var$player[$ca7b339a1b24dc80$var$player.events[key]];
    },
    pause: ()=>{
        $ca7b339a1b24dc80$var$player.ui.btnPause.innerHTML = "播放";
        $ca7b339a1b24dc80$var$player.flag = 1; // 暂停
        $ca7b339a1b24dc80$var$player.clock && window.clearTimeout($ca7b339a1b24dc80$var$player.clock); // 取消定时器
    },
    play: ()=>{
        $ca7b339a1b24dc80$var$player.ui.btnPause.innerHTML = "暂停";
        $ca7b339a1b24dc80$var$player.flag = 0;
        $ca7b339a1b24dc80$var$player.step();
    },
    pauseAndPlay: ()=>($ca7b339a1b24dc80$var$player.flag === 0 ? $ca7b339a1b24dc80$var$player.pause : $ca7b339a1b24dc80$var$player.play).call(null)
    ,
    slow: ()=>$ca7b339a1b24dc80$var$player.speed = $ca7b339a1b24dc80$var$player.speed >= 10 ? $ca7b339a1b24dc80$var$player.speed + 10 : $ca7b339a1b24dc80$var$player.speed + 1
    ,
    fast: ()=>$ca7b339a1b24dc80$var$player.speed = $ca7b339a1b24dc80$var$player.speed > 0 ? $ca7b339a1b24dc80$var$player.speed > 10 ? $ca7b339a1b24dc80$var$player.speed - 10 : $ca7b339a1b24dc80$var$player.speed - 1 : 0
    ,
    step: ()=>{
        $ca7b339a1b24dc80$var$player.strFinal = $ca7b339a1b24dc80$var$player.strFinal + $ca7b339a1b24dc80$var$player.trans($4d16f358eedbf528$export$9099ad97b570f7c[$ca7b339a1b24dc80$var$player.n]);
        $ca7b339a1b24dc80$var$player.ui.styleText.innerHTML = $ca7b339a1b24dc80$var$player.strFinal;
        $ca7b339a1b24dc80$var$player.ui.styleContent.innerHTML = $4d16f358eedbf528$export$9099ad97b570f7c.substring(0, $ca7b339a1b24dc80$var$player.n);
        window.scrollTo(0, 99999); /*这是window的滚动条*/ 
        $ca7b339a1b24dc80$var$player.ui.styleText.scroll(0, 99999); /*这是div的滚动条*/ 
        $ca7b339a1b24dc80$var$player.n += 1;
        if ($ca7b339a1b24dc80$var$player.n >= $4d16f358eedbf528$export$9099ad97b570f7c.length) {
            $ca7b339a1b24dc80$var$player.strFinal = "";
            $ca7b339a1b24dc80$var$player.n = 0;
            $ca7b339a1b24dc80$var$player.pause();
            return;
        }
        if ($ca7b339a1b24dc80$var$player.flag === 1) return;
        $ca7b339a1b24dc80$var$player.clock = setTimeout($ca7b339a1b24dc80$var$player.step, $ca7b339a1b24dc80$var$player.speed * 10);
    },
    trans: (ch)=>{
        switch(ch){
            case '\n':
                return '<br>';
            case ' ':
                return '&nbsp;';
            default:
                return ch;
        }
    }
};
$ca7b339a1b24dc80$var$player.init();


//# sourceMappingURL=index.5b3d510e.js.map
