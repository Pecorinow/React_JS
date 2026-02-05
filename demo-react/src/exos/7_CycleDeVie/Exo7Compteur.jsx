import { useState, useEffect } from "react";



export const Exo7Compteur = (props) => {
    const { tree } = props;
    const { id, name } = tree;

    //todo compteur - +    (rappel Demo5 et !Exo4!)
    // il faut 3 choses :
    // 1) un state pour chaque compteur
    // 2) une fonction d'incrémentation pour chaque compteur
    // 3) Une fonction pour savoir quel compteur afficher dans le composant

    //* State pour les compteurs :
    const [count, setCount] = useState();

    //* Fonction d'incrémentation des compteurs :
    const crement = (value) => {

        setCount((prev) => prev + value)

    }

    //todo 
    //useEffect sauver en localStorage compteur quand modifié
    useEffect(() =>{
        if(!isNaN(count)){
            localStorage.setItem(name, count)
                //* Ici, je peux utiliser count même si je l'ai en dépendance, car je l'utilise mais ne le modifie pa savec setCount !
        }
    }, [count])


    //todo
    //useEffect qui récupère la valeur du localStorage pour mettre dans compteur quand composant "nait"
    
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
        setCount(+savedCount)
            // Le localStorage n'enregistre que des strings => On rajoute un + pour tranformer le savedCount en number et éviter la concaténation.
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