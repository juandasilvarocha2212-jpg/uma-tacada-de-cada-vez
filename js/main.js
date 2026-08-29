import { esperar } from "./utilidades.js";

import { criarMesa } from "./mesa.js";

import { criarMusica } from "./musica.js";

import { iniciarCapitulo1 } from "./capitulos/capitulo1.js";
import { iniciarCapitulo2 } from "./capitulos/capitulo2.js";
import { iniciarCapitulo3 } from "./capitulos/capitulo3.js";
import { iniciarCapitulo4 } from "./capitulos/capitulo4.js";
import { iniciarCapitulo5 } from "./capitulos/capitulo5.js";
import { iniciarCapitulo6 } from "./capitulos/capitulo6.js";
import { iniciarCapitulo7 } from "./capitulos/capitulo7.js";
import { iniciarCapitulo8 } from "./capitulos/capitulo8.js";
import { iniciarCapitulo9 } from "./capitulos/capitulo9.js";
import { iniciarCapitulo10 } from "./capitulos/capitulo10.js";


/* =====================================================
   CARREGAR HTML
===================================================== */

async function carregarHTML(
    caminho
) {

    const resposta =
        await fetch(
            caminho
        );


    if (
        !resposta.ok
    ) {

        throw new Error(
            `Não foi possível carregar ${caminho}`
        );

    }


    return resposta.text();
}


/* =====================================================
   INICIAR SITE
===================================================== */

