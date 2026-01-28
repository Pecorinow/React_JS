import { useState } from "react";

export const Demo6 = () => {
// Pour gérer les fomrulaires nativement en Ract avec la state, 2 options :

//* 👉 OPTION 1 : Un state pour chaque donnée du formulaire
// Pour pouvoir relier un state avec un champs, on rajoute 2 choses sur le champs :
    // * L'attibut value : pour lier le champs à notre state value={nomState}
    // * L'évènement on Change : onChange={ (event) => fonctionDeMiseAJour(event.target.value)}
        // event.target.value : récupère la valeur de l'élément HTML qui déclenche l'évènement.
        // event = l'évènement déclenché, target = cible l'élément HTML qui le déclenche (dans ce cas-ci, des inputs ou des selects).

const [bill, setBill] = useState(0); // -> 0 = valeur par défaut qui sera affichée, afin d'éviter un warning inutile "Attention il n'y a pas de valeur gnagnagna"
const [nbPerson, setNbPerson] = useState(0);
const [tip, setTips] = useState(5); //-> 5 = valeur par défaut qui sera écrite dans la page.
const [isValid, setIsValid] = useState(true); // -> évite un message d'erreur par défaut.

const [totalPerPerson, setTotalPerPerson] = useState();

//* 👉 OPTION 2 : Un state de type objet qui représente tout le formulaire
// Voir Demo6bis

//----- ✅ Gestion du submit :------
const handleSubmit = (event) => {
    // event contiendra l'évènement qui a été déclenché, c'est a dire le submit du <button>.

    // Ce qui se passe dans tous les cas :
    event.preventDefault(); // = empêche le rechargement automatique de la page par le submit.
    setTotalPerPerson(undefined); // = remet le total à 0 quand on clique sur le submit.

    // Ce qui se passe sous conditions :
    if(bill > 0 && nbPerson > 0) {
        // Si tout va bien, donc que l'addition est supérieure à 0, et que le nombre de personnes est supérieur à 0 :
        setTotalPerPerson( (bill + (bill * tips/100)) / nbPerson);
        setIsValid(true);

    } else {
        // message d'erreur
        setIsValid(false);
    }
}

    return (
        <div>
            <h2>Tipo Splito 💸</h2>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor="bill">Total de la note :</label>
                            {/* htmlFor = équivalent du for en HTML, relié à l'id de l'input */}
                        <input id="bill" type ="number" value={bill} onChange={ (event)=> setBill(event.target.valueAsNumber)}/>
                            {/* bill = variable à créer (voir les const en haut) */}
                            {/* event.target.valueAsNumber = récupère la valeur dans l'input */}
                            {/* 🚨 valueAsNumber : si on met simplement value, alors le nombre est pris comme une string et, dans handleSumbit, c'est une concaténation de strings qui se fait au lieu d'un calcul. */}
                    </div>

                    <div>
                        <label htmlFor="nbPerson">Nombre de personnes</label>
                        <input id="nbPerson" type ="number" value={nbPerson} onChange={ (event)=> setNbPerson(event.target.valueAsNumber)}/>
                    </div>
                    <div>
                        <label htmlFor="tips">Pourboire :</label>
                        <select id="tips" value={5} onChange={ (event)=> setTips(event.target.valueAsNumber)}>
                            {/* valueAsNumbrer={5} = valeur par défaut quand on arrive sur la page */}
                            <option value ={0}>Aucun</option>
                            <option value ={5}>5%</option>
                            <option value ={10}>10%</option>
                        </select>
                    </div>

                    <button>Tipo Splito !🪄💸</button>
                    {
                        !isValid && <span>🚫Vous devez mettre une note et un nombre de personnes positifs !</span>
                    }
                </form>

                {totalPerPerson &&
                <div>Vous devez chacun·e :</div>
                }
        </div>
    )
}