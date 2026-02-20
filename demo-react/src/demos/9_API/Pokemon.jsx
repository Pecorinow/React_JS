import { useState, useEffect } from 'react';
import style from './Pokedex.module.css';
import axios from 'axios';

export const Pokemon = (props)=> {
    const {name} = props;


    const [pokemon, setPokemon] = useState();
    // Chaque fois que le nom va changer, on veut déclencher un effet qui va envoyer la request pour récupérer les informations de ce pokemon et les afficher.

    useEffect(() => {
        //todo: faire une request pour remplir la variable pokemon avec le setPokemon :
        if(name) { // = Si il y a bien qlqch dans name (pas snull ou undefined) :
            axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => {
                console.log(response.data); // = sert à regarder ce qui est écrit dans les data de la response
                setPokemon({
                    height : response.data.height *10, /* Pour avoir la taille en cm */
                    weight : response.data.weight /10, /* Pour avoir le poid
                     en kilos */
                    image : response.data.sprites.other.showdown.front_default, /*image qui bouge hihi */
                    types : response.data.types.map(type => type.type.name), /* On récupère le tableau, qu'onmap pour obtenir un autre tableau avec juste les noms des types */
                    /** Pour chaque type du tableau types, il y a deux catégories et il faut prendre celle qui s'appelle de nouveau type (est-ce que c'est chiant ? oui) */
                    cries : response.data.cries.legacy
                })
                console.log('hgfhgfhfhyf');
                
            })
            .catch((error) => {

            })
        }
        
    },[name])

    // Si la props name est undefined ou null, on affiche un petit message :
    if(!name) {
        return(
            <div className={style.pkm}>
                <p>Cliquez sur un pokemon pour voir ses infos !</p>
            </div>
        )
    }

    return (
        <div className={style.pkm}>
            
            <h2>{name}</h2>

            {/* On ajoute des ? après pokemon */}
            <img src={pokemon?.image} alt={`image qui bouge représentant le pokemon ${name}`}></img>
            <p>Poids : {pokemon?.weight} kg</p>
            <p>Taille : {pokemon?.height} cm</p>
            <p>
                <h3>Type(s)</h3>
                {
                    pokemon?.types.map(type => (<span>{type}</span>))
                        // Ici, on renvoie {type} et non {pokemon.type} car on renvoie le type du tableau pokemon.types qu'on parcourt.
                }
            </p>
        </div>
    )
}