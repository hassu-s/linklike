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
                <h4 id="h4-2">お知らせ</h4s>
        </div>
            <iframe src="https://hassu-s.github.io/info/info/linklike"></iframe>
        <button id="close-popup" class="btn-clo">閉じる</button>
    `;

    document.body.append(overlay);
    document.body.append(popup);

    infoButton.addEventListener('click', function() {
        popup.style.display = 'block';
        overlay.style.display = 'block';
        popup.style.animation = 'expand 0.2s forwards';
    });

    document.getElementById('close-popup').addEventListener('click', function() {
        popup.style.animation = 'shrink 0.2s forwards';
        setTimeout(() => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }, 200);
    });

    overlay.addEventListener('click', function() {
        popup.style.animation = 'shrink 0.2s forwards';
        setTimeout(() => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }, 200);
    });

    const style = document.createElement('style');
    style.textContent = `
        iframe {
            width: 100%;
            height: 78%;
            border: none;
        }
        .info-popup {
            position: fixed;
            margin: auto;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            width: 90%;
            height: 80%;
            background-color: rgba(255, 255, 255, 0.95);
            padding: 0px;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            z-index: 1010;
            text-align: center;
            transform-origin: center;
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
            position: absolute;
            bottom: 15px;
            margin: auto;
            left: 0;
            right: 0;
            height: 40px;
            padding: 1px;
        }

        #h4-2 {
            font-size: 20px;
            text-align: center;
            font-weight: 600;
            color: #fff;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(to right, #65defc, #938aff);
            padding: 10px;
            color: white;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            height: 25px;
            justify-content: center;
            align-items: center;
        }

    #header {
        text-align: center;
        font-weight: 600;
        color: #fff;
    }
    `;
    document.head.append(style);
});
