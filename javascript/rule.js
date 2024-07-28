// 右クリックを禁止
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// 文字選択を禁止
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

// サイトの拡大を禁止
document.addEventListener('wheel', function(e) {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });

