
import { useState } from "react";
import style from "./Demo7.module.css";
import { Demo7Child } from "./Demo7Child";

// Demo7 = composant parent

export const Demo7 = () => {

    const [enfants, setEnfants] = useState([
        {
            id : 1,
            name : 'Cottentin',
            skill : '🪀',
            wanted : false
        },
        {
            id : 2,
            name : 'Spiruline',
            skill : '🔮',
            wanted : false
        },
        {
            id : 3,
            name : 'Evariste',
            skill : '🥁',
            wanted : false
        }
    ])

    // On récupère l'id qui est émid lors du déclenchement de l'vent onWantedReveal :
    const changeWantedStatus = (id) => {
        
        const newEnfants = enfants.map(child => {
            if(child.id === id) {
                child.wanted = true;
                return child;
            }
            else {
                return child;
            }
        });

        setEnfants(newEnfants);
    }

    return (
        <div className={style.parent}>
            <h2>Je suis </h2>

            <p>Voici le liste de mes enfants, et pourquoi il s sont supérieurs aux vôtres :</p>

            {
                //Pour envoyer des infos du parent ver sl'enfant, on passe par les props.
                // chuld ets l'enfant qu'on veut envoyer au composant pour qu'l l'affiche.
                // Chaque enfant va pouvoir envoyer une info au parent. On fera aussi ça dans le sprops, en ajoutant une fonctin comme props (en général, le nom qu'on lui donne commence par 'on + Action à faire') :
                enfants.map(child => <Demo7Child key={child.id} child={child} onWantedReveal={changeWantedStatus}/>)
                // child = props de Demo7Child
                // {child} = variable crée en Demo7
            }
        </div>
    )
}