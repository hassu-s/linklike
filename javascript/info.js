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
        <iframe src="https://hassu-s.github.io/info/info/linklike"></iframe>
        <div class="footer">
            <button id="close-popup" class="btn-clo">閉じる</button>
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
        iframe {
            width: 100%;
            height: calc(100% - 120px); /* 余白を調整 */
            border: none;
        }
        .info-popup {
            position: fixed;
            margin: auto;
            left: 0;
            right: 0;
            top: 40px; /* 上下の余白を均等に */
            bottom: 60px;
            width: 90%;
            height: calc(100% - 100px); /* 上下の余白を確保してポップアップ全体を調整 */
            background-color: rgba(255, 255, 255, 0.95);
            padding: 0px;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            z-index: 1010;
            text-align: center;
            transform-origin: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
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

        .btn-clo {
            padding: 5px 20px;
            background-color: #65defc;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .btn-clo:hover {
            background-color: #938aff;
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

        .footer {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f7f8f8;
            padding: 10px;
            color: white;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            height: 60px; /* フッターの高さを大きく調整 */
        }
    `;
    document.head.append(style);
});
