/* ================================================
   M. ATO'ULLOH PORTFOLIO — main.js
   ================================================ */

/* ── STARFIELD ── */
(function () {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, stars = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function initStars(n) {
    stars = [];
    for (let i = 0; i < n; i++) {
      stars.push({
        x:     Math.random() * W,
        y:     Math.random() * H,
        r:     Math.random() * 1.2 + 0.1,
        a:     Math.random(),
        speed: Math.random() * 0.3 + 0.05,
        dir:   Math.random() > 0.5 ? 1 : -1,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const s of stars) {
      s.a += s.speed * 0.008 * s.dir;
      if (s.a > 1 || s.a < 0) s.dir *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(136, 180, 220, ${s.a * 0.7})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  resize();
  initStars(220);
  draw();

  window.addEventListener('resize', () => {
    resize();
    initStars(220);
  });
})();


/* ── SCROLL REVEAL ── */
(function () {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  elements.forEach((el) => observer.observe(el));
})();


/* ── ACTIVE NAV HIGHLIGHT ── */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 140) current = s.id;
    });
    navLinks.forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  });
})();
