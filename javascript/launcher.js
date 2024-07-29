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
            width: 100%;
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px 0;
        }
        #launcher-menu img {
            margin: 0 15px;
            width: 50px; /* 画像の幅を調整 */
            height: 50px; /* 画像の高さを調整 */
        }
    `;
    document.head.append(style);

    // ランチャーメニューの内容を追加
    launcherMenu.innerHTML = `
        <img src="ABC.PNG" alt="ランチャー1">
        <img src="ABC.PNG" alt="ランチャー2">
        <img src="ABC.PNG" alt="ランチャー3">
    `;

    // ランチャーメニューをボディに追加
    document.body.append(launcherMenu);
});
