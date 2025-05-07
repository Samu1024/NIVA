  // ******** FUNCIÓN DE ANIMACIÓN PARA LA APARICIÓN DE TEXTO EN ESENCIA.HTML ********
  const contenedor = document.querySelector(".esencia-contenedor");
  const parrafos = document.querySelectorAll(".esencia-parrafo");

  const opciones = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const manejarInterseccion = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === contenedor) {
          entry.target.style.animation = "fadeInUp 1s ease-out forwards";
        }

        if (entry.target.classList.contains("esencia-parrafo")) {
          const index = Array.from(parrafos).indexOf(entry.target);
          entry.target.style.animation = `fadeInUp 1s ease-out ${index * 0.2}s forwards`;
        }

        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(manejarInterseccion, opciones);
  observer.observe(contenedor);

  parrafos.forEach((parrafo) => {
    observer.observe(parrafo);
  });