window.addEventListener('error', function(event) {
    if (event.target.tagName === 'SCRIPT' && event.target.src.match(/\.js$/)) {
        window.location.href = '/403.html';
    }
    if (event.target.tagName === 'LINK' && event.target.href.match(/\.css$/)) {
        window.location.href = '/403.html';
    }
}, true);
