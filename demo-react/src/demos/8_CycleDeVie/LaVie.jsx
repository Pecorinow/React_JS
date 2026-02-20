import { EtreVivant } from "./EtreVivant"
import { useEffect, useState } from "react"
import { EtreSpecial } from "./EtreSpecial";

export const LaVie = () => {

    // On crée un tableau vide, qu'on va remplir petit à petit.
    const [etresVivants, setEtresVivants] = useState([]);

    const [montrerEtreSpecial, setMontrer] = useState(false);

    const types = ['Humains', 'Animal', 'Bactérie']

    useEffect( () => {
            console.log('Et Dieu créa La Vie');        
    })

    const naissance = () => {
         const nouvelEtre = {
            id : Date.now(),
            type : types[Math.floor(Math.random() * 3)]
         }

        setEtresVivants([...etresVivants, nouvelEtre])
         // = on prend tout ce qui est déjà contenu dans le state etresViants, et on y ajoute ce qui est contenu dans nouvelEtre.
    } 

    return (
        <div>
            <h2>L'histoiiiiiire de la Vie (iaiababiyabaia) ✨</h2>

            <button onClick={naissance}>Faire naître un truc !</button>
                {/* = Au clic, on déclenche la fonction naissance */}

            {
                etresVivants.map(etre => <EtreVivant key={etre.id} etre={etre}/>)
            }

            <h3>L'être spécial dont personne ne veut : (aka : ne faites jamais ça) </h3>

            <button onClick={() => { setMontrer(!montrerEtreSpecial) }}>Afficher/Cacher</button>
            {
                montrerEtreSpecial &&
                <EtreSpecial />
            }

        </div>
    )
}