let characters = document.querySelectorAll(".character");
let images = document.querySelectorAll("img");

let c = 1;

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((response) => response.json())

//   .then((data) => {
//     for (const each in data.results) {
//       console.log(data.results[each].name);
//       characters[each].textContent = data.results[each].name;
//       images[each].src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${c++}.svg`

//     }
//   });


.then(data => {
    for(i = 0; i < characters.length; i++){
        characters[i].innerHTML = data.results[i].name
       
        images[i].src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${c++}.svg`

    }

})
