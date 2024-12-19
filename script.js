// Función para crear copos de nieve
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    
    document.body.appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Función para crear luces navideñas
function createChristmasLight() {
    const light = document.createElement('div');
    light.classList.add('christmas-light');
    light.style.left = Math.random() * window.innerWidth + 'px';
    light.style.top = Math.random() * window.innerHeight + 'px';
    light.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    
    document.body.appendChild(light);
}

// Control de nieve
let snowInterval;
document.getElementById('snowBtn').addEventListener('click', function() {
    if (snowInterval) {
        clearInterval(snowInterval);
        snowInterval = null;
        this.textContent = 'Activar Nieve';
    } else {
        snowInterval = setInterval(createSnowflake, 100);
        this.textContent = 'Desactivar Nieve';
    }
});

// Control de música
const music = document.getElementById('backgroundMusic');
document.getElementById('musicBtn').addEventListener('click', function() {
    if (music.paused) {
        music.play();
        this.textContent = 'Pausar Música';
    } else {
        music.pause();
        this.textContent = 'Reproducir Música';
    }
});

// Control de luces
let lightsInterval;
document.getElementById('lightBtn').addEventListener('click', function() {
    if (lightsInterval) {
        clearInterval(lightsInterval);
        lightsInterval = null;
        document.querySelectorAll('.christmas-light').forEach(light => light.remove());
        this.textContent = 'Activar Luces';
    } else {
        lightsInterval = setInterval(createChristmasLight, 300);
        this.textContent = 'Desactivar Luces';
    }
});

// Contenido del webtoon
const storyContent = [
    { text: "Todo comienza en un día soleado y tranquilo, con los primeros rayos de luz entrando por las ventanas de nuestra casa soñada, en una hermosa ciudad de Estados Unidos. Son las 8 de la mañana, y el aire fresco se siente lleno de promesas para un día inolvidable.", image: "1.png" },
    { text: "Abro los ojos lentamente, y lo primero que veo es el rostro de Aurora, mi amor, mi vida, mi todo. Su cabello desordenado y esa expresión serena mientras duerme me hacen sonreír. No puedo evitar quedarme unos segundos admirándola, porque verla es como mirar un milagro cotidiano. Con una caricia suave en su mejilla y un beso en la frente, le susurro: Buenos días, amor mío.", image: "2.png" },
    { text: "Me levanto con cuidado para no despertarla de golpe, y voy directo al cuarto donde está nuestra pequeña bebé, que ya está despierta en su cuna. Al verme, sonríe, y mi corazón casi estalla de felicidad. La tomo en brazos y le digo: Buenos días, princesa. Hoy va a ser un día increíble. Le doy un beso en su cabecita, y juntos vamos a la cocina.", image: "3.png" },
    { text : "Empiezo a preparar el desayuno mientras la bebé me acompaña en su sillita alta. Preparo algo especial: panqueques con frutas frescas, un poco de miel, jugo de naranja, y por supuesto, el café que Aurora ama tanto. El aroma del café recién hecho comienza a llenar la casa." , image: "4.png"},
    { text : "Pasados unos minutos, Aurora aparece en la cocina, aún algo soñolienta, pero tan hermosa como siempre. Lleva esa sonrisa que me derrite, y con un abrazo cálido me dice: Buenos días, mi vida. La beso y la invito a sentarse mientras le sirvo su desayuno. Nos sentamos los tres juntos a la mesa y disfrutamos de una conversación tranquila, risas suaves y el sonido alegre de nuestra bebé probando los panqueques con las manos.", image: "5.png"},
    { text : "Después del desayuno, nos preparamos para un día especial. Aurora se da un baño mientras yo me encargo de alistar a nuestra pequeña. Le pongo un vestido adorable y le hago reír con caritas graciosas. Cuando Aurora sale, radiante como siempre, me quedo sin palabras por un momento. Estás hermosa, le digo, y ella sonríe con esa mezcla de timidez y picardía que tanto amo.", image: "6.png"},
    { text : "Decidimos empezar la mañana con un paseo en bicicleta. Cargamos a la bebé en una pequeña silla en la bicicleta de Aurora y pedaleamos juntos por un sendero rodeado de árboles. El aire fresco y el sonido de las hojas nos llenan de energía.", image: "7.png"},
    { text : " Hacemos una pausa en un lago cercano, donde nos sentamos en una manta para disfrutar del paisaje. Mientras la bebé juega con el pasto, Aurora y yo compartimos un beso bajo el sol.", image: "8.png" },
    { text : "Por la tarde, hacemos algo que nos conecta con nuestra esencia: visitamos una galería de arte y una tienda de discos. Exploramos cada rincón, escuchando música de nuestras bandas favoritas y recordando anécdotas de nuestra adolescencia. Aurora encuentra un vinilo que le encanta, y yo no dudo en comprárselo como un detalle para recordarle cuánto la amo.", image: "9.png"},
    { text : "De camino a casa, paramos en nuestra cafetería favorita. Compartimos un pastel de chocolate y un cappuccino mientras la bebé disfruta de un puré de frutas. Es un momento de calma, de esos que te llenan el alma."}

    
];

