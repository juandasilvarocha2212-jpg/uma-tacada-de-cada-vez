import { esperar } from "../utilidades.js";


/* =====================================================
   CAPÍTULO V
   CINEMA / HOMEM-ARANHA
===================================================== */

export function iniciarCapitulo5(
    mesaApi,
    ativarCapitulo6
) {

    const { refs } =
        mesaApi;


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const capitulo5 =
        document.getElementById(
            "capitulo5"
        );


    const cap5Titulo =
        document.getElementById(
            "cap5Titulo"
        );


    const cap5Visual =
        document.getElementById(
            "cap5Visual"
        );


    const cap5Texto =
        document.getElementById(
            "cap5Texto"
        );


    const btnCap5 =
        document.getElementById(
            "btnCap5"
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


    /* =====================================================
       ESTADO
    ===================================================== */

    let etapa =
        0;


    let animando =
        false;


    let ativoNaMesa =
        false;


    /* =====================================================
       TROCAR VISUAL
    ===================================================== */

    function trocarVisual(
        html
    ) {

        cap5Visual.classList.remove(
            "entrando"
        );


        cap5Visual.innerHTML =
            html;


        void cap5Visual.offsetWidth;


        cap5Visual.classList.add(
            "entrando"
        );
    }


    /* =====================================================
       ATIVAR CAPÍTULO V
    ===================================================== */

    function ativar() {

        ativoNaMesa =
            true;


        numeroCapituloMesa.textContent =
            "CAPÍTULO V";


        tituloCapituloMesa.innerHTML =
            "Algo que era<br>nosso.";


        fraseHistoria.innerHTML = `

            Depois daquela noite,
            continuamos nos vendo.

            <br><br>

            Até chegar um programa
            que nós dois queríamos muito.

        `;


        instrucaoTacada.textContent =
            "Toque na bola 5";


        instrucaoTacada.classList.add(
            "ativo"
        );


        refs.bola5.style.opacity =
            "1";


        refs.bola5.style.pointerEvents =
            "auto";


        refs.bola5.classList.add(
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


        refs.bola5.classList.remove(
            "bola-proxima"
        );


        refs.bola5.classList.add(
            "virando-memoria-5"
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


        capitulo5.classList.add(
            "ativo"
        );


        capitulo5.setAttribute(
            "aria-hidden",
            "false"
        );


        etapa =
            0;


        mostrarEtapa(
            0
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

        btnCap5.classList.remove(
            "escondido"
        );


        btnCap5.disabled =
            false;


        btnCap5.textContent =
            "Continuar";


        /* =================================================
           ETAPA 0
           INTRODUÇÃO
        ================================================= */

        if (
            n === 0
        ) {

            cap5Titulo.innerHTML =
                "Algo que era nosso.";


            trocarVisual(`

                <div class="cap5-orbita">

                    <div class="cap5-bola">

                        <span>
                            5
                        </span>

                    </div>

                </div>

            `);


            cap5Texto.innerHTML = `

                Até então,
                nossos encontros tinham sido feitos
                de muita conversa...

                <br><br>

                sinuca...

                <br><br>

                e alguns planos.

            `;
        }


        /* =================================================
           ETAPA 1
           HOMEM-ARANHA
        ================================================= */

        if (
            n === 1
        ) {

            cap5Titulo.innerHTML =
                "Mas dessa vez tinha uma coisa.";


            trocarVisual(`

                <div class="cap5-ingresso">

                    <small>
                        CINEMA
                    </small>

                    <strong>
                        Homem-Aranha
                    </strong>

                    <span>
                        NÓS DOIS QUERÍAMOS ESTAR ALI
                    </span>

                </div>

            `);


            cap5Texto.innerHTML = `

                Dessa vez tinha uma coisa
                que nós dois

                <strong>
                    queríamos muito assistir.
                </strong>

                <br><br>

                Homem-Aranha.

            `;
        }


        /* =================================================
           ETAPA 2
           CINEMA
        ================================================= */

        if (
            n === 2
        ) {

            cap5Titulo.innerHTML =
                "E lá estávamos nós.";


            trocarVisual(`

                <div class="cap5-cinema">

                    <div class="cap5-tela">

                        <span>
                            CINEMA
                        </span>

                    </div>


                    <div
                        class="cap5-poltrona esquerda"
                    ></div>


                    <div
                        class="cap5-poltrona direita"
                    ></div>

                </div>

            `);


            cap5Texto.innerHTML = `

                Não era só
                sobre assistir a um filme.

                <br><br>

                Era estar ali
                com alguém que também queria

                <strong>
                    estar exatamente naquele lugar.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 3
           GOSTAR JUNTO
        ================================================= */

        if (
            n === 3
        ) {

            cap5Titulo.innerHTML =
                "Gostar junto.";


            trocarVisual(`

                <div class="cap5-juntos">

                    <div class="cap5-circulo">

                        EU

                    </div>


                    <div
                        class="cap5-juntos-luz"
                    ></div>


                    <div class="cap5-circulo">

                        VOCÊ

                    </div>

                </div>

            `);


            cap5Texto.innerHTML = `

                Pode parecer
                uma coisa simples.

                <br><br>

                Mas naquele dia
                eu percebi o quanto era bom

                <strong>
                    gostar das coisas junto com você.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 4
           PRIMEIRA APARIÇÃO DA FOTO
        ================================================= */

        if (
            n === 4
        ) {

            cap5Titulo.innerHTML =
                "E ficou uma lembrança.";


            trocarVisual(`

                <figure class="cap5-foto">

                    <img
                        src="./assets/imagens/cinema-homem-aranha.jpg"
                        alt="Foto do cinema naquele dia"
                    >

                    <figcaption>
                        MEMÓRIA 05 · CINEMA
                    </figcaption>

                </figure>

            `);


            cap5Texto.innerHTML = `

                Dessa vez,
                a lembrança não é

                <strong>
                    uma foto nossa.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 5
           SEGUNDA APARIÇÃO DA FOTO
        ================================================= */

        if (
            n === 5
        ) {

            cap5Titulo.innerHTML =
                "Mas talvez isso deixe ela melhor.";


            trocarVisual(`

                <figure
                    class="
                        cap5-foto
                        cap5-foto-menor
                    "
                >

                    <img
                        src="./assets/imagens/cinema-homem-aranha.jpg"
                        alt="Foto do cinema naquele dia"
                    >

                    <figcaption>
                        MEMÓRIA 05
                    </figcaption>

                </figure>

            `);


            cap5Texto.innerHTML = `

                É uma foto
                do que estava na nossa frente.

                <br><br>

                Do filme que nós dois
                queríamos assistir.

                <br><br>

                <strong>
                    Uma foto do que
                    estávamos vivendo juntos.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 6
           MEMÓRIA
        ================================================= */

        if (
            n === 6
        ) {

            cap5Titulo.innerHTML =
                "Foi uma noite simples.";


            trocarVisual(`

                <div class="cap5-memoria">

                    <div
                        class="cap5-memoria-centro"
                    ></div>

                </div>

            `);


            cap5Texto.innerHTML = `

                Não aconteceu
                nenhuma coisa absurda.

                <br><br>

                Não precisava.

                <br><br>

                <strong>
                    Eu só estava feliz
                    de estar vivendo aquilo com você.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 7
           FINAL
        ================================================= */

        if (
            n === 7
        ) {

            cap5Titulo.innerHTML =
                "Mais uma memória nossa.";


            trocarVisual(`

                <div class="cap5-final">

                    <span>
                        V
                    </span>

                </div>

            `);


            cap5Texto.innerHTML = `

                Aos poucos,
                nossos encontros iam deixando
                de ser apenas lugares.

                <br><br>

                <strong>
                    Eles estavam virando lembranças.
                </strong>

            `;


            btnCap5.textContent =
                "Voltar à mesa";
        }
    }


    /* =====================================================
       VOLTAR PARA A MESA
    ===================================================== */

    async function voltarParaMesa() {

        if (
            animando
        ) {

            return;
        }


        animando =
            true;


        capitulo5.classList.add(
            "saindo"
        );


        await esperar(
            600
        );


        capitulo5.classList.remove(
            "ativo",
            "saindo"
        );


        capitulo5.setAttribute(
            "aria-hidden",
            "true"
        );


        /*
            Bola 5 concluída.
        */

        refs.bola5.style.opacity =
            "0";


        refs.bola5.style.pointerEvents =
            "none";


        refs.bola5.classList.remove(
            "virando-memoria-5"
        );


        /*
            Mesa volta.
        */

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


        /*
            Quando o Capítulo VI existir,
            ele será ativado aqui.
        */

        if (
            ativarCapitulo6
        ) {

            ativarCapitulo6();

        }

        else {

            numeroCapituloMesa.textContent =
                "CAPÍTULO VI";


            tituloCapituloMesa.innerHTML =
                "Um pouco do<br>meu mundo.";


            fraseHistoria.innerHTML = `

                Até aqui,
                muitas das nossas lembranças
                eram só nossas.

                <br><br>

                Mas chegou o dia
                de você conhecer
                uma parte diferente da minha vida.

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
       BOTÃO CONTINUAR
    ===================================================== */

    btnCap5.addEventListener(
        "click",
        async () => {

            if (
                animando
            ) {

                return;
            }


            if (
                etapa === 7
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
       BOLA 5
    ===================================================== */

    refs.bola5.addEventListener(
        "click",
        () => {

            abrir();

        }
    );


    /* =====================================================
       RETORNO
    ===================================================== */

    return {

        ativar

    };
}