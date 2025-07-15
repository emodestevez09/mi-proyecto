const boton = document.getElementById('mi-boton');
const parrafo = document.getElementById('texto-magico');


boton.addEventListener('click', () => {
    parrafo.textContent= 'Hola, Mundo con JavaScript!'
  textoMagico.textContent = '¡Magia Activada!';

 
  const form = document.getElementById('login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');

username.addEventListener('focus', () => {
  if (username.placeholder === 'Ingrese su documento') {
    username.placeholder = '';
  }
});

username.addEventListener('blur', () => {
  if (username.value === '') {
    username.placeholder = 'Ingrese su documento';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  
  if (username.value && password.value) {
    
    form.innerHTML = '<h2>Ingresado</h2>';
  } else {
    alert('Por favor, ingrese un nombre de usuario y una contraseña válidos.');
  }
});

  

}
