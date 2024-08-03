document.addEventListener("DOMContentLoaded", function() {
    const infoButton = document.getElementById('info1');
    const popup = document.createElement('div');
    popup.id = 'info-popup';
    popup.style.display = 'none';
    popup.style.position = 'fixed';
    popup.style.bottom = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, 50%)';
    popup.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    popup.style.padding = '20px';
    popup.style.borderRadius = '10px';
    popup.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    popup.style.zIndex = '1001';
    popup.style.width = '300px';
    popup.style.height = '200px';
    popup.style.textAlign = 'center';

    popup.innerHTML = `
        <p>お知らせの内容をここに記述します。</p>
        <button id="close-popup">閉じる</button>
    `;

    document.body.append(popup);

    infoButton.addEventListener('click', function() {
        popup.style.display = 'block';
        popup.style.animation = 'slideUp 0.2s forwards';
    });

    document.getElementById('close-popup').addEventListener('click', function() {
        popup.style.animation = 'slideDown 0.2s forwards';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 200);
    });
});
