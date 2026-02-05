import { useEffect } from "react";

export const EtreVivant = (props) => {

    const {etre} = props;

    // useEffect est une fonction qui se déclenche quand le composant apparaît à l'écran, et qui déclenche la fonction mise en paramètre.
    // Cette fonction est celle qui est déclenchée quand notre composant prend vie :
    useEffect(() => {
        console.log(etre.id + ' est né ! 🐣');

        // Dans cette fonction, si on renvoie une autre fonction, ce sera celle qui sera exécutée à la 'mort' du composant :
        return () =>   {
            console.log(etre.id + ' est mort 😵')
        }    
    });
        
    return (
        <div>
            {
                etre.type === 'Humain' && '👧'
            }
            {
                etre.type === 'Animal' && '🐸'
            }
            {
                etre.type === 'Humain' && '🦠'
            }
        </div>
    )
}