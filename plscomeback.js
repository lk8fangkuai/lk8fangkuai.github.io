(async function() {
  
  const DEFAULTS = {
    title: '方块官方网站',
    awayTitle: '🔔早く戻ってきて！',
    icon: '/favicon.ico',
    awayIcon: '/Σ(っ °Д °;)っ.png'
  };
  let config = DEFAULTS;
        
  try {
    const res = await fetch('/ifvisitorswitchwebpage.json?t=' + Date.now());
    if (res.ok) {
      const data = await res.json();
      config.title = data.title?.default || DEFAULTS.title;
      config.awayTitle = data.title?.away || DEFAULTS.awayTitle;
      config.icon = data.icon?.default || DEFAULTS.icon;
      config.awayIcon = data.icon?.away || DEFAULTS.awayIcon;
    } else {
      console.warn('config.json 加载失败，使用默认配置');
    }
    } catch (e) {
      console.warn('无法读取 config.json，使用默认配置', e);
    }

  let favicon = document.querySelector('link[rel="icon"]');
  if (!favicon) {                                  // 还是怕有人把上面icon那段删了干脆写了这个(*ˊ˘ˋ*)
    favicon = document.createElement('link');
    favicon.rel = 'icon';
    document.head.appendChild(favicon);
  }
        
  const originalTitle = document.title || config.title;
  const originalIcon = favicon.href || config.icon;
        
  function switchTab(isVisible) {
    if (isVisible) {
      document.title = originalTitle;
      favicon.href = originalIcon;
    } else {
      document.title = config.awayTitle;
      favicon.href = config.awayIcon;
    }
  }
        
  document.addEventListener('visibilitychange', function() {
      switchTab(document.visibilityState === 'visible');
  });
        
  window.addEventListener('beforeunload', function() {
    document.title = originalTitle;
    favicon.href = originalIcon;
  });

})();
