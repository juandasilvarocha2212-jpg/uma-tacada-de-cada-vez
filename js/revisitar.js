const INICIO_NAMORO =
    new Date(
        "2026-09-05T23:55:00-03:00"
    );


function plural(
    valor,
    singular,
    pluralizado
) {

    return valor === 1
        ? singular
        : pluralizado;
}


function formatarTempo(
    totalMs
) {

    const totalSegundos =
        Math.max(
            0,
            Math.floor(
                totalMs / 1000
            )
        );


    const dias =
        Math.floor(
            totalSegundos / 86400
        );


    const horas =
        Math.floor(
            totalSegundos % 86400 / 3600
        );


    const minutos =
        Math.floor(
            totalSegundos % 3600 / 60
        );


    const segundos =
        totalSegundos % 60;


    return [
        `${dias} ${plural(dias, "dia", "dias")}`,
        `${horas} ${plural(horas, "hora", "horas")}`,
        `${minutos} ${plural(minutos, "minuto", "minutos")}`,
        `${segundos} ${plural(segundos, "segundo", "segundos")}`
    ].join(
        " · "
    );
}


export function configurarContadorNamoro() {

    const contador =
        document.getElementById(
            "contadorNamoro"
        );


    if (
        !contador
    ) {

        return;
    }


    function atualizar() {

        contador.textContent =
            formatarTempo(
                Date.now() - INICIO_NAMORO.getTime()
            );
    }


    atualizar();


    window.setInterval(
        atualizar,
        1000
    );
}


export function configurarRevisitarCapitulos() {

    const btnRevisitar =
        document.getElementById(
            "btnRevisitar"
        );


    const btnFlutuante =
        document.getElementById(
            "btnCapitulosFlutuante"
        );


    const menu =
        document.getElementById(
            "menuCapitulos"
        );


    const btnFechar =
        document.getElementById(
            "btnFecharCapitulos"
        );


    if (
        !menu
    ) {

        return {
            mostrarBotaoFlutuante() {},
            ocultarBotaoFlutuante() {}
        };
    }


    function abrirMenu() {

        menu.hidden =
            false;


        menu.setAttribute(
            "aria-hidden",
            "false"
        );
    }


    function fecharMenu() {

        menu.hidden =
            true;


        menu.setAttribute(
            "aria-hidden",
            "true"
        );
    }


    function revisitarCapitulo(
        capitulo
    ) {

        const destino =
            new URL(
                window.location.href
            );


        destino.searchParams.set(
            "cap",
            capitulo
        );


        destino.searchParams.set(
            "abrir",
            "1"
        );


        window.location.href =
            destino.toString();
    }


    [
        btnRevisitar,
        btnFlutuante
    ].forEach(
        botao => {

            if (
                !botao
            ) {

                return;
            }


            botao.addEventListener(
                "click",
                abrirMenu
            );
        }
    );


    if (
        btnFechar
    ) {

        btnFechar.addEventListener(
            "click",
            fecharMenu
        );
    }


    menu.addEventListener(
        "click",
        evento => {

            if (
                evento.target === menu
            ) {

                fecharMenu();
            }
        }
    );


    document.addEventListener(
        "keydown",
        evento => {

            if (
                evento.key === "Escape" &&
                !menu.hidden
            ) {

                fecharMenu();
            }
        }
    );


    menu.querySelectorAll(
        "[data-capitulo]"
    ).forEach(
        botao => {

            botao.addEventListener(
                "click",
                () => {

                    revisitarCapitulo(
                        botao.dataset.capitulo
                    );
                }
            );
        }
    );


    return {
        mostrarBotaoFlutuante() {

            if (
                btnFlutuante
            ) {

                btnFlutuante.hidden =
                    false;
            }
        },

        ocultarBotaoFlutuante() {

            if (
                btnFlutuante
            ) {

                btnFlutuante.hidden =
                    true;
            }
        }
    };
}
