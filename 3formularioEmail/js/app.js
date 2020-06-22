//Variables
const email=document.getElementById('email');
const asunto=document.getElementById('asunto');
const mensaje=document.getElementById('mensaje');
const btnEnviar=document.getElementById('enviar');
const btnReset=document.getElementById('resetBtn');


//Ejecutar al iniciar
eventListeners();

//Event Listener

function eventListeners(){

    document.addEventListener('DOMContentLoaded',inicioApp);
    email.addEventListener('blur',validarCampo)
    //blur es cuando un zelemento pierde su foco como el evento focusout
    asunto.addEventListener('blur',validarCampo)
    mensaje.addEventListener('blur',validarCampo)
    btnEnviar.addEventListener('click',enviarEmail)
    btnReset.addEventListener('click',resetFormulario)


}



//Funciones
function inicioApp(){
    btnEnviar.disabled=true
}
function validarCampo(){
    validarLongitud(this);

    if(this.type==='email'){
        validarEmail(this);
    }

    let errores =document.querySelectorAll('.error');
    if(email.value!=='' && asunto.value!=='' && mensaje.value!==''){
        if(errores.length===0){
            btnEnviar.disabled=false;
        }       
    }
}

function validarLongitud(campo){

    if(campo.value.length>0){
        campo.style.borderBottomColor="green";
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor="red";
        campo.classList.add('error');
        btnEnviar.disabled=true;
    }

}
function validarEmail(email){
const mensaje=email.value;
if(mensaje.indexOf("@")!==-1){ //si es -1 significa que no encontro
    email.style.borderBottomColor="green";
    email.classList.remove('error');

}else{
    email.style.borderBottomColor="red";
        email.classList.add('error');
        btnEnviar.disabled=true;
}
}


function enviarEmail(e){
const spinnerGif=document.querySelector('#spinner');
spinnerGif.style.display='block';
const enviado =document.createElement('img');
enviado.src="img/mail.gif";
enviado.style.display='block';
setTimeout(()=>{
    spinnerGif.style.display="none";
    document.querySelector('#loaders').appendChild(enviado);
    setTimeout(()=>{
        enviado.remove();
        resetFormulario();
    },5000)
},3000)

    e.preventDefault();

}

function resetFormulario(){
    email.value="";
    asunto.value="";
    mensaje.value="";
    btnEnviar.disabled="true";
    
}