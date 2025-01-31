document.querySelector(".hamburger").addEventListener("click", function () {
  const menu = document.querySelector(".menu-container");
  const icon = document.querySelector(".hamburger i");

  menu.classList.toggle("active"); // Mostrar/ocultar menú

  // Alternar ícono entre "fa-bars" y "fa-times"
  if (menu.classList.contains("active")) {
    icon.classList.replace("fa-bars", "fa-times"); // Ícono de cerrar
  } else {
    icon.classList.replace("fa-times", "fa-bars"); // Ícono de menú
  }
});



// Array de reseñas
const reviews = [
    {
      text: "Este gimnasio me ha ayudado a alcanzar mis objetivos de fitness. Los entrenadores son muy atentos y siempre me guían en cada ejercicio. Lo mejor es la personalización de los entrenamientos, me sienten como si cada clase estuviera hecha a mi medida.",
      rating: 4.5,
      name: "Carlos Gómez",
      job: "Participante en clases de entrenamiento funcional",
      image: "../img/client-2.jpg"
    },
    {
      text: "El ambiente en este gimnasio es único. Desde que llegué, me siento motivado y parte de una gran comunidad. Los entrenadores siempre me apoyan y me animan a dar lo mejor de mí. Ya he notado mejoras increíbles en mi fuerza y resistencia.",
      rating: 5,
      name: "Ana López",
      job: "Asistente regular a sesiones de entrenamiento de alta intensidad",
      image: "../img/client-1.jpg"
    },
    {
      text: "Llevo algunos meses entrenando aquí y he notado un cambio tremendo en mi condición física. La variedad de clases y la calidad de los entrenadores hacen que cada día sea una nueva oportunidad para mejorar. ¡Lo recomiendo totalmente!",
      rating: 4,
      name: "Maria Rodríguez",
      job: "Practica yoga y pilates en el gimnasio",
      image: "../img/client-3.jpg"
    }
  ];
  
  let currentReviewIndex = 0;
  
  // Función para actualizar la reseña en pantalla con animación
  function updateReview() {
    const review = reviews[currentReviewIndex];
    
    // Añadir efecto de desvanecimiento
    const reviewContent = document.querySelector('.review__content');
    reviewContent.style.opacity = 0; // Ocultar temporalmente el contenido
  
    setTimeout(() => {
      // Cambiar el contenido después de un breve retraso
      document.getElementById("review-text").innerText = review.text;
      document.getElementById("member-name").innerText = review.name;
      document.getElementById("member-job").innerText = review.job;
      document.getElementById("member-image").src = review.image;
  
      const ratingContainer = document.getElementById("review-rating");
      ratingContainer.innerHTML = ""; // Limpiar los íconos previos
      for (let i = 0; i < Math.floor(review.rating); i++) {
        ratingContainer.innerHTML += '<span><i class="ri-star-fill"></i></span>';
      }
      if (review.rating % 1 !== 0) {
        ratingContainer.innerHTML += '<span><i class="ri-star-half-fill"></i></span>';
      }
  
      // Hacer que el contenido se desvanezca al aparecer
      reviewContent.style.opacity = 1;
    }, 500); // Esperar 0.5 segundos antes de cambiar el contenido
  }
  
  // Navegación entre las reseñas
  document.getElementById("prev-review").addEventListener("click", () => {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    updateReview();
  });
  
  document.getElementById("next-review").addEventListener("click", () => {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    updateReview();
  });
  
  // Inicializar la primera reseña
  updateReview();
  