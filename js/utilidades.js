export function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function limitar(valor, minimo, maximo) {
    return Math.max(minimo, Math.min(valor, maximo));
}

export function normalizar(x, y) {
    const tamanho = Math.hypot(x, y);
    if (!tamanho) return { x: 0, y: 0 };
    return { x: x / tamanho, y: y / tamanho };
}

export function distancia(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
}

export function randomEntre(min, max) {
    return min + Math.random() * (max - min);
}

export function lerp(a, b, t) {
    return a + (b - a) * t;
}

export function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

export function easeOutQuint(t) {
    return 1 - Math.pow(1 - t, 5);
}
