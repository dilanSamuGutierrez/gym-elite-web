// Configuración básica de ScrollReveal
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 200,
  reset: true
});

// Animaciones para el banner
sr.reveal('.banner__content', {
  origin: 'top',
  distance: '80px',
  duration: 1200,
  delay: 300,
  easing: 'ease-in-out'
});

// Animaciones para la sección de exploración
sr.reveal('.explore__header', {
  origin: 'left',
  distance: '60px',
  duration: 1000,
  delay: 200
});

sr.reveal('.explore__card', {
  interval: 200,
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 200
});

// Animaciones para la sección de clases
sr.reveal('.class__image', {
  origin: 'right',
  distance: '60px',
  duration: 1000,
  delay: 200
});

sr.reveal('.class__content', {
  origin: 'left',
  distance: '60px',
  duration: 1000,
  delay: 200
});

// Animaciones para la sección de unirse
sr.reveal('.join__container', {
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 200
});

sr.reveal('.join__card', {
  interval: 200,
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 200
});

// Animaciones para la sección de precios
sr.reveal('.price__container', {
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 200
});

sr.reveal('.price__card', {
  interval: 200,
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 200
});

// Animaciones para la sección de reseñas
sr.reveal('.review__container', {
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 200
});

// Animaciones para el footer
sr.reveal('.footer__container', {
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 200
});

sr.reveal('.footer__col', {
  interval: 200,
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 200
});