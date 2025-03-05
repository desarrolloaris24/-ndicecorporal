//alert("estoy vinculado")

//crear variables 

 let inputPesoUsuario=document.getElementById("pesousuario")
 let inputAltursUsuario=document.getElementById("alturausuario")
 let botonFormulario=document.getElementById("boton")

 
//detectando de clic en eventos de pantalla 
// un evento es una interacción del usuario (humano) con el codigo(la pagina web)
botonFormulario.addEventListener("click", function(evento){
    //1. se inicia desactivando el comportamiento por defecto
    evento.preventDefault()

    //2. Probamos que el evento se esta escuchando con exito 
    //3. creamos variables para alamcenar los datos del usuario 
    let estaturaUsuario=inputAltursUsuario.value
    let pesousuario=inputPesoUsuario.value

    //4.se crea una variable para el resultado 
    let resultado=document.getElementById("resultado")
    
    //5. se modifica el resultado con los VALUE

    //6. se calcula lo pedido 
    let calculoIMC=pesousuario/(estaturaUsuario*estaturaUsuario)

    //6A se crea variable para almacenar l imagen 
    let imagen=document.getElementById("foto")
   
    //7. SE DEBE DECIDIR SOBRE EL RESULTADO }
    if(calculoIMC<18.5){
      resultado.textContent="Estas bajo de peso"
      imagen.src="./imagenes/bajopeso.png"
    }
    else if(calculoIMC>=18.5 && calculoIMC<24.9){
      resultado.textContent="Estas meelito, sigue asi"
      imagen.src="./imagenes/normal.png"
    }
    else if(calculoIMC>=24.9 && calculoIMC<29.9){
      resultado.textContent="Deja de comer lengua e' burro, tienes sobrepeso"
      imagen.src="./imagenes/obeso.png"
    }
    else if(calculoIMC>=29.9 && calculoIMC<34.9){
      resultado.textContent="no consumas comida chatarra, estas obes@"
      imagen.src="./imagenes/sobrepeso.png"
    }
    else{
      resultado.textContent="San pedro te espera, hasta siempre..."
      imagen.src="./imagenes/extremo.png"
    }



    /*Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });*/

})