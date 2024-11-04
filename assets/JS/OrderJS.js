  // 获取弹出框
    var modal = document.getElementById("ObjInformationFrame");

    // 获取关闭按钮
    var span = document.getElementsByClassName("close")[0];

    // 为每个<li>元素添加点击事件
    var items = document.getElementsByClassName("course-item");
    for (var i = 0; i < items.length; i++) {
        items[i].onclick = function() {
            modal.style.display = "block";
        }
    }

    // 点击关闭按钮时关闭弹出框
    span.onclick = function() {
        modal.style.display = "none";
    }

    // 点击弹出框外部时关闭弹出框
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // 获取复选框元素
var checkYes = document.getElementById("CheckYes");
var checkNo = document.getElementById("CheckNo");

// 添加点击事件监听器
checkYes.addEventListener("change", function() {
    
    if (checkYes.checked) {
        checkNo.checked = false;
    }
});

checkNo.addEventListener("change", function() {
    
    if (checkNo.checked) {
        checkYes.checked = false;
    }
});
    