const servicios = [
  {
    img: "./images/m1.jpg",
    alt: "Masaje Relajante",
    duracion: "45 min.",
    intensidad: "Leve",
    precio: "$500",
    titulo: "Masaje Relajante",
    descripcion: "Disfruta de un masaje que te ayudará a liberar tensiones y relajarte por completo y genial."
  },
  {
    img: "./images/m2.jpg",
    alt: "Masaje Descontracturante",
    duracion: "45 min.",
    intensidad: "Intenso",
    precio: "$500",
    titulo: "Masaje Descontracturante",
    descripcion: "Alivia dolores musculares y mejora tu movilidad con nuestras técnicas especializadas."
  },
  {
    img: "./images/m3.jpg",
    alt: "Masaje Deportivo",
    duracion: "45 min.",
    intensidad: "Medio",
    precio: "$500",
    titulo: "Masaje Deportivo",
    descripcion: "Ideal para atletas y personas activas que buscan recuperación y prevención de lesiones."
  },
  {
    img: "./images/m4.jpg",
    alt: "Masaje Craneal",
    duracion: "45 min.",
    intensidad: "Leve",
    precio: "$650",
    titulo: "Masaje Craneal",
    descripcion: "Relaja la mente y mejora la circulación sanguínea con técnicas suaves en cabeza y cuello."
  },
  {
    img: "./images/m5.jpg",
    alt: "Masaje con Piedras Calientes",
    duracion: "45 min.",          
    intensidad: "Medio",
    precio: "$750",
    titulo: "Masaje con Piedras Calientes",
    descripcion: "Combina el calor de las piedras con técnicas de masaje para una experiencia profundamente relajante."
  },
  {
    img: "./images/m6.jpg",
    alt: "Reflexología Podal",
    duracion: "45 min.",
    intensidad: "Leve",
    precio: "$600",
    titulo: "Reflexología Podal",
    descripcion: "Estimula puntos específicos en los pies para mejorar la salud y el bienestar general."
  }
];

const contenedor = document.querySelector(".servicios-container");

servicios.forEach(servicio => {
  const card = document.createElement("article");
  card.classList.add("servicio");

  card.innerHTML = `
    <div class="servicio-img">
        <img src="${servicio.img}" alt="${servicio.alt}">
    </div>

    <div class="servicio-icons">
        <div>
            <i class="fa-solid fa-clock"></i>
            <span class="precio-descuento">${servicio.duracion}</span>
        </div>
        <div>
            <i class="fa-solid fa-fire"></i>
            <span class="precio-descuento">${servicio.intensidad}</span>
        </div>
        <div>
            <i class="fa-solid fa-credit-card"></i>
            <span class="precio-descuento">${servicio.precio}</span>
        </div>
    </div>

    <h3>${servicio.titulo}</h3>
    <div class="servicio-text">
        <p>${servicio.descripcion}</p>
    </div>
    <div class="servicio-buttons">
        <a href="/reservar" class="servicio-btn">Reservar</a>
        <button class="servicio-btn ver-mas-btn">Ver más</button>
    </div>
  `;

  contenedor.appendChild(card);
});

//------------------------------------------------------------------------------------Modal
// Abrir modal
document.querySelectorAll(".ver-mas-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById("popup").style.display = "block";
    });
});

// Cerrar modal
document.querySelector(".popup .close").addEventListener("click", () => {
    document.getElementById("popup").style.display = "none";
});

// Cerrar si hace click fuera del contenido
window.addEventListener("click", (e) => {
    if (e.target.id === "popup") {
        document.getElementById("popup").style.display = "none";
    }
});