document.getElementById("formularioContacto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  let valido = true;

  if (nombre.value.trim() === "") {
      nombre.classList.add("is-invalid");
      valido = false;
  } else {
      nombre.classList.remove("is-invalid");
  }

  if (!correo.value.trim().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      correo.classList.add("is-invalid");
      valido = false;
  } else {
      correo.classList.remove("is-invalid");
  }

  if (mensaje.value.trim().length < 5) {
      mensaje.classList.add("is-invalid");
      valido = false;
  } else {
      mensaje.classList.remove("is-invalid");
  }

  if (valido) {
      Swal.fire({
          title: 'Mensaje enviado',
          text: 'Gracias por contactarnos. Te responderemos pronto.',
          icon: 'success',
          confirmButtonColor: '#f28a8a'
      });

      this.reset();
  }
});
