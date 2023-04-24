//femenino, masculino
const input = document.getElementById('open-2');
const texto = document.getElementById('texto');

input.addEventListener('click', () => {
  if (input.checked) {
    setTimeout(() => {
      texto.classList.remove('hidden');
      texto.classList.add('mostrar');
    }, 1350);
  }
});

const input2 = document.getElementById('close-2');
input2.addEventListener('click', () => {
  if (input2.checked) {
    texto.classList.remove('mostrar');
    texto.classList.add('hidden');
  }
});
//IMAGEN 1

const openBtn1 = document.getElementById('open-1');
const myImg1 = document.getElementById('myImg1');

openBtn1.addEventListener('click', () => {
  if (openBtn1.checked) {
    setTimeout(() => {
      myImg1.classList.remove('hidden');
    }, 1350);
  }
});

const closeBtn1 = document.getElementById('close-1');
closeBtn1.addEventListener('click', () => {
  if (closeBtn1.checked) {
    myImg1.classList.add('hidden');
  }
});
//IMAGEN 2

const openBtn2 = document.getElementById('open-2');
const myImg2 = document.getElementById('myImg2');

openBtn2.addEventListener('click', () => {
  if (openBtn2.checked) {
    setTimeout(() => {
      myImg2.classList.remove('hidden');
    }, 1350);
  }
});

const closeBtn2 = document.getElementById('close-2');
closeBtn2.addEventListener('click', () => {
  if (closeBtn2.checked) {
    myImg2.classList.add('hidden');
  }
});
//IMAGEN 2

const openBtn3 = document.getElementById('open-3');
const myImg3 = document.getElementById('myImg3');

openBtn3.addEventListener('click', () => {
  if (openBtn3.checked) {
    setTimeout(() => {
      myImg3.classList.remove('hidden');
    }, 1350);
  }
});

const closeBtn3 = document.getElementById('close-3');
closeBtn3.addEventListener('click', () => {
  if (closeBtn3.checked) {
    myImg3.classList.add('hidden');
  }
});