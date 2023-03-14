let characters = document.querySelectorAll(".character");
let images = document.querySelectorAll("img");
let characterId = document.querySelectorAll(".character-id");
let generation = document.querySelectorAll(".generation");
let types = document.querySelectorAll(".types")

let types2 = document.querySelectorAll(".types2")


let c = 1;

pokemonId = 1;

pokemonCharacters = [];

pokemonTypes = [];

pokemonTypes2 = [];

// fetch('https://pokeapi.co/api/v2/type/18/')
// .then(response => response.json())
// // .then(data => console.log(data.pokemon[0].pokemon.name))

// .then(data => {
//   for(i = 0; i < data.pokemon.length; i++){
//     console.log(data.pokemon[i].pokemon.name)
//   }
// })

// console.log(characterId[0].textContent)



// fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
fetch(`https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=151`) // Gen 1

  .then((response) => response.json())

  // .then((data) => {
  //   for (const each in data.results) {
  //     console.log(data.results[each].name);
  //     characters[each].textContent = data.results[each].name;
  //     images[each].src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${c++}.svg`

  //     characterId[each].innerHTML = pokemonId++


  //   }
  // });


.then(data => {
    for(i = 0; i < characters.length; i++){
        characters[i].innerHTML = data.results[i].name

        // if(!pokemonCharacters.includes(data.results[i].name)){
          pokemonCharacters.push(data.results[i].name)
        // }
       
        images[i].src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${c++}.svg`;

        generation[i].textContent = 1

        characterId[i].innerHTML = pokemonId++;

    }

})

//   for(i = 0; i < characters.length; i++){
//     fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
//    .then(response => response.json())
//    .then(data => {console.log(data)})
   
//  }




window.onload = () => {
  pokemonCharacters.forEach((each) => {
  
    fetch(`https://pokeapi.co/api/v2/pokemon/${each}/`)
    .then(response => response.json())
    
    .then(data => {
       console.log(`${each} has ${data.types[0].type.name}`)

       pokemonTypes.push(data.types[0].type.name);

       for(i = 0; i < characters.length; i++){
        types[i].innerText = pokemonTypes[i]
      }   
       
       
       
       try{
         console.log(`${each} has ${data.types[1].type.name}`)
         pokemonTypes2.push(data.types[1].type.name)
         

         for(i = 0; i < characters.length; i++){

          if(pokemonTypes2[i]){
            types2[i].innerText = pokemonTypes2[i]

          }

          
        }   
 
         
         
        }
        catch(e){
          return null
        }
        
        
      })
    })
    
    // for(i = 0; i < characters.length; i++){
    //     // types[i].innerText = pokemonTypes[i]
    //     console.log(pokemonTypes.length)
    //   }
      
    }

  
   



  






