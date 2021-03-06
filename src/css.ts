const styleString = `
/*鼻子*/
.nose {
    background-color: black;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 50%; /*鼻子居中的写法*/
    transform: translateX(-50%); /*鼻子居中的写法*/
    top: 140px;
    border-radius: 20px/16px;
    z-index: 1;
}
.nose::before{
    content: ""; /*伪元素必须加content，否则看不见*/
    position: absolute;
    top: 8px;
    left: -1px;
    background-color: #ffe600;
    width: 22px;
    height: 12px;
}
.nose>.triangle {
    border: 10px solid black;
    border-color: black transparent transparent;
    position: absolute;
    top: 8px;
    left: 0px;
}
/*鼻子的悬浮动画*/
/*动画*/
@keyframes wave {
    0%{
        transform: translateX(-50%) rotate(0deg); /*如果不加translateX，此前设置的偏移就会被覆盖掉*/
    }
    33%{
        transform: translateX(-50%) rotate(5deg);
    }
    66%{
        transform: translateX(-50%) rotate(-5deg);
    }
    100%{
        transform: translateX(-50%) rotate(0deg);
    }
}
/*启动动画*/
.nose:hover{
    transform-origin: center bottom; /*动画的中心点，左右是center，上下是bottom*/
    animation: wave 300ms infinite linear;
}
/*画眼睛*/
.eye{
    width: 64px;
    height: 64px;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -32px;
    border-radius: 50%;
    background-color: black;
}
.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}
.eye::before{
    content: "";
    display: block; /*伪元素默认是行内元素，只有设置成块级元素，宽度才有效*/
    width: 32px;
    height: 32px;
    background-color: white;
    position: relative;
    border-radius: 50%;
    top: 5px;
    left: 6px;
}
/*画嘴巴-上嘴唇*/
.month{
    width: 210px;
    height: 200px;
    position: absolute;
    top: 170px;
    left: 50%;
    overflow: hidden;
    transform: translateX(-50%);
}
.month .up{
    background-color:#ffe600 ;
    position: relative;
    top: -44px;
}

.month .up .lip{
    background-color:#ffe600 ;
    border: 3px solid black;
    border-top-width: 0px;
    border-top-color: #ffe600;
    position: relative;
    left: 50%;
    margin-left: 50px;
    width: 100px;
    height: 30px;
    z-index: 1;
}

.month .up .left{
    border-right-width: 0px;
        border-right-color: #ffe600;
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-156px);
}
.month .up .right{
    top: 24px;
    border-left-width: 0px;
    border-left-color: #ffe600;
    border-radius: 0 0 50px 0px;
    transform: rotate(15deg) translateX(-51px);
}

.month .up .hideLine {
    background-color: #ffe600;
    position: absolute;
    left: 50%;
    width: 100px;
    height: 30px;
    transform: translateX(-50%) translateY(-36px);
    z-index: 3;
}


/*画嘴巴-下嘴唇*/
.month .down{
    width: 180px;
    height: 150px;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
}

.month .down .circle-out{
    position: absolute;
    width: 150px;
    height: 1000px;
    left: 50%;
    bottom: 0;
    background-color: #9b000a;
    overflow: hidden;
    transform: translateX(-50%);
    border-radius: 80px/337px;
    z-index: -1;
}

.month .down .circle-out .cirgle-in{
    position: absolute;
    width: 150px;
    height: 1000px;
    bottom: 100px;
    left: 50%;
    top: 880px;
    transform: translateX(-50%);
    border-radius: 100px;
    background-color: #ff485f;
}

.face{
    border: 1px solid black;
    background-color: red;
    position: absolute;
    width: 88px;
    height: 88px;
    top: 200px;
    left: 50%;
    border-radius: 50%;
    margin-left: -44px;
}
.face.right{
    transform: translateX(150px);
}
.face.left{
    transform: translateX(-150px);
}
.center{
    position: absolute;
    border: 1px solid red;
    width: 0;
    height: 100vh;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}`;

export default styleString;