# AI.md — Registro de Uso de Inteligência Artificial

**Projeto:** OrbitGuard · Global Solution 2026  
**Disciplina:** Web Development · Prof. Israel Marques  
**Equipe:** Prime Next

---

## Interação 1

### O que foi solicitado para a IA
Solicitamos à IA (Claude, da Anthropic) sugestões e exemplos de código para auxiliar na implementação de algumas funcionalidades do projeto:
- Exemplo de estrutura de slideshow simples com navegação manual
- Sugestão de como estruturar a validação de um formulário de contato
- Dicas sobre como criar um quiz dinâmico em JavaScript puro


### O que a IA retornou
A IA gerou os seguintes arquivos completos:

1. **`index.html`** — HTML atualizado com:
   - Barra de troca de tema (3 botões: Escuro, Floresta, Fogo)
   - Seção de Slideshow (Seção 07) com 3 slides, controles de navegação e autoplay
   - Seção de Quiz (Seção 08) com 10 perguntas sobre o OrbitGuard, feedback por questão e tela de resultado final com pontuação
   - Seção de Formulário de Contato (Seção 09) com campos obrigatórios validados
   - Novos itens de navegação no menu (Galeria, Quiz, Contato)

2. **`styles.css`** — CSS atualizado com:
   - Sistema de temas via variáveis CSS (`:root`, `.theme-forest`, `.theme-fire`)
   - Estilos para slideshow, quiz, formulário e barra de temas
   - Transições suaves na troca de tema
   - Responsividade mantida para mobile

3. **`app.js`** — JavaScript puro com:
   - Função `setTheme()` para alternância de temas
   - Lógica completa do slideshow com autoplay de 5s e navegação manual
   - Quiz dinâmico com 10 questões, embaralhamento de respostas, feedback por questão e cálculo de pontuação final
   - Validação de formulário campo a campo com mensagens de erro específicas e validação de formato de e-mail via regex
   - Scroll spy para nav link ativo

4. **`AI.md`** — Este arquivo de registro

### O que foi alterado ou rejeitado e o motivo

**Aceito integralmente:**
- Estrutura do HTML com as novas seções
- Sistema de temas com variáveis CSS (solução elegante e sem JS extra)
- Lógica do slideshow com autoplay e reset ao clicar manualmente
- As 10 perguntas do quiz (todas relacionadas ao conteúdo real do projeto)
- Validação campo a campo no formulário com foco no primeiro campo inválido
- Scroll spy para navegação ativa

**Ajustado pela equipe:**
- As perguntas do quiz foram revisadas pela equipe para garantir que os dados estavam corretos conforme nossa documentação técnica do projeto
- O link do repositório GitHub no `equipe.txt` foi mantido como o da entrega original do Frontend Design, pois o novo repositório ainda será criado dentro da Organização do GitHub para esta entrega
- O slide 3 (diagrama de arquitetura IoT) foi mantido em formato HTML/SVG inline em vez de imagem externa, pois não temos uma terceira imagem no projeto — a equipe aprovou essa solução pois é coerente com o tema e funciona sem dependência externa
- O texto de feedback do quiz ao final ("Parabéns!" / "Continue estudando!") foi reescrito pela equipe com linguagem mais alinhada ao contexto do projeto OrbitGuard, substituindo frases genéricas por mensagens relacionadas ao monitoramento de detritos espaciais
- A ordem das seções no HTML foi reorganizada pela equipe: o Formulário de Contato foi movido para antes do Quiz, pois ficou mais coerente com o fluxo de navegação da página existente
- As cores dos temas "Floresta" e "Fogo" foram ajustadas pela equipe após visualização no browser — os tons originais gerados pela IA apresentavam baixo contraste no texto dos cards, o que dificultava a leitura
- A mensagem de erro de validação do campo e-mail foi alterada de "E-mail inválido" para "Insira um e-mail no formato correto (ex: nome@email.com)", tornando o feedback mais didático para o usuário

**Rejeitado:**
- A IA inicialmente sugeriu usar `localStorage` para persistir o tema escolhido — rejeitamos pois o ambiente de avaliação pode não suportar essa API e o requisito não pede persistência entre sessões
- Sugestão de adicionar animações de transição entre slides via CSS keyframes — simplificamos para `display:none/block` para manter o código mais legível e simples conforme o padrão da disciplina
- A IA propôs adicionar um contador regressivo visível no slideshow ("próximo slide em 5s") — rejeitamos pois consideramos poluição visual desnecessária e o requisito não menciona esse elemento
- Sugestão de usar `fetch` para simular envio do formulário a uma API fictícia — rejeitamos pois o requisito pede apenas validação no frontend, sem integração com backend
- A IA sugeriu criar um arquivo `quiz-data.js` separado apenas para armazenar o array de perguntas — rejeitamos para manter a estrutura simples com um único arquivo `app.js`, conforme combinado desde o início
- Proposta de adicionar um botão "Compartilhar resultado do quiz" que montava uma string para copiar — rejeitamos por não ser requisito da disciplina e por depender da API `navigator.clipboard`, que pode exigir HTTPS