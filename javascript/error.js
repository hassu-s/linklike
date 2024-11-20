window.addEventListener('error', function(event) {
    if (event.target.tagName === 'IMG' || event.target.tagName === 'SCRIPT' || event.target.tagName === 'LINK') {
        window.location.href = '/404.html';
    }
}, true);

window.addEventListener('error', function(event) {
    const restrictedExtensions = ['.js', '.css', '.txt', '.csv'];
    
    if (event.target.tagName === 'IMG' || event.target.tagName === 'SCRIPT' || event.target.tagName === 'LINK') {
        const src = event.target.src || event.target.href;
        if (src && restrictedExtensions.some(ext => src.endsWith(ext))) {
            window.location.href = '/403.html';
        }
    }
}, true);
