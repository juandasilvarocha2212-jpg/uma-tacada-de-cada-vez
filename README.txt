UMA TACADA DE CADA VEZ — PROJETO ORGANIZADO

1. Abra a pasta "nossa-historia-organizada" no VS Code.
2. Use a extensão Live Server.
3. Clique com o botão direito em index.html.
4. Escolha "Open with Live Server".

ESTRUTURA

index.html                       -> tela principal
capitulos/capitulo1.html         -> Capítulo I / mesa
capitulos/capitulo2.html         -> Capítulo II / Brasil x Japão
css/global.css                   -> visual geral, estrelas e abertura
css/mesa.css                     -> mesa, bolas e caçapas
css/capitulo1.css                -> texto e foco do Capítulo I
css/capitulo2.css                -> visual do Brasil x Japão
js/utilidades.js                 -> funções matemáticas/animacões reutilizáveis
js/mesa.js                       -> física da sinuca
js/capitulos/capitulo1.js        -> história e lógica do Capítulo I
js/capitulos/capitulo2.js        -> história e lógica do Capítulo II
js/main.js                       -> carrega tudo e inicia o site
assets/imagens/brasil-japao.jpg  -> foto do primeiro rolê

IMPORTANTE
Como os capítulos HTML são carregados com fetch(), o projeto precisa rodar com Live Server.
