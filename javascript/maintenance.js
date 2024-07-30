(function() {
    var maintenanceStart = new Date('2024-07-30T16:58:00+09:00'); // 日本時間で設定
    var maintenanceEnd = new Date('2024-07-30T17:00:00+09:00'); // 日本時間で設定
    var currentTime = new Date();
    var isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

    if (!isLocal) {
        if (window.location.pathname === '../linklike/html/maintenance.html') {
            if (currentTime < maintenanceStart || currentTime > maintenanceEnd) {
                window.location.href = '../404.html';
            }
        }
    }
})();
