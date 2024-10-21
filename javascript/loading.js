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
            <script src="/linklike/javascript/rule.js"></script>
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

// 通信エラー画面のHTML remains unchanged

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

// 通信エラー画面を表示する関数 and hideErrorScreen functions remain unchanged

// 通信エラー発生時の強制停止とCookieデータの優先表示 remains unchanged

// オフライン状態をチェックする関数 remains unchanged

// メールリンクの場合、ローディング画面を表示しない
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(event) {
    const href = link.getAttribute('href');
    if (href && href.startsWith('mailto:')) {
      hideLoadingScreen(); // メールリンクの場合はローディング画面を非表示に
      return;
    }
  });
});

// 60秒以上ローディング画面が表示されている場合は通信エラー画面を表示し、強制終了とCookieデータの優先表示を行う
setTimeout(() => {
  if (document.getElementById('loading-screen')) {
    hideLoadingScreen();
    handleConnectionError();
  }
}, 60000); // 60秒後に通信エラー画面を表示する

// オフライン状態を監視
window.addEventListener('offline', () => {
  hideLoadingScreen();
  handleConnectionError();
});
window.addEventListener('online', hideErrorScreen);

// その他のCookie関連機能 remains unchanged
