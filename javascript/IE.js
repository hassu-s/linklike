(function() {
    // IEブラウザを検出する関数
    function isIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ') > -1;
        var trident = ua.indexOf('Trident/') > -1;
        return msie || trident;
    }

    // 現在のページがIE.htmlかどうかを確認する関数
    function isIEPage() {
        return window.location.pathname.endsWith('IE.html');
    }

    // 現在のページが404.htmlかどうかを確認する関数
    function is404Page() {
        return window.location.pathname.endsWith('404.html');
    }

    // メインのロジック
    if (isIE()) {
        if (!isIEPage()) {
            window.location.href = 'IE.html';
        }
    } else {
        if (isIEPage()) {
            window.location.href = '404.html';
        }
    }
})();
