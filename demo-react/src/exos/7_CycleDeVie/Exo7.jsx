import { useEffect, useState } from "react";
import { Exo7Compteur } from "./Exo7Compteur";


export const Exo7 = () => {
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

    // Ce qui se passe ici :
    // - La fonction visibility(id) prend en paramètre l'id envoyé par le bouton Afficher/Cacher au moment du clic (soit chêne, soit bouleau selon quel bouton on clique).
    // - const newTrees = nouveau tableau créé à partir du tableau trees, dans lequel :
    //      - si dans trees, un id correspond à celui envoyé par le bouton
    //      => on fait un toggle (= un échange) sur le isVisible => si il était sur true il devient false et <->.
    //      - sinon on ne fait rien, ce n'était pas le bon arbre, et dans tous les cas on renvoie l'arbre (= il continue de s'afficher tranquillement).
    // - Après avoir fait ça, le setTrees met à jour le state => le composant qui affichait l'arbre a disparu du state !



    return (
        <div>
            <h2>Inventaire des arbres dans les ardennes belges</h2>

            {
                trees.map(tree => (
                    <div key={tree.id} >
                        { tree.isVisible &&
                            <Exo7Compteur  tree={tree}/>}
                        <button onClick={() => visibility(tree.id)}>Afficher/Cacher</button>

                        {/* ATTENTION : toujours mettre une FONCTION ANONYME (vide) avant notre fonction avec paramètres (crement()), pour éviter de lancer une fonction "infinie" où le rendu se régénère => ça déclenche la fonction => le rendu se régénère => ça déclenche la fonction => ... */}
                    </div>
                )
                )
            }

        </div>
    )
}