document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal-reserva");
    const botonesReservar = document.querySelectorAll(".btn-reservar");
    const btnCerrar = document.querySelector(".cerrar-modal");
    const btnConfirmar = document.getElementById("btn-confirmar");
    
    const vistaFormulario = document.getElementById("formulario-reserva");
    const vistaExito = document.getElementById("mensaje-exito");
    const inputFecha = document.getElementById("fecha-hora");

    // Abrir modal al hacer clic en cualquier botón "Reservar"
    botonesReservar.forEach(boton => {
        boton.addEventListener("click", () => {
            // Resetear el modal a su estado inicial
            inputFecha.value = "";
            vistaFormulario.classList.remove("oculto");
            vistaExito.classList.add("oculto");
            modal.classList.remove("oculto");
        });
    });

    // Cerrar modal
    btnCerrar.addEventListener("click", () => {
        modal.classList.add("oculto");
    });

    // Cerrar modal si se hace clic fuera del contenido
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("oculto");
        }
    });

    // Lógica al confirmar la reserva
    btnConfirmar.addEventListener("click", () => {
        if (inputFecha.value === "") {
            alert("Por favor, selecciona una fecha y horario antes de confirmar.");
            return;
        }

        // Ocultar formulario y mostrar éxito
        vistaFormulario.classList.add("oculto");
        vistaExito.classList.remove("oculto");

        // Cerrar el modal automáticamente después de 3 segundos
        setTimeout(() => {
            modal.classList.add("oculto");
        }, 3000);
    });
});