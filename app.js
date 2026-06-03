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


const dadosQuiz = [
  {
    questao: 'Qual foi o número aproximado de focos de incêndio registrados no Brasil em 2024?',
    opcoes: ['87 mil focos', '137 mil focos', '237 mil focos', '400 mil focos'],
    correta: 2,
    explicacao: 'Em 2024 foram registrados aproximadamente 237 mil focos de queimadas no Brasil, um número alarmante que demonstra a urgência de soluções como o OrbitGuard.'
  },
  {
    questao: 'Qual é o tempo máximo de resposta que o OrbitGuard se propõe a atingir entre a ignição e o despacho da brigada?',
    opcoes: ['15 segundos', '90 segundos', '5 minutos', '30 minutos'],
    correta: 1,
    explicacao: 'O OrbitGuard tem como objetivo reduzir o tempo de resposta para menos de 90 segundos — um décimo do tempo atual, que pode chegar a 4 horas.'
  },
  {
    questao: 'Qual microcontrolador é utilizado nas estações de borda IoT do OrbitGuard?',
    opcoes: ['Arduino Mega', 'Raspberry Pi 4', 'ESP32', 'STM32'],
    correta: 2,
    explicacao: 'O ESP32 é utilizado por seu baixo custo, conectividade Wi-Fi/Bluetooth integrada e capacidade de operar em ambientes remotos com energia solar.'
  },
  {
    questao: 'Qual protocolo de mensageria é usado para comunicação em tempo real entre os sensores e o backend?',
    opcoes: ['HTTP/REST', 'gRPC', 'WebRTC', 'MQTT'],
    correta: 3,
    explicacao: 'O MQTT (Message Queuing Telemetry Transport) é ideal para IoT por ser leve, eficiente em largura de banda e funcionar bem em conexões instáveis.'
  },
  {
    questao: 'Qual é o custo anual estimado de adoção do OrbitGuard por município?',
    opcoes: ['R$ 1 mil', 'R$ 12 mil', 'R$ 50 mil', 'R$ 200 mil'],
    correta: 1,
    explicacao: 'O custo de R$ 12 mil/ano por município inclui 10 estações de borda em campo, tornando a solução acessível para cidades pequenas e médias.'
  },
  {
    questao: 'Qual é a meta de falsos positivos do sistema OrbitGuard?',
    opcoes: ['Menor que 1%', 'Menor que 8%', 'Menor que 20%', 'Menor que 50%'],
    correta: 1,
    explicacao: 'A meta de falsos positivos menor que 8% é alcançada cruzando dados satelitais com confirmação local dos sensores IoT, garantindo alertas precisos.'
  },
  {
    questao: 'Qual satélite/sistema de dados da NASA é utilizado pelo OrbitGuard para detecção de focos?',
    opcoes: ['Hubble Space Telescope', 'FIRMS', 'ISS EOS', 'NOAA-20'],
    correta: 1,
    explicacao: 'O NASA FIRMS (Fire Information for Resource Management System) fornece dados de focos de calor quase em tempo real com cobertura global, utilizando o sensor MODIS.'
  },
  {
    questao: 'Em quanto tempo aproximadamente a área de um foco de queimada dobra sem contenção local?',
    opcoes: ['5 minutos', '23 minutos', '1 hora', '4 horas'],
    correta: 1,
    explicacao: 'Um foco de queimada sem contenção local dobra de área a cada 23 minutos, enquanto o satélite revisita a região apenas uma vez a cada 95 minutos.'
  },
  {
    questao: 'Qual framework de backend é utilizado na plataforma OrbitGuard?',
    opcoes: ['Django', 'Flask', 'FastAPI', 'Express.js'],
    correta: 2,
    explicacao: 'O FastAPI foi escolhido por ser assíncrono, de alta performance e por gerar documentação automática, facilitando a integração com outros sistemas.'
  },
  {
    questao: 'Em quantos municípios o OrbitGuard planeja estar presente nos primeiros 18 meses de operação?',
    opcoes: ['10 municípios', '25 municípios', '50 municípios', '100 municípios'],
    correta: 2,
    explicacao: 'A meta de 50 municípios em 18 meses prioriza cidades do Cerrado e Pantanal, regiões com maior vulnerabilidade a queimadas no Brasil.'
  }
];

