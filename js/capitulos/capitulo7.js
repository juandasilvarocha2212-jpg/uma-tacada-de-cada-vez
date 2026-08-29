import { esperar } from "../utilidades.js";


/* =====================================================
   CAPÍTULO VII
   SÓ MAIS UM POUCO
===================================================== */

export function iniciarCapitulo7(
    mesaApi,
    ativarCapitulo8
) {

    const { refs } =
        mesaApi;


    const capitulo7 =
        document.getElementById(
            "capitulo7"
        );


    const cap7Titulo =
        document.getElementById(
            "cap7Titulo"
        );


    const cap7Visual =
        document.getElementById(
            "cap7Visual"
        );


    const cap7Texto =
        document.getElementById(
            "cap7Texto"
        );


    const btnCap7 =
        document.getElementById(
            "btnCap7"
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

        cap7Visual.classList.remove(
            "entrando"
        );


        cap7Visual.innerHTML =
            html;


        void cap7Visual.offsetWidth;


        cap7Visual.classList.add(
            "entrando"
        );
    }


    /* =====================================================
       ATIVAR CAPÍTULO NA MESA
    ===================================================== */

    function ativar() {

        ativoNaMesa =
            true;


        numeroCapituloMesa.textContent =
            "CAPÍTULO VII";


        tituloCapituloMesa.innerHTML =
            "Só mais<br>um pouco.";


        fraseHistoria.innerHTML = `

            Depois daquele dia,
            vieram outros.

            <br><br>

            Mais encontros.

            <br>

            Mais momentos que,
            aos poucos,
            começaram a fazer parte
            da nossa rotina.

        `;


        instrucaoTacada.textContent =
            "Toque na bola 7";


        instrucaoTacada.classList.add(
            "ativo"
        );


        refs.bola7.style.opacity =
            "1";


        refs.bola7.style.pointerEvents =
            "auto";


        refs.bola7.classList.add(
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


        refs.bola7.classList.remove(
            "bola-proxima"
        );


        refs.bola7.classList.add(
            "virando-memoria-7"
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


        capitulo7.classList.add(
            "ativo"
        );


        capitulo7.setAttribute(
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

        btnCap7.textContent =
            "Continuar";


        /* =================================================
           ETAPA 0
        ================================================= */

        if (
            n === 0
        ) {

            cap7Titulo.innerHTML =
                "Só mais um pouco.";


            trocarVisual(`

                <div class="cap7-noites">

                    <div class="cap7-memoria m1"></div>

                    <div class="cap7-memoria m2"></div>

                    <div class="cap7-memoria m3"></div>

                    <div class="cap7-memoria m4"></div>

                </div>

            `);


            cap7Texto.innerHTML = `

                Depois daquele dia,
                vieram outros.

                <br><br>

                Mais encontros.

                <br>

                Mais momentos que,
                aos poucos,
                começaram a fazer parte
                da nossa rotina.

            `;
        }


        /* =================================================
           ETAPA 1
        ================================================= */

        if (
            n === 1
        ) {

            cap7Titulo.innerHTML =
                "Mais algumas partidas.";


            trocarVisual(`

                <div class="cap7-sinuca">

                    <div
                        class="cap7-bola-mini amarela"
                    >
                        1
                    </div>

                    <div
                        class="cap7-bola-mini vinho"
                    >
                        7
                    </div>

                    <div
                        class="cap7-taco-mini"
                    ></div>

                </div>

            `);


            cap7Texto.innerHTML = `

                A sinuca já tinha deixado
                de ser só um programa.

                <br><br>

                <strong>

                    Ela já fazia parte
                    dos nossos encontros.

                </strong>

            `;
        }


        /* =================================================
           ETAPA 2
        ================================================= */

        if (
            n === 2
        ) {

            cap7Titulo.innerHTML =
                "Às vezes um lanche.";


            trocarVisual(`

                <div class="cap7-comida">

                    <div class="cap7-lanche">

                        <div class="cap7-pao cima"></div>

                        <div class="cap7-recheio"></div>

                        <div class="cap7-pao baixo"></div>

                    </div>


                    <div class="cap7-churros">

                        <span></span>

                        <span></span>

                        <span></span>

                    </div>

                </div>

            `);


            cap7Texto.innerHTML = `

                Às vezes um lanche.

                <br><br>

                Às vezes churros.

                <br><br>

                Coisas simples.

                <br><br>

                <strong>

                    Mas eu gostava
                    de viver essas coisas
                    com você.

                </strong>

            `;
        }


        /* =================================================
           ETAPA 3
        ================================================= */

        if (
            n === 3
        ) {

            cap7Titulo.innerHTML =
                "E quando parecia que tinha acabado...";


            trocarVisual(`

                <div class="cap7-carro">

                    <div class="cap7-parabrisa">

                        <span class="estrela e1"></span>

                        <span class="estrela e2"></span>

                        <span class="estrela e3"></span>

                        <span class="estrela e4"></span>

                        <span class="estrela e5"></span>

                    </div>


                    <div class="cap7-banco esquerda"></div>

                    <div class="cap7-banco direita"></div>

                </div>

            `);


            cap7Texto.innerHTML = `

                A gente ainda ficava
                no carro conversando.

                <br><br>

                Sem pressa.

                <br><br>

                <strong>

                    Como se a noite ainda
                    não precisasse terminar.

                </strong>

            `;
        }


        /* =================================================
           ETAPA 4
        ================================================= */

        if (
            n === 4
        ) {

            cap7Titulo.innerHTML =
                "E eu comecei a perceber uma coisa.";


            trocarVisual(`

                <div class="cap7-relogios">

                    <div class="cap7-relogio r1">

                        <div class="ponteiro-hora"></div>

                        <div class="ponteiro-minuto"></div>

                        <div class="centro"></div>

                    </div>


                    <span>
                        →
                    </span>


                    <div class="cap7-relogio r2">

                        <div class="ponteiro-hora"></div>

                        <div class="ponteiro-minuto"></div>

                        <div class="centro"></div>

                    </div>


                    <span>
                        →
                    </span>


                    <div class="cap7-relogio r3">

                        <div class="ponteiro-hora"></div>

                        <div class="ponteiro-minuto"></div>

                        <div class="centro"></div>

                    </div>

                </div>

            `);


            cap7Texto.innerHTML = `

                O tempo passava...

                <br><br>

                <strong>

                    mas eu nunca estava
                    com muita pressa
                    para a noite acabar.

                </strong>

            `;
        }


        /* =================================================
           ETAPA 5
        ================================================= */

        if (
            n === 5
        ) {

            cap7Titulo.innerHTML =
                "Se desse para ficar mais um pouco...";


            trocarVisual(`

                <div class="cap7-tempo">

                    <div class="cap7-circulo-tempo">

                        <div class="cap7-ponteiro"></div>

                        <div class="cap7-centro-tempo"></div>

                    </div>

                </div>

            `);


            cap7Texto.innerHTML = `

                Conversar mais um pouco...

                <br><br>

                ficar parado mais um pouco...

                <br><br>

                <strong>

                    eu queria ficar.

                </strong>

            `;
        }


        /* =================================================
           ETAPA 6
        ================================================= */

        if (
            n === 6
        ) {

            cap7Titulo.innerHTML =
                "Não precisava ter outro lugar para ir.";


            trocarVisual(`

                <div class="cap7-carro cap7-carro-calmo">

                    <div class="cap7-parabrisa">

                        <div class="cap7-ceu-roxo"></div>

                        <span class="estrela e1"></span>

                        <span class="estrela e2"></span>

                        <span class="estrela e3"></span>

                        <span class="estrela e4"></span>

                    </div>

                </div>

            `);


            cap7Texto.innerHTML = `

                Nem outra coisa
                para fazer.

                <br><br>

                Às vezes eu só queria
                prolongar a noite...

            `;
        }


        /* =================================================
           ETAPA 7
        ================================================= */

        if (
            n === 7
        ) {

            cap7Titulo.innerHTML =
                "Só mais um pouco.";


            trocarVisual(`

                <div class="cap7-final">

                    <div class="cap7-final-orbita"></div>

                    <span>
                        VII
                    </span>

                </div>

            `);


            cap7Texto.innerHTML = `

                Porque, no fim,
                prolongar a noite
                significava uma coisa
                bem simples.

                <br><br>

                <strong>

                    Passar mais tempo
                    com você.

                </strong>

            `;


            btnCap7.textContent =
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


        capitulo7.classList.add(
            "saindo"
        );


        await esperar(
            600
        );


        capitulo7.classList.remove(
            "ativo",
            "saindo"
        );


        capitulo7.setAttribute(
            "aria-hidden",
            "true"
        );


        refs.bola7.style.opacity =
            "0";


        refs.bola7.style.pointerEvents =
            "none";


        refs.bola7.classList.remove(
            "virando-memoria-7"
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


        /*
            O CAPÍTULO VIII ainda
            não está sendo feito.

            Quando fizermos,
            essa função já estará pronta
            para conectá-lo.
        */

        if (
            ativarCapitulo8
        ) {

            ativarCapitulo8();

        }

        else {

            numeroCapituloMesa.textContent =
                "CAPÍTULO VIII";


            tituloCapituloMesa.innerHTML =
                "Estar<br>presente.";


            fraseHistoria.innerHTML = `

                Nem todos os dias
                precisavam ser felizes.

                <br><br>

                Às vezes,
                o mais importante
                era simplesmente
                estar ali.

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

    btnCap7.addEventListener(
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
       BOLA 7
    ===================================================== */

    refs.bola7.addEventListener(
        "click",
        () => {

            abrir();

        }
    );


    return {

        ativar

    };
}