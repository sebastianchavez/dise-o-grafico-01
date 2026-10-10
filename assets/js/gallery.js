/* ============================================
   STUDIO CREATIVO - Galería (Filtros + Lightbox)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initGalleryFilters();
  initLightbox();
});

/* ============== FILTROS ============== */
function initGalleryFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');
  
  if (!filterButtons.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Marcar botón activo
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      items.forEach((item, idx) => {
        const category = item.dataset.category;
        const matches = filter === 'all' || category === filter;
        
        if (matches) {
          item.style.display = '';
          // Reactivar reveal
          setTimeout(() => item.classList.add('active'), idx * 50);
        } else {
          item.classList.remove('active');
          setTimeout(() => item.style.display = 'none', 300);
        }
      });
    });
  });
}

/* ============== LIGHTBOX ============== */
function initLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  
  if (!lightbox) return;
  
  const lightboxImg = lightbox.querySelector('img');
  const lightboxTitle = lightbox.querySelector('.lightbox-title');
  const lightboxDesc = lightbox.querySelector('.lightbox-desc');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-title');
      const desc = item.querySelector('.gallery-desc');
      
      if (img) lightboxImg.src = img.src;
      if (title) lightboxTitle.textContent = title.textContent;
      if (desc) lightboxDesc.textContent = desc.textContent;
      
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}