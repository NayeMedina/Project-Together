const mensajes = [

"[INFO] Initializing Relationship Controller...",

"[ OK ] Loading memories...",

"[ OK ] Loading smiles...",

"[ OK ] Loading hugs...",

"[ OK ] Loading PLC Modules...",

"",

"Searching Engineer...",

"✔️ Eduardo",

"",

"Alias detected:",

"❤️ Amorcito",

"",

"System Status:",

"READY"

];

const terminal = document.getElementById("terminal-text");
const boton = document.getElementById("start-btn");

let indice = 0;

function escribirLinea(){

    if(indice >= mensajes.length){
        boton.classList.add("show");
        return;
    }

    const linea = document.createElement("p");

    linea.textContent = mensajes[indice];

    if(
    mensajes[indice].includes("✔️") ||
    mensajes[indice].includes("READY") ||
    mensajes[indice].includes("[ OK ]")
)   {
    linea.classList.add("success");
}

    terminal.appendChild(linea);

    indice++;

    setTimeout(escribirLinea,700);

}

escribirLinea();

boton.addEventListener("click", mostrarDashboard);

function mostrarDashboard(){

    document.getElementById("app").innerHTML = `

    <section class="screen">

        <div class="panel">

            <div class="topbar">

                <h2>RELATIONSHIP CONTROLLER</h2>

                <span class="online">● ONLINE</span>

            </div>

            <div class="dashboard">

                <div class="card">

                    <h3>Engineer 01</h3>

                    <p>Eduardo</p>

                </div>

                <div class="card">

                    <h3>Engineer 02</h3>

                    <p>Nayeli</p>

                </div>

                <div class="card">

                    <h3>Relationship</h3>

                    <p class="success">ONLINE ❤️</p>

                </div>

                <div class="card">

                    <h3>Version</h3>

                    <p>2 Months</p>

                </div>

                <div class="card">

                    <h3>PLC Status</h3>

                    <p class="success">CONNECTED</p>

                </div>

                <div class="card">

                    <h3>Heart Module</h3>

                    <p class="success">RUNNING</p>

                </div>

            </div>

            <button id="timelineBtn" class="btn-industrial">

                EVENT LOG →

            </button>

        </div>

    </section>

    `;

    document
        .getElementById("timelineBtn")
        .addEventListener("click", mostrarTimeline);

}
function mostrarTimeline(){

    document.getElementById("app").innerHTML = `

    <section class="screen">

        <div class="panel">

            <h1>EVENT LOG</h1>

            <p class="version">
                Relationship History
            </p>

            <div class="timeline">

                <div class="event">

                    <span>29 Marzo</span>
                    <h3>[SUCCESS]</h3>

                    <h3>Relationship Request</h3>

                    <p>
                        Eduardo asked Nayeli to be his girlfriend ❤️
                    </p>

                </div>

                <div class="event">

                    <span>01 Mayo</span>
                    <h3>[RUNNING]</h3>

                    <h3>Official Relationship</h3>

                    <p>
                        Project Together started.
                    </p>

                </div>
                <div class="event">

                    <span>01 Junio</span>
                    <h3>[UPDATE]</h3>

                    <h3>Version 1.0</h3>

                    <p>
                        Firsth Month ❤️.
                    </p>

                </div>

                <div class="event">

                    <span>01 Julio</span>
                    <h3>[UPDATE]</h3>

                    <h3>Version 2.0</h3>

                    <p>
                        Two months completed ❤️
                    </p>

                </div>

            </div>

            <button id="plcBtn" class="btn-industrial">

                OPEN PLC CONTROLER →

            </button>

        </div>

    </section>

    `;
document
    .getElementById("plcBtn")
    .addEventListener("click", mostrarPLC);
    
    const eventos = document.querySelectorAll(".event");

    eventos.forEach((evento, indice)=>{

    evento.style.opacity="0";
    evento.style.transform="translateX(-40px)";

    setTimeout(()=>{

        evento.style.transition=".6s";
        evento.style.opacity="1";
        evento.style.transform="translateX(0)";

    },indice*500);

});
}
function mostrarPLC() {
    document.getElementById("app").innerHTML = `
    <div class="plc-container">
        <!-- BOTONES DE CONTROL -->
        <div class="plc-controls">
            <button id="monitorBtn" class="btn-industrial">🔍 MONITOR MODE</button>
            <button id="galleryBtn" class="btn-industrial">GALLERY →</button>
        </div>

        <div class="ladder">
            <!-- RUNG 1 -->
            <div class="rung" id="rung1">
                <span class="rail">|</span>
                <div class="contact" id="i00">I0.0 DAY OF FLOWERS</div>
                <div class="line"></div>
                <div class="coil" id="m00_c">M0.0 CONFESSION</div>
                <span class="rail">|</span>
            </div>

            <!-- RUNG 2 -->
            <div class="rung" id="rung2">
                <span class="rail">|</span>
                <div class="contact" id="m00_t">M0.0 CONFESSION</div>
                <div class="contact">I0.1 FIRST DATE</div>
                <div class="line"></div>
                <div class="coil" id="m01_c">M0.1 LOVE</div>
                <span class="rail">|</span>
            </div>

            <!-- RUNG 3 -->
            <div class="rung" id="rung3">
                <span class="rail">|</span>
                <div class="contact" id="m01_t">M0.1 LOVE</div>
                <div class="contact">I0.2 29_MARCH</div>
                <div class="line"></div>
                <div class="coil" id="q00_c">Q0.0 GIRLFRIEND</div>
                <span class="rail">|</span>
            </div>

            <!-- RUNG 4 -->
            <div class="rung" id="rung4">
                <span class="rail">|</span>
                <div class="contact" id="q00_t">Q0.0 GIRLFRIEND</div>
                <div class="contact">I0.3 01_MAY</div>
                <div class="line"></div>
                <div class="coil" id="db1_c">DB1 PROJECT_TOGETHER</div>
                <span class="rail">|</span>
            </div>

            <!-- RUNG 5 -->
            <div class="rung" id="rung5">
                <span class="rail">|</span>
                <div class="contact" id="db1_t">DB1 MEMORIES</div>
                <div class="contact">HUG</div>
                <div class="contact">KISS</div>
                <div class="contact">LAUGHTER</div>
                <div class="line"></div>
                <div class="coil" id="m10_c">M1.0 HAPPINESS</div>
                <span class="rail">|</span>
            </div>

            <!-- RUNG 6 -->
            <div class="rung" id="rung6">
                <span class="rail">|</span>
                <!-- CORRECCIÓN: Se cambió class="coil" a class="contact" -->
                <div class="contact" id="m10_t">M1.0 HAPPINESS</div>
                <div class="contact">TRUST</div>
                <div class="line"></div>
                <div class="coil" id="q10_c">Q1.0 FUTURE</div>
                <span class="rail">|</span>
            </div>
        </div>

        <!-- PANEL DE COMPILACIÓN -->
        <div class="compile">
            CPU 1511-1 PN<br>
            RUN <span id="cpu-status">🟢</span><br><br>
            Cycle Time........2 ms<br>
            Memory Usage......2 %<br>
            Communication.....ONLINE<br>
            Project...........Relationship Controller<br>
            DB1...............Loaded<br>
            OB1...............Running
        </div>
    </div>
    `;

    // Eventos vinculados directamente post-render
    document.getElementById("galleryBtn").addEventListener("click", mostrarGaleria);
    document.getElementById("monitorBtn").addEventListener("click", iniciarMonitoreo);
}

