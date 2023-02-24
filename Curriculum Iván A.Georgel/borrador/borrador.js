
 /*const $form = document.querySelector('#form')
 const $buttonMailto = document.querySelector('#trucazo')

 $form.addEventListener('submit', handleSubmit)
 

 /*Aca voy a recibir el evento de mi formulario*/ 
 /*function handleSubmit(event){
  event.preventDefault()
  
  const form = new FormData(this)

  console.log(form.get('cv'))
  buttonMailto.setAttribute('href','mailto:me@leonidasesteban.com?subject=${form.get('name')}&{$form.get('email')}body=')
  buttonMailto.click('')

 }*/

 document.getElementById('boton_saludo').onclick = function(){

   console.log("Capturamos el evento click: ");

   document.getElementById("click_saludo").innerHTML = "Muchas gracias por tomarse el tiempo de leer mi curriculum";
 }

 document.getElementById('boton_saludo').addEventListener('click', function(){
  document.body.style.backgroundColor = '#AD0909';
 });




 function bigImg(x) {
  x.style.height = "200px";
  x.style.width = "200px";
}

function normalImg(x) {
  x.style.height = "150px";
  x.style.width = "150px";
}