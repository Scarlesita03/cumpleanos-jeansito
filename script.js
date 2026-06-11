/* ==========================
   ELEMENTOS
========================== */

const continueReasons =
document.getElementById("continueReasons");

const screenTiempo =
document.getElementById("screenTiempo");

const startBtn = document.getElementById("startBtn");

const loginScreen =
document.getElementById("loginScreen");

const loginBtn =
document.getElementById("loginBtn");

const username =
document.getElementById("username");

const password =
document.getElementById("password");

const loginError =
document.getElementById("loginError");

const screenDoctor = document.getElementById("screenDoctor");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");
/* ==========================
   MUSICA
========================== */

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {

    try {

        if (bgMusic.paused) {

            await bgMusic.play();
            musicBtn.textContent = "⏸";

        } else {

            bgMusic.pause();
            musicBtn.textContent = "▶";

        }

    } catch (error) {

        console.error("Error al reproducir:", error);

    }

});

loginBtn.addEventListener("click", () => {

    if(
        username.value === "Jeansito" &&
        password.value === "13052024"
    ){

        document.getElementById("bgMusic").play();

        loginScreen.style.display = "none";

        screen1.style.display = "flex";

    }else{

        loginError.textContent =
        "❌ Usuario o contraseña incorrectos";

    }

});

startBtn.addEventListener("click", () => {

    screen1.style.display = "none";

    screenDoctor.style.display = "flex";

});

const stethoscope =
document.getElementById("stethoscope");

const heartFill =
document.getElementById("heartFill");

const diagnosisPercent =
document.getElementById("diagnosisPercent");

const diagnosisText =
document.getElementById("diagnosisText");

const doctorContinue =
document.getElementById("doctorContinue");

let diagnosis = 0;

stethoscope.addEventListener("click", () => {

    if(diagnosis >= 100) return;

    diagnosis += 10;

    diagnosisPercent.textContent =
    diagnosis + "%";

    const fillY =
    512 - (diagnosis * 5.12);

    heartFill.setAttribute(
        "y",
        fillY
    );

    if(diagnosis >= 100){

    document.getElementById("diagnosisModal")
    .style.display = "flex";

}

});

doctorContinue.addEventListener("click", () => {

    document.getElementById("diagnosisModal")
    .style.display = "none";

    screenDoctor.style.display = "none";

    screen2.style.display = "flex";

    if(!gameStarted){

        gameStarted = true;
        startGame();

    }

});
/* ==========================
   VARIABLES
========================== */

let score = 0;
let gameStarted = false;


/* ==========================
   CREAR CORAZÓN
========================== */

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * (window.innerWidth - 60) + "px";

    heart.style.top = "-60px";

    heart.style.animationDuration =
        (3 + Math.random() * 2) + "s";

    gameArea.appendChild(heart);

    heart.addEventListener("click", () => {

        captureHeart(heart);

    });

    setTimeout(() => {

        if(heart.parentNode){

            heart.remove();

        }

    },6000);

}

/* ==========================
   CAPTURAR CORAZÓN
========================== */

function captureHeart(heart){

    score++;

    scoreText.textContent =
        score + " / 20";

    const x = heart.offsetLeft;
    const y = heart.offsetTop;

    /* TELARAÑA */

    const web = document.createElement("div");

    web.classList.add("web");

    web.innerHTML = "🕸️";

    web.style.left = x + "px";
    web.style.top = y + "px";

    gameArea.appendChild(web);

    setTimeout(() => {

        web.remove();

    },600);

    /* EXPLOSIÓN */

    const explosion = document.createElement("div");

    explosion.classList.add("explosion");

    explosion.innerHTML = "💥";

    explosion.style.left = x + "px";
    explosion.style.top = y + "px";

    gameArea.appendChild(explosion);

    setTimeout(() => {

        explosion.remove();

    },500);

    heart.remove();

    /* COMPLETAR MISIÓN */

    if(score >= 20){

        setTimeout(() => {

            screen2.style.display = "none";
            screen3.style.display = "flex";

        },1000);

    }

}

