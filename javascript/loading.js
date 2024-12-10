// ローディング画面のHTML
const loadingHTML = `
<div id="loading-screen" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255, 255, 255, 0.0); display: flex; justify-content: center; align-items: center; z-index: 9999;">
    <style>
        iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
    </style>
    <iframe srcdoc='
        <!DOCTYPE html>
        <html lang="ja">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap");

                body {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: transparent;
                }
                .circle-container {
                    position: relative;
                    width: 100px;
                    height: 100px;
                }
                .circle {
                    position: absolute;
                    width: 15px;
                    height: 15px;
                    background-color: white;
                    border: 2.2px solid #878787;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    animation: fade 1.6s infinite;
                }
                .circle:nth-child(1) { animation-delay: 0s; }
                .circle:nth-child(2) { animation-delay: 0.2s; }
                .circle:nth-child(3) { animation-delay: 0.4s; }
                .circle:nth-child(4) { animation-delay: 0.6s; }
                .circle:nth-child(5) { animation-delay: 0.8s; }
                .circle:nth-child(6) { animation-delay: 1s; }
                .circle:nth-child(7) { animation-delay: 1.2s; }
                .circle:nth-child(8) { animation-delay: 1.4s; }
                .star {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 23px;
                    height: 23px;
                    background: url("/linklike/image/button/star.webp") no-repeat center center;
                    background-size: contain;
                    transform: translate(-50%, -50%);
                }
                @keyframes fade {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .loading-text {
                    font-family: "Noto Sans JP", sans-serif;
                    font-weight: 900;
                    margin-top: 20px;
                    font-size: 21px;
                    color: white;
                    -webkit-text-stroke: #878787 1px;
                }
            </style>
        </head>
        <body>
            <div class="circle-container">
                <div class="circle" style="top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(0deg) translate(40px) rotate(0deg);"></div>
                <div class="circle" style="top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(45deg) translate(40px) rotate(-45deg);"></div>
                <div class="circle" style="top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(90deg) translate(40px) rotate(-90deg);"></div>
                <div class="circle" style="top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(135deg) translate(40px) rotate(-135deg);"></div>
                <div class="circle" style="top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(180deg) translate(40px) rotate(-180deg);"></div>
                <div class="circle" style="top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(225deg) translate(40px) rotate(-225deg);"></div>
                <div class="circle" style="top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(270deg) translate(40px) rotate(-270deg);"></div>
                <div class="circle" style="top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(315deg) translate(40px) rotate(-315deg);"></div>
                <div class="star"></div>
            </div>
            <div class="loading-text">Now Loading…</div>
        </body>
        </html>'>
    </iframe>
</div>
`;

// 通信エラー画面のHTML
const errorHTML = `
<div id="error-screen" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); display: flex; justify-content: center; align-items: center; z-index: 9999;">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
        * {
            font-family: 'Noto Sans JP' , sans-serif;
        }
        h1 {
            font-weight: 900;
            font-size: 32px;
        }
        #error-popup {
            position: relative;
            width: 90%;
            max-width: 400px;
            background: white;
            border-radius: 8px;
            text-align: center;
            animation: popup-show 0.3s ease-out;
            box-shadow: 0px 0px 3px 0px rgba(100, 100, 100);
        }
        @keyframes popup-show {
            0% { transform: scale(0); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
        @keyframes popup-hide {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(0); opacity: 0; }
        }
        #error-popup.hide {
            animation: popup-hide 0.3s ease-in;
        }
        .error-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(to right, #ff3f3f, #ff005d);
            padding: 10px;
            color: white;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            height: 25px;
            justify-content: center;
            align-items: center;
        }
        .conall {
            padding: 10px;
            background-color: #fff;
        }
        .infocon {
            background-color: #f7f8f8;
            border-radius: 5px;

            padding-top: 5px;
            padding-left: 5px;
            padding-right: 5px;
            padding-bottom: 15px;
        }
        #button-content-1 {
            padding-bottom: 10px;

        }
        .popupdata1 {
            font-family: 'Noto Sans JP' , sans-serif;
            font-size: 16px;
        }
        .error-button {
            background: linear-gradient(to right, #ff3f3f, #ff005d);
        }
        #err-h4 {
            font-size: 20px;
            text-align: center;
            font-weight: 600;
            color: #fff;
        }
    </style>
    <div id="error-popup">
        <div class="error-title"><h4 id="err-h4">通信エラー</h4></div>
        <div class="conall">
            <div class="infocon">
                <h1>通信エラー</h1>
                <div class="error-message"><p class="popupdata1">
                ネットワークが接続されていません。<br>接続を確認してください。<br>
                また、本サイトでは60秒以上ロードすると自動で通信エラーとなることがあります。<br>
                もしネットワークに接続しているのに、通信エラーが発生する場合はお問い合わせをお願いします。</p>
                </div>

            </div>
        </div>
        <div id="button-content-1">
            <button id="error-close-button" class="error-button">閉じる</button>

        </div>
    </div>
</div>
`;

// ローディング画面を表示する関数
function showLoadingScreen() {
    if (!document.getElementById('loading-screen')) {
        document.body.insertAdjacentHTML('beforeend', loadingHTML);
    }
}

// ローディング画面を非表示にする関数
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.remove();
    }
}

// 通信エラー画面を表示する関数
function showErrorScreen() {
    if (!document.getElementById('error-screen')) {
        document.body.insertAdjacentHTML('beforeend', errorHTML);
        document.getElementById('error-close-button').addEventListener('click', () => {
            hideErrorScreen();
        });
    }
}

// 通信エラー画面を非表示にする関数
function hideErrorScreen() {
    const errorPopup = document.getElementById('error-popup');
    if (errorPopup) {
        errorPopup.classList.add('hide');
        setTimeout(() => {
            const errorScreen = document.getElementById('error-screen');
            if (errorScreen) {
                errorScreen.remove();
            }
        }, 300);
    }
}

// 通信エラー発生時の強制停止とCookieデータの優先表示
function handleConnectionError() {
    window.stop();
    showErrorScreen();
}

// オフライン状態をチェックする関数
function checkOfflineStatus() {
    if (!navigator.onLine) {
        hideLoadingScreen();
        handleConnectionError();
    }
}

// ページの読み込み時にローディング画面を表示
window.addEventListener('DOMContentLoaded', () => {
    showLoadingScreen();
});

// ページの読み込みが完了したらローディング画面を非表示にする
window.addEventListener('load', () => {
    hideLoadingScreen();
});

// 60秒以上ローディング画面が表示されている場合は通信エラー画面を表示
setTimeout(() => {
    if (document.getElementById('loading-screen')) {
        hideLoadingScreen();
        handleConnectionError();
    }
}, 60000);

// オフライン状態を監視
window.addEventListener('offline', checkOfflineStatus);
