import { useEffect, useState } from "react"


export const EtreSpecial = () => {
    const [age, setAge] = useState(0);
        // age = représente l'âge de "l'être spécial", initialisé à 0.
    const [anniversaires, setAnniversaires] = useState(0);
        //  anniversaires = compte le nombre de fois qu'on clique sur le bouton, initialisé à 0.

    // ! useEffect prend en paramètre 2 choses 
    // ! * la fonction a exécuter quand le useEffect est déclenché
    // ! * les dépendances qui autorisent le useEffect à se déclencher (ici, anniversaires). C'est un tableau et s'il est vide, rien n'autorise le useEffect a se re-déclencher. Si on met une valeur dedans, le useEffect sera déclenché si cette valeur change.

    //* Quand se déclenche le useEffect() ?
    // - Au premier rendu du composant (quand il "naît")
    // - À chaque fois que la valeur anniversaires change (quand on clique sur le bouton)

    //* Que fait le useEffect ici ?
    // - Incrémente l'âge de 1 (setAge(prev => prev + 1))
    // - Affiche "L'être spécial est né" dans la console

    //* Si on met une fonction dans le useEffect :
    // Si on renvoie une autre fonction à l'intérieur du useEffect(), celle-ci sera exécutée à la 'mort' du composant.

    //* rôle de la dépendance [anniversaires] : 
    // - Faire naître un nouveau composant
    // - Et le faire mourir dès que anniversaires change de valeur.
    // -> Dès que la valeur de anniversaires change ( = au clic du bouton "C'est mon anniversaire"), le composant meurt et renaît instantanément !
    
    useEffect(() => {
        setAge(prev => prev + 1);
            // -> Incrémente l'âge de 1 (setAge(prev => prev + 1))
        console.log('L\'être spécial est "né"');
            // -> Affiche "L'être spécial est né" dans la console
        

        return () => {
            console.log('L\'être spécial est mort');
            // = fonction déclenchée à la mort du composant
            
        }
    }, [anniversaires]) // = Dès que la valeur de anniversaires change ( = au clic du bouton "C'est mon anniversaire"), le composant meurt et renaît instantanément !

    return (
        <div>
            👼🏼 Ma maman elle dit ze chuis chpéchial.
            Z'ai {age} ans !

            <button onClick={() => setAnniversaires(prev => prev + 1)}>C'est mon zanniversaire !</button>
        </div>
    )

}
