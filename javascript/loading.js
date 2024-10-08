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

// 通信エラー画面のHTML
const errorHTML = `
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

            <link href="/linklike/css/all1.css" rel="stylesheet" type="text/css">
            <link href="/linklike/css/message.css" rel="stylesheet" type="text/css">
            <script src="/linklike/javascript/rule.js"></script>

            <style>
                #button-content {
                    padding-top: 22px;
                }
            </style>

        </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h4 id="header">エラー</h4s>
                    </div>
                    <div class="content">
                        <div class="mbg">
                        <h1>通信エラー</h1>
                        <h4>お使いの端末のネットワークをご確認ください</h4>
                        <p>端末が弱ネットワークか、オフラインの可能性があります。端末のネットワークをご確認ください。<br>
                            ただし、インターネットに接続していてもローディングが60秒以上経過した場合はシステムが自動で更新を停止させます。<br>
                            もし、ある程度の通信環境がある中で通信エラーが表示される場合はお問い合わせください。<br>
                            （お問い合わせは、メールか、専用フォームからお問い合わせをお受けしております）
                        </p>
                        </div>
                        <div id="button-content">
                            <a href="/linklike/html/contact"><button>お問い合わせ</button></a>
                            <a href="/linklike/html/contact"><button>お問い合わせ</button></a>
                        </div>
                    </div>
                </div>
                <script>
                    document.getElementById("reload").addEventListener("click", function() {
                        location.reload();
                    });
                </script>
            </body>
        </html>'>
    </iframe>
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
    errorScreen.remove();
  }
}

// 通信エラー発生時の強制停止とCookieデータの優先表示
function handleConnectionError() {
  // ページの更新を強制的に停止
  window.stop();

  // 通信エラー画面を表示
  showErrorScreen();

  // Cookieに保存されているデータを優先的に表示
  const savedContent = getCookie('contentData');
  if (savedContent) {
    document.write(savedContent);
  }
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

// 60秒以上ローディング画面が表示されている場合は通信エラー画面を表示し、強制終了とCookieデータの優先表示を行う
setTimeout(() => {
  if (document.getElementById('loading-screen')) {
    hideLoadingScreen();
    handleConnectionError();
  }
}, 60000); // 60秒後に通信エラー画面を表示する

// ページ遷移時にローディング画面を表示
window.addEventListener('beforeunload', () => {
  showLoadingScreen();
});

// オフライン状態を監視
window.addEventListener('offline', () => {
  hideLoadingScreen();
  handleConnectionError();
});
window.addEventListener('online', hideErrorScreen);

// データをCookieに保存する関数
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Cookieからデータを取得する関数
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Cookieを削除する関数
function deleteCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}

// データのバージョンチェック
const currentVersion = '1.0.0'; // 現在のバージョン（適宜変更）
const savedVersion = getCookie('dataVersion');

if (savedVersion !== currentVersion) {
  deleteCookie('dataVersion');
  setCookie('dataVersion', currentVersion, 365);
  // 新しいデータをCookieに保存する処理を追加
}
