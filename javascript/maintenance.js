(function() {
    const maintenanceUrl = "https://hassu-s.github.io/linklike/html/maintenance?redirected=true";
    const originalUrl = "https://hassu-s.github.io/linklike/";

    const startTime = new Date(2024, 6, 30, 17, 13); // 2024年7月30日17時13分
    const endTime = new Date(2024, 6, 30, 17, 14); // 2024年7月30日17時14分

    function checkTime() {
        const now = new Date();
        const urlParams = new URLSearchParams(window.location.search);
        const redirected = urlParams.get('redirected');

        if (now >= startTime && now <= endTime && !redirected) {
            window.location.href = maintenanceUrl;
        } else if (now > endTime && redirected) {
            window.location.href = originalUrl;
        }
    }

    // 1秒ごとに時間をチェック
    setInterval(checkTime, 1000);
})();
