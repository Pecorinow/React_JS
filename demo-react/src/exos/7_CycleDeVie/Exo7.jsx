import { useEffect, useState } from "react";
import { Exo7Compteur } from "./Exo7Compteur";
import style from "./Exo7.module.css";


export const Exo7 = () => {
    //* useState : -> créer des variables qui vont être amenées à être modifiées :
    const [trees, setTrees] = useState([
        {
            id : 1,
            name : 'chêne',
            isVisible : true
        },
        {
            id : 2,
            name : 'bouleau',
            isVisible : true
        }
    ]);

    //* Fonction de modif de la visibilité :
    const visibility = (id) => {
        const newTrees = trees.map(tree => {
           if(tree.id === id) {
                tree.isVisible = !tree.isVisible
           }
           return tree;
        })
        setTrees(newTrees);
    }

    //* Ce qui se passe ici :
    // - La fonction visibility(id) prend en paramètre l'id envoyé par le bouton Afficher/Cacher au moment du clic (soit chêne, soit bouleau selon quel bouton on clique).
    // - const newTrees = nouveau tableau créé à partir du tableau trees grâce à un map(), dans lequel :
        //* - Si dans trees, un id correspond à celui envoyé par le bouton => On fait un toggle (= un échange) sur le isVisible => si il était sur true il devient false et <->.
        //* - Sinon on ne fait rien, ce n'était pas le bon arbre, et dans tous les cas on renvoie l'arbre (= il continue de s'afficher tranquillement).
    // - Après avoir fait ça, le setTrees met à jour le state
    //* => le composant qui affichait l'arbre a disparu du state !



    return (
        <div className={style.mainContainer}>
            <h2>Inventaire des arbres dans les ardennes belges</h2>

            {
                trees.map(tree => (
                    <div key={tree.id} className={style.countsContainer}> 
                        {/* key sur la première balise renvoyées par le map ! */}
                        { tree.isVisible &&
                            <Exo7Compteur  tree={tree}/>
                        }

                        <button onClick={() => visibility(tree.id)}>Afficher/Cacher</button>

                        {/* ATTENTION : toujours mettre une FONCTION ANONYME (vide) avant notre fonction avec paramètres (crement()), pour éviter de lancer une fonction "infinie" où le rendu se régénère => ça déclenche la fonction => le rendu se régénère => ça déclenche la fonction => ... */}
                    </div>
                )
                )
            }

            //* 🚨 key : doit TOUJOURS être mise sur la première balise renvoyée par le map ! Dans les exercices précédents, le composant était renvoyé direct dans la première balise du map, donc la key était sur ce composant, mais ce n'est pas toujours le cas comme ici.

        </div>
    )
}