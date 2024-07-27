window.addEventListener('error', function(event) {
    if (event.target.tagName === 'IMG' || event.target.tagName === 'SCRIPT' || event.target.tagName === 'LINK') {
        window.location.href = '/404.html';
    }
}, true);

if (window.navigator.userAgent.indexOf('MSIE') !== -1 || !!document.documentMode) {
    // Internet Explorer detected
    window.location.href = 'IE.html';
}
