//Variables
const listaTweets=document.getElementById("lista-tweets");
const formulario=document.getElementById("formulario");

//EventsListeners
eventListeners();
function eventListeners(){
    formulario.addEventListener("submit",agregarTweet);
    
}


//Functions

function agregarTweet(e){
    e.preventDefault();
    const tweet=document.getElementById('tweet').value;
    const botonBrorrar=document.createElement('A');
    botonBrorrar.classList="borrar-tweet";
    botonBrorrar.innerText="X";
    const li=document.createElement("LI");
    li.innerText=tweet;
    li.appendChild(botonBrorrar); 
    listaTweets.appendChild(li);
    
}