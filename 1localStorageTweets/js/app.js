//Variables
const listaTweets = document.getElementById("lista-tweets");
const formulario = document.getElementById("formulario");

//EventsListeners
eventListeners();
function eventListeners() {
    formulario.addEventListener("submit", agregarTweet);
    listaTweets.addEventListener("click", borrarTweet);

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
        console.log(e.target.parentElement.remove());
        alert("Tweet eliminado")
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