let perguntaAtual = 0;
let pontuacao = 0;
let respondida = false;


function renderizarPergunta() {
  const dados = dadosQuiz[perguntaAtual];
  const letras = ['A', 'B', 'C', 'D'];

  document.getElementById('quizQuestion').textContent = dados.questao;
  document.getElementById('quizFeedback').hidden = true;
  document.getElementById('quizFeedback').textContent = '';
  document.getElementById('quizNext').hidden = true;
  respondida = false;

  const progresso = ((perguntaAtual + 1) / dadosQuiz.length) * 100;
  document.getElementById('progressFill').style.width = progresso + '%';
  document.getElementById('progressText').textContent =
    'Pergunta ' + (perguntaAtual + 1) + ' de ' + dadosQuiz.length;

  const containerOpcoes = document.getElementById('quizOptions');
  containerOpcoes.innerHTML = '';
  dados.opcoes.forEach(function(opcao, i) {
    const botao = document.createElement('button');
    botao.className = 'quiz-option';
    botao.innerHTML =
      '<span class="opt-letter">' + letras[i] + '</span>' + opcao;
    botao.onclick = function() { selecionarOpcao(i); };
    containerOpcoes.appendChild(botao);
  });
}

function selecionarOpcao(indice) {
  if (respondida) return;
  respondida = true;

  const dados = dadosQuiz[perguntaAtual];
  const opcoes = document.querySelectorAll('.quiz-option');
  const feedback = document.getElementById('quizFeedback');

  opcoes.forEach(function(op) { op.classList.add('disabled'); });

  if (indice === dados.correta) {
    opcoes[indice].classList.add('correct');
    feedback.textContent = '✓ Correto! ' + dados.explicacao;
    feedback.className = 'quiz-feedback correct';
    pontuacao++;
  } else {
    opcoes[indice].classList.add('wrong');
    opcoes[dados.correta].classList.add('correct');
    feedback.textContent = '✗ Incorreto. ' + dados.explicacao;
    feedback.className = 'quiz-feedback wrong';
  }

  feedback.hidden = false;

  const botaoProximo = document.getElementById('quizNext');
  if (perguntaAtual < dadosQuiz.length - 1) {
    botaoProximo.textContent = 'Próxima →';
  } else {
    botaoProximo.textContent = 'Ver resultado →';
  }
  botaoProximo.hidden = false;
}

function proximaPergunta() {
  perguntaAtual++;
  if (perguntaAtual < dadosQuiz.length) {
    renderizarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.getElementById('quizWrap').hidden = true;
  const resultEl = document.getElementById('quizResult');
  resultEl.hidden = false;

  const percentual = Math.round((pontuacao / dadosQuiz.length) * 100);

  let icone, titulo, mensagem;
  if (percentual >= 90) {
    icone = '🏆'; titulo = 'Excelente!';
    mensagem = 'Você domina o tema. Pronto para defender o OrbitGuard em qualquer apresentação!';
  } else if (percentual >= 70) {
    icone = '🌟'; titulo = 'Muito bom!';
    mensagem = 'Você entende bem a plataforma. Revise os conceitos que errou para atingir a excelência.';
  } else if (percentual >= 50) {
    icone = '📚'; titulo = 'Bom esforço!';
    mensagem = 'Conhecimento parcial. Vale reler as seções de tecnologia e objetivos para fixar melhor.';
  } else {
    icone = '🔄'; titulo = 'Continue estudando!';
    mensagem = 'Explore as seções da página e tente novamente. Você chegará lá!';
  }

  document.getElementById('resultIcon').textContent = icone;
  document.getElementById('resultTitle').textContent = titulo;
  document.getElementById('resultMsg').textContent = mensagem;
  document.getElementById('resultScore').textContent = pontuacao + ' / ' + dadosQuiz.length;
}

function reiniciarQuiz() {
  perguntaAtual = 0;
  pontuacao = 0;
  respondida = false;
  document.getElementById('quizResult').hidden = true;
  document.getElementById('quizWrap').hidden = false;
  renderizarPergunta();
}

renderizarPergunta();