/* ==========================
   INICIAR JUEGO
========================== */

function startGame(){

    setInterval(() => {

        if(score < 20){

            createHeart();

        }

    },700);

}

/* ==========================
   MÁSCARA PIXEL SPIDERMAN
========================== */

const spiderMask = [

"black","black","red","red","red","red","red","red","black","black",
"black","red","red","white","white","white","white","red","red","black",
"red","red","black","black","black","black","black","black","red","red",
"red","black","black","white","white","white","white","black","black","red",
"red","black","white","white","black","black","white","white","black","red",
"red","black","white","white","black","black","white","white","black","red",
"red","black","black","white","white","white","white","black","black","red",
"red","red","black","black","black","black","black","black","red","red",
"black","red","red","red","red","red","red","red","red","black",
"black","black","red","red","red","red","red","red","black","black"

];

/* ==========================
   CREAR PIXELES
========================== */

const pixelGrid =
document.getElementById("pixelGrid");

if(pixelGrid){

    for(let i=0; i<100; i++){

        const pixel =
        document.createElement("div");

        pixel.classList.add("pixel");

        pixel.style.background = "#1a1a1a";

        pixel.dataset.index = i + 1;

        pixelGrid.appendChild(pixel);

    }

}

const reasonModal =
document.getElementById("reasonModal");

const reasonTitle =
document.getElementById("reasonTitle");

const reasonText =
document.getElementById("reasonText");

const closeReason =
document.getElementById("closeReason");

const reasonCounter =
document.getElementById("reasonCounter");

let discovered = 0;

/* PEGA AQUÍ TUS 100 RAZONES */

const reasons = [

"Porque aunque estés lejos, te siento cerca.",
"Porque me haces sonreír con un mensaje.",
"Porque te pienso más de lo que admito.",
"Porque eres mi notificación favorita.",
"Porque haces especial un día normal.",
"Porque contigo la distancia no se siente vacía.",
"Porque me haces falta de la mejor manera.",
"Porque me ilusionas sin intentarlo.",
"Porque te volviste parte de mi rutina.",
"Porque contigo hasta el silencio se siente bonito.",

"Porque confío en ti.",
"Porque me haces sentir tranquila.",
"Porque te quedas incluso en la distancia.",
"Porque no me haces dudar de lo que eres conmigo.",
"Porque te importa cómo estoy.",
"Porque me haces sentir prioridad.",
"Porque estás presente aunque no estés aquí.",
"Porque me haces sentir acompañada.",
"Porque me haces feliz sin estar físicamente.",
"Porque eres mi persona favorita.",

"Porque me entiendes.",
"Porque no me juzgas.",
"Porque me escuchas de verdad.",
"Porque me haces reír.",
"Porque te preocupas por mí.",
"Porque eres constante.",
"Porque me das paz.",
"Porque eres mi refugio emocional.",
"Porque contigo todo se siente más fácil.",
"Porque me haces sentir especial.",

"Porque extraño tus buenos días.",
"Porque extraño tus buenas noches.",
"Porque eres parte de mis mañanas.",
"Porque eres parte de mis noches.",
"Porque contigo aprendí a esperar.",
"Porque contigo aprendí a confiar.",
"Porque contigo aprendí a amar a distancia.",
"Porque haces que la espera valga la pena.",
"Porque haces que la distancia duela menos.",
"Porque haces que la distancia tenga sentido.",

"Porque me haces querer hablar contigo todo el día.",
"Porque nunca me aburro contigo.",
"Porque eres mi persona favorita para contar cosas.",
"Porque contigo me siento en calma.",
"Porque eres mi estabilidad emocional.",
"Porque eres mi lugar seguro.",
"Porque eres real para mí.",
"Porque eres importante en mi vida.",
"Porque eres mi conexión más sincera.",
"Porque eres mi historia favorita.",

"Porque me haces soñar contigo.",
"Porque imagino el día en que por fin te vea.",
"Porque me ilusiona nuestro futuro.",
"Porque me haces creer en nosotros.",
"Porque haces que valga la pena la espera.",
"Porque me das motivos para seguir.",
"Porque me haces fuerte.",
"Porque me haces vulnerable.",
"Porque me haces sentir viva emocionalmente.",
"Porque eres mi pensamiento constante.",

"Porque me haces sentir querida.",
"Porque eres mi compañía emocional.",
"Porque te pienso incluso cuando estoy ocupada.",
"Porque eres mi escape bonito del día.",
"Porque me haces feliz con tan poco.",
"Porque me haces sentir suficiente.",
"Porque contigo soy yo misma.",
"Porque no necesito fingir contigo.",
"Porque me haces sentir comprendida.",
"Porque eres mi persona especial.",

"Porque te elegí.",
"Porque te volvería a elegir.",
"Porque te sigo eligiendo.",
"Porque eres mi decisión diaria.",
"Porque eres mi amor a distancia.",
"Porque haces que el amor se sienta real.",
"Porque eres mi hogar emocional.",
"Porque contigo todo tiene sentido.",
"Porque eres mi paz en días difíciles.",
"Porque eres mi alegría en días normales.",

"Porque te extraño incluso cuando hablamos.",
"Porque me haces querer más tiempo contigo.",
"Porque me haces pensar en abrazarte.",
"Porque me haces imaginar nuestro encuentro.",
"Porque haces que cada mensaje importe.",
"Porque eres importante para mí.",
"Porque me haces seguir intentando.",
"Porque me haces creer en nosotros.",
"Porque eres mi persona favorita a distancia.",
"Porque eres mi historia más bonita.",

"Porque te amo incluso sin tenerte cerca.",
"Porque te amo incluso en la espera.",
"Porque te amo incluso en la distancia.",
"Porque te amo en los días fáciles.",
"Porque te amo en los días difíciles.",
"Porque eres mi lugar seguro.",
"Porque eres mi calma.",
"Porque eres mi emoción.",
"Porque eres tú.",
"Porque todo contigo me hace sentir amor real."

];

