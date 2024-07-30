(function() {
    var maintenanceStart = new Date('2024-07-30T16:47:00+09:00'); // 日本時間で設定
    var maintenanceEnd = new Date('2024-07-30T16:49:00+09:00'); // 日本時間で設定
    var currentTime = new Date();

    if (currentTime >= maintenanceStart && currentTime <= maintenanceEnd) {
        window.location.href = '../html/maintenance.html';
    } else {
        window.location.href = '../linklike/html/404.html';
    }
})();
