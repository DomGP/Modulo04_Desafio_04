import { useEffect, useState, useRef } from "react"

import Buscador from "./Buscador"
import Cards from './Cards'
import Boton from "./Boton";

//Para crear una componente que muestre datos consumidos de una API necesitamos:
//1. Una función que nos devuelva los resultados de la API.
//2. Llamar a la función creada desde useEffect.
//3. Un estado, donde guardaremos los valores que nos devuelve la API.
//4. Utilizar el estado en el return de la página para mostrar los datos.

const MiApi = () => {
    // 3. Info guardara los valores traídos desde la API
    const [pokemones, setPokemones] = useState([]);
    const [busquedaPokemon, setBusquedaPokemon] = useState('')
    const [orden, setOrden] = useState(true)

    // Función para capitalizar la primera letra de una cadena
    const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
    // 2. Llamamos a la función consultarApi al momento de montar el componente
    const consultarApi = async () => {
        try{
            //HACE LA SOLICITUD DE LA API
            let response = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=151')
            //CONVIERTE LOS DATOS EN FORMATO JSON
            let data = await response.json()

            //MAPEA LOS DATOS PARA OBTENER DETALLES DE CADA POKEMON
            const detallesPokemones = await Promise.all(data.results.map(async(pokemon) => {
                //SE REALIZA UNA SOLICITUD A CADA URL DE CADA POKEMON
                const newResponse = await fetch(pokemon.url);
                //SE CONVIERTEN EN FORMATO JSON
                const newData = await newResponse.json();

                //OBJETO QUE MAPEA LOS TIPOS DE POKEMON DE INGLES A ESPAÑOL
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

                //HACE UN MAPEO PARA TRAER TODOS LOS TIPOS DE CADA POKEMON, ADEMÁS DE SEPRARLOS POR UNA COMA Y UN ESPACIO
                const type = newData.types.map(type => capitalizeFirstLetter(tipoTraduccion[type.type.name])).join(', ')
                


                return {
                    name:capitalizeFirstLetter(newData.name),
                    imageUrl: newData.sprites.front_shiny,
                    type:type,
                    id: newData.id
                    /* imageUrl:newData.sprites.versions['generation-i']['red-blue'].front_default, */
                }
            }));
            //ACTUALIZA EL ESTADO POKEMONES CON LA INFO OBTENIDA
            setPokemones(detallesPokemones)
            
        }catch(error){
            console.log('error')
        }
        
    }
    
    //PARA REALIZAR SOLO UN LLAMADO A LA API
    useEffect(() => {
        consultarApi();
    }, [])

    //FILTRO BUSQUEDA => ACTUALIZA EL ESTADO BUSQUEDAPOKEMON CON EL VALOR INGRESADO EN EL INPUT
    const buscar = (busquedaPokemon) =>{
        setBusquedaPokemon(busquedaPokemon)
    }

    //REVERSE => CREA UNA COPIA DEL ARRAY, E INVIERTE EL ORDEN DE ESA COPIA Y ACTUALIZA EL ESTADO DE LOS POKEMONES A ESE NUEVO ORDEN

    const reversePokemones = () => {
        setPokemones([...pokemones].reverse());
        setOrden(false);
    };
    
    const resetOrder = () => {
        setPokemones([...pokemones].reverse());
        setOrden(true);
    };

    //CONTROLA EL COMPORTAMIENTO DEL BOTON
    const click = () => {
        if (orden){
            reversePokemones();
        } else{
            resetOrder();
        }
      }
    
        
    return (
        <>
            <Buscador
                busquedaPokemon={busquedaPokemon}
                setBusquedaPokemon = {buscar}
                />
            <Boton 
                onClick={click}
                label={orden ? 'Revertir Orden' : 'Restaurar Orden'}/>
            <div className="cardsStyle">
            {pokemones && pokemones.length > 0 ?
                pokemones.filter(pokemon => pokemon.name.toLowerCase().includes(busquedaPokemon.toLocaleLowerCase())).map((pokemon, index) => (
                    <div 
                        key={index}
                        >

                            <Cards
                            titleNumber={pokemon.id}
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