async function iniciarSite() {

    const app =
        document.getElementById(
            "app"
        );


    const abertura =
        document.querySelector(
            ".abertura"
        );


    const btnComecar =
        document.getElementById(
            "btnComecar"
        );


    /* =================================================
       CARREGAR CAPÍTULOS
    ================================================= */

    const [

        htmlCap1,
        htmlCap2,
        htmlCap3,
        htmlCap4,
        htmlCap5,
        htmlCap6,
        htmlCap7,
        htmlCap8,
        htmlCap9,
        htmlCap10

    ] =
        await Promise.all([

            carregarHTML(
                "capitulos/capitulo1.html"
            ),

            carregarHTML(
                "capitulos/capitulo2.html"
            ),

            carregarHTML(
                "capitulos/capitulo3.html"
            ),

            carregarHTML(
                "capitulos/capitulo4.html"
            ),

            carregarHTML(
                "capitulos/capitulo5.html"
            ),

            carregarHTML(
                "capitulos/capitulo6.html"
            ),

            carregarHTML(
                "capitulos/capitulo7.html"
            ),

            carregarHTML(
                "capitulos/capitulo8.html"
            ),

            carregarHTML(
                "capitulos/capitulo9.html"
            ),

            carregarHTML(
                "capitulos/capitulo10.html"
            )

        ]);


    app.innerHTML =

        htmlCap1 +
        htmlCap2 +
        htmlCap3 +
        htmlCap4 +
        htmlCap5 +
        htmlCap6 +
        htmlCap7 +
        htmlCap8 +
        htmlCap9 +
        htmlCap10;


    /* =================================================
       MESA
    ================================================= */

    const mesaApi =
        criarMesa();


    /* =================================================
       MÚSICA
    ================================================= */

    const musicaApi =
        criarMusica();


    /* =================================================
       CAPÍTULO X
    ================================================= */

    const capitulo10 =
        iniciarCapitulo10(
            mesaApi,
            musicaApi
        );


    /*
        Sempre que o Capítulo X for ativado:

        Foi Assim desaparece
        e Giz começa.
    */

    function ativarCapitulo10() {

        musicaApi.tocarCapitulo10();


        capitulo10.ativar();
    }


    /* =================================================
       CAPÍTULO IX
    ================================================= */

    const capitulo9 =
        iniciarCapitulo9(

            mesaApi,

            ativarCapitulo10

        );


    /*
        Sempre que o Capítulo IX for ativado:

        instrumental desaparece
        e Foi Assim começa.
    */

    function ativarCapitulo9() {

        musicaApi.tocarCapitulo9();


        capitulo9.ativar();
    }


    /* =================================================
       CAPÍTULO VIII
    ================================================= */

    const capitulo8 =
        iniciarCapitulo8(

            mesaApi,

            ativarCapitulo9

        );


    /* =================================================
       CAPÍTULO VII
    ================================================= */

    const capitulo7 =
        iniciarCapitulo7(

            mesaApi,

            capitulo8.ativar

        );


    /* =================================================
       CAPÍTULO VI
    ================================================= */

    const capitulo6 =
        iniciarCapitulo6(

            mesaApi,

            capitulo7.ativar

        );


    /* =================================================
       CAPÍTULO V
    ================================================= */

    const capitulo5 =
        iniciarCapitulo5(

            mesaApi,

            capitulo6.ativar

        );


    /* =================================================
       CAPÍTULO IV
    ================================================= */

    const capitulo4 =
        iniciarCapitulo4(

            mesaApi,

            capitulo5.ativar

        );


    /* =================================================
       CAPÍTULO III
    ================================================= */

    const capitulo3 =
        iniciarCapitulo3(

            mesaApi,

            capitulo4.ativar

        );


    /* =================================================
       CAPÍTULO II
    ================================================= */

    const capitulo2 =
        iniciarCapitulo2(

            mesaApi,

            capitulo3.ativar

        );


    /* =================================================
       CAPÍTULO I
    ================================================= */

    iniciarCapitulo1(

        mesaApi,

        capitulo2.abrir

    );


    /* =====================================================
       MODO DE TESTE
    ===================================================== */

    const parametros =
        new URLSearchParams(
            window.location.search
        );


    const capTeste =
        parametros.get(
            "cap"
        );


    if (
        capTeste
    ) {

        abertura.style.display =
            "none";


        mesaApi.refs.sinuca.classList.add(
            "ativo"
        );


        mesaApi.refs.sinuca.setAttribute(
            "aria-hidden",
            "false"
        );


        await new Promise(
            resolve =>
                requestAnimationFrame(
                    resolve
                )
        );


        mesaApi.prepararPrimeiraTacada();


        mesaApi.refs.linhaMira.classList.remove(
            "visivel"
        );


        mesaApi.refs.taco.classList.remove(
            "visivel"
        );


        const instrucaoTacada =
            document.getElementById(
                "instrucaoTacada"
            );


        instrucaoTacada.classList.remove(
            "ativo"
        );


        /*
            No modo de teste o navegador pode
            bloquear autoplay.

            Então a música começa no primeiro
            toque/click na página.
        */

        document.addEventListener(

            "pointerdown",

            () => {

                /*
                    Capítulo IX
                */

                if (
                    capTeste === "9"
                ) {

                    musicaApi.tocarCapitulo9();

                    return;
                }


                /*
                    Capítulo X
                */

                if (
                    capTeste === "10"
                ) {

                    musicaApi.tocarCapitulo10();

                    return;
                }


                /*
                    Capítulos anteriores
                */

                musicaApi.iniciarInstrumental();

            },

            {
                once: true
            }

        );


        /* =================================================
           CAPÍTULO 3
        ================================================= */

        if (
            capTeste === "3"
        ) {

            prepararBolasParaTeste(
                mesaApi,
                3
            );


            capitulo3.ativar();


            return;
        }


        /* =================================================
           CAPÍTULO 4
        ================================================= */

        if (
            capTeste === "4"
        ) {

            prepararBolasParaTeste(
                mesaApi,
                4
            );


            capitulo4.ativar();


            return;
        }


        /* =================================================
           CAPÍTULO 5
        ================================================= */

        if (
            capTeste === "5"
        ) {

            prepararBolasParaTeste(
                mesaApi,
                5
            );


            capitulo5.ativar();


            return;
        }


        /* =================================================
           CAPÍTULO 6
        ================================================= */

        if (
            capTeste === "6"
        ) {

            prepararBolasParaTeste(
                mesaApi,
                6
            );


            capitulo6.ativar();


            return;
        }


        /* =================================================
           CAPÍTULO 7
        ================================================= */

        if (
            capTeste === "7"
        ) {

            prepararBolasParaTeste(
                mesaApi,
                7
            );


            capitulo7.ativar();


            return;
        }


        /* =================================================
           CAPÍTULO 8
        ================================================= */

        if (
            capTeste === "8"
        ) {

            prepararBolasParaTeste(
                mesaApi,
                8
            );


            capitulo8.ativar();


            return;
        }


        /* =================================================
           CAPÍTULO 9
        ================================================= */

        if (
            capTeste === "9"
        ) {

            prepararBolasParaTeste(
                mesaApi,
                9
            );


            capitulo9.ativar();


            return;
        }


        /* =================================================
           CAPÍTULO 10
        ================================================= */

        if (
            capTeste === "10"
        ) {

            prepararBolasParaTeste(
                mesaApi,
                10
            );


            capitulo10.ativar();


            return;
        }


        console.warn(
            `Capítulo de teste "${capTeste}" não existe.`
        );


        window.location.href =
            window.location.pathname;


        return;
    }


    /* =====================================================
       FUNCIONAMENTO NORMAL
    ===================================================== */

    btnComecar.addEventListener(
        "click",
        async () => {

            /*
                ==========================================
                COMEÇAR INSTRUMENTAL
                ==========================================

                O play acontece diretamente no clique
                para não ser bloqueado pelo navegador.

                O musica.js cuida do fade:

                0% -> 16% em 8 segundos.
            */

            musicaApi.iniciarInstrumental();


            abertura.classList.add(
                "sumindo"
            );


            await esperar(
                650
            );


            mesaApi.refs.sinuca.classList.add(
                "ativo"
            );


            mesaApi.refs.sinuca.setAttribute(
                "aria-hidden",
                "false"
            );


            await new Promise(
                resolve =>
                    requestAnimationFrame(
                        resolve
                    )
            );


            mesaApi.prepararPrimeiraTacada();


            await esperar(
                950
            );


            mesaApi.refs.linhaMira.classList.add(
                "visivel"
            );


            mesaApi.refs.taco.classList.add(
                "visivel"
            );


            await esperar(
                400
            );


            const instrucaoTacada =
                document.getElementById(
                    "instrucaoTacada"
                );


            instrucaoTacada.classList.add(
                "ativo"
            );

        }
    );
}


