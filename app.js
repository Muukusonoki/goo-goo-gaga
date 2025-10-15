// app.js

// Lógica completa del juego dentro de esta función
const juego = () => {
    let puntuacionJugador = 0;
    let puntuacionComputadora = 0;
    let movimientos = 0;

    // Función para jugar
    const jugar = () => {
        const btnPiedra = document.querySelector('.rock');
        const btnPapel = document.querySelector('.paper');
        const btnTijera = document.querySelector('.scissor');
        const opcionesJugador = [btnPiedra, btnPapel, btnTijera];
        const opcionesComputadora = ['Piedra', 'Papel', 'Tijera'];

        // Iniciar el juego
        opcionesJugador.forEach(opcion => {
            opcion.addEventListener('click', function () {

                const movimientosRestantes = document.querySelector('.movesleft');
                movimientos++;
                movimientosRestantes.innerText = `Movimientos restantes: ${10 - movimientos}`;

                const numeroEleccion = Math.floor(Math.random() * 3);
                const eleccionComputadora = opcionesComputadora[numeroEleccion];

                // Verificar quién gana
                ganador(this.innerText, eleccionComputadora);

                // Llamar a finJuego después de 10 movimientos
                if (movimientos == 10) {
                    finJuego(opcionesJugador, movimientosRestantes);
                }
            })
        })
    }

    // Función para decidir el ganador
    const ganador = (jugador, computadora) => {
        const resultado = document.querySelector('.result');
        const marcadorJugador = document.querySelector('.p-count');
        const marcadorComputadora = document.querySelector('.c-count');
        jugador = jugador.toLowerCase();
        computadora = computadora.toLowerCase();
        if (jugador === computadora) {
            resultado.textContent = 'Empate';
        }
        else if (jugador == 'piedra') {
            if (computadora == 'papel') {
                resultado.textContent = 'perdiste ez';
                puntuacionComputadora++;
                marcadorComputadora.textContent = puntuacionComputadora;
            } else {
                resultado.textContent = '¡Ganaste!';
                puntuacionJugador++;
                marcadorJugador.textContent = puntuacionJugador;
            }
        }
        else if (jugador == 'tijera') {
            if (computadora == 'piedra') {
                resultado.textContent = 'perdiste ez';
                puntuacionComputadora++;
                marcadorComputadora.textContent = puntuacionComputadora;
            } else {
                resultado.textContent = '¡Ganaste!';
                puntuacionJugador++;
                marcadorJugador.textContent = puntuacionJugador;
            }
        }
        else if (jugador == 'papel') {
            if (computadora == 'tijera') {
                resultado.textContent = 'perdiste ez';
                puntuacionComputadora++;
                marcadorComputadora.textContent = puntuacionComputadora;
            } else {
                resultado.textContent = 'Ganaste wow';
                puntuacionJugador++;
                marcadorJugador.textContent = puntuacionJugador;
            }
        }
    }

    // Función para cuando termina el juego
    const finJuego = (opcionesJugador, movimientosRestantes) => {
        const elegirMovimiento = document.querySelector('.move');
        const resultado = document.querySelector('.result');
        const btnReiniciar = document.querySelector('.reload');
        const video = document.getElementById('video');
        

        opcionesJugador.forEach(opcion => {
            opcion.style.display = 'none';
        })

        elegirMovimiento.innerText = 'Fin';
        movimientosRestantes.style.display = 'none';

        if (puntuacionJugador > puntuacionComputadora) {
            resultado.style.fontSize = '2rem';
            resultado.innerText = 'ganaste';
            resultado.style.color = '#308D46';
            video.addEventListener('canplay', () => {
            document.getElementById("video").style.display = "block"; 
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) { 
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) { 
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }
            video.play(); 
        });

        }
        else if (puntuacionJugador < puntuacionComputadora) {
            resultado.style.fontSize = '2rem';
            resultado.innerText = 'Perdiste lolz ez';
            resultado.style.color = 'red';
        }
        else {
            resultado.style.fontSize = '2rem';
            resultado.innerText = 'Empate';
            resultado.style.color = 'grey';
        }
        btnReiniciar.innerText = 'Reiniciar';
        btnReiniciar.style.display = 'flex';
        btnReiniciar.addEventListener('click', () => {
            window.location.reload();
        })
    }

    // Llamar a la función jugar dentro de juego
    jugar();
}

// Llamar a la función juego
juego();