function iniciarMonitoreo() {
    const boton = document.getElementById("monitorBtn");
    boton.disabled = true;
    boton.textContent = "⚡ MONITORING...";
    document.getElementById("cpu-status").textContent = "🔵 (MONITOR)";

    // Limpiar simulaciones anteriores de forma segura
    const todos = document.querySelectorAll(".contact, .coil, .line");
    todos.forEach(el => el.classList.remove("activated-plc"));

    // --- RUNG 1 ---
    setTimeout(() => {
        document.getElementById("i00").classList.add("activated-plc");
    }, 400);
    setTimeout(() => {
        const contactosRung1 = document.querySelectorAll("#rung1 .contact");
        contactosRung1.forEach(c => c.classList.add("activated-plc"));
        document.querySelector("#rung1 .line").classList.add("activated-plc");
        document.getElementById("i00").classList.add("activated-plc");
        document.getElementById("m00_c").classList.add("activated-plc");
    }, 900);

    // --- RUNG 2 ---
    setTimeout(() => {
        document.getElementById("m00_t").classList.add("activated-plc");
    }, 1400);
    setTimeout(() => {
        const contactosRung2 = document.querySelectorAll("#rung2 .contact");
        contactosRung2.forEach(c => c.classList.add("activated-plc"));
        document.querySelector("#rung2 .line").classList.add("activated-plc");
        document.getElementById("m01_c").classList.add("activated-plc");
    }, 1900);

    // --- RUNG 3 ---
    setTimeout(() => {
        document.getElementById("m01_t").classList.add("activated-plc");
    }, 2400);
    setTimeout(() => {
        const contactosRung3 = document.querySelectorAll("#rung3 .contact");
        contactosRung3.forEach(c => c.classList.add("activated-plc"));
        document.querySelector("#rung3 .line").classList.add("activated-plc");
        document.getElementById("q00_c").classList.add("activated-plc");
    }, 2900);

    // --- RUNG 4 ---
    setTimeout(() => {
        document.getElementById("q00_t").classList.add("activated-plc");
    }, 3400);
    setTimeout(() => {
        const contactosRung4 = document.querySelectorAll("#rung4 .contact");
        contactosRung4.forEach(c => c.classList.add("activated-plc"));
        document.querySelector("#rung4 .line").classList.add("activated-plc");
        document.getElementById("db1_c").classList.add("activated-plc");
    }, 3900);

    // --- RUNG 5 ---
    setTimeout(() => {
        document.getElementById("db1_t").classList.add("activated-plc");
        const contactosRung5 = document.querySelectorAll("#rung5 .contact");
        contactosRung5.forEach(c => c.classList.add("activated-plc"));
    }, 4400);
    setTimeout(() => {
        document.querySelector("#rung5 .line").classList.add("activated-plc");
        document.getElementById("m10_c").classList.add("activated-plc");
    }, 4900);

    // --- RUNG 6 ---
    setTimeout(() => {
        document.getElementById("m10_t").classList.add("activated-plc");
        const contactosRung6 = document.querySelectorAll("#rung6 .contact");
        contactosRung6.forEach(c => c.classList.add("activated-plc"));
    }, 5400);
    setTimeout(() => {
        document.querySelector("#rung6 .line").classList.add("activated-plc");
        document.getElementById("q10_c").classList.add("activated-plc");
    }, 5900);

    // Resetear entorno de control
    setTimeout(() => {
        boton.disabled = false;
        boton.textContent = "🔍 MONITOR MODE";
        document.getElementById("cpu-status").textContent = "🟢 RUN";
    }, 6500);
}
function mostrarGaleria() {
    document.getElementById("app").innerHTML = `
    <section class="screen">
        <div class="panel">
            <h1>MEMORIES</h1>
            <p class="version">Evidence Database</p>

            <div class="gallery">
                <div class="photo">
                    <img src="img/foto1.jpeg" class="foto-entera">
                    <p>📍Donde todo comenzó.</p>
                </div>

                <div class="photo">
                    <img src="img/foto2.jpeg">
                    <p>☕ Nuestra primera salida.</p>
                </div>

                <div class="photo">
                    <img src="img/foto3.jpeg">
                    <p>🎤 Sin miedo a nada.</p>
                </div>

                <div class="photo">
                    <video id="gallery-video" controls muted playsinline width="100%">
                        <source src="img/foto4.mp4" type="video/mp4">
                    </video>
                    <p>😂 Tu sonrisa favorita.</p>
                </div>

                <div class="photo">
                    <img src="img/foto5.jpeg">
                    <p>❤️ Nosotros.</p>
                </div>

                <div class="photo">
                    <img src="img/foto6.jpeg">
                    <p>∞ Y apenas comenzamos.</p>
                </div>
            </div>

            <button id="letterBtn" class="btn-industrial">LETTER →</button>
        </div>
    </section>
    `;
document
.getElementById("letterBtn")
.addEventListener("click",mostrarCarta);
    // 1. Asignar evento al botón de la carta
    document.getElementById("letterBtn").addEventListener("click", mostrarCarta);

    // 2. Seleccionar el video AHORA que ya existe en el DOM
    const video = document.getElementById("gallery-video");

    // 3. Configurar los eventos de reproducción interactiva
    if (video) {
        video.addEventListener("mouseenter", () => {
            video.play().catch(error => {
                console.log("La reproducción automática fue bloqueada por el navegador:", error);
            });
        });

        video.addEventListener("mouseleave", () => {
            video.pause();
            video.currentTime = 0; // Reinicia el video al salir
        });
    }
}
function mostrarCarta(){

document.getElementById("app").innerHTML=`

<section class="screen">

<div class="panel">

<h1>PERSONAL MESSAGE</h1>

<p class="version">
Only for Eduardo ❤️
</p>

<div id="carta" class="carta"></div>
<!-- Contenedor para el reproductor de Spotify (Fuera del script de máquina de escribir) -->
            <div style="margin-top: 30px; display: flex; justify-content: center;">
                <iframe style="border-radius:12px; max-width: 500px;" 
                        src="https://open.spotify.com/embed/track/02bKaAG61tMw9c63fzKXal?utm_source=generator&theme=0" 
                        width="100%" height="152" frameBorder="0" allowfullscreen="" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy">
                </iframe>
            </div>

<br><br>

<button id="finalBtn" class="btn-industrial">FINISH PROJECT →</button>
</div>
</section>
`;

const texto=`
Hola amorcito...

Hace unos meses jamás imaginé que aquel chico  que impartía un curso de PLC terminaría convirtiéndose en la persona que más feliz me hace.

Todo comenzó cuando te presentaste, en las conversaciones en la oficina y poco a poco descubrí que contigo podía ser completamente yo.

Me encanta que me hagas reír, que me hagas sentir segura con un abrazo, que pueda apagar mi cerebro cuando estoy contigo y simplemente disfrutar el momento.

Recuerdo la salida a Guanajuato, nuestra primera cita en la plaza, el karaoke cantando "Sin miedo a nada" y ese momento en el estacionamiento cuando me preguntaste:

"Naye... ¿te gustaría ser mi novia?"

Han pasado solamente dos meses oficialmente, pero ya tenemos muchísimos recuerdos que guardar.

Gracias por cada abrazo, por cada beso donde me inflas los cachetes jaja, por hacerme sonreír incluso con las cosas más simples y por convertir los días normales en días especiales.

Espero que este sea apenas el comienzo del proyecto más bonito que podamos construir juntos.

Con amor...

Nayesita ❤️

`;

escribirCarta(texto);

document
.getElementById("finalBtn")
.addEventListener("click",mostrarFinal);

}
function escribirCarta(texto){

const carta=document.getElementById("carta");

let i=0;

function escribir(){

if(i<texto.length){

carta.innerHTML+=texto.charAt(i);

i++;

setTimeout(escribir,35);

}

}

escribir();

}
function mostrarFinal(){

document.getElementById("app").innerHTML=`

<section class="screen">

<div class="panel terminal">

<h1>PROJECT TOGETHER</h1>

<p class="version">
Relationship Compiler v2.0
</p>

<div id="compileText"></div>

</div>

</section>

`;

const pasos=[

"Compiling Project Together...",
"",
"[ OK ] Memories loaded",
"[ OK ] Hugs loaded",
"[ OK ] Kisses loaded",
"[ OK ] Laughs loaded",
"[ OK ] Trust verified",
"",
"Checking future...",
"",
"██████░░░░░░░░░░ 35%",
"",
"████████████░░░░ 75%",
"",
"████████████████ 100%",
"",
"BUILD SUCCESSFUL ❤️"

];

const contenedor=document.getElementById("compileText");

let i=0;

function escribir(){

if(i>=pasos.length){

setTimeout(pantallaFinal,1500);

return;

}

const p=document.createElement("p");

p.textContent=pasos[i];

if(pasos[i].includes("[ OK ]") || pasos[i].includes("SUCCESSFUL"))
p.classList.add("success");

contenedor.appendChild(p);

i++;

setTimeout(escribir,600);

}

escribir();

}
function pantallaFinal(){

document.getElementById("app").innerHTML=`

<section class="screen">

<div class="panel">

<h1>PROJECT TOGETHER.exe</h1>

<p class="version">
Running...
</p>

<h2 style="color:#3FB950">
❤️ STATUS: RUNNING
</h2>

<br>

<p>
Este proyecto inició oficialmente el
<b>1 de mayo de 2026.</b>
</p>

<br>

<h3 id="contador"></h3>

<br><br>

<p style="font-size:22px">

"No sé cuánto dure nuestra historia...

pero sí sé que quiero seguir programándola contigo."

</p>

<br>

<p>

Con amor,

<b>Nayesita ❤️</b>

</p>

</div>

</section>

`;

actualizarContador();

setInterval(actualizarContador,1000);

}

function actualizarContador() {

    const contador = document.getElementById("contador");

    if (!contador) return;

    const inicio = new Date("2026-05-01T00:00:00");
    const ahora = new Date();

    const diferencia = ahora - inicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    contador.textContent =
        `${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos juntos ❤️`;

}
