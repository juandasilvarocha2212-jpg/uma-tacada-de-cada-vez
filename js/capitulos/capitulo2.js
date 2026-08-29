import { esperar } from "../utilidades.js";


/* =====================================================
   CAPÍTULO II
   BRASIL × JAPÃO
===================================================== */

export function iniciarCapitulo2(
    mesaApi,
    ativarCapitulo3
) {

    const { refs } =
        mesaApi;


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const capitulo2 =
        document.getElementById(
            "capitulo2"
        );


    const cap2Titulo =
        document.getElementById(
            "cap2Titulo"
        );


    const cap2Texto =
        document.getElementById(
            "cap2Texto"
        );


    const cap2Visual =
        document.getElementById(
            "cap2Visual"
        );


    const btnCap2 =
        document.getElementById(
            "btnCap2"
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


    /* =====================================================
       TROCAR TEXTO
    ===================================================== */

    async function trocarTexto(
        texto
    ) {

        cap2Texto.classList.add(
            "trocando"
        );


        await esperar(
            280
        );


        cap2Texto.innerHTML =
            texto;


        cap2Texto.classList.remove(
            "trocando"
        );
    }


    /* =====================================================
       TROCAR VISUAL
    ===================================================== */

    function trocarVisual(
        html
    ) {

        cap2Visual.classList.remove(
            "entrando"
        );


        cap2Visual.innerHTML =
            html;


        /*
            Reinicia a animação.
        */

        void cap2Visual.offsetWidth;


        cap2Visual.classList.add(
            "entrando"
        );
    }


    /* =====================================================
       ETAPAS DO CAPÍTULO
    ===================================================== */

    function mostrarEtapa(
        n
    ) {

        btnCap2.classList.remove(
            "escondido"
        );


        btnCap2.disabled =
            false;


        btnCap2.textContent =
            "Continuar";


        /* =================================================
           ETAPA 0
           SEGUNDA TENTATIVA
        ================================================= */

        if (
            n === 0
        ) {

            cap2Titulo.innerHTML =
                "Finalmente aconteceu.";


            trocarVisual(`

                <div class="orbita-memoria">

                    <div class="bola-capitulo">

                        <span>
                            2
                        </span>

                    </div>

                </div>

            `);


            cap2Texto.innerHTML = `

                Depois de uma tentativa falha...

                <br><br>

                <strong>
                    a segunda finalmente aconteceu.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 1
           NERVOSISMO / CAVANHAQUE
        ================================================= */

        if (
            n === 1
        ) {

            cap2Titulo.innerHTML =
                "O nervosismo começou antes.";


            trocarVisual(`

                <div class="visual-barba">

                    <div class="barba-item">

                        <small>
                            o plano
                        </small>

                        <strong>
                            me arrumar ao maximo
                        </strong>

                    </div>


                    <div class="barba-seta">
                        →
                    </div>


                    <div class="barba-item">

                        <small>
                            o resultado
                        </small>

                        <strong>
                            ficar sem cavanhaque
                        </strong>

                    </div>

                </div>

            `);


            cap2Texto.innerHTML = `

                Eu já estava nervoso
                antes mesmo de sair de casa.

                <br><br>

                Fui arrumar a barba...

                <br>

                e consegui errar o cavanhaque.

                <br><br>

                <strong>
                    No fim, tive que tirar tudo.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 2
           BUSCAR ELA
        ================================================= */

        if (
            n === 2
        ) {

            cap2Titulo.innerHTML =
                "Mesmo assim, eu fui te buscar.";


            trocarVisual(`

                <div class="rota-encontro">

                    <div class="rota-ponto">

                        <div class="rota-bolinha"></div>

                        <span>
                            EU
                        </span>

                    </div>


                    <div class="rota-linha"></div>


                    <div class="rota-ponto">

                        <div class="rota-bolinha"></div>

                        <span>
                            VOCÊ
                        </span>

                    </div>

                </div>

            `);


            cap2Texto.innerHTML = `

                Sem cavanhaque
                e ainda nervoso...

                <br><br>

                <strong>
                    fui te buscar em casa.
                </strong>

                <br><br>

                Dessa vez,
                o nosso encontro ia acontecer de verdade.

            `;
        }


        /* =================================================
           ETAPA 3
           CONTROLADA PELA CENA DO JOGO
        ================================================= */


        /* =================================================
           ETAPA 4
           SINUCA
        ================================================= */

        if (
            n === 4
        ) {

            cap2Titulo.innerHTML =
                "E depois do jogo...";


            trocarVisual(`

                <div class="mini-sinuca">

                    <div
                        class="mini-bola branca"
                    ></div>

                    <div
                        class="mini-bola azul"
                    ></div>

                </div>

            `);


            cap2Texto.innerHTML = `

                Depois do jogo,
                fomos jogar sinuca.

                <br><br>

                Naquele momento
                era só mais uma parte do nosso rolê.

                <br><br>

                <strong>
                    Eu ainda não sabia
                    o quanto isso ia se repetir.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 5
           PRIMEIRA APARIÇÃO DA FOTO
        ================================================= */

        if (
            n === 5
        ) {

            cap2Titulo.innerHTML =
                "E daquele dia ficou um registro.";


            trocarVisual(`

                <figure class="foto-memoria">

                    <img
                        src="assets/imagens/brasil-japao.jpg"
                        alt="Uma lembrança nossa daquele dia"
                    >

                    <figcaption>
                        MEMÓRIA 02 · NOSSO PRIMEIRO ROLÊ DE VERDADE
                    </figcaption>

                </figure>

            `);


            cap2Texto.innerHTML = `

                <strong>
                    Uma das primeiras fotos de nós dois.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 6
           SEGUNDA APARIÇÃO DA FOTO
        ================================================= */

        if (
            n === 6
        ) {

            cap2Titulo.innerHTML =
                "Naquele momento era só uma foto.";


            trocarVisual(`

                <figure
                    class="foto-memoria foto-memoria-segunda"
                >

                    <img
                        src="assets/imagens/brasil-japao.jpg"
                        alt="Uma lembrança nossa daquele dia"
                    >

                    <figcaption>
                        MEMÓRIA 02
                    </figcaption>

                </figure>

            `);


            cap2Texto.innerHTML = `

                Você pediu para a gente tirar
                porque um amigo estava perguntando
                sobre o nosso rolê.

                <br><br>

                Naquele momento,
                era simplesmente uma foto.

                <br><br>

                <strong>
                    Hoje, é uma das primeiras
                    lembranças de nós dois.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 7
           MENSAGEM DEPOIS DO ENCONTRO
        ================================================= */

        if (
            n === 7
        ) {

            cap2Titulo.innerHTML =
                "E o dia ainda terminou melhor.";


            trocarVisual(`

                <div class="mensagem-resumo">

                    Depois daquele dia
                    você me agradeceu

                    <br>

                    e disse que o encontro
                    tinha sido ótimo.

                    <small>
                        depois do nosso primeiro encontro
                    </small>

                </div>

            `);


            cap2Texto.innerHTML = `

                Eu tinha passado o dia nervoso,
                tentando fazer tudo dar certo.

                <br><br>

                Então saber
                que você também tinha gostado...

                <br><br>

                <strong>
                    fez tudo valer a pena.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 8
           FINAL
        ================================================= */

        if (
            n === 8
        ) {

            cap2Titulo.innerHTML =
                "Nada mal para um começo.";


            trocarVisual(`

                <div class="orbita-memoria">

                    <div class="bola-capitulo">

                        <span>
                            2
                        </span>

                    </div>

                </div>

            `);


            cap2Texto.innerHTML = `

                A primeira tentativa falhou.

                <br><br>

                A segunda teve nervosismo,
                futebol,
                uma virada,
                um beijo...

                <br>

                e, claro,
                sinuca.

                <br><br>

                <strong>
                    Nada mal para o nosso primeiro encontro.
                </strong>

            `;


            btnCap2.textContent =
                "Voltar à mesa";
        }
    }


    /* =====================================================
       BRASIL × JAPÃO
       CENA AUTOMÁTICA
       TEMPO MAIOR PARA LEITURA
    ===================================================== */

    async function mostrarJogo() {

        animando =
            true;


        btnCap2.classList.add(
            "escondido"
        );


        cap2Titulo.innerHTML =
            "Brasil × Japão";


        trocarVisual(`

            <div
                id="placarCap2"
                class="placar-jogo"
            >

                <div class="placar-titulo">
                    BRASIL × JAPÃO
                </div>


                <div class="placar-times">

                    <span class="time">
                        JAPÃO
                    </span>


                    <span
                        id="placarNumero"
                        class="placar-numero"
                    >
                        1 × 0
                    </span>


                    <span class="time">
                        BRASIL
                    </span>

                </div>

            </div>

        `);


        /* =================================================
           CHEGADA AO JOGO
           3,5 SEGUNDOS
        ================================================= */

        await trocarTexto(`

            A gente foi assistir

            <strong>
                Brasil × Japão
            </strong>

            em uma adega/bar.

        `);


        await esperar(
            3500
        );


        /* =================================================
           JAPÃO NA FRENTE
           3,8 SEGUNDOS
        ================================================= */

        await trocarTexto(`

            E o Brasil resolveu começar
            do pior jeito possível.

            <br><br>

            <strong>
                Saindo atrás no placar.
            </strong>

        `);


        await esperar(
            3800
        );


        /* =================================================
           EMPATE
           2,8 SEGUNDOS
        ================================================= */

        const numero =
            document.getElementById(
                "placarNumero"
            );


        if (
            numero
        ) {

            numero.textContent =
                "1 × 1";
        }


        await trocarTexto(`

            Até que veio o empate.

        `);


        await esperar(
            2800
        );


        /* =================================================
           SEGUNDO GOL
        ================================================= */

        if (
            numero
        ) {

            numero.textContent =
                "1 × 2";
        }


        const placar =
            document.getElementById(
                "placarCap2"
            );


        if (
            placar
        ) {

            placar.classList.add(
                "gol"
            );
        }


        /* =================================================
           EXPECTATIVA
           3 SEGUNDOS
        ================================================= */

        await trocarTexto(`

            E no segundo gol do Brasil...

        `);


        await esperar(
            3000
        );


        /* =================================================
           BEIJO
           2,8 SEGUNDOS
        ================================================= */

        await trocarTexto(`

            <strong>
                ...eu te beijei.
            </strong>

        `);


        await esperar(
            2800
        );


        btnCap2.textContent =
            "Continuar";


        btnCap2.classList.remove(
            "escondido"
        );


        animando =
            false;
    }


    /* =====================================================
       VOLTAR PARA A MESA
       E ATIVAR CAPÍTULO III
    ===================================================== */

    async function voltarParaMesa() {

        if (
            animando
        ) {

            return;
        }


        animando =
            true;


        capitulo2.classList.add(
            "saindo"
        );


        await esperar(
            600
        );


        capitulo2.classList.remove(
            "ativo",
            "saindo"
        );


        capitulo2.setAttribute(
            "aria-hidden",
            "true"
        );


        /*
            Bola 2 concluída.
        */

        refs.bola2.style.opacity =
            "0";


        refs.bola2.style.pointerEvents =
            "none";


        refs.bola2.classList.remove(
            "virando-memoria"
        );


        /*
            Mesa volta para a tela.
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
            Ativa o próximo capítulo.
        */

        if (
            ativarCapitulo3
        ) {

            ativarCapitulo3();
        }


        await esperar(
            500
        );


        animando =
            false;
    }


    /* =====================================================
       ABRIR CAPÍTULO II
    ===================================================== */

    async function abrir() {

        if (
            animando
        ) {

            return;
        }


        animando =
            true;


        instrucaoTacada.classList.remove(
            "ativo"
        );


        /*
            Bola 2 deixa de pulsar.
        */

        refs.bola2.classList.remove(
            "bola-proxima"
        );


        /*
            Bola 2 vira uma memória.
        */

        refs.bola2.classList.add(
            "virando-memoria"
        );


        await esperar(
            520
        );


        /*
            Mesa começa a desaparecer.
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
            Capítulo II aparece.
        */

        capitulo2.classList.add(
            "ativo"
        );


        capitulo2.setAttribute(
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
       BOTÃO CONTINUAR
    ===================================================== */

    btnCap2.addEventListener(
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
                etapa === 8
            ) {

                await voltarParaMesa();

                return;
            }


            etapa++;


            /*
                Etapa 3:
                Brasil × Japão.

                Essa parte acontece
                automaticamente.
            */

            if (
                etapa === 3
            ) {

                await mostrarJogo();

                return;
            }


            mostrarEtapa(
                etapa
            );
        }
    );


    /* =====================================================
       RETORNO PARA O MAIN.JS
    ===================================================== */

    return {

        abrir

    };
}