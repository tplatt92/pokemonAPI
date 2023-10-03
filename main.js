// Set up an API call to retrieve data for the chosen Pokemon
// Get info for Name, ID, Height, Weight, Type, image
// Name path - ["forms"][0]["name"]
// ID path - ["id"]
// Height path - ["height"]
// Weight path - ["weight"]
// Type path - ["types"][0]["type"]["name"]
// Image path - ["versions"]["generation-i"]["red-blue"]["front-default"]

const searchInput = document.querySelector("#name-input");
const searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", () => {
  let pokeSearch = searchInput.value;
  getPokemon(pokeSearch);
});

async function getPokemon(pokemon) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await response.json();

  // Required Data -
    let pokeName = data["forms"][0]["name"];
    let pokeID = data["id"];
    let pokeHeight = data["height"];
    let pokeWeight = data["weight"];
    let pokeType = data["types"][0]["type"]["name"];
    let pokeImg = data["sprites"]["front_default"]; // Image, need to sort later

    const domName = document.querySelector("#name-screen");
    const domID = document.querySelector("#id-screen");
    const domHeightWeight = document.querySelector("#about-screen");
    const domType = document.querySelector("#type-screen");
    const domImg = document.querySelector("#main-screen");

    domName.innerText = `${pokeName}`;
    domID.innerText = `#${pokeID}`;
    domHeightWeight.innerText = `HEIGHT: ${pokeHeight}0cm WEIGHT: ${pokeWeight / 100}kg`;
    domType.innerText = `${pokeType}`;
    domImg.style.backgroundImage = `url(${pokeImg})`;

    console.log(pokeName, pokeID, pokeHeight, pokeWeight, pokeType, pokeImg)


}


console.log()