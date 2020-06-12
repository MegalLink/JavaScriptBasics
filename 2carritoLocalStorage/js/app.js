const carrito=document.getElementById('carrito');
const cursos=document.getElementById('lista-cursos');
const listaCursos=document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn=document.getElementById('vaciar-carrito')
cargarEventListeners();


function cargarEventListeners(){
//Agregar carrito
cursos.addEventListener('click',comprarCurso)
//Al eliminar del carrito
carrito.addEventListener('click',eliminarCurso)
//Vaciar carrito
vaciarCarritoBtn.addEventListener('click',vaciarCarrito)
//AL CARGAR DOCUMENTO MOSTRAR LOCAL STORAGE
document.addEventListener('DOMContentLoaded',leerLocalStorage)
}


function comprarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const curso=e.target.parentElement.parentElement;
       leerDatosCurso(curso);
    }
}
function leerDatosCurso(curso){
    const infoCurso={
        imagen: curso.querySelector('img').src,
        titulo:curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
 insertarCarrito(infoCurso);
}

function insertarCarrito(curso){
 const row=document.createElement('tr');
 row.innerHTML=`
 <td>
    <img src="${curso.imagen}" width="100px">
 </td>
 <td>
 ${curso.titulo}
 </td>
 <td>
 ${curso.precio}
 </td>
 <td>
   <a href="#" class="borrar-curso" data-id= "${curso.id}">X</a>
 </td>
 `;
    listaCursos.appendChild(row);

    //GUARDAR EN LOCAL STORAGE
    guardarCursoLocalStorage(curso);
}
//Elimina el curso del carrito en el DOM
function eliminarCurso(e){
    e.preventDefault();
   
    let curso,cursoId;
    if(e.target.classList.contains('borrar-curso')){
        //traversing
        e.target.parentElement.parentElement.remove();
        curso=e.target.parentElement.parentElement;
        cursoId=curso.querySelector('a').getAttribute('data-id');
    }
    eliminarCursoLocalStorage(cursoId)
}
function vaciarCarrito(e){
    e.preventDefault();
    //FORMA RAPIDA
    // listaCursos.innerHTML="";
    //FORMA  RECOMENDADA por que elimina más rapido
    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);
    }
    localStorage.clear();
}


function  guardarCursoLocalStorage(curso){
let cursos;
cursos=obtenerCursosLocalStorage();
cursos.push(curso);
localStorage.setItem('cursos',JSON.stringify(cursos));
}
function obtenerCursosLocalStorage(){
let cursosLS;
//si hay algo en LS
if(localStorage.getItem('cursos')==null){
    cursosLS=[];
}else{
    cursosLS=JSON.parse(localStorage.getItem('cursos'));
}
return cursosLS
}

function leerLocalStorage(){
    let cursosLS;
    cursosLS=obtenerCursosLocalStorage();
    cursosLS.forEach((curso)=>{
        const row=document.createElement('tr');
 row.innerHTML=`
 <td>
    <img src="${curso.imagen}" width="100px">
 </td>
 <td>
 ${curso.titulo}
 </td>
 <td>
 ${curso.precio}
 </td>
 <td>
   <a href="#" class="borrar-curso" data-id= "${curso.id}">X</a>
 </td>
 `;
    listaCursos.appendChild(row);
    })
}


function eliminarCursoLocalStorage(cursoId){
    let cursosLS;
    cursosLS=obtenerCursosLocalStorage();
    cursosLS.forEach((curso,index)=>{
        if(curso.id===cursoId){
            cursosLS.splice(index,1);
        }
    })
    localStorage.setItem('cursos',JSON.stringify(cursosLS))
}
