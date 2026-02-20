import { useState } from 'react';
import style from './Pokedex.module.css';
import { Pokemon } from './Pokemon';
import { PokemonList } from './PokemonList';


export const Demo9 = () => {
    // State pour afficher un pokemon :
    const [pokemonName, setPokemonName] = useState();
    //todo pourquoi ici et pas ailleurs ? pcq le pokemon devra s'afficher dans la page.

    // fonction pour afficher le state pokemonName :
    const changeName = (name) => {
        setPokemonName(name);
    }

    return (
        <div className={style.container}>

            <PokemonList onPkmSelection={changeName}/>
                {/* onPkmSelection = variable qui contient la fonction changeName, celle qui met à jour le state */}

            <Pokemon name={pokemonName}/>

        </div>
    )
}