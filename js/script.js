const mensajes = [
    "Initializing Project Together...",
    "Loading memories...",
    "Loading smiles...",
    "Loading hugs...",
    "Searching for Eduardo... ❤️",
    "System Ready."
];

let i = 0;

function escribir() {
    if (i < mensajes.length) {
        document.getElementById("line" + (i + 1)).textContent = mensajes[i];
        i++;
        setTimeout(escribir, 800);
    }
}

escribir();