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
}
//Elimina el curso del carrito en el DOM
function eliminarCurso(e){
    e.preventDefault();
   
    let curso;
    if(e.target.classList.contains('borrar-curso')){
        //traversing
        e.target.parentElement.parentElement.remove();
    }
}
function vaciarCarrito(e){
    e.preventDefault();
    //FORMA RAPIDA
    // listaCursos.innerHTML="";
    //FORMA  RECOMENDADA por que elimina más rapido
    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);
    }
}