import {
    limitar,
    normalizar,
    distancia,
    randomEntre,
    lerp,
    easeOutCubic
} from "./utilidades.js";


export function criarMesa() {

    const refs = {

        sinuca:
            document.getElementById(
                "sinuca"
            ),

        mesa:
            document.querySelector(
                ".mesa"
            ),

        feltro:
            document.querySelector(
                ".feltro"
            ),

        bolaBranca:
            document.getElementById(
                "bolaBranca"
            ),

        bola1:
            document.getElementById(
                "bola1"
            ),

        bola2:
            document.getElementById(
                "bola2"
            ),

        bola3:
            document.getElementById(
                "bola3"
            ),

        bola4:
            document.getElementById(
                "bola4"
            ),

        bola5:
            document.getElementById(
                "bola5"
            ),

        bola6:
            document.getElementById(
                "bola6"
            ),

        bola7:
            document.getElementById(
                "bola7"
            ),

        bola8:
            document.getElementById(
                "bola8"
            ),

        bola9:
            document.getElementById(
                "bola9"
            ),

        bola10:
            document.getElementById(
                "bola10"
            ),

        linhaMira:
            document.querySelector(
                ".linha-mira"
            ),

        taco:
            document.getElementById(
                "taco"
            ),

        cacapaSuperiorDireita:
            document.querySelector(
                ".cacapa-2"
            )

    };


    /* =====================================================
       POSIÇÃO EM PORCENTAGEM
    ===================================================== */

    function percentual(
        x,
        y
    ) {

        return {

            x:
                refs.feltro.clientWidth *
                x /
                100,

            y:
                refs.feltro.clientHeight *
                y /
                100

        };
    }


    /* =====================================================
       GIRO DA BOLA

       Somente o número gira.

       A bola inteira não gira para que
       brilho e sombra permaneçam fixos.
    ===================================================== */

    function definirGiro(
        elemento,
        graus
    ) {

        elemento.dataset.giro =
            graus;


        const numero =
            elemento.querySelector(
                "span"
            );


        if (
            numero
        ) {

            numero.style.transform =
                `rotate(${graus}deg)`;

        }
    }


    function obterGiro(
        elemento
    ) {

        const giro =
            parseFloat(
                elemento.dataset.giro
            );


        if (
            Number.isNaN(
                giro
            )
        ) {

            return 0;

        }


        return giro;
    }


    /* =====================================================
       POSICIONAR BOLA
    ===================================================== */

    function posicionarBola(
        elemento,
        ponto
    ) {

        elemento.style.left =
            `${ponto.x}px`;


        elemento.style.top =
            `${ponto.y}px`;


        elemento.style.transform =
            "translate(-50%, -50%)";


        elemento.style.opacity =
            "1";


        elemento.style.filter =
            "none";


        elemento.style.zIndex =
            elemento === refs.bolaBranca
                ? "8"
                : "6";


        definirGiro(
            elemento,
            0
        );
    }


    /* =====================================================
       CENTRO DA BOLA
    ===================================================== */

    function centroDaBola(
        elemento
    ) {

        const rect =
            elemento.getBoundingClientRect();


        const feltroRect =
            refs.feltro.getBoundingClientRect();


        return {

            x:
                rect.left -
                feltroRect.left +
                rect.width / 2,

            y:
                rect.top -
                feltroRect.top +
                rect.height / 2

        };
    }


    /* =====================================================
       CENTRO DA CAÇAPA
    ===================================================== */

    function centroDaCacapa(
        elemento
    ) {

        const rect =
            elemento.getBoundingClientRect();


        const feltroRect =
            refs.feltro.getBoundingClientRect();


        return {

            x:
                rect.left -
                feltroRect.left +
                rect.width / 2,

            y:
                rect.top -
                feltroRect.top +
                rect.height / 2

        };
    }


    /* =====================================================
       POSIÇÃO ALEATÓRIA

       CORREÇÃO:
       impede que alguma bola seja colocada
       em cima da bola branca no celular.
    ===================================================== */

    function sortearPosicao(
        config,
        usados
    ) {

        const ehCelular =
            refs.feltro.clientWidth < 600;


        const tamanhoBola =
            refs.bolaBranca.offsetWidth ||
            31;


        /*
           Distância física suficiente para
           as bordas das bolas não se encostarem.
        */

        const distanciaSemSobrepor =
            tamanhoBola + 6;


        /*
           Mantemos a distância visual original.
        */

        const distanciaMinima =
            ehCelular
                ? Math.max(
                    43,
                    distanciaSemSobrepor
                )
                : 66;


        let melhorPonto =
            null;


        let melhorDistancia =
            -Infinity;


        const totalTentativas =
            ehCelular
                ? 400
                : 200;


        /*
           Primeiro tentamos respeitar exatamente
           a região original daquela bola.
        */

        for (
            let tentativa = 0;
            tentativa < totalTentativas;
            tentativa++
        ) {

            const ponto =
                percentual(

                    randomEntre(
                        config.minX,
                        config.maxX
                    ),

                    randomEntre(
                        config.minY,
                        config.maxY
                    )

                );


            let menorDistancia =
                Infinity;


            usados.forEach(
                outro => {

                    const d =
                        distancia(
                            ponto,
                            outro
                        );


                    if (
                        d <
                        menorDistancia
                    ) {

                        menorDistancia =
                            d;

                    }

                }
            );


            /*
               Posição ideal.
            */

            if (
                menorDistancia >=
                distanciaMinima
            ) {

                return ponto;

            }


            /*
               Guarda a melhor alternativa
               encontrada naquela região.
            */

            if (
                menorDistancia >
                melhorDistancia
            ) {

                melhorDistancia =
                    menorDistancia;


                melhorPonto =
                    ponto;

            }
        }


        /*
           Caso não tenha alcançado os 43 px,
           ainda podemos usar a melhor posição
           se as bolas estiverem fisicamente
           separadas.
        */

        if (
            melhorPonto &&
            melhorDistancia >=
            distanciaSemSobrepor
        ) {

            return melhorPonto;

        }


        /*
           Se a região original estiver realmente
           apertada, procuramos um local livre no
           restante do feltro.

           Isso evita completamente o antigo
           comportamento de simplesmente colocar
           a bola no centro da região mesmo se
           outra bola já estivesse ali.
        */

        for (
            let tentativa = 0;
            tentativa < 500;
            tentativa++
        ) {

            const ponto =
                percentual(

                    randomEntre(
                        12,
                        88
                    ),

                    randomEntre(
                        16,
                        88
                    )

                );


            const livre =
                usados.every(

                    outro =>

                        distancia(
                            ponto,
                            outro
                        ) >=
                        distanciaMinima

                );


            if (
                livre
            ) {

                return ponto;

            }
        }


        /*
           Último plano:
           percorre uma grade e escolhe o ponto
           que estiver mais distante das outras
           bolas.
        */

        let pontoMaisSeguro =
            null;


        let maiorDistancia =
            -Infinity;


        for (
            let x = 14;
            x <= 86;
            x += 4
        ) {

            for (
                let y = 18;
                y <= 86;
                y += 4
            ) {

                const ponto =
                    percentual(
                        x,
                        y
                    );


                let menorDistancia =
                    Infinity;


                usados.forEach(
                    outro => {

                        const d =
                            distancia(
                                ponto,
                                outro
                            );


                        if (
                            d <
                            menorDistancia
                        ) {

                            menorDistancia =
                                d;

                        }

                    }
                );


                if (
                    menorDistancia >
                    maiorDistancia
                ) {

                    maiorDistancia =
                        menorDistancia;


                    pontoMaisSeguro =
                        ponto;

                }
            }
        }


        return pontoMaisSeguro;
    }


    /* =====================================================
       POSICIONAR BOLAS SECUNDÁRIAS
    ===================================================== */

    function posicionarBolasSecundarias(
        reservados
    ) {

        const usados =
            [
                ...reservados
            ];


        const configuracoes =
            [

                {
                    elemento: refs.bola2,
                    minX: 42,
                    maxX: 57,
                    minY: 18,
                    maxY: 31
                },

                {
                    elemento: refs.bola3,
                    minX: 17,
                    maxX: 31,
                    minY: 22,
                    maxY: 39
                },

                {
                    elemento: refs.bola4,
                    minX: 17,
                    maxX: 31,
                    minY: 61,
                    maxY: 78
                },

                {
                    elemento: refs.bola5,
                    minX: 42,
                    maxX: 58,
                    minY: 68,
                    maxY: 82
                },

                {
                    elemento: refs.bola6,
                    minX: 60,
                    maxX: 70,
                    minY: 76,
                    maxY: 86
                },

                {
                    elemento: refs.bola7,
                    minX: 22,
                    maxX: 34,
                    minY: 80,
                    maxY: 88
                },

                {
                    elemento: refs.bola8,
                    minX: 70,
                    maxX: 84,
                    minY: 62,
                    maxY: 78
                },

                {
                    elemento: refs.bola9,
                    minX: 80,
                    maxX: 88,
                    minY: 82,
                    maxY: 88
                },

                {
                    elemento: refs.bola10,
                    minX: 10,
                    maxX: 18,
                    minY: 46,
                    maxY: 55
                }

            ];


        configuracoes.forEach(
            config => {

                if (
                    !config.elemento
                ) {

                    return;

                }


                const ponto =
                    sortearPosicao(
                        config,
                        usados
                    );


                posicionarBola(
                    config.elemento,
                    ponto
                );


                usados.push(
                    ponto
                );

            }
        );
    }


    /* =====================================================
       LINHA DE MIRA
    ===================================================== */

    function ajustarLinha(
        origem,
        destino
    ) {

        const dx =
            destino.x -
            origem.x;


        const dy =
            destino.y -
            origem.y;


        const comprimento =
            Math.hypot(
                dx,
                dy
            );


        const angulo =
            Math.atan2(
                dy,
                dx
            ) *
            180 /
            Math.PI;


        refs.linhaMira.style.left =
            `${origem.x}px`;


        refs.linhaMira.style.top =
            `${origem.y}px`;


        refs.linhaMira.style.width =
            `${comprimento}px`;


        refs.linhaMira.style.transform =
            `rotate(${angulo}deg)`;
    }


    /* =====================================================
       TACO
    ===================================================== */

    function ajustarTaco(
        origem,
        destino
    ) {

        const direcao =
            normalizar(

                destino.x -
                origem.x,

                destino.y -
                origem.y

            );


        const angulo =
            Math.atan2(
                direcao.y,
                direcao.x
            ) *
            180 /
            Math.PI;


        const comprimento =
            limitar(

                refs.feltro.clientWidth *
                0.18,

                80,

                160

            );


        const raio =
            refs.bolaBranca.offsetWidth /
            2;


        const inicio =
            {

                x:
                    origem.x -
                    direcao.x *
                    (
                        comprimento +
                        raio +
                        8
                    ),

                y:
                    origem.y -
                    direcao.y *
                    (
                        comprimento +
                        raio +
                        8
                    )

            };


        refs.taco.style.width =
            `${comprimento}px`;


        refs.taco.style.left =
            `${inicio.x}px`;


        refs.taco.style.top =
            `${inicio.y}px`;


        refs.taco.style.transform =

            `translateY(-50%)
             rotate(${angulo}deg)`;

    }


    /* =====================================================
       CURVA DO REBOTE
    ===================================================== */

    function curvaRebote(
        t
    ) {

        return (

            1.5 * t -

            0.5 *
            t *
            t *
            t

        );
    }


    /* =====================================================
       PREPARAR PRIMEIRA TACADA
    ===================================================== */

    function prepararPrimeiraTacada() {

        const alvo =
            percentual(

                randomEntre(
                    71,
                    76
                ),

                randomEntre(
                    32,
                    39
                )

            );


        posicionarBola(
            refs.bola1,
            alvo
        );


        refs.bola1.classList.add(
            "bola-ativa"
        );


        const impactoTabela =
            {

                x:
                    refs.feltro.clientWidth *
                    0.88,

                y:
                    refs.bola1.offsetHeight /
                    2 +
                    2

            };


        const direcao =
            normalizar(

                impactoTabela.x -
                alvo.x,

                impactoTabela.y -
                alvo.y

            );


        const distanciaBranca =
            refs.feltro.clientWidth *
            0.31;


        const branca =
            {

                x:
                    limitar(

                        alvo.x -
                        direcao.x *
                        distanciaBranca,

                        refs.feltro.clientWidth *
                        0.16,

                        refs.feltro.clientWidth *
                        0.58

                    ),

                y:
                    limitar(

                        alvo.y -
                        direcao.y *
                        distanciaBranca,

                        refs.feltro.clientHeight *
                        0.30,

                        refs.feltro.clientHeight *
                        0.72

                    )

            };


        posicionarBola(
            refs.bolaBranca,
            branca
        );


        /*
           A posição da bola 1 e da branca
           já entram como reservadas.

           Nenhuma outra bola poderá ocupar
           esses pontos.
        */

        posicionarBolasSecundarias(
            [
                alvo,
                branca
            ]
        );


        ajustarLinha(
            branca,
            alvo
        );


        ajustarTaco(
            branca,
            alvo
        );
    }


    /* =====================================================
       PRIMEIRA TACADA
    ===================================================== */

    function animarPrimeiraTacada() {

        return new Promise(
            resolve => {

                const brancaInicio =
                    centroDaBola(
                        refs.bolaBranca
                    );


                const alvoInicio =
                    centroDaBola(
                        refs.bola1
                    );


                const raioBranca =
                    refs.bolaBranca.offsetWidth /
                    2;


                const raioAlvo =
                    refs.bola1.offsetWidth /
                    2;


                const direcao =
                    normalizar(

                        alvoInicio.x -
                        brancaInicio.x,

                        alvoInicio.y -
                        brancaInicio.y

                    );


                const contato =
                    {

                        x:
                            alvoInicio.x -
                            direcao.x *
                            (
                                raioBranca +
                                raioAlvo -
                                0.2
                            ),

                        y:
                            alvoInicio.y -
                            direcao.y *
                            (
                                raioBranca +
                                raioAlvo -
                                0.2
                            )

                    };


                const tabela =
                    {

                        x:
                            refs.feltro.clientWidth *
                            0.88,

                        y:
                            raioAlvo +
                            2

                    };


                const repouso =
                    {

                        x:
                            refs.feltro.clientWidth *
                            0.81,

                        y:
                            refs.feltro.clientHeight *
                            0.26

                    };


                const tempoBranca =
                    780;


                const tempoTabela =
                    880;


                const tempoFollow =
                    180;


                const distanciaAteTabela =
                    distancia(
                        alvoInicio,
                        tabela
                    );


                const distanciaRebote =
                    distancia(
                        tabela,
                        repouso
                    );


                const velocidadeAntesImpacto =

                    distanciaAteTabela /
                    tempoTabela;


                const velocidadeDepoisImpacto =

                    velocidadeAntesImpacto *
                    0.68;


                const tempoReboteCalculado =

                    (
                        distanciaRebote *
                        1.5
                    ) /

                    Math.max(
                        velocidadeDepoisImpacto,
                        0.001
                    );


                const tempoRebote =
                    limitar(

                        tempoReboteCalculado,

                        850,

                        1400

                    );


                const tempoTotal =

                    tempoBranca +
                    tempoTabela +
                    tempoRebote;


                const inicio =
                    performance.now();


                let impactoTabelaFeito =
                    false;


                const giroInicialAlvo =
                    obterGiro(
                        refs.bola1
                    );


                function frame(
                    agora
                ) {

                    const tempo =
                        agora -
                        inicio;


                    /* =====================================
                       BOLA BRANCA
                    ===================================== */

                    if (
                        tempo <
                        tempoBranca
                    ) {

                        const t =
                            limitar(

                                tempo /
                                tempoBranca,

                                0,

                                1

                            );


                        const x =
                            lerp(

                                brancaInicio.x,

                                contato.x,

                                t

                            );


                        const y =
                            lerp(

                                brancaInicio.y,

                                contato.y,

                                t

                            );


                        refs.bolaBranca.style.left =
                            `${x}px`;


                        refs.bolaBranca.style.top =
                            `${y}px`;


                        refs.bolaBranca.style.transform =
                            "translate(-50%, -50%)";

                    }

                    else {

                        const tFollow =
                            limitar(

                                (
                                    tempo -
                                    tempoBranca
                                ) /
                                tempoFollow,

                                0,

                                1

                            );


                        const suave =
                            easeOutCubic(
                                tFollow
                            );


                        refs.bolaBranca.style.left =

                            `${
                                contato.x +
                                direcao.x *
                                4.5 *
                                suave
                            }px`;


                        refs.bolaBranca.style.top =

                            `${
                                contato.y +
                                direcao.y *
                                4.5 *
                                suave
                            }px`;

                    }


                    /* =====================================
                       BOLA 1
                    ===================================== */

                    if (
                        tempo >=
                        tempoBranca
                    ) {

                        const tempoAlvo =

                            tempo -
                            tempoBranca;


                        if (
                            tempoAlvo <
                            tempoTabela
                        ) {

                            const t =
                                limitar(

                                    tempoAlvo /
                                    tempoTabela,

                                    0,

                                    1

                                );


                            const x =
                                lerp(

                                    alvoInicio.x,

                                    tabela.x,

                                    t

                                );


                            const y =
                                lerp(

                                    alvoInicio.y,

                                    tabela.y,

                                    t

                                );


                            refs.bola1.style.left =
                                `${x}px`;


                            refs.bola1.style.top =
                                `${y}px`;


                            refs.bola1.style.transform =
                                "translate(-50%, -50%)";


                            definirGiro(

                                refs.bola1,

                                giroInicialAlvo +
                                900 *
                                t

                            );

                        }

                        else {

                            if (
                                !impactoTabelaFeito
                            ) {

                                impactoTabelaFeito =
                                    true;


                                refs.mesa.classList.remove(
                                    "impacto"
                                );


                                void refs.mesa.offsetWidth;


                                refs.mesa.classList.add(
                                    "impacto"
                                );

                            }


                            const t =
                                limitar(

                                    (
                                        tempoAlvo -
                                        tempoTabela
                                    ) /
                                    tempoRebote,

                                    0,

                                    1

                                );


                            const suave =
                                curvaRebote(
                                    t
                                );


                            const x =
                                lerp(

                                    tabela.x,

                                    repouso.x,

                                    suave

                                );


                            const y =
                                lerp(

                                    tabela.y,

                                    repouso.y,

                                    suave

                                );


                            refs.bola1.style.left =
                                `${x}px`;


                            refs.bola1.style.top =
                                `${y}px`;


                            refs.bola1.style.transform =
                                "translate(-50%, -50%)";


                            definirGiro(

                                refs.bola1,

                                giroInicialAlvo +
                                900 +
                                470 *
                                suave

                            );

                        }
                    }


                    if (
                        tempo <
                        tempoTotal
                    ) {

                        requestAnimationFrame(
                            frame
                        );

                    }

                    else {

                        refs.bolaBranca.style.transform =
                            "translate(-50%, -50%)";


                        refs.bola1.style.transform =
                            "translate(-50%, -50%)";


                        resolve();

                    }
                }


                requestAnimationFrame(
                    frame
                );

            }
        );
    }


    /* =====================================================
       PREPARAR SEGUNDA TACADA
    ===================================================== */

    async function prepararSegundaTacada(
        esperar
    ) {

        refs.sinuca.classList.remove(
            "foco-historia"
        );


        refs.bolaBranca.style.opacity =
            "0";


        await esperar(
            320
        );


        const alvo =
            centroDaBola(
                refs.bola1
            );


        const pocket =
            centroDaCacapa(
                refs.cacapaSuperiorDireita
            );


        const centroMesa =
            {

                x:
                    refs.feltro.clientWidth /
                    2,

                y:
                    refs.feltro.clientHeight /
                    2

            };


        const paraDentro =
            normalizar(

                centroMesa.x -
                pocket.x,

                centroMesa.y -
                pocket.y

            );


        const boca =
            {

                x:
                    pocket.x +
                    paraDentro.x *
                    11,

                y:
                    pocket.y +
                    paraDentro.y *
                    11

            };


        const direcao =
            normalizar(

                boca.x -
                alvo.x,

                boca.y -
                alvo.y

            );


        const distanciaBranca =
            refs.feltro.clientWidth *
            0.24;


        const novaBranca =
            {

                x:
                    limitar(

                        alvo.x -
                        direcao.x *
                        distanciaBranca,

                        refs.feltro.clientWidth *
                        0.18,

                        refs.feltro.clientWidth *
                        0.72

                    ),

                y:
                    limitar(

                        alvo.y -
                        direcao.y *
                        distanciaBranca,

                        refs.feltro.clientHeight *
                        0.26,

                        refs.feltro.clientHeight *
                        0.78

                    )

            };


        posicionarBola(
            refs.bolaBranca,
            novaBranca
        );


        ajustarLinha(
            novaBranca,
            alvo
        );


        ajustarTaco(
            novaBranca,
            alvo
        );


        await esperar(
            100
        );


        refs.bolaBranca.style.opacity =
            "1";


        refs.linhaMira.classList.add(
            "visivel"
        );


        refs.taco.classList.add(
            "visivel"
        );
    }


    /* =====================================================
       SEGUNDA TACADA
    ===================================================== */

    function animarSegundaTacada() {

        return new Promise(
            resolve => {

                const brancaInicio =
                    centroDaBola(
                        refs.bolaBranca
                    );


                const alvoInicio =
                    centroDaBola(
                        refs.bola1
                    );


                const raioBranca =
                    refs.bolaBranca.offsetWidth /
                    2;


                const raioAlvo =
                    refs.bola1.offsetWidth /
                    2;


                const pocket =
                    centroDaCacapa(
                        refs.cacapaSuperiorDireita
                    );


                const centroMesa =
                    {

                        x:
                            refs.feltro.clientWidth /
                            2,

                        y:
                            refs.feltro.clientHeight /
                            2

                    };


                const paraDentro =
                    normalizar(

                        centroMesa.x -
                        pocket.x,

                        centroMesa.y -
                        pocket.y

                    );


                const boca =
                    {

                        x:
                            pocket.x +
                            paraDentro.x *
                            9,

                        y:
                            pocket.y +
                            paraDentro.y *
                            9

                    };


                const fundo =
                    {

                        x:
                            pocket.x,

                        y:
                            pocket.y

                    };


                const direcaoContato =
                    normalizar(

                        alvoInicio.x -
                        brancaInicio.x,

                        alvoInicio.y -
                        brancaInicio.y

                    );


                const contato =
                    {

                        x:
                            alvoInicio.x -
                            direcaoContato.x *
                            (
                                raioBranca +
                                raioAlvo -
                                0.2
                            ),

                        y:
                            alvoInicio.y -
                            direcaoContato.y *
                            (
                                raioBranca +
                                raioAlvo -
                                0.2
                            )

                    };


                const tempoBranca =
                    760;


                const tempoAteBoca =
                    820;


                const tempoQueda =
                    430;


                const tempoFollow =
                    170;


                const tempoTotal =

                    tempoBranca +
                    tempoAteBoca +
                    tempoQueda;


                const inicio =
                    performance.now();


                let entrouNaCacapa =
                    false;


                const giroInicialAlvo =
                    obterGiro(
                        refs.bola1
                    );


                function frame(
                    agora
                ) {

                    const tempo =
                        agora -
                        inicio;


                    /* =====================================
                       BOLA BRANCA
                    ===================================== */

                    if (
                        tempo <
                        tempoBranca
                    ) {

                        const t =
                            limitar(

                                tempo /
                                tempoBranca,

                                0,

                                1

                            );


                        const x =
                            lerp(

                                brancaInicio.x,

                                contato.x,

                                t

                            );


                        const y =
                            lerp(

                                brancaInicio.y,

                                contato.y,

                                t

                            );


                        refs.bolaBranca.style.left =
                            `${x}px`;


                        refs.bolaBranca.style.top =
                            `${y}px`;


                        refs.bolaBranca.style.transform =
                            "translate(-50%, -50%)";

                    }

                    else {

                        const tFollow =
                            limitar(

                                (
                                    tempo -
                                    tempoBranca
                                ) /
                                tempoFollow,

                                0,

                                1

                            );


                        const suave =
                            easeOutCubic(
                                tFollow
                            );


                        refs.bolaBranca.style.left =

                            `${
                                contato.x +
                                direcaoContato.x *
                                4 *
                                suave
                            }px`;


                        refs.bolaBranca.style.top =

                            `${
                                contato.y +
                                direcaoContato.y *
                                4 *
                                suave
                            }px`;

                    }


                    /* =====================================
                       BOLA 1
                    ===================================== */

                    if (
                        tempo >=
                        tempoBranca
                    ) {

                        const tempoAlvo =

                            tempo -
                            tempoBranca;


                        if (
                            tempoAlvo <
                            tempoAteBoca
                        ) {

                            const t =
                                limitar(

                                    tempoAlvo /
                                    tempoAteBoca,

                                    0,

                                    1

                                );


                            const x =
                                lerp(

                                    alvoInicio.x,

                                    boca.x,

                                    t

                                );


                            const y =
                                lerp(

                                    alvoInicio.y,

                                    boca.y,

                                    t

                                );


                            refs.bola1.style.left =
                                `${x}px`;


                            refs.bola1.style.top =
                                `${y}px`;


                            refs.bola1.style.transform =
                                "translate(-50%, -50%)";


                            definirGiro(

                                refs.bola1,

                                giroInicialAlvo +
                                820 *
                                t

                            );

                        }

                        else {

                            if (
                                !entrouNaCacapa
                            ) {

                                entrouNaCacapa =
                                    true;


                                refs.bola1.style.zIndex =
                                    "3";

                            }


                            const t =
                                limitar(

                                    (
                                        tempoAlvo -
                                        tempoAteBoca
                                    ) /
                                    tempoQueda,

                                    0,

                                    1

                                );


                            const queda =
                                t *
                                t;


                            const x =
                                lerp(

                                    boca.x,

                                    fundo.x,

                                    queda

                                );


                            const y =
                                lerp(

                                    boca.y,

                                    fundo.y,

                                    queda

                                );


                            const escala =

                                1 -
                                queda *
                                0.82;


                            let opacidade =
                                1;


                            if (
                                t >
                                0.68
                            ) {

                                opacidade =

                                    1 -

                                    (
                                        t -
                                        0.68
                                    ) /

                                    0.32;

                            }


                            const brilho =

                                1 -
                                queda *
                                0.72;


                            const blur =

                                queda *
                                1.1;


                            refs.bola1.style.left =
                                `${x}px`;


                            refs.bola1.style.top =
                                `${y}px`;


                            refs.bola1.style.opacity =

                                `${
                                    limitar(
                                        opacidade,
                                        0,
                                        1
                                    )
                                }`;


                            refs.bola1.style.filter =

                                `brightness(${brilho})
                                 blur(${blur}px)`;


                            refs.bola1.style.transform =

                                `translate(-50%, -50%)
                                 scale(${escala})`;


                            definirGiro(

                                refs.bola1,

                                giroInicialAlvo +
                                820 +
                                520 *
                                queda

                            );

                        }
                    }


                    if (
                        tempo <
                        tempoTotal
                    ) {

                        requestAnimationFrame(
                            frame
                        );

                    }

                    else {

                        refs.bola1.style.opacity =
                            "0";


                        refs.bolaBranca.style.transform =
                            "translate(-50%, -50%)";


                        resolve();

                    }
                }


                requestAnimationFrame(
                    frame
                );

            }
        );
    }


    /* =====================================================
       RETORNO
    ===================================================== */

    return {

        refs,

        prepararPrimeiraTacada,

        prepararSegundaTacada,

        animarPrimeiraTacada,

        animarSegundaTacada

    };
}