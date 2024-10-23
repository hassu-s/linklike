document.addEventListener('DOMContentLoaded', function() {
    // 開始時間と終了時間を設定
    var startTime = new Date('2024-10-23T09:42:00+09:00');
    var endTime = new Date('2024-10-23T09:44:00+09:00');
    var currentTime = new Date();

    // ローカル環境では実行しない
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return;
    }

    // 時間チェック関数
    function checkTime() {
        currentTime = new Date();
        if (currentTime >= startTime && currentTime < endTime) {
            // 画面全体を指定のURLで埋め込む
            if (!document.getElementById('maintenance-frame')) {
                var iframe = document.createElement('iframe');
                iframe.id = 'maintenance-frame';
                iframe.src = 'https://hassu-s.github.io/linklike/inhtml/maintenance';
                iframe.style.position = 'fixed';
                iframe.style.top = '0';
                iframe.style.left = '0';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.border = 'none';
                iframe.style.zIndex = '9999';
                document.body.appendChild(iframe);
            }
        } else {
            // 表示を消す
            var iframe = document.getElementById('maintenance-frame');
            if (iframe) {
                document.body.removeChild(iframe);
            }
        }
    }

    // 初回チェック
    checkTime();

    // 1秒ごとに時間をチェック
    setInterval(checkTime, 1000);
});
