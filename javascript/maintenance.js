(function() {
    const maintenanceUrl = "https://hassu-s.github.io/linklike/html/maintenance?redirected=true";
    const originalUrl = "https://hassu-s.github.io/linklike/";

    const startTime = new Date(2024, 6, 30, 17, 19); // 2024年7月30日17時19分
    const endTime = new Date(2024, 6, 30, 17, 20); // 2024年7月30日17時20分

    function checkTime() {
        const now = new Date();
        const urlParams = new URLSearchParams(window.location.search);
        const redirected = urlParams.get('redirected');

        if (now >= startTime && now <= endTime && !redirected) {
            window.location.href = maintenanceUrl;
        } else if (now > endTime) {
            if (redirected) {
                window.location.href = originalUrl;
            } else {
                window.location.href = originalUrl + "?redirected=true";
            }
        }
    }

    // 1秒ごとに時間をチェック
    setInterval(checkTime, 1000);
})();
