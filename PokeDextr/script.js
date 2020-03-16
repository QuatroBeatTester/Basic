async function getData(url){
            try{
            let response = await fetch(url);//Send http request and get response
            let result = await response.json();//Get data from response
            displayListing(result);//Do something with the data
             }catch(e){
             console.log(e);//catch and log any errors
            }
         }

         async function getPokemonData(url){
            try{
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${url}`);//Send http request and get response
            let result = await response.json();//Get data from response
            showResults(result);//Do something with the data
             }catch(e){
             console.log(e);//catch and log any errors
            }
            
         }


        function getPokemon(pokemonName){
          //given a pokemon name performs an ajax requests querying the pokemon's data and pass it to displayPokemon()
          console.log()
        }

        function getListing(){
          //performs an ajax request to the spcified url to get pokemon data then pass it to displayListing()
           getData("https://pokeapi.co/api/v2/pokemon/?limit=50&offset=50")
           
           
        }

        function displayListing(pokeList){
           //Renders a list of pokemon links to the page 
           
          let result = document.querySelector('#listing');
           console.log(result);
           for(i=0; i<50; i++){
             let idname = pokeList["results"][i]["name"]
             let onurl = pokeList["results"][i]["url"]
             
            result.innerHTML += ` <a href="#" id="${idname}" class="collection-item" onclick=displayPokemon("${idname}")>
             ${idname}
             </a><br>`

           }
         }

        function displayPokemon(pokemon){
          //renders details of the specified pokemon onto the page
          getPokemonData(pokemon)
          

        }
 
        function showResults(results){
          let sprite = results["sprites"]["front_default"]
          let id = results["id"]
          let name = results["name"]
          let types = results["types"][0]["type"]["name"]
          let weight = results["weight"]
          let height = results["height"]
          let result = document.querySelector('#result')
          result.innerHTML = `<div id='cardborder'>
                                 <div class="decor">
                                  <img src="${sprite}" alt="${id}" height="200" width="200">
                                  <br>${name} #${id}<br>
                                  <br> 
                                </div>
                                type:${types}<br> 
                                weight:${weight}<br> 
                                height: ${height}<br>
                              </div>`


        } 

        getListing(); 