// Función para crear el webtoon
function createWebtoon() {
    const container = document.getElementById('webtoon-container');
    storyContent.forEach(panel => {
        const panelElement = document.createElement('div');
        panelElement.classList.add('webtoon-panel');
        panelElement.innerHTML = `
            <img src="${panel.image}" alt="Panel image">
            <p>${panel.text}</p>
        `;
        container.appendChild(panelElement);
    });
}

// Inicializar el webtoon
createWebtoon();

// Animaciones con GSAP
gsap.from("header", {duration: 1, y: -50, opacity: 0, ease: "power2.out"});
gsap.from("nav button", {duration: 0.5, opacity: 0, stagger: 0.2});
gsap.from("section", {duration: 1, y: 50, opacity: 0, stagger: 0.3, scrollTrigger: {
    trigger: "section",
    start: "top 80%"
}});

// Funciones para los Momentos Mágicos
function showLoveLetter() {
    alert("Mi querida Aurora,\n\nCada día para mi es un regalo al saber que estás allí para mi. Al ver tu sonrisa, ilumina mi mundo, me llena de felicidad, mi día se compone al momento. Gracias por siempre estar allí para mi, te prometo que cumpliré cada cosa que te he dicho, para crear ese futuro por el cual quiero luchar para los dos, para que seas feliz y hacerte sentir como la mujer mas especial en esta vida.\n\nTe amo con todo mi corazón,\nFabi");
}

function showHappinessPromise() {
    const promiseContainer = document.createElement('div');
    promiseContainer.style.position = 'fixed';
    promiseContainer.style.top = '50%';
    promiseContainer.style.left = '50%';
    promiseContainer.style.transform = 'translate(-50%, -50%)';
    promiseContainer.style.backgroundColor = 'white';
    promiseContainer.style.padding = '20px';
    promiseContainer.style.borderRadius = '10px';
    promiseContainer.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
    promiseContainer.style.maxWidth = '80%';
    promiseContainer.style.textAlign = 'center';

    const title = document.createElement('h3');
    title.textContent = 'Mi Promesa de Felicidad para Ti';
    title.style.color = '#c41e3a';
    title.style.marginBottom = '15px';

    const message = document.createElement('p');
    message.innerHTML = 'Aurora de mi Corazón:<br><br>' +
        'Prometo que a partir de esta navidad, hacerla mas feliz y entretenida para ti, sé que no la has pasado bien pero quiero cambiar eso, si me permites, hacer esta época para ti feliz. ' +
        'Esta época ya no será un tiempo de tristeza, sino de alegría y mucho amor. ' +
        'Estaré a tu lado para apoyarte, amarte y hacerte sonreír. ' +
        'Juntos, transformaremos cada momento en un recuerdo precioso.<br><br>' +
        'Te amo y siempre estaré aquí para ti.';
    message.style.lineHeight = '1.6';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Cerrar';
    closeButton.style.marginTop = '20px';
    closeButton.style.padding = '10px 20px';
    closeButton.style.backgroundColor = '#c41e3a';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '5px';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = () => document.body.removeChild(promiseContainer);

    promiseContainer.appendChild(title);
    promiseContainer.appendChild(message);
    promiseContainer.appendChild(closeButton);
    document.body.appendChild(promiseContainer);
}

function showWishJar() {
    const wishes = [
        "Que cada día sea una bendición, y esté lleno de amor y risas",
        "Que cumplamos todos nuestros sueños juntos y tambien los de cada uno individual",
        "Que nuestra familia crezca en amor y felicidad",
        "Que siempre encontremos tiempo para aventuras",
        "Que el amor que se cultive aquí sea eterno y cada vez más fuerte"
    ];
    
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    alert(`Un deseo para nosotros:\n\n${randomWish}`);
}

