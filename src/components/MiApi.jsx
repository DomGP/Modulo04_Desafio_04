import { useEffect, useState, useRef } from "react"

import Buscador from "./Buscador"
import Cards from './Cards'

//Para crear una componente que muestre datos consumidos de una API necesitamos:
//1. Una función que nos devuelva los resultados de la API.
//2. Llamar a la función creada desde useEffect.
//3. Un estado, donde guardaremos los valores que nos devuelve la API.
//4. Utilizar el estado en el return de la página para mostrar los datos.

const MiApi = () => {
    // 3. Info guardara los valores traídos desde la API
    const [pokemones, setPokemones] = useState([]);
    const [busquedaPokemon, setBusquedaPokemon] = useState('')

   // Función para capitalizar la primera letra de una cadena
   const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
    // 2. Llamamos a la función consultarApi al momento de montar el componente
    const consultarApi = async () => {
        try{
            let response = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=151')
            let data = await response.json()

            const detallesPokemones = await Promise.all(data.results.map(async(pokemon) => {
                const newResponse = await fetch(pokemon.url);
                const newData = await newResponse.json();

                const tipoTraduccion = {
                    "normal": "normal",
                    "fire": "fuego",
                    "water": "agua",
                    "electric": "eléctrico",
                    "grass": "planta",
                    "ice": "hielo",
                    "fighting": "lucha",
                    "poison": "veneno",
                    "ground": "tierra",
                    "flying": "volador",
                    "psychic": "psíquico",
                    "bug": "bicho",
                    "rock": "roca",
                    "ghost": "fantasma",
                    "dragon": "dragón",
                    "dark": "siniestro",
                    "steel": "acero",
                    "fairy": "hada"
                };

                const type = newData.types.map(type => capitalizeFirstLetter(tipoTraduccion[type.type.name])).join(', ')
                


                return {
                    name:capitalizeFirstLetter(newData.name),
                    imageUrl: newData.sprites.front_shiny,
                    type:type
                    /* imageUrl:newData.sprites.versions['generation-i']['red-blue'].front_default, */
                }
            }));

            setPokemones(detallesPokemones)
            
        }catch(error){
            console.log('error')
        }
        
    }
    
    useEffect(() => {
        consultarApi();
    }, [])

    //FILTRO BUSQUEDA
    const buscar = (busquedaPokemon) =>{
        setBusquedaPokemon(busquedaPokemon)
    }
        
    return (
        <>
            <Buscador
                busquedaPokemon={busquedaPokemon}
                setBusquedaPokemon = {buscar}/>
            <div className="cardsStyle">
            {pokemones && pokemones.length > 0 ?
                pokemones.filter(pokemon => pokemon.name.toLowerCase().includes(busquedaPokemon.toLocaleLowerCase())).map((pokemon, index) => (
                    <div 
                        key={index}
                        >

                            <Cards
                            titleNumber={index + 1}
                            titleCard={pokemon.name}
                            imageCard={pokemon.imageUrl} 
                            titleType={pokemon.type}/>
                    </div>
                ))
            
            : <h2>Cargando pokemones</h2>}
            
        </div>
        </>
        
    )
}

export default MiApi
