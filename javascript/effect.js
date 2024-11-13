// CSSスタイルの追加
const style = document.createElement("style");
style.textContent = `
    body, html {
        margin: 0;
        padding: 0;
        overflow: hidden;
        width: 100vw;
        height: 100vh;
        background-color: transparent;
    }

    .touch-effect {
        position: absolute;
        pointer-events: none;
        border: 1.5px solid rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        box-shadow: 0 0 4px rgba(218, 165, 32, 0.5), 0 0 6px rgba(218, 165, 32, 0.3) inset;
        animation: fade-out 0.8s forwards;
        width: 16px;
        height: 16px;
    }

    .triangle {
        position: absolute;
        pointer-events: none;
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 12px solid;
        opacity: 0.7;
        animation: triangle-animation 1.2s forwards;
    }

    @keyframes fade-out {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(1.3); opacity: 0; }
    }

    @keyframes triangle-animation {
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

// タッチエフェクトの処理
let isLongPress = false;
let holdTimeout;
let slideTimeout;
let isSliding = false;
let cooldown = false;
let activeTouches = new Set();

function createTouchEffect(x, y) {
    const effect = document.createElement("div");
    effect.className = "touch-effect";
    effect.style.left = `${x - 8}px`;
    effect.style.top = `${y - 8}px`;
    document.body.appendChild(effect);
    setTimeout(() => effect.remove(), 800);
}

function createTriangle(x, y, isLongPress = false) {
    const triangle = document.createElement("div");
    triangle.className = "triangle";
    const colors = ["rgba(255, 182, 193, 0.5)", "rgba(135, 206, 250, 0.5)", "rgba(144, 238, 144, 0.5)", "rgba(255, 218, 185, 0.5)", "rgba(221, 160, 221, 0.5)"];
    triangle.style.borderBottomColor = colors[Math.floor(Math.random() * colors.length)];

    const angle = Math.random() * 360;
    const distance = (isLongPress ? 100 : 50) + Math.random() * 15;
    triangle.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
    triangle.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);
    triangle.style.left = `${x}px`;
    triangle.style.top = `${y}px`;

    document.body.appendChild(triangle);
    setTimeout(() => triangle.remove(), 1200);
}

function startLongPressEffect(x, y) {
    isLongPress = true;
    holdTimeout = setInterval(() => {
        createTriangle(x, y, true);
    }, 120);
}

function endLongPressEffect() {
    isLongPress = false;
    clearInterval(holdTimeout);
}

function handleTouch(x, y) {
    if (cooldown) return;
    cooldown = true;

    createTouchEffect(x, y);
    for (let i = 0; i < 5 + Math.floor(Math.random() * 4); i++) {
        createTriangle(x, y);
    }

    setTimeout(() => cooldown = false, 100);
}

document.addEventListener("mousedown", (event) => {
    if (activeTouches.size > 0) return;

    const x = event.clientX;
    const y = event.clientY;

    handleTouch(x, y);
    
    holdTimeout = setTimeout(() => {
        if (!isSliding) startLongPressEffect(x, y);
    }, 500);
});

document.addEventListener("mousemove", (event) => {
    if (event.buttons === 1) {
        isSliding = true;
        createTouchEffect(event.clientX, event.clientY);
        endLongPressEffect();

        clearTimeout(slideTimeout);
        slideTimeout = setTimeout(() => {
            isSliding = false;
        }, 150);
    }
});

document.addEventListener("mouseup", () => {
    endLongPressEffect();
    isSliding = false;
});

document.addEventListener("touchstart", (event) => {
    if (activeTouches.size >= 1) return;
    
    const touch = event.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;
    
    activeTouches.add(touch.identifier);
    handleTouch(x, y);

    holdTimeout = setTimeout(() => {
        if (!isSliding) startLongPressEffect(x, y);
    }, 500);
});

document.addEventListener("touchmove", (event) => {
    const touch = event.touches[0];
    if (!activeTouches.has(touch.identifier)) return;

    isSliding = true;
    endLongPressEffect();
    createTouchEffect(touch.clientX, touch.clientY);

    clearTimeout(slideTimeout);
    slideTimeout = setTimeout(() => {
        isSliding = false;
    }, 150);
});

document.addEventListener("touchend", (event) => {
    const touch = event.changedTouches[0];
    activeTouches.delete(touch.identifier);
    endLongPressEffect();
    isSliding = false;
});
