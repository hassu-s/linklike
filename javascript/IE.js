if (window.location.pathname === '/IE.html') {
    if (window.navigator.userAgent.indexOf('MSIE') === -1 && !document.documentMode) {
        // Not Internet Explorer detected on IE.html page
        window.location.href = '404.html';
    }
}
