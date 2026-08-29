import { esperar } from "../utilidades.js";


/* =====================================================
   CAPÍTULO VI
   UM POUCO DO MEU MUNDO
===================================================== */

export function iniciarCapitulo6(
    mesaApi,
    ativarCapitulo7
) {

    const { refs } =
        mesaApi;


    const capitulo6 =
        document.getElementById(
            "capitulo6"
        );


    const cap6Titulo =
        document.getElementById(
            "cap6Titulo"
        );


    const cap6Visual =
        document.getElementById(
            "cap6Visual"
        );


    const cap6Texto =
        document.getElementById(
            "cap6Texto"
        );


    const btnCap6 =
        document.getElementById(
            "btnCap6"
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


    function trocarVisual(
        html
    ) {

        cap6Visual.classList.remove(
            "entrando"
        );


        cap6Visual.innerHTML =
            html;


        void cap6Visual.offsetWidth;


        cap6Visual.classList.add(
            "entrando"
        );
    }


    function ativar() {

        ativoNaMesa =
            true;


        numeroCapituloMesa.textContent =
            "CAPÍTULO VI";


        tituloCapituloMesa.innerHTML =
            "Um pouco do<br>meu mundo.";


        fraseHistoria.innerHTML = `

            Até aqui,
            quase todas as nossas lembranças
            eram só nossas.

            <br><br>

            Mas naquele dia
            eu queria uma coisa diferente.

        `;


        instrucaoTacada.textContent =
            "Toque na bola 6";


        instrucaoTacada.classList.add(
            "ativo"
        );


        if (
            refs.bola6
        ) {

            refs.bola6.style.opacity =
                "1";


            refs.bola6.style.pointerEvents =
                "auto";


            refs.bola6.classList.add(
                "bola-proxima"
            );

        }
    }


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


        if (
            refs.bola6
        ) {

            refs.bola6.classList.remove(
                "bola-proxima"
            );


            refs.bola6.classList.add(
                "virando-memoria-6"
            );

        }


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


        capitulo6.classList.add(
            "ativo"
        );


        capitulo6.setAttribute(
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


    function mostrarEtapa(
        n
    ) {

        btnCap6.textContent =
            "Continuar";


        /* =================================================
           0
        ================================================= */

        if (
            n === 0
        ) {

            cap6Titulo.innerHTML =
                "Um pouco do meu mundo.";


            trocarVisual(`

                <div class="cap6-orbita">

                    <div class="cap6-bola">

                        <span>
                            6
                        </span>

                    </div>

                </div>

            `);


            cap6Texto.innerHTML = `

                Até aqui,
                quase todas as nossas lembranças
                eram só nossas.

                <br><br>

                Nossos lugares.

                <br>

                Nossas conversas.

                <br>

                Nossas partidas de sinuca.

            `;
        }


        /* =================================================
           1
        ================================================= */

        if (
            n === 1
        ) {

            cap6Titulo.innerHTML =
                "Mas naquele dia eu queria algo diferente.";


            trocarVisual(`

                <div class="cap6-casa">

                    <div class="cap6-casa-corpo">

                        <div class="cap6-porta"></div>

                    </div>

                </div>

            `);


            cap6Texto.innerHTML = `

                Eu queria que você conhecesse

                <strong>
                    minha família.
                </strong>

            `;
        }


        /* =================================================
           2
        ================================================= */

        if (
            n === 2
        ) {

            cap6Titulo.innerHTML =
                "Eu já tinha visto você nervosa antes.";


            trocarVisual(`

                <div class="cap6-respiracao">

                    <span></span>

                    <span></span>

                    <span></span>

                    <div
                        class="cap6-respiracao-centro"
                    ></div>

                </div>

            `);


            cap6Texto.innerHTML = `

                Mas naquele dia
                estava diferente.

                <br><br>

                Antes de entrar,
                você respirava fundo...

                <br><br>

                <strong>
                    Você estava prestes
                    a conhecer minha família.
                </strong>

            `;
        }


        /* =================================================
           3
        ================================================= */

        if (
            n === 3
        ) {

            cap6Titulo.innerHTML =
                "E então você entrou.";


            trocarVisual(`

                <div class="cap6-familia">

                    <div class="cap6-pessoa"></div>

                    <div class="cap6-pessoa"></div>

                    <div
                        class="cap6-pessoa destaque"
                    ></div>

                    <div class="cap6-pessoa"></div>

                </div>

            `);


            cap6Texto.innerHTML = `

                Você chegou nervosa.

                <br>

                Respirou fundo.

                <br>

                Entrou.

                <br>

                Conheceu todo mundo.

                <br>

                Almoçou com a gente.

                <br><br>

                <strong>
                    ...e continuou nervosa.
                </strong>

            `;
        }


        /* =================================================
           4
        ================================================= */

        if (
            n === 4
        ) {

            cap6Titulo.innerHTML =
                "Mas deu tudo certo.";


            trocarVisual(`

                <div class="cap6-familia">

                    <div class="cap6-pessoa"></div>

                    <div class="cap6-pessoa"></div>

                    <div
                        class="cap6-pessoa destaque"
                    ></div>

                    <div class="cap6-pessoa"></div>

                </div>

            `);


            cap6Texto.innerHTML = `

                Minha família
                te recebeu bem.

                <br><br>

                Conversaram com você,
                quiseram saber mais
                da sua vida...

                <br><br>

                <strong>
                    E eu só observava.
                </strong>

            `;
        }


        /* =================================================
           5
        ================================================= */

        if (
            n === 5
        ) {

            cap6Titulo.innerHTML =
                "Era diferente.";


            trocarVisual(`

                <div class="cap6-casa">

                    <div class="cap6-casa-corpo">

                        <div class="cap6-porta"></div>

                    </div>

                </div>

            `);


            cap6Texto.innerHTML = `

                Até então,
                eu estava acostumado
                a ter você nos nossos rolês.

                <br><br>

                Na sinuca.

                <br>

                No carro.

                <br>

                Nos lugares
                que a gente conhecia.

                <br><br>

                <strong>
                    Dessa vez,
                    você estava dentro
                    de uma parte da minha vida.
                </strong>

            `;
        }


        /* =================================================
           6
        ================================================= */

        if (
            n === 6
        ) {

            cap6Titulo.innerHTML =
                "Depois do almoço...";


            trocarVisual(`

                <div class="cap6-parque">

                    <div class="cap6-lua"></div>

                    <div
                        class="cap6-arvore a"
                    ></div>

                    <div
                        class="cap6-arvore b"
                    ></div>

                    <div
                        class="cap6-arvore c"
                    ></div>

                    <div
                        class="cap6-banco"
                    ></div>

                </div>

            `);


            cap6Texto.innerHTML = `

                Fomos para
                o Parque Central.

                <br><br>

                Sem grandes planos.

                <br><br>

                <strong>
                    Só mais um lugar
                    para ficarmos juntos.
                </strong>

            `;
        }


        /* =================================================
           7
        ================================================= */

        if (
            n === 7
        ) {

            cap6Titulo.innerHTML =
                "E ficou essa lembrança.";


            trocarVisual(`

                <figure class="cap6-foto">

                    <img
                        src="assets/imagens/parque-central.jpg"
                        alt="Foto nossa no Parque Central"
                    >

                    <figcaption>
                        MEMÓRIA 06 · PARQUE CENTRAL
                    </figcaption>

                </figure>

            `);


            cap6Texto.innerHTML = `

                Depois de um dia
                que começou com nervosismo...

            `;
        }


        /* =================================================
           8
        ================================================= */

        if (
            n === 8
        ) {

            cap6Titulo.innerHTML =
                "Terminou assim.";


            trocarVisual(`

                <figure class="cap6-foto cap6-foto-menor">

                    <img
                        src="assets/imagens/parque-central.jpg"
                        alt="Foto nossa no Parque Central"
                    >

                    <figcaption>
                        SÓ NÓS DOIS
                    </figcaption>

                </figure>

            `);


            cap6Texto.innerHTML = `

                <strong>
                    Só nós dois,
                    em mais uma lembrança nossa.
                </strong>

            `;


            btnCap6.textContent =
                "Voltar à mesa";
        }
    }


    async function voltarParaMesa() {

        if (
            animando
        ) {

            return;
        }


        animando =
            true;


        capitulo6.classList.add(
            "saindo"
        );


        await esperar(
            600
        );


        capitulo6.classList.remove(
            "ativo",
            "saindo"
        );


        capitulo6.setAttribute(
            "aria-hidden",
            "true"
        );


        if (
            refs.bola6
        ) {

            refs.bola6.style.opacity =
                "0";


            refs.bola6.style.pointerEvents =
                "none";


            refs.bola6.classList.remove(
                "virando-memoria-6"
            );

        }


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


        if (
            ativarCapitulo7
        ) {

            ativarCapitulo7();

        }

        else {

            numeroCapituloMesa.textContent =
                "CAPÍTULO VII";


            tituloCapituloMesa.innerHTML =
                "Só mais<br>um pouco.";


            fraseHistoria.innerHTML = `

                Depois daquele dia,
                vieram outros.

                <br><br>

                Mais partidas.

                <br>

                Mais conversas.

                <br>

                E uma vontade cada vez maior
                de fazer a noite durar
                só mais um pouco.

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


    btnCap6.addEventListener(
        "click",
        async () => {

            if (
                animando
            ) {

                return;
            }


            if (
                etapa === 8
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


    if (
        refs.bola6
    ) {

        refs.bola6.addEventListener(
            "click",
            () => {

                abrir();

            }
        );
    }


    return {
        ativar
    };
}