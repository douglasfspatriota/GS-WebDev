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