window.addEventListener('error', function(event) {
    if (event.target.tagName === 'IMG' || event.target.tagName === 'SCRIPT' || event.target.tagName === 'LINK') {
        window.location.href = '/404.html';
    }
}, true);

document.addEventListener('DOMContentLoaded', function () {
    const restrictedExtensions = ['.js', '.css', '.txt', '.csv'];

    document.querySelectorAll('script, link, img').forEach((element) => {
        let resource = '';

        // 各タグから対象の URL を取得
        if (element.tagName === 'SCRIPT') {
            resource = element.src;
        } else if (element.tagName === 'LINK') {
            resource = element.href;
        } else if (element.tagName === 'IMG') {
            resource = element.src;
        }

        // URLが指定された拡張子に該当する場合
        if (resource && restrictedExtensions.some(ext => resource.endsWith(ext))) {
            console.warn(`Blocked access to: ${resource}`);
            window.location.href = '/403.html';
        }
    });
});
