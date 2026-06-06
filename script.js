// Abrir la carta
function openLetter() {
            const envelopeScreen = document.getElementById('envelope-screen');
            const letterScreen = document.getElementById('letter-screen');
            const transition = document.getElementById('flower-transition');
            
            // --- ESTAS DOS LÍNEAS ENCIENDEN LA MÚSICA ---
            const music = document.getElementById('bg-music');
            music.play();
            // -------------------------------------------

            transition.classList.add('burst');

            setTimeout(() => {
                envelopeScreen.classList.remove('active');
                letterScreen.classList.add('active');
                document.body.style.overflow = 'auto'; // Libera el scroll al abrir
            }, 800);
        }

// Lógica del botón "No" que escapa
const btnNo = document.getElementById('btn-no');

function moveButton(e) {
    e.preventDefault(); // Evita que se haga clic accidentalmente
    
    // Cambia a position fixed para moverse por toda la pantalla
    btnNo.style.position = 'fixed';
    
    // Calcula los límites de la pantalla
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Restamos unos 100px para que el botón no se salga de los bordes
    const randomX = Math.floor(Math.random() * (windowWidth - 100));
    const randomY = Math.floor(Math.random() * (windowHeight - 100));
    
    // Asigna las nuevas coordenadas
    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
}

// Escucha tanto en celular (touchstart) como en PC (mouseover)
btnNo.addEventListener('touchstart', moveButton);
btnNo.addEventListener('mouseover', moveButton);