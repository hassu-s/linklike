document.addEventListener("DOMContentLoaded", function() {
    // ランチャーメニューの要素を作成
    const launcherMenu = document.createElement('div');
    launcherMenu.id = 'launcher-menu';

    // CSSをJavaScriptで追加
    const style = document.createElement('style');
    style.textContent = `
        #launcher-menu {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: white;
            color: black;
            text-align: center;
            padding: 5px 0; /* 高さを小さくする */
            height: 65px; /* 高さを65pxに設定 */
            box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2); /* 上側に薄めの影を追加 */
            border-top-left-radius: 10px; /* 左端の上側に丸みを追加 */
            border-top-right-radius: 10px; /* 右端の上側に丸みを追加 */
            display: flex;
            justify-content: center;
            align-items: center;
        }
        #launcher-menu img {
            margin: 0 15px;
            width: 50px; /* 画像の幅を調整 */
            height: 50px; /* 画像の高さを調整 */
        }
        #popup-menu {
            position: fixed;
            bottom: 60px; /* メニューバーより10px上に配置 */
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(255, 255, 255, 0.9); /* 背景を若干透明に */
            padding: 10px;
            border-radius: 10px;
            display: none; /* 初期状態では非表示 */
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 影を追加 */
            max-width: 430px;
            width: 98%;
            height: 500px; /* 高さを500pxに修正 */
            z-index: -1; /* ランチャーメニューより後ろに配置 */
        }
        #popup-menu button {
            margin: 5px;
            display: block; /* ボタンを縦に並べる */
        }
        @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
        }
        @keyframes slideDown {
            from { transform: translateY(0); }
            to { transform: translateY(100%); }
        }
        @keyframes menuButtonOpen {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(45deg); }
            100% { transform: rotate(45deg); }
        }
        @keyframes menuButtonClose {
            0% { transform: rotate(45deg); }
            50% { transform: rotate(0deg); }
            100% { transform: rotate(0deg); }
        }
        .vertical-line {
            display: inline-block;
            width: 1px;
            height: 90%; /* バーの高さに対し90% */
            background-color: gray;
            vertical-align: middle;
        }
        .menu-icon-line {
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #00B0F0;
            transition: transform 0.5s;
        }
        .menu-icon-line:nth-child(1) {
            top: 25%;
        }
        .menu-icon-line:nth-child(2) {
            top: 50%;
        }
        .menu-icon-line:nth-child(3) {
            top: 75%;
        }
        .menu-icon.open .menu-icon-line:nth-child(1) {
            transform: translateY(10px) rotate(45deg);
        }
        .menu-icon.open .menu-icon-line:nth-child(2) {
            opacity: 0;
        }
        .menu-icon.open .menu-icon-line:nth-child(3) {
            transform: translateY(-10px) rotate(-45deg);
        }
    `;
    document.head.append(style);

    // ランチャーメニューの内容を追加
    launcherMenu.innerHTML = `
        <img src="ABC.PNG" alt="戻る" id="back-button">
        <div class="vertical-line"></div>
        <div id="popup-button" style="display: inline-block; cursor: pointer;">
            <div id="menu-icon" class="menu-icon" style="width: 30px; height: 30px; position: relative;">
                <div class="menu-icon-line"></div>
                <div class="menu-icon-line"></div>
                <div class="menu-icon-line"></div>
            </div>
        </div>
        <div class="vertical-line"></div>
        <a href="https://hassu-s.github.io/linklike/" id="link-button"><img src="ABC.PNG" alt="リンク"></a>
    `;

    // ランチャーメニューをボディに追加
    document.body.append(launcherMenu);

    // ポップアップメニューの要素を作成
    const popupMenu = document.createElement('div');
    popupMenu.id = 'popup-menu';
    popupMenu.innerHTML = `
        <button>ボタン1</button>
        <button>ボタン2</button>
        <button>ボタン3</button>
        <button>ボタン4</button>
    `;
    document.body.append(popupMenu);

    // ボタンのイベントリスナーを追加
    document.getElementById('back-button').addEventListener('click', function() {
        window.history.back();
    });

    document.getElementById('popup-button').addEventListener('click', function() {
        const menuIcon = document.getElementById('menu-icon');
        if (popupMenu.style.display === 'none' || popupMenu.style.display === '') {
            popupMenu.style.display = 'block';
            popupMenu.style.animation = 'slideUp 0.5s forwards';
            menuIcon.classList.add('open');
        } else {
            popupMenu.style.animation = 'slideDown 0.5s forwards';
            menuIcon.classList.remove('open');
            setTimeout(() => {
                popupMenu.style.display = 'none';
            }, 500); // アニメーションの時間に合わせて非表示にする
        }
    });
});
