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

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        // 日本の緯度経度範囲
        var japanLatMin = 24.396308;
        var japanLatMax = 45.551483;
        var japanLonMin = 122.93457;
        var japanLonMax = 153.986672;

        if (lat < japanLatMin || lat > japanLatMax || lon < japanLonMin || lon > japanLonMax) {
            window.location.href = "404.html";
        }
    });
} else {
    window.location.href = "404.html";
}
