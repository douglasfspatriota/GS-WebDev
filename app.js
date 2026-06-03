let temaAtual = 'dark';

function definirTema(tema) {
  document.body.classList.remove('theme-dark', 'theme-forest', 'theme-fire');

  if (tema !== 'dark') {
    document.body.classList.add('theme-' + tema);
  }

  document.querySelectorAll('.theme-btn').forEach(function(botao) {
    botao.classList.toggle('active', botao.dataset.theme === tema);
  });

  temaAtual = tema;
}


let slideAtual = 0;
const totalSlides = 3;
let timerSlideshow = null;

function mostrarSlide(indice) {
  const slides = document.querySelectorAll('.slide');
  const pontos = document.querySelectorAll('.dot');

  if (indice >= totalSlides) indice = 0;
  if (indice < 0) indice = totalSlides - 1;

  slides.forEach(function(s) { s.classList.remove('active'); });
  pontos.forEach(function(p) { p.classList.remove('active'); });

  slides[indice].classList.add('active');
  pontos[indice].classList.add('active');
  slideAtual = indice;
}

function mudarSlide(direcao) {
  resetarTimer();
  mostrarSlide(slideAtual + direcao);
}

function irParaSlide(indice) {
  resetarTimer();
  mostrarSlide(indice);
}

function iniciarTimer() {
  timerSlideshow = setInterval(function() {
    mostrarSlide(slideAtual + 1);
  }, 5000);
}

function resetarTimer() {
  clearInterval(timerSlideshow);
  iniciarTimer();
}

iniciarTimer()