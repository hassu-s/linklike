window.addEventListener('error', function(event) {
    if (event.target.tagName === 'IMG' || event.target.tagName === 'SCRIPT' || event.target.tagName === 'LINK') {
        const url = event.target.src || event.target.href;
        if (url) {
            const extension = url.split('.').pop();
            if (extension === 'css' || extension === 'js' || extension === 'csv') {
                window.location.href = '/403.html';
                return;
            }
        }
        window.location.href = '/404.html';
    }
}, true);

window.addEventListener('error', function(event) {
    if (event.error && event.error.message.includes('414')) {
        window.location.href = '/414.html';
    }
});
