/* =====================================================
   SISTEMA DE MÚSICA DO SITE

   CAPÍTULOS I - VIII
   -> instrumental.mp3

   CAPÍTULO IX
   -> foi-assim.mp3

   CAPÍTULO X
   -> giz.mp3

   Nenhuma música fica em loop.
===================================================== */

export function criarMusica() {

    /* =================================================
       ÁUDIOS
    ================================================= */

    const instrumental =
        new Audio(
            "assets/audio/instrumental.mp3"
        );


    const foiAssim =
        new Audio(
            "assets/audio/foi-assim.mp3"
        );


    const giz =
        new Audio(
            "assets/audio/giz.mp3"
        );


    const audios = [
        instrumental,
        foiAssim,
        giz
    ];


    /* =================================================
       CONFIGURAÇÃO
    ================================================= */

    audios.forEach(
        audio => {

            audio.preload =
                "auto";


            /*
                IMPORTANTE:

                Nenhuma música repete.
            */

            audio.loop =
                false;


            audio.volume =
                0;

        }
    );


    /* =================================================
       VOLUMES
    ================================================= */

    /*
        Instrumental:

        começa em 0 e sobe lentamente
        até um volume ambiente.
    */

    const VOLUME_INSTRUMENTAL =
        0.16;


    /*
        Foi Assim ganha um pouco
        mais de presença.
    */

    const VOLUME_FOI_ASSIM =
        0.20;


    /*
        Giz fica levemente mais presente
        no capítulo final.
    */

    const VOLUME_GIZ =
        0.22;


    /*
        Volume quase silencioso
        para "Agora olha para mim."
    */

    const VOLUME_FINAL =
        0.025;


    /* =================================================
       ESTADO
    ================================================= */

    let faixaAtual =
        null;


    const fades =
        new Map();


    /* =================================================
       QUANDO UMA MÚSICA TERMINAR
    ================================================= */

    audios.forEach(
        audio => {

            audio.addEventListener(
                "ended",
                () => {

                    audio.volume =
                        0;


                    if (
                        faixaAtual === audio
                    ) {

                        faixaAtual =
                            null;
                    }

                }
            );

        }
    );


    /* =================================================
       CANCELAR FADE
    ================================================= */

    function cancelarFade(
        audio
    ) {

        const fadeAtual =
            fades.get(
                audio
            );


        if (
            !fadeAtual
        ) {

            return;
        }


        cancelAnimationFrame(
            fadeAtual.frame
        );


        fades.delete(
            audio
        );


        /*
            Resolve a Promise antiga para
            não deixar nenhuma função presa.
        */

        fadeAtual.resolve();
    }


    /* =================================================
       FADE SUAVE
    ================================================= */

    function fade(
        audio,
        volumeDestino,
        duracao
    ) {

        cancelarFade(
            audio
        );


        volumeDestino =
            Math.max(
                0,
                Math.min(
                    1,
                    volumeDestino
                )
            );


        if (
            duracao <= 0
        ) {

            audio.volume =
                volumeDestino;


            return Promise.resolve();
        }


        return new Promise(
            resolve => {

                const volumeInicial =
                    audio.volume;


                const inicio =
                    performance.now();


                const estado = {

                    frame: null,

                    resolve

                };


                fades.set(
                    audio,
                    estado
                );


                function animar(
                    agora
                ) {

                    const progresso =
                        Math.min(

                            (
                                agora -
                                inicio
                            ) /
                            duracao,

                            1

                        );


                    /*
                        Ease suave.

                        Começa devagar,
                        cresce naturalmente
                        e desacelera perto do final.
                    */

                    const suave =

                        1 -

                        Math.pow(
                            1 - progresso,
                            3
                        );


                    const novoVolume =

                        volumeInicial +

                        (
                            volumeDestino -
                            volumeInicial
                        ) *

                        suave;


                    audio.volume =
                        Math.max(

                            0,

                            Math.min(
                                1,
                                novoVolume
                            )

                        );


                    if (
                        progresso <
                        1
                    ) {

                        estado.frame =
                            requestAnimationFrame(
                                animar
                            );


                        return;
                    }


                    audio.volume =
                        volumeDestino;


                    fades.delete(
                        audio
                    );


                    resolve();
                }


                estado.frame =
                    requestAnimationFrame(
                        animar
                    );

            }
        );
    }


    /* =================================================
       TOCAR COM SEGURANÇA
    ================================================= */

    async function tocar(
        audio
    ) {

        try {

            await audio.play();


            return true;

        }

        catch (
            erro
        ) {

            /*
                Isso pode acontecer se o navegador
                ainda não recebeu uma interação
                do usuário.

                No funcionamento normal,
                começaremos a música pelo botão
                "Começar".
            */

            console.warn(
                "O navegador bloqueou temporariamente o áudio.",
                erro
            );


            return false;
        }
    }


    /* =================================================
       PARAR UMA FAIXA
    ================================================= */

    function parar(
        audio
    ) {

        cancelarFade(
            audio
        );


        audio.pause();


        audio.volume =
            0;
    }


    /* =================================================
       INSTRUMENTAL
       CAPÍTULOS I - VIII
    ================================================= */

    async function iniciarInstrumental() {

        /*
            Se já estiver tocando,
            não começa novamente.
        */

        if (
            faixaAtual === instrumental &&
            !instrumental.paused
        ) {

            return;
        }


        /*
            Garantimos que as outras
            duas estejam desligadas.
        */

        parar(
            foiAssim
        );


        parar(
            giz
        );


        instrumental.currentTime =
            0;


        instrumental.volume =
            0;


        const iniciou =
            await tocar(
                instrumental
            );


        if (
            !iniciou
        ) {

            return;
        }


        faixaAtual =
            instrumental;


        /*
            A música entra MUITO suavemente.

            0% -> 16%

            durante 8 segundos.
        */

        await fade(

            instrumental,

            VOLUME_INSTRUMENTAL,

            8000

        );
    }


    /* =================================================
       CAPÍTULO IX

       INSTRUMENTAL -> FOI ASSIM
    ================================================= */

    async function tocarCapitulo9() {

        /*
            Se Foi Assim já estiver tocando,
            não reinicia.
        */

        if (
            faixaAtual === foiAssim &&
            !foiAssim.paused
        ) {

            return;
        }


        cancelarFade(
            foiAssim
        );


        foiAssim.currentTime =
            0;


        foiAssim.volume =
            0;


        const iniciou =
            await tocar(
                foiAssim
            );


        if (
            !iniciou
        ) {

            return;
        }


        const anterior =
            faixaAtual;


        faixaAtual =
            foiAssim;


        const transicoes =
            [];


        /*
            Foi Assim começa a aparecer.
        */

        transicoes.push(

            fade(

                foiAssim,

                VOLUME_FOI_ASSIM,

                4500

            )

        );


        /*
            A música anterior desaparece
            ao mesmo tempo.
        */

        if (
            anterior &&
            anterior !== foiAssim &&
            !anterior.paused
        ) {

            transicoes.push(

                fade(
                    anterior,
                    0,
                    3500
                ).then(
                    () => {

                        anterior.pause();


                        anterior.volume =
                            0;

                    }
                )

            );

        }


        await Promise.all(
            transicoes
        );
    }


    /* =================================================
       CAPÍTULO X

       FOI ASSIM -> GIZ
    ================================================= */

    async function tocarCapitulo10() {

        /*
            Se Giz já estiver tocando,
            não reinicia.
        */

        if (
            faixaAtual === giz &&
            !giz.paused
        ) {

            return;
        }


        cancelarFade(
            giz
        );


        giz.currentTime =
            0;


        giz.volume =
            0;


        const iniciou =
            await tocar(
                giz
            );


        if (
            !iniciou
        ) {

            return;
        }


        const anterior =
            faixaAtual;


        faixaAtual =
            giz;


        const transicoes =
            [];


        /*
            Giz entra lentamente.
        */

        transicoes.push(

            fade(

                giz,

                VOLUME_GIZ,

                4500

            )

        );


        /*
            Foi Assim desaparece.
        */

        if (
            anterior &&
            anterior !== giz &&
            !anterior.paused
        ) {

            transicoes.push(

                fade(
                    anterior,
                    0,
                    3500
                ).then(
                    () => {

                        anterior.pause();


                        anterior.volume =
                            0;

                    }
                )

            );

        }


        await Promise.all(
            transicoes
        );
    }


    /* =================================================
       FINAL DO CAPÍTULO X

       GIZ -> QUASE SILÊNCIO
    ================================================= */

    async function abaixarParaFinal() {

        if (
            giz.paused
        ) {

            return;
        }


        await fade(

            giz,

            VOLUME_FINAL,

            5000

        );
    }


    /* =================================================
       SILENCIAR TUDO
    ================================================= */

    async function silenciarTudo(
        duracao = 2000
    ) {

        const tocando =
            audios.filter(
                audio =>
                    !audio.paused
            );


        await Promise.all(

            tocando.map(
                audio =>
                    fade(
                        audio,
                        0,
                        duracao
                    )
            )

        );


        tocando.forEach(
            audio => {

                audio.pause();


                audio.volume =
                    0;

            }
        );


        faixaAtual =
            null;
    }


    /* =================================================
       RETORNO
    ================================================= */

    return {

        /*
            Capítulos I - VIII
        */

        iniciarInstrumental,


        /*
            Capítulo IX
        */

        tocarCapitulo9,


        /*
            Capítulo X
        */

        tocarCapitulo10,


        /*
            Últimos segundos do X
        */

        abaixarParaFinal,


        /*
            Utilidade caso precisemos
            desligar tudo.
        */

        silenciarTudo,


        /*
            Referências para teste.
        */

        refs: {

            instrumental,

            foiAssim,

            giz

        }

    };
}