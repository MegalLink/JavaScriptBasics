//variables
const presupuestoUsuario = prompt("Cual es tu presupuesto semanal?");
const formulario = document.getElementById("agregar-gasto");
let cantidadPresupuesto;

44;
//clases
class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
  }
  presupuestoRestante(cantidad = 0) {
    return (this.restante -= Number(cantidad));
  }
}

class Interfaz {
  insertarPresupuesto(cantidad) {
    console.log("Cantidad", cantidad);
    const presupuestoSpan = document.querySelector("span#total");
    const restanteSpan = document.querySelector("span#restante");
    presupuestoSpan.innerHTML = `${cantidad}`;
    restanteSpan.innerHTML = `${cantidad}`;
  }
  imprimirMensaje(mensaje, tipoMensaje) {
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert");
    if (tipoMensaje !== "danger") {
      formulario.reset();
    }

    divMensaje.classList.add(tipoMensaje);
    divMensaje.appendChild(document.createTextNode(mensaje));
    //insertar mensaje en el DOM
    document.querySelector(".primario").insertBefore(divMensaje, formulario);
    //quitarlo despues de 3 segundos
    setTimeout(() => {
      document.querySelector(".primario .alert").remove();
    }, 3000);
  }
  agregarGastoListado(nombre,cantidad){
    const gastosListado=document.querySelector('#gastos ul');
    const li=document.createElement('li')
    li.className="list-group-item d-flex justify-content-between align-items-center"
    li.innerHTML=`${nombre} :<span class="badge badge-primary badge-pill">${cantidad} $</span>
    `
    gastosListado.appendChild(li);
  }

  presupuestoRestante(cantidad){
      console.log(cantidadPresupuesto)
      const restante=document.querySelector('span#restante');

      //utiliza la funcion de la clase
      const presupuestoRestanteUsuario=cantidadPresupuesto.presupuestoRestante(cantidad)
      restante.innerHTML=`${presupuestoRestanteUsuario}`
      this.comprobarPresupuesto()
  }
  comprobarPresupuesto(){
      console.log("Comprobar presupuesto")
const presupuesto=cantidadPresupuesto.presupuesto;
const restante=cantidadPresupuesto.restante;
const uiRestante=document.querySelector('.restante');
//Comprobar 25% del gasto
if((restante/presupuesto)<=0.25){
    
    uiRestante.classList.remove('alert-success','alert-warning');
    uiRestante.classList.add('alert-danger');
}else if((restante/presupuesto)<=0.5){
    uiRestante.classList.remove('alert-success','alert-danger');
    uiRestante.classList.add('alert-warning');
}else{
    uiRestante.classList.remove('alert-warning','alert-danger');
    uiRestante.classList.add('alert-success');
}
}
}

//event Listeners

document.addEventListener("DOMContentLoaded", () => {
  if (!presupuestoUsuario) {
    //recarga la pagina
    window.location.reload();
  } else {
    cantidadPresupuesto = new Presupuesto(presupuestoUsuario);

    const ui = new Interfaz();
    ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
  }
});
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  //leer del formulario de gsatos
  const nombreGasto = document.querySelector("#gasto").value;
  const cantidadGasto = document.querySelector("#cantidad").value;

  const ui = new Interfaz();
  //comprobar campos no esten vacions
  if (!nombreGasto || !cantidadGasto) {
    ui.imprimirMensaje("Campo vacio", "alert-danger");
  } else {
    ui.imprimirMensaje("Agregado", "alert-success");
    ui.agregarGastoListado(nombreGasto,cantidadGasto);
    ui.presupuestoRestante(cantidadGasto);

  }
});
//funciones
