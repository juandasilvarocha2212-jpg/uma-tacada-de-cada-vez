import { esperar } from "../utilidades.js";

export function iniciarCapitulo1(mesaApi, abrirCapitulo2) {
    const { refs } = mesaApi;

    const fraseHistoria = document.getElementById("fraseHistoria");
    const instrucaoTacada = document.getElementById("instrucaoTacada");
    const numeroCapituloMesa = document.getElementById("numeroCapituloMesa");
    const tituloCapituloMesa = document.getElementById("tituloCapituloMesa");

    let estadoTacada = 0;
    let animando = false;
    let esperandoBola2 = false;

    async function mudarFrase(html) {
        fraseHistoria.style.opacity = "0";
        await esperar(250);
        fraseHistoria.innerHTML = html;
        fraseHistoria.classList.remove("entrando");
        void fraseHistoria.offsetWidth;
        fraseHistoria.classList.add("entrando");
        fraseHistoria.style.opacity = "1";
    }

    async function primeiraTacada() {
        if (animando) return;
        animando = true;

        instrucaoTacada.classList.remove("ativo");
        refs.linhaMira.classList.remove("visivel");
        refs.taco.classList.remove("visivel");

        await mesaApi.animarPrimeiraTacada();

        refs.sinuca.classList.add("foco-historia");
        await esperar(450);

        await mudarFrase('Nossa <strong>primeira tentativa</strong> não deu certo.');
        await esperar(1900);

        await mudarFrase('A gente marcou de sair, mas você não conseguiu ir.');
        await esperar(2300);

        await mudarFrase('Mas algumas histórias precisam de uma <strong>segunda tentativa</strong>.');
        await esperar(2100);

        await mudarFrase('Então... <strong>vamos tentar de novo.</strong>');
        await esperar(1100);

        await mesaApi.prepararSegundaTacada(esperar);

        instrucaoTacada.textContent = "Toque novamente";
        instrucaoTacada.classList.add("ativo");

        estadoTacada = 1;
        animando = false;
    }

    async function segundaTacada() {
        if (animando) return;
        animando = true;

        instrucaoTacada.classList.remove("ativo");
        refs.linhaMira.classList.remove("visivel");
        refs.taco.classList.remove("visivel");

        await mesaApi.animarSegundaTacada();

        refs.sinuca.classList.add("foco-historia");
        await esperar(450);

        await mudarFrase('Dessa vez, <strong>deu certo.</strong>');
        await esperar(1900);

        await mudarFrase('E foi assim que o nosso <strong>primeiro encontro</strong> finalmente aconteceu.');
        await esperar(1900);

        await prepararBola2();

        estadoTacada = 2;
        animando = false;
    }

    async function prepararBola2() {
        refs.sinuca.classList.remove("foco-historia");
        refs.bolaBranca.style.opacity = "0";
        refs.bolaBranca.style.pointerEvents = "none";

        numeroCapituloMesa.textContent = "CAPÍTULO II";
        tituloCapituloMesa.innerHTML = "Finalmente<br>aconteceu.";

        await mudarFrase('A segunda tentativa virou a nossa primeira lembrança de verdade.');

        instrucaoTacada.textContent = "Toque na bola 2";
        instrucaoTacada.classList.add("ativo");

        refs.bola2.classList.add("bola-proxima");
        esperandoBola2 = true;
    }

    refs.bolaBranca.addEventListener("click", () => {
        if (!refs.sinuca.classList.contains("ativo")) return;

        if (estadoTacada === 0) primeiraTacada();
        if (estadoTacada === 1) segundaTacada();
    });

    refs.bola2.addEventListener("click", async () => {
        if (!esperandoBola2 || animando) return;

        animando = true;
        esperandoBola2 = false;
        instrucaoTacada.classList.remove("ativo");
        refs.bola2.classList.remove("bola-proxima");
        refs.bola2.classList.add("virando-memoria");

        await esperar(520);
        await abrirCapitulo2();

        animando = false;
    });

    window.addEventListener("resize", () => {
        if (animando) return;
        if (refs.sinuca.classList.contains("ativo") && estadoTacada === 0) {
            mesaApi.prepararPrimeiraTacada();
        }
    });

    return {
        getEstado: () => ({ estadoTacada, animando })
    };
}
