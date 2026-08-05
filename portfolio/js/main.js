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
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.2 + 0.1,
        a: Math.random(),
        speed: Math.random() * 0.3 + 0.05,
        dir: Math.random() > 0.5 ? 1 : -1,
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
  window.addEventListener('resize', () => { resize(); initStars(220); });
})();


/* ── SCROLL REVEAL ── */
(function () {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    }),
    { threshold: 0.1 }
  );
  elements.forEach((el) => observer.observe(el));
})();


/* ── ACTIVE NAV ── */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((s) => { if (window.scrollY >= s.offsetTop - 140) current = s.id; });
    navLinks.forEach((a) => { a.classList.toggle('active', a.getAttribute('href') === `#${current}`); });
  });
})();


/* ── PDF MODAL ── */
(function () {
  const overlay  = document.getElementById('pdfModal');
  const frame    = document.getElementById('pdfModalFrame');
  const title    = document.getElementById('pdfModalTitle');
  const dlBtn    = document.getElementById('pdfModalDownload');
  const closeBtn = document.getElementById('pdfModalClose');

  if (!overlay) return;

  function openModal(pdfSrc, pdfTitle, pdfFilename) {
    // Set iframe src — append #toolbar=1&view=FitH for better browser PDF viewer
    frame.src = pdfSrc + '#toolbar=1&view=FitH&zoom=page-fit';
    title.textContent = '// ' + pdfTitle;
    dlBtn.href = pdfSrc;
    dlBtn.setAttribute('download', pdfFilename);
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    // Delay clearing src so the close animation plays first
    setTimeout(() => { frame.src = ''; }, 300);
  }

  // Trigger: click on cert cards
  document.querySelectorAll('.cert-card[data-pdf]').forEach((card) => {
    card.addEventListener('click', () => {
      const pdf      = card.getAttribute('data-pdf');
      const t        = card.getAttribute('data-title');
      const filename = card.getAttribute('data-filename');
      openModal(pdf, t, filename);
    });
  });

  // Close: X button
  closeBtn.addEventListener('click', closeModal);

  // Close: click outside modal box
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Close: Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });
})();
