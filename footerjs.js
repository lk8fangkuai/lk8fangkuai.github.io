fetch('/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
            
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
            }
    })
  .catch(() => {
    // 这里还是怕我写成石山代码，让AI给我了备用页脚的代码，我在此基础上做1了更改
    const year = new Date().getFullYear();
    document.getElementById('footer-placeholder').innerHTML = 
      `<footer>
         <p>
           <a href="/">🏠 主页</a>
           <a href="/twitter"><img border="0" src="/图片文件夹/缩略图/Twitter.ico" alt="Twitter" width="24" height="24"> 推文</a>
           <a href="/links">🔗 友情链接</a>
           <a href="/sns">🔗 SNS社媒</a>
           <a href="https://github.com/lk8fangkuai/lk8fangkuai.github.io"><img border="0" src="/图片文件夹/缩略图/GitHub.ico" alt="GitHub" width="24" height="24"> GitHub</a>
         </p>
         <p>
           Copyright © 2025 - ${year} 方块FK All Rights Reserved.
         </p>
         <p>
           Developed For My Fans
         </p>
       </footer>`;
  });
