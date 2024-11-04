//登录框调出与使用
function handleLogin() {
    // 隐藏登录框
    hideLoginBox();
    // 跳转到控制面板页面
    window.location.href = './Scene/ControlPanel.html';
}

function showLoginBox() {
    document.getElementById('loginBox').style.display = 'flex';
}

function hideLoginBox() {
    document.getElementById('loginBox').style.display = 'none';
}


