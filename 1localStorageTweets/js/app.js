//Variables
const listaTweets = document.getElementById("lista-tweets");
const formulario = document.getElementById("formulario");

//EventsListeners
eventListeners();
function eventListeners() {
    formulario.addEventListener("submit", agregarTweet);
    listaTweets.addEventListener("click", borrarTweet);
    document.addEventListener('DOMContentLoaded',localStorageListo)
}


//Functions

function agregarTweet(e) {
    e.preventDefault();
    const tweet = document.getElementById('tweet').value;
    const botonBrorrar = document.createElement('A');
    botonBrorrar.classList = "borrar-tweet";
    botonBrorrar.innerText = "X";
    const li = document.createElement("LI");
    li.innerText = tweet;
    li.appendChild(botonBrorrar);
    listaTweets.appendChild(li);
    agregarTweetLocalStorage(tweet);
}
function borrarTweet(e) {
    e.preventDefault();

    if (e.target.className === "borrar-tweet") {
        e.target.parentElement.remove();
        // console.log(e.target.parentElement.innerText)
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    } else {
        //console.log("No diste click en la x")
    }
}
function agregarTweetLocalStorage(tweet) {
    let tweets;

    tweets = obtenerTweetsLocalStorage()

    tweets.push(tweet)

    localStorage.setItem("tweets", JSON.stringify(tweets));


}

function obtenerTweetsLocalStorage() {
    let tweets;
    if (!localStorage.getItem('tweets')) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}
function localStorageListo(){

    let tweets;
    tweets=obtenerTweetsLocalStorage();
    tweets.forEach((tweet)=>{
       
    const botonBrorrar = document.createElement('A');
    botonBrorrar.classList = "borrar-tweet";
    botonBrorrar.innerText = "X";
    const li = document.createElement("LI");
    li.innerText = tweet;
    li.appendChild(botonBrorrar);
    listaTweets.appendChild(li);
    })

}
function borrarTweetLocalStorage(tweetX){
    let tweets,tweetBorrar;
    tweetBorrar=tweetX.substring(0,tweetX.length-1);
    tweets=obtenerTweetsLocalStorage();
    tweets.forEach((tweet,index)=>{
        if(tweet===tweetBorrar){
            tweets.splice(index,1) //el uno es de cuantos lugares quitar 
        }
    })
    localStorage.setItem('tweets',JSON.stringify(tweets));
}