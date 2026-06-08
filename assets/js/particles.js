/* ============================================
   灵镜光感 — 粒子背景
   鼠标交互 + 缓慢飘动
   ============================================ */

(function () {
  'use strict';

  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  let width = 0;
  let height = 0;
  let particles = [];
  let mouse = { x: -9999, y: -9999, radius: 180 };
  let raf = 0;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  // 颜色取自灵境UI 调色板
  const palette = [
    'rgba(94, 234, 212, 0.7)',   // jade
    'rgba(96, 165, 250, 0.7)',   // azure
    'rgba(167, 139, 250, 0.6)',  // violet
    'rgba(251, 191, 36, 0.5)',   // gold
  ];

  function resize() {
    width = canvas.width = window.innerWidth * window.devicePixelRatio;
    height = canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    initParticles();
  }

  function initParticles() {
    const count = isMobile ? 40 : 80;
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.6 + 0.4,
        c: palette[Math.floor(Math.random() * palette.length)],
        a: Math.random() * 0.5 + 0.3,
      });
    }
  }

  function step() {
    if (reduced) {
      drawStatic();
      return;
    }
    const w = window.innerWidth;
    const h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      // 鼠标排斥
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius && dist > 0) {
        const force = (mouse.radius - dist) / mouse.radius;
        p.x += (dx / dist) * force * 2;
        p.y += (dy / dist) * force * 2;
      }

      // 边界
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      // 粒子
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c.replace(/[\d.]+\)$/, p.a + ')');
      ctx.fill();

      // 连线 — 同色相邻
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        if (p.c !== q.c) continue;
        const ddx = p.x - q.x;
        const ddy = p.y - q.y;
        const d2 = ddx * ddx + ddy * ddy;
        if (d2 < 12000) {
          const op = (1 - d2 / 12000) * 0.15;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = p.c.replace(/[\d.]+\)$/, op + ')');
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    raf = requestAnimationFrame(step);
  }

  function drawStatic() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c.replace(/[\d.]+\)$/, p.a + ')');
      ctx.fill();
    }
  }

  // 事件
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  window.addEventListener('resize', () => {
    cancelAnimationFrame(raf);
    resize();
    if (!reduced) step();
  });

  resize();
  if (reduced) drawStatic();
  else step();
})();
