import { useEffect, useState } from 'react';
import style from './Pokedex.module.css';
import axios from 'axios';

export const PokemonList = (props)=> {
    const {onPkmSelection} = props;


    // Pour gérer les précédents et les suivants :
    //* Soit on fait un state pour offset et pour limit => avantage : on peut changer comme on veut le nombre de pokemons qu'on récupère
    //* Soit on utilise les valeurs de base de l'API qui nous renvoie la requête précédente et la requête suivante => JE TE CHOISIS !
    const [prevRequest, setPrevRequest] = useState(null);
    const [nextRequest, setNextRequest] = useState(null);

    // Il nous faudra aussi un tableau pour stocker les pokemons affichés à l'écran :
    const [pokemons, setPokemons] = useState([])
        // Même si on laiss le tableau vide, on laisse les [] vides pour que le map (qui est fait pour parcourir des tableaux) puisse se faire quand-même, même si il n'y a rien à parcourir.

    // State au cas où il y a une erreur avec l'API :
    const [error, setError] = useState('');

    //* useEffect pour charger les pokemons une première fois à l'ouverture de la page :
    //! 👉 Nous allons faire notre première requête, qui va remplir la liste et les prev et next quand on arrive sur la page.
    // Rappel : on peut le faire avec FETCH ou AXIOS, Aude préfère Axios -> npm i axios.

    // Pour la requête, on a le choix entre un try/catch (avec asyn/await) et un .then/.catch -> le try/catch a planté => on fait un .then/.catch :
    useEffect( ()=> {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then((response) => {
                console.log(response.data); // On ne veut pas juste les pokemons mais leurs infos aussi.

                // Dans data, on voit s'afficher dans la console next, previous et results => on utilise ces infos-là pour remplir nos states:
                setPrevRequest(response.data.previous);
                setNextRequest(response.data.next);

                // 
                setPokemons(response.data.results);
            })
            .catch((error) => {
                setError('L\'API a crâmé dommage')
            })

            
    }, []) // crochets vides car c'est la première fonction qui se lance au chargement de la page => ne doit se lancer qu'une fois à la naissance du composant.

    
    //* Fonction pour charger les nouveaux pokemons à chaque clic du bouton :
    // 
    const getPokemons = (next) => {
        // getPokemons() = fonction qui a next en paramètre => next peut être true ou false
        // next = param qui contient un booléen, pour savoir si on peut ou pas récup les prochains pokemons :
        
        // On va chercher les prochains pokemons avec nextRequest OU prevRequest :
        axios.get(next ? nextRequest : prevRequest)
            // = Si next est true, alors on lance nextRequest, sinon on lance prevRequest.
            .then((response) => {
                console.log(response);
                // Dans data, on voit s'afficher dans la console next, previous et results => on utilise ces infos-là pour remplir nos states:
                setPrevRequest(response.data.previous);
                setNextRequest(response.data.next);

                // On rempliut la liste de ^km avec la liste envoyée par l'API
                setPokemons(response.data.results);
            })
            .catch((error) => {
                setError('L\'API a crâmé désolé·e')
            })        
    }

    
    return (
        <div className={style.list}>
            <h2>Liste des Pokemons 🐣🐸🦖🐙🐦🦗</h2>

            <ul>
                {error && <span>{error}</span>}
                {
                    pokemons.map(pokemon => 
                        // On crée une liste de pokemons => à chaque <li>, on met le nom d'un pokemon :
                        <li onClick={() => onPkmSelection(pokemon.name)} key={pokemon.name}> {pokemon.name} </li>
                            // Le pokemon.name vient de l'API, on ne l'a pas inventé.
                            // onClick = Au clic, on déclenche la variable onPkmSelection, qui elle-même contient la fonction changeName, et qui prend en param le nom du pokemon => dans la page Pokedex, la variable onPkmSelection lance le changeName => le state change.
                            
                    )
                }
            </ul>

            <div className={style.buttons}>
                <button onClick={()=> {getPokemons(false)}} disabled={!prevRequest}>⬅️Précédent</button>
                    {/* = bouton désactivé tant que prevRequest est null */}
                    {/* getPokemons() = fonction qui a next en paramètre => next peut être true ou false ! */}

                <button onClick={() => {getPokemons(true)}} disabled={!nextRequest}>Suivant➡️</button>
            </div>
        </div>
    )
}