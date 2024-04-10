/* import { useEffect, useState, useRef } from "react"

import Buscador from "./Buscador"
import Cards from './Cards'

//Para crear una componente que muestre datos consumidos de una API necesitamos:
//1. Una función que nos devuelva los resultados de la API.
//2. Llamar a la función creada desde useEffect.
//3. Un estado, donde guardaremos los valores que nos devuelve la API.
//4. Utilizar el estado en el return de la página para mostrar los datos.

const MiApi = () => {
    // 3. Info guardara los valores traídos desde la API
    const [pokemon, setPokemon] = useState([]);

    // 2. Llamamos a la función consultarApi al momento de montar el componente
    useEffect(() => {
        consultarApi();
    }, [])

    const consultarApi = async () => {
        try{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=200')
            if(!response.ok){
                throw new Error('No se pudo obtener los datos de la API')
            }
            const data = await response.json();

        }catch(error){
            console.error('Error al obtener datos de la API', error)
        }
    }

    return (
        <>
            <Buscador />
            <Cards 
                />
        </>
    )
}

export default MiApi
 */

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
   console.log(pokemones)

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
                return {
                    name:capitalizeFirstLetter(newData.name),
                    imageUrl:newData.sprites.front_default
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

    /* useEffect(()=>{
        console.log(pokemones)
    },[pokemones]) */
    
    
    return (
        <div className="cardsStyle">
            {pokemones && pokemones.length > 0 ?
                pokemones.map((pokemon, index) => (
                    <div 
                        key={index}
                        >
                            <Cards
                            titleCard={pokemon.name}
                            subtitleCard={index + 1}
                            imageCard={pokemon.imageUrl} />
                    </div>
                ))
            
            : <h2>No hay pokemones</h2>}
            
        </div>
    )
}

export default MiApi
