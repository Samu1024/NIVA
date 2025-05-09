document.addEventListener("DOMContentLoaded", function () {
  // ******** SELECCIÓN DE ELEMENTOS DEL CARRUSEL ********
  const images = document.querySelectorAll(".carrusel_imagen");
  const productInfos = document.querySelectorAll(".info_producto");
  const indicadores = document.querySelectorAll(".indicador");
  let currentIndex = 0;
  let interval;

  // ******** FUNCIÓN PARA MOSTRAR LA SIGUIENTE IMAGEN ********
  function showNextImage() {
    images[currentIndex].classList.remove("active");
    productInfos[currentIndex].classList.remove("active");
    indicadores[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + 1) % images.length;

    images[currentIndex].classList.add("active");
    productInfos[currentIndex].classList.add("active");
    indicadores[currentIndex].classList.add("active");
  }

  // ******** FUNCIÓN PARA INICIAR EL INTERVALO ********
  function startInterval() {
    interval = setInterval(showNextImage, 8000);
  }

  // ******** FUNCIÓN PARA REINICIAR EL INTERVALO ********
  function resetInterval() {
    clearInterval(interval);
    startInterval();
  }

  // ******** INICIAR EL INTERVALO ********
  startInterval();

  // ******** FUNCIÓN PARA CAMBIAR DE IMAGEN AL CLICAR EN UN INDICADOR ********
  indicadores.forEach((indicador, index) => {
    indicador.addEventListener("click", function () {
      images[currentIndex].classList.remove("active");
      productInfos[currentIndex].classList.remove("active");
      indicadores[currentIndex].classList.remove("active");

      currentIndex = index;

      images[currentIndex].classList.add("active");
      productInfos[currentIndex].classList.add("active");
      indicadores[currentIndex].classList.add("active");

      // ******** REINICIAR EL INTERVALO ********
      resetInterval();
    });
  });

  // ******** SELECCIÓN DEL ENCABEZADO ********
  const header = document.querySelector(".header_container");

  // ******** FUNCIÓN PARA CAMBIAR EL ESTILO DEL ENCABEZADO AL HACER SCROLL ********
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // ******** SELECCIÓN DE SECCIONES ********
  const sections = document.querySelectorAll(".historia_section");

  // ******** FUNCIÓN PARA MOSTRAR SECCIONES AL HACER SCROLL ********
  function showSectionsOnScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerHeight = window.innerHeight * 0.8;

      if (sectionTop < triggerHeight) {
        section.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", showSectionsOnScroll);
  showSectionsOnScroll();

  // ******** SELECCIÓN DE ARTÍCULOS ********
  const articulos = document.querySelectorAll(".articulo");

  // ******** FUNCIÓN PARA MOSTRAR ARTÍCULOS AL HACER SCROLL ********
  function showArticulosOnScroll() {
    articulos.forEach((articulo) => {
      const articuloTop = articulo.getBoundingClientRect().top;
      const triggerHeight = window.innerHeight * 0.8;

      if (articuloTop < triggerHeight) {
        articulo.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", showArticulosOnScroll);
  showArticulosOnScroll();

  // ******** FUNCIÓN DE ANIMACIÓN PARA LOS PRODUCTOS ********
  const productoContainer = document.querySelector(".producto_container");

  function showProductoContainer() {
    const productoTop = productoContainer.getBoundingClientRect().top;
    const triggerHeight = window.innerHeight * 0.8;

    if (productoTop < triggerHeight) {
      productoContainer.classList.add("show");
    }
  }

  window.addEventListener("scroll", showProductoContainer);
  showProductoContainer();
});


//***barra de busqueda */
const searchIcon = document.querySelector('.search_trigger');
  const searchBar = document.querySelector('.search_bar_container');
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  

  // Mostrar la barra al hacer clic en el icono de buscar
  searchIcon.addEventListener('click', (e) => {
    e.preventDefault();
    searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
    searchInput.focus();
  });

  // Buscar y redirigir
  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const query = searchInput.value.toLowerCase();

    // Puedes personalizar estos productos y páginas según tu sitio
    const productos = {
      'ferox': 'ferox.html',
      'excito': 'excito.html',
      'vita': 'vita.html',
      'productos':'plumiferos.html',
      'plumiferos':'plumiferos.html',
      'daily':'plumiferos.html',
      'sport':'plumiferos.html',
      'esencia':'esencia.html',
      'historias':'historias.html',

      
    
    };

    for (let clave in productos) {
      if (query.includes(clave)) {
        window.location.href = productos[clave];
        return;
      }
    }

    alert('Producto no encontrado.');
  });

  