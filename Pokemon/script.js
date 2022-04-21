const pokemonImage = document.getElementById("js--pokemon-image");
let randomNumber = Math.floor(Math.random() * 897 + 1);

console.log(randomNumber)


let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
.then(function(response){
    return response.json();
})
.then(function(realData){
    console.log(realData);
    pokemonName = realData.name;
    pokemonText.innerText = "A wild " + pokemonName + " has appeared";
    pokemonImage.src = realData.sprites.front_default;
});


const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
let pokemonName = "";

let pokemonGamePlayed = false;



catchButton.onclick = function(){
    if(pokemonGamePlayed === false){
        let catchNumber = Math.floor(Math.random() * 2);
        if(catchNumber === 0){
            pokemonText.innerText = "Pokemon Fled!"   
            setTimeout(random, 1750); 
        }
    
        else{
            pokemonText.innerText = "Pokemon Caught!"
            caughttext.innerText = "Pokemon Caught: "
            setTimeout(random, 1750);
        }
        pokemonGamePlayed = true
    }
}

function random(){
    randomNumber = Math.floor(Math.random() * 897 + 1);
            console.log(randomNumber);
            fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
            .then(function(response){
                return response.json();
            })
            .then(function(realData){
                console.log(realData);
                pokemonImage.src = realData.sprites.front_default;
                pokemonName = realData.name;
                pokemonText.innerText = "A wild " + pokemonName + " has appeared";
                setTimeout(nieuwepokemon, 750);
            });        
}


function nieuwepokemon(){
    pokemonGamePlayed = false
}

const TitelSerie = document.getElementById("js--Pokemon-titel");
const BeschrijfingSerie = document.getElementById("js--Pokemon-beschrijfing");

let Pokemon = fetch("https://api.tvmaze.com/shows/590")
.then(function(antwoord){
    return antwoord.json();
})
.then(function(echteData){
    console.log(echteData);
    pokemonnaam = echteData.name;
    pokemonbeschrijfing = echteData.summary;
    TitelSerie.innerText = pokemonnaam;
    BeschrijfingSerie.innerHTML = pokemonbeschrijfing;

    
});

const nameText = document.getElementById("js--name");
const inputField = document.getElementById("js--input");

inputField.onkeyup = function(event) {
    if (event.keyCode === 13) {
        let name = inputField.value;
        let age = fetch("https://api.agify.io/?name=" + name)
        .then(function(response) {
            return response.json();
        })
            .then(function (jsonData) {
                inputField.style.display = "none";
                nameText.innerText = jsonData.age;    
        });
    }
}