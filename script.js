function showMessage() {
    alert("You clicked！");
}

document.querySelectorAll('.page').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    // 移除所有 active 狀態
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    // 設置當前按鈕為 active
    e.target.classList.add('active');
    // 根據頁碼加載內容（需自行實現加載邏輯）
    const page = e.target.textContent;
    loadPageContent(page);
  });
});

function loadPageContent(page) {
  // 示例：通過 AJAX 獲取內容或顯示隱藏元素
  console.log(`加載第 ${page} 頁`);
}
