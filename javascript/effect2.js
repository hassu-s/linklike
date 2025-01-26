document.addEventListener("DOMContentLoaded", () => {
    // CSSスタイルの追加
    const style = document.createElement("style");
    style.textContent = `
        .touch-effect-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden; /* 画面外に出た要素を非表示 */
            z-index: 9999;
        }

        .touch-effect-jsa {
            position: absolute;
            pointer-events: none;
            border: 1.5px solid rgba(255, 255, 255, 0.7);
            border-radius: 50%;
            box-shadow: 0 0 4px rgb(255, 191, 17), 0 0 6px rgba(255, 190, 27, 0.3) inset;
            animation: fade-out-jsa 0.8s forwards;
            width: 16px;
            height: 16px;
        }

        .triangle-jsa {
            position: absolute;
            pointer-events: none;
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-bottom: 12px solid;
            opacity: 0.7;
            animation: triangle-animation-jsa 1.2s forwards;
        }

        @keyframes fade-out-jsa {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1.3); opacity: 0; }
        }

        @keyframes triangle-animation-jsa {
            0% {
                transform: translate(0, 0) rotate(0deg) scale(1);
                opacity: 0.7;
            }
            100% {
                transform: translate(var(--tx), var(--ty)) rotate(360deg) scale(0.4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // エフェクト用の固定コンテナを作成
    const effectContainer = document.createElement("div");
    effectContainer.className = "touch-effect-container";
    document.body.appendChild(effectContainer);

    // タッチエフェクトの生成
    function createTouchEffect(x, y) {
        const effect = document.createElement("div");
        effect.className = "touch-effect-jsa";
        effect.style.left = `${x}px`;
        effect.style.top = `${y}px`;
        effectContainer.appendChild(effect);
        setTimeout(() => effect.remove(), 800);
    }

    // ロングプレスエフェクトの処理
    let isSliding = false;
    let slideCooldown = false; // スライド専用のクールダウン

    function handleTouch(x, y, isSliding = false) {
        // スライド中はクールダウンを緩和
        if (isSliding && slideCooldown) return;
        if (!isSliding && slideCooldown) return;

        createTouchEffect(x, y);

        if (isSliding) {
            slideCooldown = true;
            setTimeout(() => slideCooldown = false, 50); // スライド中の生成間隔を短縮
        }
    }

    // イベントリスナー
    document.addEventListener("mousedown", (event) => {
        if (event.button !== 0) return;
        handleTouch(event.clientX, event.clientY);
    });

    document.addEventListener("mousemove", (event) => {
        if (!(event.buttons & 1)) return; // マウスボタンが押されている場合のみ
        isSliding = true;
        handleTouch(event.clientX, event.clientY, true);
    });

    document.addEventListener("mouseup", () => {
        isSliding = false;
    });

    document.addEventListener("touchstart", (event) => {
        const touch = event.touches[0];
        handleTouch(touch.clientX, touch.clientY);
    });

    document.addEventListener("touchmove", (event) => {
        const touch = event.touches[0];
        isSliding = true;
        handleTouch(touch.clientX, touch.clientY, true);
    });

    document.addEventListener("touchend", () => {
        isSliding = false;
    });
});
