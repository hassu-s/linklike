document.addEventListener('DOMContentLoaded', function () {
    // HTML要素の作成
    const customMenu = document.createElement('div');
    customMenu.id = 'customMenu';
    customMenu.className = 'menu-rcl';
    customMenu.innerHTML = `
        <ul>
            <li id="refreshPage"><img id="imgcl" src="/linklike/image/button/update.png">ページを更新</li>
            <li><img id="imgcl" src="/linklike/image/button/titles.png"><a id="linkcl" href="/linklike/">ログイン画面</a></li>
            <li><img id="imgcl" src="/linklike/image/button/contact.png"><a id="linkcl" href="/linklike/html/contact">お問い合わせ</a></li>
            <li><img id="imgcl" src="/linklike/image/button/calendar.png"><a id="linkcl" href="/linklike/404">カレンダー</a></li>
            <li><img id="imgcl" src="/linklike/image/button/archive.png"><a id="linkcl" href="/linklike/404">アーカイブ</a></li>

        </ul>
    `;

    // CSSスタイルの追加
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

        * {
            outline: none;
            text-decoration: none;


        }
        .body-rcl {
            font-family: 'Noto Sans JP' , sans-serif;
        }
        #imgcl {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            margin-bottom: -4px;
            margin-left: -3px;
        }
        .menu-rcl {
            display: none;
            position: absolute;
            background-color: #2c3e50;
            border: 1px solid #34495e;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            z-index: 50000;
            border-radius: 5px;
            overflow: hidden;
        }

        .menu-rcl ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .menu-rcl li {
            padding: 8px 16px;
            cursor: pointer;
            color: #ecf0f1;
            transition: background-color 0.3s, color 0.3s;
        }
        #linkcl {
            color: #ecf0f1;
            transition: background-color 0.3s, color 0.3s;
        }

        .menu-rcl li:hover {
            background-color: #34495e;
            color: #ecf0f1;
        }
    `;

    document.head.appendChild(style);
    document.body.classList.add('body-rcl');
    document.body.appendChild(customMenu);

    // 右クリックメニューの表示と非表示
    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
        showCustomMenu(event.pageX, event.pageY);
    });

    document.addEventListener('click', function () {
        hideCustomMenu();
    });

    // 「ページを更新」機能の追加
    document.getElementById('refreshPage').addEventListener('click', function () {
        location.reload();
    });

    function showCustomMenu(x, y) {
        // 一時的に表示してサイズを計算
        customMenu.style.display = 'block';
        const menuWidth = customMenu.offsetWidth;
        const menuHeight = customMenu.offsetHeight;

        // 横方向の位置調整
        if (x + menuWidth > window.innerWidth) {
            x = x - menuWidth; // 左側に表示
            if (x < 0) x = 0; // 左端より外に出ないように
        }

        // 縦方向の位置調整
        if (y + menuHeight > window.innerHeight) {
            y = y - menuHeight; // 上側に表示
            if (y < 0) y = 0; // 上端より外に出ないように
        }

        customMenu.style.left = `${x}px`;
        customMenu.style.top = `${y}px`;
    }

    function hideCustomMenu() {
        customMenu.style.display = 'none';
    }
});
