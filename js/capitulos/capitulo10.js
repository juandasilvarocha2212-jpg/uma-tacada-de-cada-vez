import { esperar } from "../utilidades.js";


/* =====================================================
   CAPÍTULO X
   O QUE AINDA NÃO ACONTECEU
===================================================== */

export function iniciarCapitulo10(
    mesaApi,
    musicaApi
) {

    const { refs } = mesaApi;


    const capitulo10 =
        document.getElementById(
            "capitulo10"
        );


    const cap10Titulo =
        document.getElementById(
            "cap10Titulo"
        );


    const cap10Visual =
        document.getElementById(
            "cap10Visual"
        );


    const cap10Texto =
        document.getElementById(
            "cap10Texto"
        );


    const btnCap10 =
        document.getElementById(
            "btnCap10"
        );


    const numeroCapituloMesa =
        document.getElementById(
            "numeroCapituloMesa"
        );


    const tituloCapituloMesa =
        document.getElementById(
            "tituloCapituloMesa"
        );


    const fraseHistoria =
        document.getElementById(
            "fraseHistoria"
        );


    const instrucaoTacada =
        document.getElementById(
            "instrucaoTacada"
        );


    let etapa = 0;

    let animando = false;

    let ativoNaMesa = false;

    let finalExecutado = false;


    /* =====================================================
       TROCAR VISUAL
    ===================================================== */

    function trocarVisual(
        html,
        classe = ""
    ) {

        cap10Visual.className =
            "cap10-visual";


        cap10Visual.innerHTML =
            html;


        void cap10Visual.offsetWidth;


        cap10Visual.classList.add(
            "entrando"
        );


        if (
            classe
        ) {

            cap10Visual.classList.add(
                classe
            );

        }
    }


    /* =====================================================
       ATIVAR NA MESA
    ===================================================== */

    function ativar() {

        ativoNaMesa =
            true;


        finalExecutado =
            false;


        numeroCapituloMesa.textContent =
            "CAPÍTULO X";


        tituloCapituloMesa.innerHTML =
            "O que ainda<br>não aconteceu.";


        fraseHistoria.innerHTML = `

            Até aqui,
            eu te mostrei
            um pouco do que já vivemos.

            <br><br>

            Mas talvez a parte
            mais bonita dessa história...

            <br><br>

            <strong>
                ainda nem tenha acontecido.
            </strong>

        `;


        instrucaoTacada.textContent =
            "Toque na bola 10";


        instrucaoTacada.classList.add(
            "ativo"
        );


        refs.bola10.style.opacity =
            "1";


        refs.bola10.style.pointerEvents =
            "auto";


        refs.bola10.classList.add(
            "bola-proxima"
        );
    }


    /* =====================================================
       ABRIR CAPÍTULO
    ===================================================== */

    async function abrir() {

        if (
            !ativoNaMesa ||
            animando
        ) {

            return;
        }


        animando =
            true;


        ativoNaMesa =
            false;


        instrucaoTacada.classList.remove(
            "ativo"
        );


        refs.bola10.classList.remove(
            "bola-proxima"
        );


        refs.bola10.classList.add(
            "virando-memoria-10"
        );


        await esperar(
            560
        );


        refs.sinuca.classList.add(
            "saindo-capitulo"
        );


        await esperar(
            520
        );


        refs.sinuca.classList.remove(
            "ativo",
            "saindo-capitulo"
        );


        refs.sinuca.setAttribute(
            "aria-hidden",
            "true"
        );


        capitulo10.classList.add(
            "ativo"
        );


        capitulo10.setAttribute(
            "aria-hidden",
            "false"
        );


        etapa =
            0;


        mostrarEtapa(
            etapa
        );


        await esperar(
            520
        );


        animando =
            false;
    }


    /* =====================================================
       ETAPAS
    ===================================================== */

    function mostrarEtapa(
        n
    ) {

        btnCap10.disabled =
            false;


        btnCap10.classList.remove(
            "oculto"
        );


        btnCap10.textContent =
            "Continuar";


        capitulo10.classList.remove(
            "pre-final",
            "quase-escuro",
            "final"
        );


        /* =================================================
           ETAPA 0
           PASSADO
        ================================================= */

        if (
            n === 0
        ) {

            cap10Titulo.innerHTML =
                "Até aqui.";


            trocarVisual(`

                <div class="cap10-linha-tempo passado">

                    <div class="cap10-trilho"></div>

                    <span style="--i:0">I</span>
                    <span style="--i:1">II</span>
                    <span style="--i:2">III</span>
                    <span style="--i:3">IV</span>
                    <span style="--i:4">V</span>
                    <span style="--i:5">VI</span>
                    <span style="--i:6">VII</span>
                    <span style="--i:7">VIII</span>
                    <span style="--i:8">IX</span>

                </div>

            `, "momento-linha-tempo");


            cap10Texto.innerHTML = `

                Até aqui,
                eu te mostrei algumas
                das coisas que já aconteceram.

                <br><br>

                Os lugares que a gente foi.
                As conversas.
                As partidas de sinuca.
                Os filmes.

                <br><br>

                Os dias bons.
                E até os dias que não foram tão bons.

            `;
        }


        /* =================================================
           ETAPA 1
           O FUTURO
        ================================================= */

        if (
            n === 1
        ) {

            cap10Titulo.innerHTML =
                "Mas ainda falta uma parte.";


            trocarVisual(`

                <div class="cap10-linha-futuro">

                    <div class="cap10-passado-curto">

                        <span>I</span>

                        <i></i>

                        <span>V</span>

                        <i></i>

                        <span>IX</span>

                    </div>


                    <div class="cap10-caminho-vazio"></div>


                    <div class="cap10-interrogacao">

                        ?

                    </div>

                </div>

            `, "momento-futuro");


            cap10Texto.innerHTML = `

                <strong>

                    Mas tem uma parte dessa história
                    que ainda não existe.

                </strong>

                <br><br>

                Não porque esteja faltando.

                <br>

                Mas porque ela ainda
                está esperando para acontecer.

            `;
        }


        /* =================================================
           ETAPA 2
           LUGARES QUE AINDA VIRÃO
        ================================================= */

        if (
            n === 2
        ) {

            cap10Titulo.innerHTML =
                "Ainda tem tanta coisa.";


            trocarVisual(`

                <div class="cap10-constelacao-futuro">

                    <div class="cap10-orbita-futura o1"></div>

                    <div class="cap10-orbita-futura o2"></div>


                    <div class="cap10-destino destino-restaurante">

                        <span class="icone">
                            ✦
                        </span>

                        <small>
                            restaurantes
                        </small>

                    </div>


                    <div class="cap10-destino destino-trilha">

                        <span class="icone">
                            △
                        </span>

                        <small>
                            trilhas
                        </small>

                    </div>


                    <div class="cap10-destino destino-parque">

                        <span class="icone">
                            ⌁
                        </span>

                        <small>
                            parques
                        </small>

                    </div>


                    <div class="cap10-destino destino-praia">

                        <span class="icone">
                            ≈
                        </span>

                        <small>
                            praias
                        </small>

                    </div>


                    <div class="cap10-destino destino-viagem">

                        <span class="icone">
                            ✧
                        </span>

                        <small>
                            viagens
                        </small>

                    </div>


                    <div class="cap10-destino destino-sinuca">

                        <span class="icone bola-mini">
                            8
                        </span>

                        <small>
                            mais sinuca
                        </small>

                    </div>


                    <div class="cap10-nucleo-futuro">

                        nós

                    </div>

                </div>

            `, "momento-destinos");


            cap10Texto.innerHTML = `

                Ainda existem lugares
                que eu quero conhecer com você.

                <br><br>

                Coisas que eu quero fazer com você.

                <br><br>

                E um monte de momentos
                que ainda nem existem.

            `;
        }


        /* =================================================
           ETAPA 3
           NOSSOS MUNDOS
        ================================================= */

        if (
            n === 3
        ) {

            cap10Titulo.innerHTML =
                "Um pouco de cada mundo.";


            trocarVisual(`

                <div class="cap10-dois-mundos">

                    <div class="cap10-mundo mundo-a">

                        <span class="cap10-arco"></span>

                        <strong>
                            o meu
                        </strong>

                        <small>
                            música · momentos · histórias
                        </small>

                    </div>


                    <div class="cap10-encontro-mundos">

                        <span></span>

                    </div>


                    <div class="cap10-mundo mundo-b">

                        <span class="cap10-arco"></span>

                        <strong>
                            o seu
                        </strong>

                        <small>
                            sonhos · projetos · descobertas
                        </small>

                    </div>

                </div>

            `, "momento-mundos");


            cap10Texto.innerHTML = `

                Aos poucos,
                eu fui te mostrando
                um pouco do meu mundo.

                <br><br>

                Como naquele show do KayBlack.

                <br><br>

                E também fui conhecendo
                cada vez mais do seu.

            `;
        }


        /* =================================================
           ETAPA 4
           ARQUITETURA / CONQUISTAS
        ================================================= */

        if (
            n === 4
        ) {

            cap10Titulo.innerHTML =
                "Coisas que ainda quero ver.";


            trocarVisual(`

                <div class="cap10-planta">

                    <div class="cap10-grid-planta"></div>


                    <div class="cap10-parede parede-1"></div>

                    <div class="cap10-parede parede-2"></div>

                    <div class="cap10-parede parede-3"></div>

                    <div class="cap10-parede parede-4"></div>

                    <div class="cap10-parede parede-5"></div>


                    <div class="cap10-medida medida-1">

                        ∞

                    </div>


                    <div class="cap10-medida medida-2">

                        futuro

                    </div>


                    <div class="cap10-predio-final">

                        <span></span>

                        <span></span>

                        <span></span>

                        <span></span>

                    </div>

                </div>

            `, "momento-planta");


            cap10Texto.innerHTML = `

                Ainda existem coisas
                que eu quero ver você construir.

                <br><br>

                Lugares que eu quero ver você chegar.

                <br><br>

                <strong>

                    Coisas que eu ainda quero
                    ver você conquistar.

                </strong>

            `;
        }


        /* =================================================
           ETAPA 5
           TEMPO E ESPAÇO
        ================================================= */

        if (
            n === 5
        ) {

            cap10Titulo.innerHTML =
                "Eu gosto de pensar no tempo.";


            trocarVisual(`

                <div class="cap10-tempo-cosmos">

                    <div class="cap10-relogio-cosmico">

                        <span class="marca m1"></span>

                        <span class="marca m2"></span>

                        <span class="marca m3"></span>

                        <span class="marca m4"></span>


                        <i class="ponteiro hora"></i>

                        <i class="ponteiro minuto"></i>


                        <b></b>

                    </div>


                    <div class="cap10-orbita-tempo orbita-1">

                        <span></span>

                    </div>


                    <div class="cap10-orbita-tempo orbita-2">

                        <span></span>

                    </div>


                    <div class="cap10-orbita-tempo orbita-3">

                        <span></span>

                    </div>

                </div>

            `, "momento-tempo");


            cap10Texto.innerHTML = `

                Eu gosto de pensar no tempo.

                <br><br>

                No quanto ele muda tudo.

                <br><br>

                E em quantas coisas
                ainda podem acontecer.

            `;
        }


        /* =================================================
           ETAPA 6
           ESCOLHA

           GIZ JÁ ESTÁ TOCANDO AQUI.

           Não precisamos iniciar nenhuma música
           novamente.
        ================================================= */

        if (
            n === 6
        ) {

            cap10Titulo.innerHTML =
                "Eu não sei o que vem depois.";


            trocarVisual(`

                <div class="cap10-linha-escolha">

                    <div class="cap10-capitulos-mini">

                        <span>I</span>

                        <span>II</span>

                        <span>III</span>

                        <span>IV</span>

                        <span>V</span>

                        <span>VI</span>

                        <span>VII</span>

                        <span>VIII</span>

                        <span>IX</span>

                    </div>


                    <div class="cap10-traco-escolha"></div>


                    <div class="cap10-ponto-futuro">

                        <span>
                            ?
                        </span>

                    </div>

                </div>

            `, "momento-escolha");


            cap10Texto.innerHTML = `

                Eu não sei exatamente
                quais vão ser os próximos lugares.

                <br><br>

                Nem quais histórias
                ainda vão acontecer.

                <br><br>

                <strong>

                    Mas sei com quem eu gostaria
                    de viver muitas delas.

                </strong>

            `;


            btnCap10.textContent =
                "Continuar";
        }
    }


    /* =====================================================
       SEQUÊNCIA FINAL
    ===================================================== */

    async function executarFinal() {

        if (
            animando ||
            finalExecutado
        ) {

            return;
        }


        animando =
            true;


        finalExecutado =
            true;


        btnCap10.disabled =
            true;


        btnCap10.classList.add(
            "oculto"
        );


        /* =================================================
           PRIMEIRA FRASE

           GIZ CONTINUA NO VOLUME NORMAL.
        ================================================= */

        capitulo10.classList.add(
            "pre-final"
        );


        cap10Titulo.innerHTML =
            "Só falta uma parte.";


        trocarVisual(`

            <div class="cap10-ultimo-ponto">

                <span></span>

            </div>

        `, "momento-ultimo-ponto");


        cap10Texto.innerHTML = `

            <strong>

                Mas tem uma parte dessa história
                que eu não quero escrever em uma tela.

            </strong>

        `;


        /*
            7 segundos.

            Dá tempo de ler a frase
            sem ela desaparecer rápido.
        */

        await esperar(
            7000
        );


        /* =================================================
           SEGUNDA FRASE
        ================================================= */

        capitulo10.classList.add(
            "quase-escuro"
        );


        cap10Titulo.innerHTML =
            "";


        cap10Visual.innerHTML = `

            <div class="cap10-respiro-final">

                <span></span>

            </div>

        `;


        cap10Texto.innerHTML = `

            Essa eu quero te dizer
            olhando para você.

        `;


        /*
            Primeiro deixamos Giz continuar
            normalmente por 1,5 segundos.
        */

        await esperar(
            1500
        );


        /* =================================================
           ABAIXAR GIZ
        ================================================= */

        if (
            musicaApi &&
            typeof musicaApi.abaixarParaFinal ===
                "function"
        ) {

            /*
                O musica.js faz:

                Giz
                22%
                ↓
                ↓ 5 segundos
                ↓
                2,5%
            */

            musicaApi.abaixarParaFinal();

        }


        /*
            A segunda frase continua
            aparecendo enquanto a música
            diminui.

            Tempo total dela:

            1,5 + 5 = 6,5 segundos.
        */

        await esperar(
            5000
        );


        /* =================================================
           FRASE FINAL
        ================================================= */

        capitulo10.classList.remove(
            "pre-final",
            "quase-escuro"
        );


        capitulo10.classList.add(
            "final"
        );


        cap10Titulo.innerHTML =
            "";


        cap10Visual.innerHTML =
            "";


        cap10Texto.innerHTML = `

            <strong class="cap10-agora">

                Agora olha para mim.

            </strong>

        `;


        /*
            TERMINA AQUI.

            Giz continua em aproximadamente
            2,5% de volume.

            A frase permanece na tela.

            Não existe botão.

            Não volta para a mesa.

            Não existe Capítulo XI.
        */


        animando =
            false;
    }


    /* =====================================================
       BOTÃO
    ===================================================== */

    btnCap10.addEventListener(
        "click",
        async () => {

            if (
                animando ||
                btnCap10.disabled
            ) {

                return;
            }


            if (
                etapa === 6
            ) {

                await executarFinal();


                return;
            }


            etapa++;


            mostrarEtapa(
                etapa
            );
        }
    );


    /* =====================================================
       BOLA 10
    ===================================================== */

    refs.bola10.addEventListener(
        "click",
        abrir
    );


    /* =====================================================
       RETORNO
    ===================================================== */

    return {

        ativar

    };
}