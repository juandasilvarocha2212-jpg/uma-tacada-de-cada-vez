import { esperar } from "../utilidades.js";


/* =====================================================
   CAPÍTULO VIII
   ESTAR PRESENTE
===================================================== */

export function iniciarCapitulo8(
    mesaApi,
    ativarCapitulo9
) {

    const { refs } =
        mesaApi;


    const capitulo8 =
        document.getElementById(
            "capitulo8"
        );


    const cap8Titulo =
        document.getElementById(
            "cap8Titulo"
        );


    const cap8Visual =
        document.getElementById(
            "cap8Visual"
        );


    const cap8Texto =
        document.getElementById(
            "cap8Texto"
        );


    const btnCap8 =
        document.getElementById(
            "btnCap8"
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

        cap8Visual.classList.remove(
            "entrando"
        );


        cap8Visual.innerHTML =
            html;


        void cap8Visual.offsetWidth;


        cap8Visual.classList.add(
            "entrando"
        );
    }


    /* =====================================================
       ATIVAR NA MESA
    ===================================================== */

    function ativar() {

        ativoNaMesa =
            true;


        numeroCapituloMesa.textContent =
            "CAPÍTULO VIII";


        tituloCapituloMesa.innerHTML =
            "Estar<br>presente.";


        fraseHistoria.innerHTML = `

            Até então,
            muitas das nossas lembranças
            eram felizes.

            <br><br>

            Mas nem todo dia
            precisava ser assim.

        `;


        instrucaoTacada.textContent =
            "Toque na bola 8";


        instrucaoTacada.classList.add(
            "ativo"
        );


        refs.bola8.style.opacity =
            "1";


        refs.bola8.style.pointerEvents =
            "auto";


        refs.bola8.classList.add(
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


        refs.bola8.classList.remove(
            "bola-proxima"
        );


        refs.bola8.classList.add(
            "virando-memoria-8"
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


        capitulo8.classList.add(
            "ativo"
        );


        capitulo8.setAttribute(
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

        btnCap8.textContent =
            "Continuar";


        /* =================================================
           ETAPA 0
           PARQUE À NOITE
        ================================================= */

        if (
            n === 0
        ) {

            cap8Titulo.innerHTML =
                "Estar presente.";


            trocarVisual(`

                <div class="cap8-parque parque-escuro">

                    <div class="cap8-ceu-parque">

                        <span class="estrela-parque ep1"></span>

                        <span class="estrela-parque ep2"></span>

                        <span class="estrela-parque ep3"></span>

                        <span class="estrela-parque ep4"></span>

                        <span class="estrela-parque ep5"></span>

                        <span class="estrela-parque ep6"></span>

                    </div>


                    <div class="cap8-lua">

                        <div class="cap8-cratera c1"></div>

                        <div class="cap8-cratera c2"></div>

                    </div>


                    <div class="cap8-arvore arvore1"></div>

                    <div class="cap8-arvore arvore2"></div>

                    <div class="cap8-arvore arvore3"></div>


                    <div class="cap8-caminho"></div>


                    <div class="cap8-banco"></div>


                    <span class="cap8-vagalume v1"></span>

                    <span class="cap8-vagalume v2"></span>

                </div>

            `);


            cap8Texto.innerHTML = `

                Até então,
                muitas das nossas lembranças
                eram felizes.

                <br><br>

                <strong>

                    Mas nem todo dia
                    precisava ser assim.

                </strong>

            `;
        }


        /* =================================================
           ETAPA 1
           ELA ESTAVA TRISTE
        ================================================= */

        if (
            n === 1
        ) {

            cap8Titulo.innerHTML =
                "Naquele dia, você estava triste.";


            trocarVisual(`

                <div class="cap8-cena-triste">

                    <div class="cap8-nuvem n1"></div>

                    <div class="cap8-nuvem n2"></div>


                    <div class="cap8-silhueta-sozinha">

                        <div class="cap8-cabeca"></div>

                        <div class="cap8-corpo"></div>

                    </div>


                    <div class="cap8-chuva">

                        <span class="chuva1"></span>

                        <span class="chuva2"></span>

                        <span class="chuva3"></span>

                        <span class="chuva4"></span>

                        <span class="chuva5"></span>

                        <span class="chuva6"></span>

                        <span class="chuva7"></span>

                    </div>


                    <div class="cap8-reflexo-chao"></div>

                </div>

            `);


            cap8Texto.innerHTML = `

                Tinha muita coisa
                acontecendo na sua vida.

                <br><br>

                E dava para perceber
                que aquilo estava
                pesando em você.

            `;
        }


        /* =================================================
           ETAPA 2
           NÃO PODIA RESOLVER TUDO
        ================================================= */

        if (
            n === 2
        ) {

            cap8Titulo.innerHTML =
                "Eu não podia resolver tudo.";


            trocarVisual(`

                <div class="cap8-distancia">

                    <div class="cap8-figura figura-eu">

                        <span class="cabeca"></span>

                        <span class="corpo"></span>

                    </div>


                    <div class="cap8-espaco">

                        <span class="linha l1"></span>

                        <span class="linha l2"></span>

                        <span class="linha l3"></span>

                    </div>


                    <div class="cap8-figura figura-ela">

                        <span class="cabeca"></span>

                        <span class="corpo"></span>

                    </div>

                </div>

            `);


            cap8Texto.innerHTML = `

                Eu não podia mudar
                tudo o que estava acontecendo.

                <br><br>

                Não podia simplesmente
                fazer os problemas desaparecerem.

            `;
        }


        /* =================================================
           ETAPA 3
           FICAR AO LADO
        ================================================= */

        if (
            n === 3
        ) {

            cap8Titulo.innerHTML =
                "Mas eu podia estar ali.";


            trocarVisual(`

                <div class="cap8-aproximacao">

                    <div class="cap8-figura figura-eu">

                        <span class="cabeca"></span>

                        <span class="corpo"></span>

                    </div>


                    <div class="cap8-conexao">

                        <span></span>

                    </div>


                    <div class="cap8-figura figura-ela">

                        <span class="cabeca"></span>

                        <span class="corpo"></span>

                    </div>


                    <div class="cap8-luz-conexao"></div>

                </div>

            `);


            cap8Texto.innerHTML = `

                Então eu te ouvi.

                <br><br>

                Conversei com você.

                <br><br>

                <strong>

                    E tentei te apoiar
                    da melhor maneira
                    que eu conseguia.

                </strong>

            `;
        }


        /* =================================================
           ETAPA 4
           BANCO
        ================================================= */

        if (
            n === 4
        ) {

            cap8Titulo.innerHTML =
                "Às vezes, isso é o que importa.";


            trocarVisual(`

                <div class="cap8-banco-cena">

                    <div class="cap8-horizonte"></div>


                    <div class="cap8-figura-banco pessoa1">

                        <div class="cabeca"></div>

                        <div class="corpo"></div>

                    </div>


                    <div class="cap8-figura-banco pessoa2">

                        <div class="cabeca"></div>

                        <div class="corpo"></div>

                    </div>


                    <div class="cap8-banco-grande">

                        <div class="madeira madeira1"></div>

                        <div class="madeira madeira2"></div>

                        <div class="pe pe1"></div>

                        <div class="pe pe2"></div>

                    </div>


                    <span class="cap8-luz-pequena lp1"></span>

                    <span class="cap8-luz-pequena lp2"></span>

                    <span class="cap8-luz-pequena lp3"></span>

                </div>

            `);


            cap8Texto.innerHTML = `

                Nem sempre a gente
                consegue encontrar
                a frase perfeita.

                <br><br>

                Nem sempre existe
                uma solução naquele momento.

                <br><br>

                <strong>

                    Às vezes,
                    só estar presente
                    já significa alguma coisa.

                </strong>

            `;
        }


        /* =================================================
           ETAPA 5
           COMEÇANDO A CLAREAR
        ================================================= */

        if (
            n === 5
        ) {

            cap8Titulo.innerHTML =
                "E aos poucos...";


            trocarVisual(`

                <div class="cap8-parque parque-clareando">

                    <div class="cap8-ceu-parque">

                        <span class="estrela-parque ep1"></span>

                        <span class="estrela-parque ep3"></span>

                        <span class="estrela-parque ep5"></span>

                    </div>


                    <div class="cap8-lua suave"></div>


                    <div class="cap8-arvore arvore1"></div>

                    <div class="cap8-arvore arvore2"></div>

                    <div class="cap8-arvore arvore3"></div>


                    <div class="cap8-caminho iluminado"></div>


                    <div class="cap8-banco"></div>


                    <div class="cap8-claridade"></div>


                    <span class="cap8-vagalume v1"></span>

                    <span class="cap8-vagalume v2"></span>

                    <span class="cap8-vagalume v3"></span>

                    <span class="cap8-vagalume v4"></span>

                </div>

            `);


            cap8Texto.innerHTML = `

                A conversa foi seguindo.

                <br><br>

                O tempo foi passando.

                <br><br>

                E eu consegui perceber
                uma pequena mudança.

            `;
        }


        /* =================================================
           ETAPA 6
           UM POUCO MAIS FELIZ
        ================================================= */

        if (
            n === 6
        ) {

            cap8Titulo.innerHTML =
                "Você estava um pouco mais feliz.";


            trocarVisual(`

                <div class="cap8-sorriso-cena">

                    <div class="cap8-halo-sorriso"></div>


                    <div class="cap8-rosto">

                        <span class="cap8-olho olho-e"></span>

                        <span class="cap8-olho olho-d"></span>


                        <span class="cap8-sobrancelha sobrancelha-e"></span>

                        <span class="cap8-sobrancelha sobrancelha-d"></span>


                        <span class="cap8-sorriso"></span>

                    </div>


                    <span class="cap8-particula p1"></span>

                    <span class="cap8-particula p2"></span>

                    <span class="cap8-particula p3"></span>

                    <span class="cap8-particula p4"></span>

                </div>

            `);


            cap8Texto.innerHTML = `

                Eu sabia que não podia
                resolver tudo o que
                estava acontecendo.

                <br><br>

                <strong>

                    Mas naquele dia
                    eu consegui ver você
                    um pouco mais feliz.

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

            cap8Titulo.innerHTML =
                "E isso ficou comigo.";


            trocarVisual(`

                <div class="cap8-final">

                    <div class="cap8-final-orbita orbita1"></div>

                    <div class="cap8-final-orbita orbita2"></div>


                    <span class="cap8-final-ponto ponto1"></span>

                    <span class="cap8-final-ponto ponto2"></span>


                    <span class="cap8-final-numero">
                        VIII
                    </span>

                </div>

            `);


            cap8Texto.innerHTML = `

                Talvez pareça
                uma lembrança pequena.

                <br><br>

                Mas para mim,
                ela é uma das mais especiais.

                <br><br>

                Porque naquele dia,
                ver você um pouco melhor...

                <br><br>

                <strong>

                    me deixou feliz também.

                </strong>

            `;


            btnCap8.textContent =
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


        capitulo8.classList.add(
            "saindo"
        );


        await esperar(
            600
        );


        capitulo8.classList.remove(
            "ativo",
            "saindo"
        );


        capitulo8.setAttribute(
            "aria-hidden",
            "true"
        );


        refs.bola8.style.opacity =
            "0";


        refs.bola8.style.pointerEvents =
            "none";


        refs.bola8.classList.remove(
            "virando-memoria-8"
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
           CAPÍTULO IX
        ================================================= */

        if (
            ativarCapitulo9
        ) {

            ativarCapitulo9();

        }

        else {

            numeroCapituloMesa.textContent =
                "CAPÍTULO IX";


            tituloCapituloMesa.innerHTML =
                "Foi naquele<br>olhar.";


            fraseHistoria.innerHTML = `

                Eu não lembro
                exatamente em qual
                daqueles dias aconteceu.

                <br><br>

                Mas eu lembro
                perfeitamente daquele olhar.

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

    btnCap8.addEventListener(
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
       BOLA 8
    ===================================================== */

    refs.bola8.addEventListener(
        "click",
        () => {

            abrir();

        }
    );


    return {

        ativar

    };
}