/* =====================================================
   PREPARAR MESA PARA TESTE
===================================================== */

function prepararBolasParaTeste(
    mesaApi,
    capitulo
) {

    const { refs } =
        mesaApi;


    /* =================================================
       BOLA BRANCA
    ================================================= */

    refs.bolaBranca.style.opacity =
        "0";


    refs.bolaBranca.style.pointerEvents =
        "none";


    /* =================================================
       BOLA 1
    ================================================= */

    if (
        capitulo > 1
    ) {

        refs.bola1.style.opacity =
            "0";


        refs.bola1.style.pointerEvents =
            "none";

    }


    /* =================================================
       BOLA 2
    ================================================= */

    if (
        capitulo > 2
    ) {

        refs.bola2.style.opacity =
            "0";


        refs.bola2.style.pointerEvents =
            "none";

    }


    /* =================================================
       BOLA 3
    ================================================= */

    if (
        capitulo > 3
    ) {

        refs.bola3.style.opacity =
            "0";


        refs.bola3.style.pointerEvents =
            "none";

    }


    /* =================================================
       BOLA 4
    ================================================= */

    if (
        capitulo > 4
    ) {

        refs.bola4.style.opacity =
            "0";


        refs.bola4.style.pointerEvents =
            "none";

    }


    /* =================================================
       BOLA 5
    ================================================= */

    if (
        capitulo > 5
    ) {

        refs.bola5.style.opacity =
            "0";


        refs.bola5.style.pointerEvents =
            "none";

    }


    /* =================================================
       BOLA 6
    ================================================= */

    if (
        capitulo > 6
    ) {

        refs.bola6.style.opacity =
            "0";


        refs.bola6.style.pointerEvents =
            "none";

    }


    /* =================================================
       BOLA 7
    ================================================= */

    if (
        capitulo > 7
    ) {

        refs.bola7.style.opacity =
            "0";


        refs.bola7.style.pointerEvents =
            "none";

    }


    /* =================================================
       BOLA 8
    ================================================= */

    if (
        capitulo > 8
    ) {

        refs.bola8.style.opacity =
            "0";


        refs.bola8.style.pointerEvents =
            "none";

    }


    /* =================================================
       BOLA 9
    ================================================= */

    if (
        capitulo > 9
    ) {

        refs.bola9.style.opacity =
            "0";


        refs.bola9.style.pointerEvents =
            "none";

    }


    /* =================================================
       REMOVER DESTAQUES
    ================================================= */

    refs.bola2.classList.remove(
        "bola-proxima"
    );


    refs.bola3.classList.remove(
        "bola-proxima"
    );


    refs.bola4.classList.remove(
        "bola-proxima"
    );


    refs.bola5.classList.remove(
        "bola-proxima"
    );


    refs.bola6.classList.remove(
        "bola-proxima"
    );


    refs.bola7.classList.remove(
        "bola-proxima"
    );


    refs.bola8.classList.remove(
        "bola-proxima"
    );


    refs.bola9.classList.remove(
        "bola-proxima"
    );


    refs.bola10.classList.remove(
        "bola-proxima"
    );
}


/* =====================================================
   INICIAR
===================================================== */

iniciarSite().catch(
    erro => {

        console.error(
            erro
        );


        const app =
            document.getElementById(
                "app"
            );


        app.innerHTML = `

            <div class="erro-carregamento">

                Não foi possível carregar o site.

                <br><br>

                Abra o projeto usando o

                <strong>
                    Live Server
                </strong>

                no VS Code.

            </div>

        `;

    }
);