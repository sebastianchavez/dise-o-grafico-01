/* ============================================
   STUDIO CREATIVO - Lógica Principal
   ============================================ */

/* ============== IMAGE FALLBACK ============== */
// Si una imagen externa falla (404 o error de red), se reemplaza
// por un SVG con la paleta de marca. Así nunca quedan huecos vacíos.
function handleImageError(img) {
  if (img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied = '1';
  
  const w = img.clientWidth || img.naturalWidth || 600;
  const h = img.clientHeight || img.naturalHeight || 600;
  
  // SVG placeholder con gradiente de marca
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#7c3aed"/>
        <stop offset="50%" stop-color="#ec4899"/>
        <stop offset="100%" stop-color="#fbbf24"/>
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    <text x="50%" y="50%" font-family="Inter, sans-serif" font-size="${Math.max(24, w/12)}" font-weight="700" fill="white" text-anchor="middle" dominant-baseline="middle">Studio Creativo</text>
  </svg>`;
  
  img.src = 'data:image/svg+xml;base64,' + btoa(svg);
  img.alt = 'Studio Creativo';
}

// Aplicar fallback a todas las imágenes existentes y a las futuras
function initImageFallback() {
  document.querySelectorAll('img').forEach(img => {
    if (img.complete && img.naturalWidth === 0) {
      handleImageError(img);
    } else {
      img.addEventListener('error', () => handleImageError(img));
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initImageFallback();
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initScrollTop();
  initCurrentYear();
  initForms();
  initCounters();
  initTestimonialsSlider();
  initFaq();
});

/* ============== NAVBAR ============== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
}

/* ============== MOBILE MENU ============== */
function initMobileMenu() {
  const btn = document.querySelector('.hamburger');
  const menu = document.querySelector('.mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });

  // Cerrar al click en link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('active');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ============== SCROLL REVEAL ============== */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ============== SCROLL TOP BUTTON ============== */
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============== CURRENT YEAR ============== */
function initCurrentYear() {
  const el = document.getElementById('currentYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* ============== FORMS ============== */
function initForms() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Limpiar errores previos
    form.querySelectorAll('.form-input').forEach(input => input.classList.remove('error'));
    
    // Validación básica
    let valid = true;
    const required = form.querySelectorAll('[required]');
    required.forEach(input => {
      if (!input.value.trim()) {
        input.classList.add('error');
        valid = false;
      }
    });

    const email = form.querySelector('input[type="email"]');
    if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add('error');
      valid = false;
    }

    if (!valid) return;

    // Simular envío
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Enviando...';

    setTimeout(() => {
      btn.textContent = '✓ Mensaje enviado';
      btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      form.reset();

      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        btn.style.background = '';
      }, 3000);
    }, 1500);
  });
}

/* ============== COUNTERS ANIMADOS ============== */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.counter);
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    
    const suffix = el.textContent.replace(/[0-9]/g, '');
    el.textContent = current + suffix;
    
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target + suffix;
  }
  
  requestAnimationFrame(update);
}

/* ============== TESTIMONIALS SLIDER ============== */
function initTestimonialsSlider() {
  const slider = document.querySelector('.testimonials-slider');
  if (!slider) return;

  const track = slider.querySelector('.testimonials-track');
  const prev = slider.querySelector('.slider-prev');
  const next = slider.querySelector('.slider-next');
  const dots = slider.querySelectorAll('.slider-dot');
  
  if (!track) return;

  let index = 0;
  const cards = track.querySelectorAll('.testimonial-card');
  const total = cards.length;
  const perView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
  const max = Math.max(0, total - perView);

  function update() {
    track.style.transform = `translateX(-${index * (100 / perView)}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  if (next) next.addEventListener('click', () => { index = Math.min(index + 1, max); update(); });
  if (prev) prev.addEventListener('click', () => { index = Math.max(index - 1, 0); update(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { index = Math.min(i, max); update(); }));

  // Auto-play
  let auto = setInterval(() => {
    index = index >= max ? 0 : index + 1;
    update();
  }, 5000);

  slider.addEventListener('mouseenter', () => clearInterval(auto));
  slider.addEventListener('mouseleave', () => {
    auto = setInterval(() => {
      index = index >= max ? 0 : index + 1;
      update();
    }, 5000);
  });

  update();
}

/* ============== FAQ ACCORDION ============== */
function initFaq() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;
    
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Cerrar todos
      items.forEach(i => i.classList.remove('open'));
      // Abrir el actual si estaba cerrado
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ============== UTILIDADES ============== */
function getIcon(name) {
  const icons = {
    'palette': '🎨',
    'layers': '📐',
    'monitor': '💻',
    'printer': '🖨️',
    'share-2': '📱',
    'video': '🎬',
    'sparkles': '✨',
    'heart': '❤️',
    'users': '👥',
    'target': '🎯'
  };
  return icons[name] || '●';
}