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




window.onload = function() {
    function checkHeight() {
        if (window.innerHeight < 500) {
            if (!document.getElementById('error-message')) {
                // エラーメッセージの要素を作成
                var errorMessage = document.createElement('div');
                errorMessage.id = 'error-message';
                errorMessage.style.position = 'fixed';
                errorMessage.style.top = '0';
                errorMessage.style.left = '0';
                errorMessage.style.width = '100%';
                errorMessage.style.height = '100%';
                errorMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                errorMessage.style.color = 'white';
                errorMessage.style.display = 'flex';
                errorMessage.style.flexDirection = 'column';
                errorMessage.style.justifyContent = 'center';
                errorMessage.style.alignItems = 'center';
                errorMessage.style.zIndex = '1000';
                errorMessage.innerHTML = `
                    <p>お使いの端末の高さでは、本サイトは正常に動作しません</p>
                    <p class="p2">こちらのパスワード入力欄はデベロッパー専用です。<br>お使いの端末の高さをある程度高くしてください</p>
                    <input type="password" id="password-input" placeholder="パスワードを入力"><br>
                    <button id="submit-button">送信</button>
                `;
                document.body.appendChild(errorMessage);

                // パスワード入力欄とボタンのイベントリスナーを設定
                document.getElementById('submit-button').addEventListener('click', function() {
                    var password = document.getElementById('password-input').value;
                    if (password === 'dev.hassu') {
                        document.body.removeChild(errorMessage);
                    } else {
                        alert('パスワードが間違っています');
                    }
                });
            }
        } else {
            var errorMessage = document.getElementById('error-message');
            if (errorMessage) {
                document.body.removeChild(errorMessage);
            }
        }
    }

    // 初回チェック
    checkHeight();

    // ウィンドウサイズ変更時にチェック
    window.onresize = checkHeight;
};



fetch('https://hassu-s.github.io')
  .then(response => {
    if (!response.ok) {
      window.location.href = "https://hassu-s.github.io/linklike";
    }
  })
  .catch(error => {
    window.location.href = "https://hassu-s.github.io/linklike";
  });
