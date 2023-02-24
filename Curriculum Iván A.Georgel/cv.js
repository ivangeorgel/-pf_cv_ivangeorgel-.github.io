
/*Aca cree la función que mostrara el mensaje del evento "onload"*/ 
function cargaBody(){
    alert('¡La pagina ha cargado exitosamente!');
   }



/*Con este evento "onclick" va a usar este id para buscar el texto en Jacascript y remplazarlo en el documento HTML*/

   document.getElementById('boton_saludo').onclick = function(){

    console.log("Capturamos el evento click: ");
 
    document.getElementById("click_saludo").innerHTML = "¡Muchas gracias por tomarse el tiempo de leer mi curriculum, saludos!";
  }



 /*Con este evento le estoy diciendo que cuando se haga click en el boton cambie el color del body*/
  document.getElementById('boton_saludo').addEventListener('click', function(){
   document.body.style.backgroundColor = '#508C59 ';
  });



/*Esta funcion me va a permitir que cuando el mouse este sobre el elemento imagen se agrande y cuando lo saque este se achique */
  function bigImg(x) {
   x.style.height = "200px";
   x.style.width = "200px";
 }
 
 function normalImg(x) {
   x.style.height = "150px";
   x.style.width = "150px";
 }

  
  
  