function showPhotoAlbum() {
    const album = document.createElement('div');
    album.style.position = 'fixed';
    album.style.top = '50%';
    album.style.left = '50%';
    album.style.transform = 'translate(-50%, -50%)';
    album.style.backgroundColor = 'white';
    album.style.padding = '20px';
    album.style.borderRadius = '10px';
    album.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
    album.style.maxWidth = '80%';
    album.style.maxHeight = '80%';
    album.style.overflow = 'auto';
    
    const photos = [
        { src: "https://via.placeholder.com/300x200?text=Foto+1", caption: "acá poner algo bonito para ella" },
        { src: "https://via.placeholder.com/300x200?text=Foto+2", caption: "acá tambien" },
        { src: "https://via.placeholder.com/300x200?text=Foto+3", caption: "también acá" },
        { src: "https://via.placeholder.com/300x200?text=Foto+4", caption: "y acá" }
    ];
    
    photos.forEach(photo => {
        const photoDiv = document.createElement('div');
        photoDiv.style.marginBottom = '20px';
        
        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.caption;
        img.style.width = '100%';
        img.style.borderRadius = '5px';
        
        const caption = document.createElement('p');
        caption.textContent = photo.caption;
        caption.style.textAlign = 'center';
        caption.style.marginTop = '5px';
        
        photoDiv.appendChild(img);
        photoDiv.appendChild(caption);
        album.appendChild(photoDiv);
    });
    
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Cerrar';
    closeButton.style.display = 'block';
    closeButton.style.margin = '20px auto 0';
    closeButton.style.padding = '10px 20px';
    closeButton.style.backgroundColor = '#c41e3a';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '5px';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = () => document.body.removeChild(album);
    
    album.appendChild(closeButton);
    document.body.appendChild(album);
}

// Event listeners para los Momentos Mágicos
document.getElementById('love-letter').addEventListener('click', showLoveLetter);
document.getElementById('happiness-promise').addEventListener('click', showHappinessPromise);
document.getElementById('wish-jar').addEventListener('click', showWishJar);
document.getElementById('photo-album').addEventListener('click', showPhotoAlbum);

// Clase para manejar el Webtoon
class WebtoonController {
    constructor() {
        this.container = document.getElementById('webtoon-container');
        this.currentPage = 0;
        this.pages = [
            {
                image: 'webtoon/page1.jpg',
                text: 'El día que te conocí, mi mundo se llenó de color...'
            },
            {
                image: 'webtoon/page2.jpg',
                text: 'Cada momento contigo es un regalo especial...'
            },
            {
                image: 'webtoon/page3.jpg',
                text: 'Nuestras risas, nuestros abrazos...'
            },
            {
                image: 'webtoon/page4.jpg',
                text: 'Y ahora, en esta Navidad, quiero decirte...'
            },
            {
                image: 'webtoon/page5.jpg',
                text: 'Que eres el amor de mi vida ❤️'
            }
        ];
        this.initializeWebtoon();
    }

    initializeWebtoon() {
        // Crear controles de navegación
        const controls = document.createElement('div');
        controls.className = 'webtoon-controls';
        controls.innerHTML = `
            <button id="prevPage"><i class="fas fa-chevron-left"></i></button>
            <span id="pageCounter">1/${this.pages.length}</span>
            <button id="nextPage"><i class="fas fa-chevron-right"></i></button>
        `;
        this.container.appendChild(controls);

        // Crear contenedor de páginas
        const pageContainer = document.createElement('div');
        pageContainer.className = 'webtoon-page';
        this.container.appendChild(pageContainer);

        // Event listeners
        document.getElementById('prevPage').addEventListener('click', () => this.previousPage());
        document.getElementById('nextPage').addEventListener('click', () => this.nextPage());

        // Mostrar primera página
        this.showPage(0);

        // Añadir gestos táctiles
        let touchStartX = 0;
        this.container.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        });

        this.container.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > 50) { // Umbral mínimo para considerar el swipe
                if (diff > 0) {
                    this.nextPage();
                } else {
                    this.previousPage();
                }
            }
        });
    }

    showPage(index) {
        const page = this.pages[index];
        const pageContainer = this.container.querySelector('.webtoon-page');
        
        // Animación de transición
        gsap.to(pageContainer, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                pageContainer.innerHTML = `
                    <div class="webtoon-image">
                        <img src="${page.image}" alt="Página ${index + 1}">
                    </div>
                    <div class="webtoon-text">
                        <p>${page.text}</p>
                    </div>
                `;

                gsap.to(pageContainer, {
                    opacity: 1,
                    duration: 0.3
                });
            }
        });

        // Actualizar contador
        document.getElementById('pageCounter').textContent = `${index + 1}/${this.pages.length}`;
        this.currentPage = index;
    }

    nextPage() {
        if (this.currentPage < this.pages.length - 1) {
            this.showPage(this.currentPage + 1);
        }
    }

    previousPage() {
        if (this.currentPage > 0) {
            this.showPage(this.currentPage - 1);
        }
    }
}

// Añadir esto en la función de inicialización existente
document.addEventListener('DOMContentLoaded', () => {
    // ... código existente ...
    
    const webtoonController = new WebtoonController();
    
    // ... resto del código existente ...
});