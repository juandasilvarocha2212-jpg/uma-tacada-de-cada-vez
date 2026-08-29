import { esperar } from "../utilidades.js";


/* =====================================================
   CAPÍTULO III
   BRASIL × NORUEGA
===================================================== */

export function iniciarCapitulo3(
    mesaApi,
    ativarCapitulo4
) {

    const { refs } =
        mesaApi;


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const capitulo3 =
        document.getElementById(
            "capitulo3"
        );


    const cap3Titulo =
        document.getElementById(
            "cap3Titulo"
        );


    const cap3Visual =
        document.getElementById(
            "cap3Visual"
        );


    const cap3Texto =
        document.getElementById(
            "cap3Texto"
        );


    const btnCap3 =
        document.getElementById(
            "btnCap3"
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
       TROCAR TEXTO
    ===================================================== */

    async function trocarTexto(
        texto
    ) {

        cap3Texto.classList.add(
            "trocando"
        );


        await esperar(
            280
        );


        cap3Texto.innerHTML =
            texto;


        cap3Texto.classList.remove(
            "trocando"
        );
    }


    /* =====================================================
       TROCAR VISUAL
    ===================================================== */

    function trocarVisual(
        html
    ) {

        cap3Visual.classList.remove(
            "entrando"
        );


        cap3Visual.innerHTML =
            html;


        /*
            Reinicia a animação.
        */

        void cap3Visual.offsetWidth;


        cap3Visual.classList.add(
            "entrando"
        );
    }


    /* =====================================================
       ATIVAR CAPÍTULO III NA MESA
    ===================================================== */

    function ativar() {

        ativoNaMesa =
            true;


        numeroCapituloMesa.textContent =
            "CAPÍTULO III";


        tituloCapituloMesa.innerHTML =
            "Só estar<br>ali.";


        fraseHistoria.innerHTML = `

            Depois do primeiro encontro,
            estar junto começou a parecer
            cada vez mais natural.

        `;


        instrucaoTacada.textContent =
            "Toque na bola 3";


        instrucaoTacada.classList.add(
            "ativo"
        );


        /*
            Garante que a bola 3
            esteja visível.
        */

        refs.bola3.style.opacity =
            "1";


        refs.bola3.style.pointerEvents =
            "auto";


        refs.bola3.classList.add(
            "bola-proxima"
        );
    }


    /* =====================================================
       ABRIR CAPÍTULO III
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


        /*
            Bola 3 deixa de pulsar.
        */

        refs.bola3.classList.remove(
            "bola-proxima"
        );


        /*
            Bola 3 vira uma memória.
        */

        refs.bola3.classList.add(
            "virando-memoria-3"
        );


        await esperar(
            520
        );


        /*
            Mesa desaparece.
        */

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


        /*
            Capítulo III aparece.
        */

        capitulo3.classList.add(
            "ativo"
        );


        capitulo3.setAttribute(
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
       ETAPAS DO CAPÍTULO
    ===================================================== */

    function mostrarEtapa(
        n
    ) {

        btnCap3.classList.remove(
            "escondido"
        );


        btnCap3.disabled =
            false;


        btnCap3.textContent =
            "Continuar";


        /* =================================================
           ETAPA 0
           INTRODUÇÃO
        ================================================= */

        if (
            n === 0
        ) {

            cap3Titulo.innerHTML =
                "Só estar ali.";


            trocarVisual(`

                <div class="cap3-orbita">

                    <div class="cap3-bola">

                        <span>
                            3
                        </span>

                    </div>

                </div>

            `);


            cap3Texto.innerHTML = `

                O primeiro encontro
                já tinha acontecido.

                <br><br>

                E dessa vez,
                estar junto começava a parecer

                <strong>
                    um pouco mais natural.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 1
           BUSCAR ELA
        ================================================= */

        if (
            n === 1
        ) {

            cap3Titulo.innerHTML =
                "Mais uma vez.";


            trocarVisual(`

                <div class="cap3-rota">

                    <div class="cap3-rota-ponto">

                        <div></div>

                        <span>
                            EU
                        </span>

                    </div>


                    <div class="cap3-rota-linha"></div>


                    <div class="cap3-rota-ponto">

                        <div></div>

                        <span>
                            VOCÊ
                        </span>

                    </div>

                </div>

            `);


            cap3Texto.innerHTML = `

                Mais uma vez,
                eu fui te buscar em casa.

                <br><br>

                E dessa vez
                o plano era assistir

                <strong>
                    Brasil × Noruega.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 2
           BRASIL × NORUEGA
        ================================================= */

        if (
            n === 2
        ) {

            cap3Titulo.innerHTML =
                "Brasil × Noruega";


            trocarVisual(`

                <div class="cap3-jogo">

                    <small>
                        MAIS UMA NOITE DE JOGO
                    </small>


                    <div class="cap3-times">

                        BRASIL
                        &nbsp; × &nbsp;
                        NORUEGA

                    </div>


                    <div class="cap3-resultado">

                        FUTEBOL · BEBIDA · NÓS DOIS

                    </div>

                </div>

            `);


            cap3Texto.innerHTML = `

                A gente foi assistir ao jogo.

                <br><br>

                Nós dois bebemos...

                <br><br>

                e durante boa parte dele
                você ficou

                <strong>
                    agarrada em mim.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 3
           CONTROLADA AUTOMATICAMENTE
        ================================================= */


        /* =================================================
           ETAPA 4
           CAMINHADA
        ================================================= */

        if (
            n === 4
        ) {

            cap3Titulo.innerHTML =
                "Depois do jogo...";


            trocarVisual(`

                <div class="cap3-caminhada">

                    <div
                        class="cap3-caminho"
                    ></div>


                    <div
                        class="cap3-passo"
                    ></div>


                    <div
                        class="cap3-passo segundo"
                    ></div>

                </div>

            `);


            cap3Texto.innerHTML = `

                Depois do jogo,
                a gente simplesmente começou a andar.

                <br><br>

                E conversar.

                <br><br>

                <strong>
                    Cada vez um pouco mais à vontade.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 5
           HISTÓRIAS
        ================================================= */

        if (
            n === 5
        ) {

            cap3Titulo.innerHTML =
                "E vieram as histórias.";


            trocarVisual(`

                <div class="cap3-historia">

                    Algumas histórias
                    são difíceis de esquecer.

                    <span>
                        😂
                    </span>

                </div>

            `);


            cap3Texto.innerHTML = `

                Foi nessa caminhada
                que você me contou
                algumas das suas histórias...

                <br><br>

                Inclusive a vez
                em que conseguiu ficar bêbada
                a ponto de

                <strong>
                    cair no chão.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 6
           SINUCA
        ================================================= */

        if (
            n === 6
        ) {

            cap3Titulo.innerHTML =
                "E, como sempre...";


            trocarVisual(`

                <div class="cap3-sinuca">

                    <div
                        class="cap3-mini-bola branca"
                    ></div>


                    <div
                        class="cap3-mini-bola vermelha"
                    ></div>

                </div>

            `);


            cap3Texto.innerHTML = `

                Depois disso...

                <br><br>

                <strong>
                    sinuca.
                </strong>

                <br><br>

                Aquilo já estava começando
                a virar parte dos nossos encontros.

            `;
        }


        /* =================================================
           ETAPA 7
           CARRO
        ================================================= */

        if (
            n === 7
        ) {

            cap3Titulo.innerHTML =
                "Mas tinha outra coisa.";


            trocarVisual(`

                <div class="cap3-carro">

                    <div
                        class="cap3-banco esquerdo"
                    ></div>


                    <div
                        class="cap3-banco direito"
                    ></div>

                </div>

            `);


            cap3Texto.innerHTML = `

                Algumas das melhores partes
                dos nossos encontros
                nem precisavam de um lugar.

                <br><br>

                Às vezes
                a gente simplesmente parava o carro...

                <br><br>

                <strong>
                    e ficava conversando.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 8
           ROTINA
        ================================================= */

        if (
            n === 8
        ) {

            cap3Titulo.innerHTML =
                "E isso começou a se repetir.";


            trocarVisual(`

                <div class="cap3-rotina">

                    <div class="cap3-rotina-item">

                        <b>
                            🎱
                        </b>

                        <span>
                            SINUCA
                        </span>

                    </div>


                    <div class="cap3-rotina-item">

                        <b>
                            ✦
                        </b>

                        <span>
                            CONVERSAS
                        </span>

                    </div>


                    <div class="cap3-rotina-item">

                        <b>
                            🚗
                        </b>

                        <span>
                            CARRO
                        </span>

                    </div>

                </div>

            `);


            cap3Texto.innerHTML = `

                Depois daquele dia,
                vieram outros.

                <br><br>

                Mais sinuca.
                Mais conversas.

                <br><br>

                E quando parecia
                que o encontro tinha acabado...

                <br><br>

                <strong>
                    a gente ainda ficava
                    no carro conversando.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 9
           FINAL
        ================================================= */

        if (
            n === 9
        ) {

            cap3Titulo.innerHTML =
                "No fim, era simples.";


            trocarVisual(`

                <div class="cap3-presenca">

                    <div
                        class="cap3-presenca-coracao"
                    ></div>

                </div>

            `);


            cap3Texto.innerHTML = `

                Não precisava acontecer
                nada extraordinário.

                <br><br>

                Eu simplesmente gostava

                <strong>
                    de estar com você.
                </strong>

            `;


            btnCap3.textContent =
                "Voltar à mesa";
        }
    }


    /* =====================================================
       FIM DO JOGO
       PARTE AUTOMÁTICA

       MAIS LENTA PARA DAR TEMPO DE LEITURA
    ===================================================== */

    async function mostrarFimDoJogo() {

        animando =
            true;


        /*
            Botão desaparece enquanto
            as frases passam automaticamente.
        */

        btnCap3.classList.add(
            "escondido"
        );


        cap3Titulo.innerHTML =
            "O jogo acabou.";


        trocarVisual(`

            <div class="cap3-jogo">

                <small>
                    FIM DE JOGO
                </small>


                <div class="cap3-times">

                    BRASIL
                    &nbsp; × &nbsp;
                    NORUEGA

                </div>


                <div class="cap3-resultado">
                    O BRASIL PERDEU
                </div>

            </div>

        `);


        /* =================================================
           FRASE 1
           3 SEGUNDOS
        ================================================= */

        await trocarTexto(`

            E eu estava puto.

        `);


        await esperar(
            3000
        );


        /* =================================================
           FRASE 2
           3 SEGUNDOS
        ================================================= */

        await trocarTexto(`

            O Brasil tinha perdido.

        `);


        await esperar(
            3000
        );


        /* =================================================
           FRASE 3
           3,5 SEGUNDOS
        ================================================= */

        await trocarTexto(`

            Mas tinha uma coisa
            meio estranha nisso.

        `);


        await esperar(
            3500
        );


        /*
            Sai o placar
            e entra o visual de presença.
        */

        trocarVisual(`

            <div class="cap3-presenca">

                <div
                    class="cap3-presenca-coracao"
                ></div>

            </div>

        `);


        /* =================================================
           FRASE PRINCIPAL
           4,5 SEGUNDOS
        ================================================= */

        await trocarTexto(`

            Eu estava bravo com o jogo...

            <br><br>

            <strong>
                e feliz porque você
                estava ali comigo.
            </strong>

        `);


        await esperar(
            4500
        );


        /*
            Botão volta.
        */

        btnCap3.textContent =
            "Continuar";


        btnCap3.classList.remove(
            "escondido"
        );


        animando =
            false;
    }


    /* =====================================================
       VOLTAR PARA A MESA
       E ATIVAR CAPÍTULO IV
    ===================================================== */

    async function voltarParaMesa() {

        if (
            animando
        ) {

            return;
        }


        animando =
            true;


        capitulo3.classList.add(
            "saindo"
        );


        await esperar(
            600
        );


        capitulo3.classList.remove(
            "ativo",
            "saindo"
        );


        capitulo3.setAttribute(
            "aria-hidden",
            "true"
        );


        /*
            Bola 3 concluída.
        */

        refs.bola3.style.opacity =
            "0";


        refs.bola3.style.pointerEvents =
            "none";


        refs.bola3.classList.remove(
            "virando-memoria-3"
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
            Agora o Capítulo IV
            assume a mesa.

            A bola 4 começa a pulsar.
        */

        if (
            ativarCapitulo4
        ) {

            ativarCapitulo4();
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

    btnCap3.addEventListener(
        "click",
        async () => {

            if (
                animando
            ) {

                return;
            }


            /*
                Final do capítulo.
            */

            if (
                etapa === 9
            ) {

                await voltarParaMesa();

                return;
            }


            etapa++;


            /*
                Etapa 3:

                Brasil perdeu,
                mas você estava feliz
                porque ela estava ali.

                Essa parte acontece
                automaticamente.
            */

            if (
                etapa === 3
            ) {

                await mostrarFimDoJogo();

                return;
            }


            mostrarEtapa(
                etapa
            );
        }
    );


    /* =====================================================
       TOQUE NA BOLA 3
    ===================================================== */

    refs.bola3.addEventListener(
        "click",
        () => {

            abrir();
        }
    );


    /* =====================================================
       RETORNO PARA MAIN.JS
    ===================================================== */

    return {

        ativar

    };
}