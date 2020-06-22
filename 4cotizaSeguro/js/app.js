//Variables
var marca=document.getElementById("marca");
var anio=document.getElementById("anio");
var cotizacion=document.getElementById("cotizacion");
var btnCotizar=document.getElementById("cotizar")
var spinner=document.getElementById("spinner")
var tipo=document.getElementById("tipo")
const precioBase=1000
marcaSeleccionada="americano"
anioSeleccionado="2020"
tipoSeleccionado="basico"
cargarEventos()
//Eventos

function cargarEventos(){
 
document.addEventListener('DOMContentLoaded',()=>{
    
  spinner.style.display="none"
})

marca.addEventListener("change",seleccionarMarca)
anio.addEventListener("change",seleccionarAnio)
tipo.addEventListener("change",seleccionarTipo)
btnCotizar.addEventListener("click",cotizar)
}

//Funciones

function seleccionarMarca(e){
marcaSeleccionada=e.target.value

}
function seleccionarAnio(e){
  anioSeleccionado=e.target.value
  
}
function seleccionarTipo(e){
  
  tipoSeleccionado=e.target.value

}
function cotizar(){
  cotizacion.innerHTML=""
  var precioCalculado=precioBase
  const fragment=new DocumentFragment();

  const li=document.createElement('li');
  li.innerHTML=`Marca seleccionada: ${marcaSeleccionada}`
  fragment.appendChild(li)
  const li2=document.createElement('li');
  li2.innerHTML=`Año seleccionado: ${anioSeleccionado}`
  fragment.appendChild(li2)
  const li3=document.createElement('li');
  li3.innerHTML=`Tipo seleccionado: ${tipoSeleccionado}`
  fragment.appendChild(li3)

  if(tipoSeleccionado==="completo"){precioCalculado=precioCalculado*2}
  if(anioSeleccionado<2018){precioCalculado=precioCalculado+0.3*precioCalculado}else{precioCalculado=precioCalculado+0.5*precioCalculado}
  if(marcaSeleccionada=="americano"){precioCalculado=precioCalculado+0.3*precioCalculado}else if(marcaSeleccionada=="asiatico"){
    precioCalculado=precioCalculado+0.5*precioCalculado}else{
      precioCalculado=precioCalculado+0.7*precioCalculado
    }
const precio=document.createElement('div')
precio.innerHTML=`<div class="alert alert-success">Cotizacion: ${precioCalculado} </div`
  fragment.appendChild(precio);
  cotizacion.appendChild(fragment);





}