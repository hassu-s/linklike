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


// JavaScript code to lock screen orientation to portrait mode on Android and iOS only
if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('portrait').catch(function(error) {
            alert('縦画面で閲覧してください');
            console.error('Screen orientation lock failed:', error);
        });
    } else if (window.screen.lockOrientation) {
        window.screen.lockOrientation('portrait').catch(function(error) {
            alert('縦画面で閲覧してください');
            console.error('Screen orientation lock failed:', error);
        });
    } else if (window.screen.mozLockOrientation) {
        window.screen.mozLockOrientation('portrait').catch(function(error) {
            alert('縦画面で閲覧してください');
            console.error('Screen orientation lock failed:', error);
        });
    } else if (window.screen.msLockOrientation) {
        window.screen.msLockOrientation('portrait').catch(function(error) {
            alert('縦画面で閲覧してください');
            console.error('Screen orientation lock failed:', error);
        });
    } else {
        alert('縦画面で閲覧してください');
        console.warn('Screen orientation lock not supported on this device.');
    }
} else {
    console.log('This script is not applicable for desktop devices.');
}
