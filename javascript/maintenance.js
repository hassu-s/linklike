(function() {
    const maintenanceUrl = "https://hassu-s.github.io/linklike/html/maintenance?redirected=true";
    const originalUrl = "https://hassu-s.github.io/linklike/?redirected=true";

    const startTime = new Date(2024, 6, 30, 17, 27); // 2024年7月30日17時6分
    const endTime = new Date(2024, 6, 30, 17, 28); // 2024年7月30日17時8分

    function checkTime() {
        const now = new Date();
        const urlParams = new URLSearchParams(window.location.search);
        const redirected = urlParams.get('redirected');

        if (now >= startTime && now <= endTime && !redirected) {
            window.location.href = maintenanceUrl;
        } else if (now > endTime && !redirected) {
            window.location.href = originalUrl;
        }
    }

    // 1秒ごとに時間をチェック
    setInterval(checkTime, 1000);
})();
