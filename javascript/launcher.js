document.addEventListener("DOMContentLoaded", function() {
    const launcherMenu = document.createElement('div');
    launcherMenu.id = 'launcher-menu';

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
            height: 55px;
            box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        #launcher-content {
            display: flex;
            max-width: 600px;
            width: 100%;
            justify-content: space-between;
            align-items: center;
        }
        #launcher-menu img {
            width: 45px;
            height: 45px;
        }
        .vertical-line {
            display: inline-block;
            width: 0.5px;
            height: 32px;
            background-color: #c3c3c3;
            vertical-align: middle;
        }
        #popup-menu {
            position: fixed;
            bottom: 65px;
            background-color: rgba(255, 255, 255, 0.90);
            padding: 10px;
            border-radius: 10px;
            display: none;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            width: 300px;
            height: 75%;
            z-index: 999;
            margin: auto;
            left: 0;
            right: 0;
            overflow-y: scroll;
        }
        #popup-menu button {
            display: block;
            width: 90%;
            margin: 5px auto;
        }
        #overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.05);
            display: none;
            z-index: 998;
        }
        @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
        }
        @keyframes slideDown {
            from { transform: translateY(0); }
            to { transform: translateY(100%); }
        }
        .menu-icon-line {
            position: absolute;
            width: 100%;
            height: 3px;
            background: linear-gradient(to right, #65defc, #938aff);
            transition: transform 0.4s;
            border-radius: 10px;
        }
        .menu-icon-line:nth-child(1) {
            top: 35%;
        }
        .menu-icon-line:nth-child(2) {
            top: 65%;
        }
        .menu-icon.open .menu-icon-line:nth-child(1) {
            transform: translate(0px, 4.5px) rotate(-45deg);
        }
        .menu-icon.open .menu-icon-line:nth-child(2) {
            transform: translate(0px, -4.5px) rotate(45deg);
        }
        .vertical-hr {
            border: none;
            border-left: 2px solid #00000000; /* 縦線の太さと色 */
            height: 0px; /* 縦線の高さ */
            width: 0px; /* 幅を0に設定 */
        }
        .labr {
            height: 62px;
        }
    `;
    document.head.append(style);

    launcherMenu.innerHTML = `
        <div id="launcher-content">
            <div style="flex: 1; display: flex; justify-content: center; align-items: center;">
                <a href="/linklike/html/contact" class="alink" id="back-button"><img src="https://hassu-s.github.io/linklike/image/button/mail.png" alt="戻る"></a>
            </div>
            <div class="vertical-line"><hr class="vertical-hr"></div>
            <div style="flex: 1; display: flex; justify-content: center; align-items: center;">
                <div id="popup-button" style="display: inline-block; cursor: pointer;">
                    <div id="menu-icon" class="menu-icon" style="width: 30px; height: 30px; position: relative;">
                        <div class="menu-icon-line"></div>
                        <div class="menu-icon-line"></div>
                    </div>
                </div>
            </div>
            <div class="vertical-line"><hr class="vertical-hr"></div>
            <div style="flex: 1; display: flex; justify-content: center; align-items: center;">
                <a href="/linklike/html/home" class="alink" id="link-button"><img src="https://hassu-s.github.io/linklike/image/button/home.png" alt="リンク"></a>
            </div>
        </div>
    `;

    document.body.append(launcherMenu);

    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    document.body.append(overlay);

    const popupMenu = document.createElement('div');
    popupMenu.id = 'popup-menu';
    popupMenu.innerHTML = `
        
        <div class="labr"><a href="https://hassu-s.github.io/linklike/html/contact.html"><button>リンクラカレンダー</button></a></div>
        <div class="labr"><a href="https://hassu-s.github.io/linklike/html/item.html"><button>アイテムリスト</button></a><br></div>
        <div class="labr"><a href="#" id="info1"><button>お知らせ</button></a><br></div>
    `;
    document.body.append(popupMenu);

    document.getElementById('popup-button').addEventListener('click', function() {
        const menuIcon = document.getElementById('menu-icon');
        if (popupMenu.style.display === 'none' || popupMenu.style.display === '') {
            popupMenu.style.display = 'block';
            popupMenu.style.animation = 'slideUp 0.2s forwards';
            overlay.style.display = 'block';
            menuIcon.classList.add('open');
        } else {
            popupMenu.style.animation = 'slideDown 0.2s forwards';
            overlay.style.display = 'none';
            menuIcon.classList.remove('open');
            setTimeout(() => {
                popupMenu.style.display = 'none';
            }, 200);
        }
    });

    document.addEventListener('click', function(event) {
        const isClickInside = launcherMenu.contains(event.target) || popupMenu.contains(event.target) || document.querySelector('.info-popup').contains(event.target) || document.querySelector('.overlay').contains(event.target);
        if (!isClickInside && popupMenu.style.display === 'block') {
            popupMenu.style.animation = 'slideDown 0.2s forwards';
            overlay.style.display = 'none';
            document.getElementById('menu-icon').classList.remove('open');
            setTimeout(() => {
                popupMenu.style.display = 'none';
            }, 200);
        }
    });
});
