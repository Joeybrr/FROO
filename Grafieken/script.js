const updateTime = () => {
    const today = new Date();
    document.querySelector("#js--time").textContent = `${today.getHours()}:${today.getMinutes()}`;
};

const updateTimeInterval = setInterval(() => updateTime(), 1000);

const startButton = document.getElementById("js--start");
const stopButton = document.getElementById("js--stop");
const resetButton = document.getElementById("js--reset");

let seconds = 0;
let minutes = 0;
let running = false;

const secondsTimer = document.getElementById("js--secondsTimer");
const minutesTimer = document.getElementById("js--minutesTimer");

let timer;


startButton.onclick = function () {
    if (running === true) {
        return;
    }
    running = true;
    timer = setInterval(function () {
        seconds = seconds + 1;
        if (seconds === 60) {
            minutes = minutes + 1;
            minutesTimer.innerText = minutes;
            seconds = 0;
        }
        secondsTimer.innerText = seconds;
    }, 1000);
}


stopButton.onclick = function () {
    clearInterval(timer);
    running = false;
}

resetButton.onclick = function () {
    seconds = 0;
    minutes = 0;

    secondsTimer.innerText = seconds;
    minutesTimer.innerText = minutes;
};


/* Code Charts*/

const response = await fetch("data.json");
const responseData = await response.json();

const data = {
    labels: responseData.map(({ label }) => label),
    datasets: [
        {
            label: "Most played consoles in hours",
            data: responseData.map(({ data }) => data),
            backgroundColor: responseData.map(({ color }) => `#${color}`)
        }
    ]
};

const chart = [...document.querySelectorAll(".chart canvas")].map(
    (el) => new Chart(el, { type: el.dataset.type, data })
);


function getPokemon() {
    var i;
    let normal = 0, fighting = 0, flying = 0, posion = 0, ground = 0, rock = 0, bug = 0, ghost = 0,
        steel = 0, fire = 0, water = 0, grass = 0, electric = 0, psychic = 0, ice = 0, dragon = 0,
        dark = 0, fairy = 0, unknown = 0, shadow = 0;
    
    const labels = ['normal', 'fighting', 'flying', 'posion', 'ground', 'rock', 'bug', 'ghost',
        'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy',
        'unknown', 'shadow',]

    for (i = 0; i < 10; i++) {
        let pokemonfoto = document.getElementById("js--pokemon-image")
        let random = Math.floor(Math.random() * 500 + 1);
        let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + random)
            .then(function (response) {
                return response.json();
            })
            .then(function (pokemon) {
                switch (pokemon.types[0].type.name) {
                    case 'normal':
                        normal = normal + 1;
                        break;
                    case 'fighting':
                        fighting = fighting + 1;
                        break;
                    case 'flying':
                        flying = flying + 1;
                        break;
                    case 'posion':
                        posion = posion + 1;
                        break;
                    case 'ground':
                        ground = ground + 1;
                        break;
                    case 'rock':
                        rock = rock + 1;
                        break;
                    case 'bug':
                        bug = bug + 1;
                        break;
                    case 'ghost':
                        ghost = ghost + 1;
                        break;
                    case 'steel':
                        steel = steel + 1;
                        break;
                    case 'fire':
                        fire = fire + 1;
                        break;
                    case 'water':
                        water = water + 1;
                        break;
                    case 'grass':
                        water = grass + 1;
                        break;
                    case 'electric':
                        electric = electric + 1;
                        break;
                    case 'psychic':
                        psychic = psychic + 1;
                        break;
                    case 'ice':
                        ice = ice + 1;
                        break;
                    case 'dragon':
                        dragon = dragon + 1;
                        break;
                    case 'dark':
                        dark = dark + 1;
                        break;
                    case 'fairy':
                        fairy = fairy + 1;
                        break;
                    case 'unknown':
                        unknown = unknown + 1;
                        break;
                    case 'shadow':
                        shadow = shadow + 1;
                        break;


                }
            }).then(function () {
                dataPokemon.datasets[0].data = [normal, fighting, flying, posion, ground, rock, bug, ghost,
                    steel, fire, water, grass, electric, psychic, ice, dragon, dark, fairy,
                    unknown, shadow];
                graph.update();
            });
    }
    
    const dataPokemon = {
        labels: labels,
        datasets: [
            {
                label: "Pokemon types",
                data: [],
                backgroundColor: ['#0093AB'],
            }
        ]
    }
    const configPokemon = {
        type: 'bar',
        data: dataPokemon,
    }

   const graph = new Chart(document.getElementById("js--chart--2"), configPokemon);
}

getPokemon();