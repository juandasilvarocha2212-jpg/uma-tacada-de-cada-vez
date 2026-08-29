import { esperar } from "../utilidades.js";


/* =====================================================
   CAPÍTULO IX
   FOI NAQUELE OLHAR
===================================================== */

export function iniciarCapitulo9(
    mesaApi,
    ativarCapitulo10
) {

    const { refs } = mesaApi;


    const capitulo9 =
        document.getElementById(
            "capitulo9"
        );


    const cap9Titulo =
        document.getElementById(
            "cap9Titulo"
        );


    const cap9Visual =
        document.getElementById(
            "cap9Visual"
        );


    const cap9Texto =
        document.getElementById(
            "cap9Texto"
        );


    const btnCap9 =
        document.getElementById(
            "btnCap9"
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

    let timerFotos = null;


    /* =====================================================
       FOTOS

       Todas estão em:
       assets/imagens/
    ===================================================== */

    const fotosMemoria = [

        {
            arquivo:
                "foto1.jpg",

            legenda:
                "Nós"
        },

        {
            arquivo:
                "foto2.jpg",

            legenda:
                "Mais uma lembrança"
        },

        {
            arquivo:
                "foto3.jpg",

            legenda:
                "Mais um momento nosso"
        },

        {
            arquivo:
                "foto4.jpg",

            legenda:
                "Um momento simples"
        },

        {
            arquivo:
                "fotoemcasa.jpg",

            legenda:
                "Em casa"
        },

        {
            arquivo:
                "fotoparque.jpg",

            legenda:
                "No parque"
        },

        {
            arquivo:
                "fotoparque2.jpg",

            legenda:
                "Mais uma tarde"
        },

        {
            arquivo:
                "parque-central.jpg",

            legenda:
                "Parque Central"
        },

        {
            arquivo:
                "fotocarro.jpeg",

            legenda:
                "Foi naquele olhar"
        }

    ];


    /* =====================================================
       TROCAR VISUAL
    ===================================================== */

    function trocarVisual(
        html,
        classe = ""
    ) {

        cap9Visual.className =
            "cap9-visual";


        cap9Visual.innerHTML =
            html;


        void cap9Visual.offsetWidth;


        cap9Visual.classList.add(
            "entrando"
        );


        if (
            classe
        ) {

            cap9Visual.classList.add(
                classe
            );

        }
    }


    /* =====================================================
       GERAR FOTOS EM LOOP
    ===================================================== */

    function gerarGaleriaFotos() {

        const rotacoes = [

            -3,
            2,
            -2,
            3,
            -2.5,
            2,
            -3,
            2.5,
            -1

        ];


        /*
            9 fotos.

            Cada uma recebe 0.65s.

            9 × 0.65 = 5.85 segundos
            para completar o loop.
        */

        const intervalo =
            0.65;


        const duracaoLoop =
            fotosMemoria.length *
            intervalo;


        const fotos =
            fotosMemoria
                .map(
                    (
                        foto,
                        index
                    ) => {

                        const delay =
                            (
                                index *
                                intervalo
                            )
                            .toFixed(
                                2
                            );


                        return `

                            <figure
                                class="cap9-flash-foto"

                                style="
                                    --delay:${delay}s;
                                    --rot:${rotacoes[index]}deg;
                                    --duracao-loop:${duracaoLoop.toFixed(2)}s;
                                "
                            >

                                <div
                                    class="cap9-foto-brilho"
                                ></div>


                                <img
                                    src="assets/imagens/${foto.arquivo}"
                                    alt="${foto.legenda}"
                                    draggable="false"
                                >


                                <div
                                    class="cap9-foto-vinheta"
                                ></div>


                                <figcaption
                                    class="cap9-legenda-foto"
                                >

                                    ${foto.legenda}

                                </figcaption>

                            </figure>

                        `;

                    }
                )
                .join("");


        return `

            <div
                class="cap9-fotos-memoria"
            >

                <div
                    class="cap9-fundo-memorias"
                ></div>


                ${fotos}


                <div
                    class="cap9-flash-luz"
                ></div>


                <div
                    class="cap9-granulado"
                ></div>

            </div>

        `;
    }


    /* =====================================================
       ATIVAR NA MESA
    ===================================================== */

    function ativar() {

        ativoNaMesa =
            true;


        numeroCapituloMesa.textContent =
            "CAPÍTULO IX";


        tituloCapituloMesa.innerHTML =
            "Foi naquele<br>olhar.";


        fraseHistoria.innerHTML = `

            Eu não lembro exatamente
            em qual daqueles dias
            aconteceu.

            <br><br>

            Mas eu lembro
            perfeitamente daquele olhar.

        `;


        instrucaoTacada.textContent =
            "Toque na bola 9";


        instrucaoTacada.classList.add(
            "ativo"
        );


        refs.bola9.style.opacity =
            "1";


        refs.bola9.style.pointerEvents =
            "auto";


        refs.bola9.classList.add(
            "bola-proxima"
        );
    }


    /* =====================================================
       ABRIR
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


        refs.bola9.classList.remove(
            "bola-proxima"
        );


        refs.bola9.classList.add(
            "virando-memoria-9"
        );


        await esperar(
            520
        );


        refs.sinuca.classList.add(
            "saindo-capitulo"
        );


        await esperar(
            480
        );


        refs.sinuca.classList.remove(
            "ativo",
            "saindo-capitulo"
        );


        refs.sinuca.setAttribute(
            "aria-hidden",
            "true"
        );


        capitulo9.classList.add(
            "ativo"
        );


        capitulo9.setAttribute(
            "aria-hidden",
            "false"
        );


        etapa =
            0;


        mostrarEtapa(
            etapa
        );


        await esperar(
            500
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

        if (
            timerFotos
        ) {

            clearTimeout(
                timerFotos
            );


            timerFotos =
                null;
        }


        btnCap9.disabled =
            false;


        btnCap9.textContent =
            "Continuar";


        /* =================================================
           ETAPA 0
        ================================================= */

        if (
            n === 0
        ) {

            cap9Titulo.innerHTML =
                "Eu não lembro exatamente quando.";


            trocarVisual(`

                <div
                    class="cap9-noites"
                >

                    <div
                        class="cap9-noite n1"
                    >
                        <span></span>
                    </div>

                    <div
                        class="cap9-noite n2"
                    >
                        <span></span>
                    </div>

                    <div
                        class="cap9-noite n3"
                    >
                        <span></span>
                    </div>

                    <div
                        class="cap9-noite n4"
                    >
                        <span></span>
                    </div>


                    <div
                        class="cap9-noite-centro"
                    >
                        ?
                    </div>

                </div>

            `);


            cap9Texto.innerHTML = `

                Eu não lembro exatamente
                em qual daqueles dias aconteceu.

                <br><br>

                Talvez porque,
                naquele momento,
                parecesse só mais uma
                das nossas conversas no carro.

            `;
        }


        /* =================================================
           ETAPA 1
        ================================================= */

        if (
            n === 1
        ) {

            cap9Titulo.innerHTML =
                "A gente estava ali.";


            trocarVisual(`

                <div
                    class="cap9-carro"
                >

                    <div
                        class="cap9-teto"
                    ></div>


                    <div
                        class="cap9-parabrisa"
                    >

                        <div
                            class="cap9-rua"
                        >

                            <span
                                class="poste poste1"
                            ></span>

                            <span
                                class="poste poste2"
                            ></span>

                            <span
                                class="poste poste3"
                            ></span>


                            <span
                                class="luz luz1"
                            ></span>

                            <span
                                class="luz luz2"
                            ></span>

                            <span
                                class="luz luz3"
                            ></span>

                        </div>

                    </div>


                    <div
                        class="cap9-retrovisor"
                    ></div>


                    <div
                        class="cap9-banco b1"
                    ></div>

                    <div
                        class="cap9-banco b2"
                    ></div>


                    <div
                        class="cap9-painel"
                    >

                        <span></span>

                        <span></span>

                        <span></span>

                    </div>

                </div>

            `);


            cap9Texto.innerHTML = `

                Como tantas outras vezes.

                <br><br>

                Dentro do carro.

                <br>

                Conversando.

                <br><br>

                Sem nenhum momento
                grandioso acontecendo.

            `;
        }


        /* =================================================
           ETAPA 2
        ================================================= */

        if (
            n === 2
        ) {

            cap9Titulo.innerHTML =
                "Eu estava distraído.";


            trocarVisual(`

                <div
                    class="cap9-visao-distracao"
                >

                    <span
                        class="cap9-bokeh bk1"
                    ></span>

                    <span
                        class="cap9-bokeh bk2"
                    ></span>

                    <span
                        class="cap9-bokeh bk3"
                    ></span>

                    <span
                        class="cap9-bokeh bk4"
                    ></span>

                    <span
                        class="cap9-bokeh bk5"
                    ></span>


                    <div
                        class="cap9-foco-vazio"
                    ></div>

                </div>

            `);


            cap9Texto.innerHTML = `

                Provavelmente olhando
                para alguma coisa.

                <br><br>

                Falando sobre qualquer assunto.

                <br><br>

                Até que...

            `;
        }


        /* =================================================
           ETAPA 3
        ================================================= */

        if (
            n === 3
        ) {

            cap9Titulo.innerHTML =
                "Eu olhei para você.";


            trocarVisual(`

                <div
                    class="cap9-momento-olhar"
                >

                    <div
                        class="cap9-vinheta"
                    ></div>


                    <div
                        class="cap9-rosto-abstrato"
                    >

                        <span
                            class="cap9-contorno-rosto"
                        ></span>


                        <span
                            class="cap9-olho olho1"
                        >
                            <i></i>
                        </span>


                        <span
                            class="cap9-olho olho2"
                        >
                            <i></i>
                        </span>

                    </div>


                    <div
                        class="cap9-luz-rosto"
                    ></div>

                </div>

            `, "momento-foco");


            cap9Texto.innerHTML = `

                E por alguns segundos...

                <br><br>

                <strong>

                    todo o resto
                    pareceu desaparecer.

                </strong>

            `;
        }


        /* =================================================
           ETAPA 4
        ================================================= */

        if (
            n === 4
        ) {

            cap9Titulo.innerHTML =
                "E você sorriu.";


            trocarVisual(`

                <div
                    class="cap9-sorriso-cena"
                >

                    <div
                        class="cap9-halo"
                    ></div>


                    <div
                        class="cap9-rosto-sorriso"
                    >

                        <span
                            class="olho oe"
                        ></span>

                        <span
                            class="olho od"
                        ></span>


                        <span
                            class="brilho-olho bo1"
                        ></span>

                        <span
                            class="brilho-olho bo2"
                        ></span>


                        <span
                            class="sorriso"
                        ></span>

                    </div>


                    <span
                        class="cap9-particula p1"
                    ></span>

                    <span
                        class="cap9-particula p2"
                    ></span>

                    <span
                        class="cap9-particula p3"
                    ></span>

                    <span
                        class="cap9-particula p4"
                    ></span>

                </div>

            `, "momento-sorriso");


            cap9Texto.innerHTML = `

                Foi rápido.

                <br><br>

                Alguns segundos,
                talvez.

                <br><br>

                Mas aquele sorriso
                ficou marcado na minha cabeça.

            `;
        }


        /* =================================================
           ETAPA 5
           FOTOS EM LOOP
        ================================================= */

        if (
            n === 5
        ) {

            cap9Titulo.innerHTML =
                "E então tudo passou pela minha cabeça.";


            trocarVisual(
                gerarGaleriaFotos(),
                "momento-fotos"
            );


            cap9Texto.innerHTML = `

                Tudo que a gente
                já tinha vivido.

                <br><br>

                Os lugares.

                <br>

                As conversas.

                <br>

                Os momentos simples.

                <br><br>

                <strong>

                    Um monte de lembranças
                    passando de uma vez.

                </strong>

            `;


            /*
                O botão fica travado apenas
                durante a primeira volta.

                Depois libera e as fotos
                continuam passando.
            */

            btnCap9.disabled =
                true;


            btnCap9.textContent =
                "Relembrando...";


            timerFotos =
                setTimeout(
                    () => {

                        btnCap9.disabled =
                            false;


                        btnCap9.textContent =
                            "Continuar";


                        timerFotos =
                            null;

                    },

                    6200
                );
        }


        /* =================================================
           ETAPA 6
        ================================================= */

        if (
            n === 6
        ) {

            cap9Titulo.innerHTML =
                "Não eram só os lugares.";


            trocarVisual(`

                <div
                    class="cap9-fragmentos"
                >

                    <span
                        class="fragmento fr1"
                    >
                        conversas
                    </span>

                    <span
                        class="fragmento fr2"
                    >
                        histórias
                    </span>

                    <span
                        class="fragmento fr3"
                    >
                        momentos
                    </span>

                    <span
                        class="fragmento fr4"
                    >
                        seu jeito
                    </span>

                    <span
                        class="fragmento fr5"
                    >
                        risadas
                    </span>

                    <span
                        class="fragmento fr6"
                    >
                        nós
                    </span>


                    <div
                        class="cap9-centro-fragmentos"
                    ></div>

                </div>

            `);


            cap9Texto.innerHTML = `

                Também passaram pela minha cabeça
                as coisas que você
                tinha me contado.

                <br><br>

                Seu jeito.

                <br>

                Suas histórias.

                <br>

                Tudo que eu estava
                conhecendo sobre você.

            `;
        }


        /* =================================================
           ETAPA 7
        ================================================= */

        if (
            n === 7
        ) {

            cap9Titulo.innerHTML =
                "Foi naquele olhar que eu percebi.";


            trocarVisual(`

                <div
                    class="cap9-realizacao"
                >

                    <div
                        class="cap9-olhar-final"
                    >

                        <span
                            class="olho-final of1"
                        >
                            <i></i>
                        </span>


                        <span
                            class="olho-final of2"
                        >
                            <i></i>
                        </span>

                    </div>


                    <div
                        class="cap9-pulso pulso1"
                    ></div>

                    <div
                        class="cap9-pulso pulso2"
                    ></div>

                    <div
                        class="cap9-pulso pulso3"
                    ></div>

                </div>

            `, "momento-realizacao");


            cap9Texto.innerHTML = `

                No meio de tudo aquilo...

                <br><br>

                olhando para você...

                <br><br>

                eu entendi uma coisa
                que talvez já estivesse
                crescendo fazia algum tempo.

            `;
        }


        /* =================================================
           ETAPA 8
        ================================================= */

        if (
            n === 8
        ) {

            cap9Titulo.innerHTML =
                "O quanto eu gosto de você.";


            trocarVisual(`

                <div
                    class="cap9-silencio-final"
                >

                    <div
                        class="cap9-luz-central"
                    ></div>


                    <span
                        class="cap9-ponto-final pf1"
                    ></span>

                    <span
                        class="cap9-ponto-final pf2"
                    ></span>

                    <span
                        class="cap9-ponto-final pf3"
                    ></span>

                </div>

            `, "momento-silencio");


            cap9Texto.innerHTML = `

                <strong
                    class="cap9-frase-principal"
                >

                    Foi naquele olhar
                    que eu percebi
                    o quanto eu gosto de você.

                </strong>

            `;
        }


        /* =================================================
           ETAPA 9
        ================================================= */

        if (
            n === 9
        ) {

            cap9Titulo.innerHTML =
                "Algumas coisas levam tempo.";


            trocarVisual(`

                <div
                    class="cap9-final"
                >

                    <div
                        class="cap9-relogio-final"
                    >

                        <span
                            class="ponteiro-h"
                        ></span>


                        <span
                            class="ponteiro-m"
                        ></span>


                        <span
                            class="centro"
                        ></span>

                    </div>


                    <div
                        class="cap9-linha-final"
                    ></div>


                    <div
                        class="cap9-olho-simbolo"
                    >

                        <span></span>

                    </div>

                </div>

            `);


            cap9Texto.innerHTML = `

                Algumas coisas levam tempo
                para a gente perceber.

                <br><br>

                <strong>

                    Outras levam apenas
                    um olhar.

                </strong>

            `;


            btnCap9.textContent =
                "Voltar à mesa";
        }
    }


    /* =====================================================
       VOLTAR PARA MESA
    ===================================================== */

    async function voltarParaMesa() {

        if (
            animando
        ) {

            return;
        }


        animando =
            true;


        if (
            timerFotos
        ) {

            clearTimeout(
                timerFotos
            );


            timerFotos =
                null;
        }


        capitulo9.classList.add(
            "saindo"
        );


        await esperar(
            650
        );


        capitulo9.classList.remove(
            "ativo",
            "saindo"
        );


        capitulo9.setAttribute(
            "aria-hidden",
            "true"
        );


        refs.bola9.style.opacity =
            "0";


        refs.bola9.style.pointerEvents =
            "none";


        refs.bola9.classList.remove(
            "virando-memoria-9"
        );


        refs.sinuca.classList.add(
            "ativo"
        );


        refs.sinuca.setAttribute(
            "aria-hidden",
            "false"
        );


        await esperar(
            350
        );


        /* =================================================
           PREPARAR CAPÍTULO X
        ================================================= */

        if (
            ativarCapitulo10
        ) {

            ativarCapitulo10();

        }

        else {

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

                ainda nem tenha acontecido.

            `;


            instrucaoTacada.textContent =
                "Continua...";


            instrucaoTacada.classList.add(
                "ativo"
            );
        }


        await esperar(
            500
        );


        animando =
            false;
    }


    /* =====================================================
       BOTÃO
    ===================================================== */

    btnCap9.addEventListener(
        "click",
        async () => {

            if (
                animando ||
                btnCap9.disabled
            ) {

                return;
            }


            if (
                etapa === 9
            ) {

                await voltarParaMesa();

                return;
            }


            etapa++;


            mostrarEtapa(
                etapa
            );
        }
    );


    /* =====================================================
       BOLA 9
    ===================================================== */

    refs.bola9.addEventListener(
        "click",
        abrir
    );


    return {

        ativar

    };
}