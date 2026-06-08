/* ============================================
   灵境UI — 导航 + 滚动揭示
   ============================================ */

(function () {
  'use strict';

  // 滚动时导航压实
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 20) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // 移动端菜单
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // 当前页高亮
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach((a) => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // 滚动揭示
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  // 哈希复制
  document.querySelectorAll('.hash-copy').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const target = btn.getAttribute('data-target');
      const el = document.querySelector(target);
      if (!el) return;
      try {
        await navigator.clipboard.writeText(el.textContent.trim());
        const orig = btn.textContent;
        btn.textContent = '已复制';
        setTimeout(() => (btn.textContent = orig), 1500);
      } catch (e) {
        btn.textContent = '复制失败';
      }
    });
  });
})();
