let isPopupOpen = false;

document.addEventListener("DOMContentLoaded", function() {
    const infoButton = document.getElementById('info1');
    const popup = document.createElement('div');
    popup.classList.add('info-popup');
    popup.style.display = 'none';

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.style.display = 'none';

    popup.innerHTML = `
        <div class="header">
            <h4 id="h4-2">お知らせ</h4>
        </div>
        <div class="allpop">
            <iframe id="infoz" src="https://hassu-s.github.io/info/info/linklike"></iframe>
            <div id="infox">
                <button id="close-popup">閉じる</button>
            </div>
        </div>
    `;

    document.body.append(overlay);
    document.body.append(popup);

    // ポップアップを表示する
    infoButton.addEventListener('click', function() {
        isPopupOpen = true;
        popup.style.display = 'block';
        overlay.style.display = 'block';
        popup.style.animation = 'expand 0.2s forwards';
    });

    // ポップアップを閉じる
    document.getElementById('close-popup').addEventListener('click', function() {
        popup.style.animation = 'shrink 0.2s forwards';
        setTimeout(() => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
            isPopupOpen = false;
        }, 200);
    });

    overlay.addEventListener('click', function() {
        popup.style.animation = 'shrink 0.2s forwards';
        setTimeout(() => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
            isPopupOpen = false;
        }, 200);
    });

    // スタイルの追加
    const style = document.createElement('style');
    style.textContent = `
        #infoz {
            width: 100%;
            height: calc(100% - 120px); /* 余白を調整 */
            border: none;
            border-radius: 5px;

        }
        #infox {
            position: relative;
            bottom: -10px;
        }
        .info-popup {
            position: fixed;
            margin: auto;
            left: 0;
            right: 0;
            top: 50px; /* 上下の余白を均等に */
            bottom: 50px;
            width: 90%;
            background-color: #fff;
            padding: 0px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            z-index: 1010;
            text-align: center;
            transform-origin: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .allpop {
            width: 100%;
            height: 100%;
            padding: 10px;
            box-sizing: border-box;

        }

        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1009;
        }

        @keyframes expand {
            from { transform: scale(0); }
            to { transform: scale(1); }
        }
        @keyframes shrink {
            from { transform: scale(1); }
            to { transform: scale(0); }
        }


        #h4-2 {
            font-size: 20px;
            text-align: center;
            font-weight: 600;
            color: #fff;
        }

        .header {
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(to right, #65defc, #938aff);
            padding: 10px;
            color: white;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            height: 30px;
        }
    `;
    document.head.append(style);
});