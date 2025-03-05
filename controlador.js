//alert("estoy vinculado")

//crear variables 

let inputNombre=document.getElementById("nombre")
let inputCedula=document.getElementById("cedula")
let inputCorreo=document.getElementById("correo")
let inputAsistencia=document.getElementById("asistencia")

let botonFormulario=document.getElementById("boton")


//detectando de clic en eventos de pantalla 
// un evento es una interacción del usuario (humano) con el codigo(la pagina web)
botonFormulario.addEventListener("click", function(evento){
   //1. se inicia desactivando el comportamiento por defecto
   evento.preventDefault()

   //2. Probamos que el evento se esta escuchando con exito 
   Swal.fire({
       title: "Good job!",
       text: "You clicked the button!",
       icon: "success"
     });

})