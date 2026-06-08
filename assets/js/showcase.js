/* ============================================
   Showcase — 实时渲染 Hero 中的"假桌面"
   屏幕如镜, 光从内生
   ============================================ */

(function () {
  'use strict';

  /* === Lunar 节气数据（精简版）=== */
  const SOLAR_TERMS_2026 = {
    '01-05': '小寒', '01-20': '大寒',
    '02-04': '立春', '02-19': '雨水',
    '03-05': '惊蛰', '03-20': '春分',
    '04-04': '清明', '04-20': '谷雨',
    '05-05': '立夏', '05-21': '小满',
    '06-05': '芒种', '06-21': '夏至',
    '07-07': '小暑', '07-22': '大暑',
    '08-07': '立秋', '08-23': '处暑',
    '09-07': '白露', '09-23': '秋分',
    '10-08': '寒露', '10-23': '霜降',
    '11-07': '立冬', '11-22': '小雪',
    '12-07': '大雪', '12-21': '冬至',
  };

  function pad(n) {
    return n < 10 ? '0' + n : '' + n;
  }

  function getWeekday(d) {
    return ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][d.getDay()];
  }

  function getTerm() {
    const d = new Date();
    const key = pad(d.getMonth() + 1) + '-' + pad(d.getDate());
    return SOLAR_TERMS_2026[key] || null;
  }

  /* === Hero Mock === */
  const mockEl = document.getElementById('hero-mock');
  if (mockEl) {
    const now = new Date();
    const time = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
    const date =
      now.getFullYear() + '年' + (now.getMonth() + 1) + '月' + now.getDate() + '日 · ' + getWeekday(now);
    const term = getTerm();
    const lunar = '农历五月初九' + (term ? ' · ' + term : '');

    mockEl.innerHTML =
      '<div class="mock-frame">' +
        '<div class="mock-toolbar">' +
          '<span class="mock-dot mock-dot-red"></span>' +
          '<span class="mock-dot mock-dot-amber"></span>' +
          '<span class="mock-dot mock-dot-green"></span>' +
        '</div>' +
        '<div class="mock-content">' +
          '<div>' +
            '<div class="mock-clock" id="mock-clock">' + time + '</div>' +
            '<div class="mock-date">' + date + '</div>' +
            '<div class="mock-lunar">' + lunar + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="mock-corner mock-corner-tl">' +
          '<span class="mock-weather-icon">☀️</span>' +
          '<div>' +
            '<div class="mock-temp">25°</div>' +
            '<div class="mock-city">北京 · 晴</div>' +
          '</div>' +
        '</div>' +
        '<div class="mock-corner mock-corner-br">' +
          '<div class="mock-character">H</div>' +
          '<div>' +
            '<div style="font-weight:500">Hiyori</div>' +
            '<div style="font-size:12px;color:var(--ink-300)">桌前待命</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    /* 实时更新 */
    const clockEl = document.getElementById('mock-clock');
    function tick() {
      const d = new Date();
      clockEl.textContent =
        pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
    }
    tick();
    setInterval(tick, 1000);
  }

  /* === Preview 页面 — 多张"假截图"实时更新 === */
  const previewClocks = document.querySelectorAll('[data-preview-clock]');
  if (previewClocks.length) {
    function tickAll() {
      const d = new Date();
      const t = pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
      previewClocks.forEach((el) => (el.textContent = t));
    }
    tickAll();
    setInterval(tickAll, 1000);
  }

  /* === Hero 标题渐入 === */
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    heroTitle.style.opacity = '0';
    heroTitle.style.transform = 'translateY(20px)';
    requestAnimationFrame(() => {
      heroTitle.style.transition = 'opacity 1s var(--ease-out), transform 1s var(--ease-out)';
      heroTitle.style.opacity = '1';
      heroTitle.style.transform = 'translateY(0)';
    });
  }
})();
