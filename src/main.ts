import styleString from "./css";

const player = {
    n: 0,
    strFinal: "",
    flag: 0,
    speed: 0,
    clock: undefined,
    init: () => {
        player.bindEvents();
        player.step();
    },
    ui: {
        styleContent: document.getElementById("styleContent"),
        styleText: document.querySelector("#styleText"),
        btnPause: document.getElementById("btnPause"),
    },
    events: {
        "#btnPause": "pauseAndPlay",
        "#btnSlow": "slow",
        "#btnFast": "fast",
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                // @ts-ignore
                document.querySelector(key).onclick = player[player.events[key]];
            }
        }
    },
    pause: () => {
        player.ui.btnPause.innerHTML = "播放";
        player.flag = 1; // 暂停
        player.clock && window.clearTimeout(player.clock); // 取消定时器
    },
    play: () => {
        player.ui.btnPause.innerHTML = "暂停";
        player.flag = 0;
        player.step();
    },
    pauseAndPlay: () => (player.flag === 0 ? player.pause : player.play).call(null),
    slow: () => player.speed = player.speed >= 10 ? player.speed + 10 : player.speed + 1,
    fast: () => player.speed = player.speed > 0 ? (player.speed > 10 ? player.speed - 10 : player.speed - 1) : 0,
    step: () => {
        player.strFinal = player.strFinal + player.trans(styleString[player.n]);
        player.ui.styleText.innerHTML = player.strFinal;
        player.ui.styleContent.innerHTML = styleString.substring(0, player.n);
        window.scrollTo(0, 99999); /*这是window的滚动条*/
        player.ui.styleText.scroll(0, 99999); /*这是div的滚动条*/
        player.n += 1;
        if (player.n >= styleString.length) {
            player.strFinal = "";
            player.n = 0;
            player.pause();
            return;
        }
        if (player.flag === 1) {
            return;
        }
        player.clock = setTimeout(player.step, player.speed * 10);
    },
    trans: (ch) => {
        switch (ch) {
            case '\n':
                return '<br>';
            case ' ':
                return '&nbsp;';
            default:
                return ch;
        }
    }
}

player.init();

