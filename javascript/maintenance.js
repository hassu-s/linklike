(function() {
    // リダイレクト先のURL
    const maintenanceUrl = "https://hassu-s.github.io/linklike/html/maintenance";
    const originalUrl = "https://hassu-s.github.io/linklike/";

    // 現在の日時を取得
    const now = new Date();

    // リダイレクトする開始時間と終了時間を設定
    const startTime = new Date(2024, 6, 30, 17, 6); // 2024年7月30日17時6分
    const endTime = new Date(2024, 6, 30, 17, 8); // 2024年7月30日17時8分

    // 現在の時間が指定された時間帯に含まれているかをチェック
    if (now >= startTime && now <= endTime) {
        window.location.href = maintenanceUrl;
    } else if (now > endTime) {
        window.location.href = originalUrl;
    }
})();
