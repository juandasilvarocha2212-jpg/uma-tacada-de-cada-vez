import { esperar } from "../utilidades.js";


/* =====================================================
   CAPÍTULO IV
   O JANTAR
===================================================== */

export function iniciarCapitulo4(
    mesaApi,
    ativarCapitulo5
) {

    const { refs } =
        mesaApi;


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const capitulo4 =
        document.getElementById(
            "capitulo4"
        );


    const cap4Titulo =
        document.getElementById(
            "cap4Titulo"
        );


    const cap4Visual =
        document.getElementById(
            "cap4Visual"
        );


    const cap4Texto =
        document.getElementById(
            "cap4Texto"
        );


    const btnCap4 =
        document.getElementById(
            "btnCap4"
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

        cap4Visual.classList.remove(
            "entrando"
        );


        cap4Visual.innerHTML =
            html;


        void cap4Visual.offsetWidth;


        cap4Visual.classList.add(
            "entrando"
        );
    }


    /* =====================================================
       ATIVAR CAPÍTULO IV
    ===================================================== */

    function ativar() {

        ativoNaMesa =
            true;


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


        numeroCapituloMesa.textContent =
            "CAPÍTULO IV";


        tituloCapituloMesa.innerHTML =
            "O jantar.";


        fraseHistoria.innerHTML = `

            Depois vieram mais algumas noites.

            <br><br>

            Mais conversas.
            Mais sinuca.

            <br><br>

            Até chegar uma noite diferente.

        `;


        instrucaoTacada.textContent =
            "Toque na bola 4";


        instrucaoTacada.classList.add(
            "ativo"
        );


        refs.bola4.style.opacity =
            "1";


        refs.bola4.style.pointerEvents =
            "auto";


        refs.bola4.classList.add(
            "bola-proxima"
        );
    }


    /* =====================================================
       ABRIR CAPÍTULO IV
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


        refs.bola4.classList.remove(
            "bola-proxima"
        );


        refs.bola4.classList.add(
            "virando-memoria-4"
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


        capitulo4.classList.add(
            "ativo"
        );


        capitulo4.setAttribute(
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

        btnCap4.classList.remove(
            "escondido"
        );


        btnCap4.disabled =
            false;


        btnCap4.textContent =
            "Continuar";


        /* =================================================
           ETAPA 0
           PASSAGEM
        ================================================= */

        if (
            n === 0
        ) {

            cap4Titulo.innerHTML =
                "Uma noite diferente.";


            trocarVisual(`

                <div class="cap4-passagem">

                    <div class="cap4-passagem-item">

                        <b>
                            🎱
                        </b>

                        <span>
                            SINUCA
                        </span>

                    </div>


                    <div class="cap4-passagem-item">

                        <b>
                            ✦
                        </b>

                        <span>
                            CONVERSAS
                        </span>

                    </div>


                    <div class="cap4-passagem-item">

                        <b>
                            🍽️
                        </b>

                        <span>
                            JANTAR
                        </span>

                    </div>

                </div>

            `);


            cap4Texto.innerHTML = `

                Depois de mais alguns encontros...

                <br><br>

                eu queria fazer
                uma coisa diferente.

                <br><br>

                <strong>
                    Te levar para jantar.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 1
           PRIMEIRO JANTAR
        ================================================= */

        if (
            n === 1
        ) {

            cap4Titulo.innerHTML =
                "Era algo novo para mim.";


            trocarVisual(`

                <div class="cap4-restaurante">

                    <div class="cap4-luminaria"></div>

                    <div class="cap4-mesa-jantar"></div>

                    <div
                        class="cap4-prato esquerdo"
                    ></div>

                    <div
                        class="cap4-prato direito"
                    ></div>

                    <div
                        class="cap4-copo esquerdo"
                    ></div>

                    <div
                        class="cap4-copo direito"
                    ></div>

                </div>

            `);


            cap4Texto.innerHTML = `

                Era a primeira vez
                que eu ia jantar

                <strong>
                    com alguém que eu realmente gostava.
                </strong>

                <br><br>

                E eu só conseguia pensar
                em fazer tudo dar certo.

            `;
        }


        /* =================================================
           ETAPA 2
           OS DOIS NERVOSOS
        ================================================= */

        if (
            n === 2
        ) {

            cap4Titulo.innerHTML =
                "Só que eu não era o único.";


            trocarVisual(`

                <div class="cap4-nervosismo">

                    <div class="cap4-pessoa nervosa">

                        <span>
                            EU
                        </span>

                    </div>


                    <div class="cap4-pessoa nervosa">

                        <span>
                            VOCÊ
                        </span>

                    </div>

                </div>

            `);


            cap4Texto.innerHTML = `

                Eu estava nervoso.

                <br><br>

                Mas quando a gente chegou,
                ficou bem claro que

                <strong>
                    você também estava.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 3
           ELA FALOU QUE ESTAVA NERVOSA
        ================================================= */

        if (
            n === 3
        ) {

            cap4Titulo.innerHTML =
                "E dessa vez eu tinha certeza.";


            trocarVisual(`

                <div class="cap4-nervosismo">

                    <div class="cap4-pessoa">

                        <span>
                            EU
                        </span>

                    </div>


                    <div class="cap4-pessoa nervosa">

                        <span>
                            VOCÊ
                        </span>

                    </div>

                </div>

            `);


            cap4Texto.innerHTML = `

                Não era coisa da minha cabeça.

                <br><br>

                <strong>
                    Você mesma falou
                    que estava nervosa.
                </strong>

                <br><br>

                E, sinceramente,
                foi uma das coisas
                que mais me marcou naquela noite.

            `;
        }


        /* =================================================
           ETAPA 4
           CONVERSA
        ================================================= */

        if (
            n === 4
        ) {

            cap4Titulo.innerHTML =
                "Aos poucos...";


            trocarVisual(`

                <div class="cap4-restaurante">

                    <div class="cap4-luminaria"></div>

                    <div class="cap4-mesa-jantar"></div>

                    <div
                        class="cap4-prato esquerdo"
                    ></div>

                    <div
                        class="cap4-prato direito"
                    ></div>

                    <div
                        class="cap4-copo esquerdo"
                    ></div>

                    <div
                        class="cap4-copo direito"
                    ></div>

                </div>

            `);


            cap4Texto.innerHTML = `

                A gente foi conversando.

                <br><br>

                E eu fui conhecendo
                ainda mais aquele seu jeito

                <strong>
                    que nem todo mundo vê.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 5
           APREÇO
        ================================================= */

        if (
            n === 5
        ) {

            cap4Titulo.innerHTML =
                "E alguma coisa mudou.";


            trocarVisual(`

                <div class="cap4-apreco">

                    <div
                        class="cap4-apreco-centro"
                    ></div>

                </div>

            `);


            cap4Texto.innerHTML = `

                Eu já gostava
                de estar com você.

                <br><br>

                Mas naquela noite
                foi diferente.

                <br><br>

                <strong>
                    Eu senti um apreço enorme por você.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 6
           TUDO DEU CERTO
        ================================================= */

        if (
            n === 6
        ) {

            cap4Titulo.innerHTML =
                "O jantar tinha dado certo.";


            trocarVisual(`

                <div class="cap4-restaurante">

                    <div class="cap4-luminaria"></div>

                    <div class="cap4-mesa-jantar"></div>

                    <div
                        class="cap4-prato esquerdo"
                    ></div>

                    <div
                        class="cap4-prato direito"
                    ></div>

                </div>

            `);


            cap4Texto.innerHTML = `

                Eu estava feliz.

                <br><br>

                Agora era só
                te levar para casa.

                <br><br>

                <strong>
                    O que poderia dar errado?
                </strong>

            `;
        }


        /* =================================================
           ETAPA 7
           GASOLINA
        ================================================= */

        if (
            n === 7
        ) {

            cap4Titulo.innerHTML =
                "Bom...";


            trocarVisual(`

                <div class="cap4-combustivel">

                    <div class="cap4-medidor">

                        <div
                            class="cap4-nivel"
                        ></div>

                    </div>


                    <div class="cap4-marcas">

                        <span>
                            E
                        </span>

                        <span>
                            F
                        </span>

                    </div>

                </div>

            `);


            cap4Texto.innerHTML = `

                No caminho
                para te levar para casa...

                <br><br>

                <strong>
                    a gasolina acabou.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 8
           ELA ESPERANDO NO CARRO
        ================================================= */

        if (
            n === 8
        ) {

            cap4Titulo.innerHTML =
                "No meio da rua.";


            trocarVisual(`

                <div class="cap4-carro-parado">

                    <div
                        class="cap4-esperando"
                    ></div>

                    <div
                        class="cap4-correndo"
                    >
                        🏃
                    </div>

                </div>

            `);


            cap4Texto.innerHTML = `

                Depois de eu passar
                a noite inteira tentando
                fazer tudo dar certo...

                <br><br>

                você ficou me esperando
                dentro do carro...

                <br><br>

                <strong>
                    enquanto eu fui correndo
                    atrás de gasolina.
                </strong>

            `;
        }


        /* =================================================
           ETAPA 9
           IMPERFEITO
        ================================================= */

        if (
            n === 9
        ) {

            cap4Titulo.innerHTML =
                "Não saiu como eu planejei.";


            trocarVisual(`

                <div class="cap4-apreco">

                    <div
                        class="cap4-apreco-centro"
                    ></div>

                </div>

            `);


            cap4Texto.innerHTML = `

                Definitivamente
                não saiu tudo
                como eu tinha planejado.

                <br><br>

                Mas talvez seja justamente
                por isso que eu lembre
                tanto daquela noite.

            `;
        }


        /* =================================================
           ETAPA 10
           FAVORITO
        ================================================= */

        if (
            n === 10
        ) {

            cap4Titulo.innerHTML =
                "E até hoje...";


            trocarVisual(`

                <div class="cap4-final">

                    <span>
                        IV
                    </span>

                </div>

            `);


            cap4Texto.innerHTML = `

                Entre todos os encontros
                que a gente teve até aqui...

                <br><br>

                <strong>
                    esse ainda é o meu favorito.
                </strong>

            `;


            btnCap4.textContent =
                "Voltar à mesa";
        }
    }


    /* =====================================================
       VOLTAR PARA A MESA
       E ATIVAR CAPÍTULO V
    ===================================================== */

    async function voltarParaMesa() {

        if (
            animando
        ) {

            return;
        }


        animando =
            true;


        /*
            Capítulo IV desaparece.
        */

        capitulo4.classList.add(
            "saindo"
        );


        await esperar(
            600
        );


        capitulo4.classList.remove(
            "ativo",
            "saindo"
        );


        capitulo4.setAttribute(
            "aria-hidden",
            "true"
        );


        /*
            Bola 4 terminou sua função.
        */

        refs.bola4.style.opacity =
            "0";


        refs.bola4.style.pointerEvents =
            "none";


        refs.bola4.classList.remove(
            "virando-memoria-4"
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
            Ativa o Capítulo V.

            Isso altera automaticamente
            os textos da mesa
            e faz a bola 5 pulsar.
        */

        if (
            ativarCapitulo5
        ) {

            ativarCapitulo5();

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

    btnCap4.addEventListener(
        "click",
        async () => {

            if (
                animando
            ) {

                return;
            }


            /*
                Última etapa.
            */

            if (
                etapa === 10
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
       BOLA 4
    ===================================================== */

    refs.bola4.addEventListener(
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