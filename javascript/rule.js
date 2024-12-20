// 右クリックを禁止
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// 文字選択を禁止
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

// 画像のドラッグを禁止
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
});

// 長押しメニューの表示を禁止（タッチデバイス向け）
document.addEventListener('touchstart', function(e) {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'A') {
        e.preventDefault();
    }
}, { passive: false });

// サイトの拡大を禁止
document.addEventListener('wheel', function(e) {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });

// リンクの判定
document.addEventListener("DOMContentLoaded", function() {
    var url = window.location.href;
    var lowerCaseUrl = url.toLowerCase();
    var isLocalhost = url.includes("localhost") || url.includes("127.0.0.1");
    var isFileProtocol = url.startsWith("file://");

    // URLに#や?が含まれている場合、それ以降の部分を保持
    var urlParts = url.split(/[#?]/);
    var lowerCaseBaseUrl = urlParts[0].toLowerCase();
    var lowerCaseUrl = lowerCaseBaseUrl;

    if (url.includes("#")) {
        lowerCaseUrl += "#" + url.split("#")[1];
    }
    if (url.includes("?")) {
        lowerCaseUrl += "?" + url.split("?")[1];
    }

    if (!isLocalhost && !isFileProtocol && url !== lowerCaseUrl) {
        // 現在のURLが小文字に変換されたURLと異なる場合のみリダイレクト
        window.location.replace(lowerCaseUrl);
    } else if (!isLocalhost && !isFileProtocol && url !== lowerCaseBaseUrl) {
        // 大文字が含まれる場合、強制的に小文字化
        window.history.replaceState(null, null, lowerCaseUrl);
    }
});
