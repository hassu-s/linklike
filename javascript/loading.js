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
                    background-color: transparent; /* Ensure iframe background is transparent */
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
<div id="error-screen" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); display: flex; justify-content: center; align-items: center; z-index: 10000;">
    <style>
        .error-popup {
            background: white;
            width: 90%;
            max-width: 400px;
            padding: 20px;
            text-align: center;
            border-radius: 10px;
            animation: fadeInScale 0.3s ease-out;
        }
        .error-popup h1 {
            margin: 0 0 10px;
            font-size: 24px;
            color: red;
        }
        .error-popup p {
            font-size: 16px;
            margin: 10px 0;
        }
        .error-popup button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            background: red;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        @keyframes fadeInScale {
            from {
                transform: scale(0.5);
                opacity: 0;
            }
            to {
                transform: scale(1);
                opacity: 1;
            }
        }
        @keyframes fadeOutScale {
            from {
                transform: scale(1);
                opacity: 1;
            }
            to {
                transform: scale(0.5);
                opacity: 0;
            }
        }
    </style>
    <div class="error-popup">
        <h1>通信エラー</h1>
        <p>ネットワークをご確認ください</p>
        <button onclick="hideErrorScreen()">閉じる</button>
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
  }
}

// 通信エラー画面を非表示にする関数
function hideErrorScreen() {
  const errorScreen = document.getElementById('error-screen');
  if (errorScreen) {
    errorScreen.querySelector('.error-popup').style.animation = 'fadeOutScale 0.3s ease-in';
    setTimeout(() => errorScreen.remove(), 300);
  }
}

// オフライン状態をチェックする関数
function checkOfflineStatus() {
  if (!navigator.onLine) {
    hideLoadingScreen();
    showErrorScreen();
  }
}

// インターネット回復時にエラー画面を閉じる
window.addEventListener('online', hideErrorScreen);

// ページの読み込み時にローディング画面を表示
window.addEventListener('DOMContentLoaded', showLoadingScreen);

// ページの読み込みが完了したらローディング画面を非表示にする
window.addEventListener('load', hideLoadingScreen);

// 60秒以上ローディング画面が表示されている場合は通信エラー画面を表示
setTimeout(() => {
  if (document.getElementById('loading-screen')) {
    hideLoadingScreen();
    showErrorScreen();
  }
}, 60000);
