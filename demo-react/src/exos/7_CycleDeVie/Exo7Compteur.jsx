import { useState, useEffect } from "react";



export const Exo7Compteur = (props) => {
    const { tree } = props;
    const { id, name } = tree;

    //Étapes :
    // 1) State pour modifier la valeur des compteurs
    // 2) useEffect pour sauver le compteur en localStorage quand le composant sera mort (= en isVisible : false)
    // 3) useEffect pour réafficher la valeur du count quand le composant naît (= en isVisible : true)

    // ! useState : -> créer des variables qui vont être amenées à être modifiées, eventuellement dans unse Effect mais pas nécessairement.
    //! useEffect -> créer un effet lorsque les valeurs renseignées viennent à être modifiées. Se fait en 2 étapes :
        // un effet = une fonction
        // les valeurs modifiées = les dépendances []
    

    //* State pour les compteurs :
    const [count, setCount] = useState();

    //* Fonction d'incrémentation des compteurs :
    const crement = (value) => {

        setCount((prev) => prev + value)

    }

    //* useEffect : sauver en localStorage le compteur quand modifié
    useEffect(() =>{
        if(!isNaN(count)){
            localStorage.setItem(name, count)
                // Ici, je peux utiliser count même si je l'ai en dépendance, car je l'utilise mais ne le modifie pa savec setCount !
        }
    }, [count])


    //* useEffect qui récupère la valeur du localStorage pour mettre dans count quand le composant "nait"
    
    useEffect(() => {
        const savedCount = localStorage.getItem(name)
        console.log(savedCount);
        // Version longue :
                // if(savedCount === null) {
                //     setCount(0)
                // }
                // else{
                //    
                //     setCount(+savedCount)
                // }

        // Version short :
        setCount(+savedCount);
            // Le localStorage n'enregistre que des strings => On rajoute un + pour tranformer le savedCount en number et éviter la concaténation.
            // Ne fonctionne qu'avec + et number, maius pas avec parseInt et parseFloat.
            // + et Number transforment automatiquement toutes les valeurs null en 0 => pas besoin de la version longue au-dessus.
    }, [])


    return (
        <div>
            <h2>Compteur de {tree.name}</h2>

            <button disabled={count === 0} onClick={() => crement(-1)}>-</button>
            <button>{count}</button>
            <button onClick={() => crement(1)}>+</button>

            {/* ATTENTION : toujours mettre une FONCTION ANONYME (vide) avant notre fonction avec paramètres (crement()), pour éviter de lancer une fonction "infinie" où le rendu se régénère => ça déclenche la fonction => le rendu se régénère => ça déclenche la fonction => ... */}
        </div>
    )

}