import { useState } from "react";

export const Demo5 = () => {

    // Pour créer notre variable, nous allons utiliser la Hook de State
    // 🚨 ATTENTION à bien l'importer de React ! (voir la première ligne)
    // usetState() = fonction qui :
    // - renvoie un TABLEAU avec 2 éléments dedans
        //* 1) la variable qu'on souhiate créer
        //* 2) la fonction qui permet de modifier cette variable et d'indiquer que le rendu doit être mis à jour
        // TOUJOURS indiquer la variable et la fonction dans cet ordre.
    // - peut prendre un paramètre qui sera la valeur initiale à notre variable (donc si le compteur commence à 0, on écrit useState(0) ).

    // Avec un number dedans:
    const [count, setCount] = useState(0); // count = variable qu'on souhaite créer, setCount = fonction de mise à jour.
    // Avec des strings dedans :
    const [firstname, setFirstname] = useState('Bernadette');

    const increment = () => {
        // Si on veut setup avec une valeur fixe (ex : toujours 6), on mettra juste la valeur dans les ()
            // setCount(6) -> indiquera toujours 6 quand on clique sur +.
        // Soit on utilise une fonction fléchée, où on récupère la valeur précédente (prev) et on renvoie la nouvelle valeur (prev + 1) :
        setCount( (prev) => prev + 1 );
    }

    const decrement = () => {
        setCount( (prev) => prev - 1 );
    }

    //! ATTENTION : Si on souhaite relier un event à une fonction avec paramètres (ici crement), toujours mettre une fonction fléchée anonyme (vide) avant notre fonction principale (crement), pour éviter de lancer une fonction "infinie" où le rendu se régénère => ça déclenche la fonction => le rendu se régénère => ça déclenche la fonction => ... (voir plus bas dans le return)
    // TODO rien compris
    const crement = (value) => {
        // Si value contient +1, on augmente de 1
        // Si value ocntient -1, on diminue de 1
        setCount ( (prev) => prev + value);
    }

    return(

        <div>
            <h2>La gestion du State :</h2>
            <div className="flex flex-row justify-center items-center">
                <button onClick={() => crement(1)}>➖</button>
                    {/* ATTENTION : toujours mettre une FONCTION ANONYME (vide) avant notre fonction avec paramètres (crement()), pour éviter de lancer une fonction "infinie" où le rendu se régénère => ça déclenche la fonction => le rendu se régénère => ça déclenche la fonction => ... */}
                <button>{count}</button>
                <button onClick={() => crement(-1)}>➕</button>

            </div>

            <div className="flex flex-row justify-center items-center">
                <h3>Bienvenue {firstname} 🌟</h3>

                <div className="flex flex-row justify-center items-center gap-3">
                    
                </div>
            </div>
        </div>
    )
    
}