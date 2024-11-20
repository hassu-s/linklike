window.addEventListener('error', function(event) {
    if (event.target.tagName === 'IMG' || event.target.tagName === 'SCRIPT' || event.target.tagName === 'LINK') {
        window.location.href = '/404.html';
    }
}, true);

document.addEventListener('DOMContentLoaded', function () {
    // 必須の<meta>タグを定義
    const requiredMetaName = 'access-allowed'; // 必須のmetaタグの名前
    const requiredMeta = document.querySelector(`meta[name="${requiredMetaName}"]`);

    // <meta>タグが存在しない場合は403ページにリダイレクト
    if (!requiredMeta) {
        console.warn('Required <meta> tag is missing. Redirecting to /403.html');
        window.location.href = '/403.html';
    }
});