/* EVENTOS DE PIXELES */

const pixels =
document.querySelectorAll(".pixel");

let currentPixel = null;

pixels.forEach((pixel,index)=>{

    pixel.addEventListener("click",()=>{

        if(pixel.classList.contains("opened")) return;

        currentPixel = pixel;

        reasonTitle.textContent =
        `Razón #${index+1}`;

        reasonText.textContent =
        reasons[index];

        reasonModal.style.display = "flex";

    });

});

closeReason.addEventListener("click",()=>{

    reasonModal.style.display = "none";

    if(currentPixel &&
       !currentPixel.classList.contains("opened")){

        currentPixel.classList.add("opened");

        discovered++;

        reasonCounter.textContent =
        `${discovered} / 100 descubiertas`;

        if(discovered >= 100){

            continueReasons.style.display =
            "inline-block";

            localStorage.setItem(
                "reasonsCompleted",
                "true"
            );

        }

    }

});

const startDate =
new Date("2024-05-13T00:00:00");

function updateCounter(){

    const startDate =
    new Date("2024-05-13T00:00:00");

    const now = new Date();

    const diff =
    now - startDate;

    const days =
    Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours =
    Math.floor(
        (diff % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (diff % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds =
    Math.floor(
        (diff % (1000 * 60))
        / 1000
    );

    document.getElementById("daysTogether")
    .textContent = days;

    document.getElementById("hoursTogether")
    .textContent = hours;

    document.getElementById("minutesTogether")
    .textContent = minutes;

    document.getElementById("secondsTogether")
    .textContent = seconds;

}

updateCounter();
setInterval(updateCounter,1000);

updateCounter();

/* ==========================
   IR A LA CARTA
========================== */

const continueLetter =
document.getElementById("continueLetter");

if(continueLetter){

    continueLetter.addEventListener("click",()=>{

        document.getElementById("screenTiempo").style.display = "none";

        document.getElementById("screen4").style.display = "flex";

    });

}

continueLetter.addEventListener("click",()=>{

    document.getElementById("screenTiempo").style.display = "none";

    document.getElementById("screen4").style.display = "flex";

    escribirCarta();

});

const carta = `Hola mi amor!!

Primero que nada, quiero desearte un feliz cumpleaños. Sé que este dia es especial, por que un dia como hoy llegaste a este mundo, y que sin imaginarlo, ibamos a encontrarnos en esta vida, te deseo lo mejor hoy y siempre, pero sobre todo que Diosito te bendiga y te cuide siempre, porque no imaginaria una vida sin ti.

A veces me quedo pensando en nosotros, en lo extraño que es poder querer tanto a alguien que no está físicamente conmigo y aun asi aquí estás tú, presente en mi vida, en mis pensamientos, en mis días, incluso en los momentos en los que todo se siente más pesado.

Estamos lejos y no te voy a mentir, hay días en los que la distancia se siente tranquila, pero hay otros en los que sí pesa, en los días en los que te extraño de una forma que no siempre sé explicar.

Te extraño en las cosas simples, en los mensajes cotidianos, en la rutina, en cada lugar al que voy y digo "Como quisiera que estes aquí", en esos mensajes que me hacen sentir acompañada, en la forma en la que estás presente aunque no estés aquí.

Y aun así, a pesar de la distancia, me acostumbré tanto a ti.

A tu forma de escribir, a cómo te preocupas por mí, de la manera en la que estás presente cuando más lo necesito, a esa manera en la que, sin darte cuenta, te volviste parte de mi día a día.

A veces cierro los ojos e imagino el día en que todo esto cambie, el día en que ya no tengamos que depender de una pantalla para sentirnos cerca, el día en el que por fin pueda verte, abrazarte sin prisa, quedarme contigo sin tener que pensar en la distancia.

Y te juro que ese pensamiento me hace feliz, pero también me mueve muchas emociones, porque ese día aún no llega.

Pero incluso con todo eso, incluso con la espera, hay algo que tengo muy claro.

Yo te elijo y elejire siempre, sin importar la distancia, sin importar el tiempo, sin importar las circunstancias.

Te elijo en la distancia, en la paciencia, en los días en los que te extraño demasiado, y en los días en los que todo se siente bonito contigo.

Te elijo cuando la espera se siente larga, y también cuando me das razones para seguir creyendo en nosotros.

Porque lo que siento por ti no depende de verte, depende de lo que eres para mí, de lo que me haces sentir, de lo importante que te has vuelto en mi vida.

Si algún día dudas de mí, o de lo que siento, quiero que recuerdes esto, y que sepas que hay alguien aquí, que te piensa todos los días, que te espera, y que te quiere de verdad.

Porque aunque estés lejos, sigues siendo mi persona, sigues siendo mi hombrecito lindo.

Y yo, sigo aquí, contigo, esperandote, queriendote, eligiendote, amandote, a pesar de la distancia, a pesar de la espera, a pesar de todo.

Te amo Jeansito bonito y siempre de amare, porque eres mi historia mas bonita, pero sobre todo, eres la persona con la que deseo compartir mi vida.

Y eso no cambia con la distancia. ❤️`;

function escribirCarta(){

    const contenedor =
    document.getElementById("typewriter");

    if(!contenedor) return;

    let i = 0;

    contenedor.innerHTML = "";

    const intervalo = setInterval(()=>{

        contenedor.innerHTML =
        carta.substring(0,i) +
        '<span class="cursor">|</span>';

        i++;

        if(i > carta.length){

            clearInterval(intervalo);

            contenedor.innerHTML = carta;

        }

    },80);

}

if(continueReasons){

    continueReasons.addEventListener("click", () => {

        document.getElementById("screen3").style.display = "none";

        document.getElementById("screenTiempo").style.display = "flex";

    });

}