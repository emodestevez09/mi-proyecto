const boton = document.getElementById('mi-boton');
const parrafo = document.getElementById('texto-magico');


boton.addEventListener('click', () => {
    parrafo.textContent= 'Hola, Mundo con JavaScript!'
});

document.querySelectorAll('.contenedor-info')

const items = document.querySelectorAll('.contenedor-info');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

items.forEach(item => {
  item.style.opacity = 0;
  item.style.transform = "translateY(50px)";
  item.style.transition = "all 2s ease-out";
  observer.observe(item);
});



 
 

  


