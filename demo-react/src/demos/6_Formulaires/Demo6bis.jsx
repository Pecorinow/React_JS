import { useState } from "react";

export const Demo6bis = () => {


    //* 👉 OPTION 2 : Un state de type objet qui représente tout le formulaire
    // Voir Option 1 en Demo6
    
    const [splitForm, setSplitForm] = useState ( {
        bill :0, // -> valeurs par défaut affichée dans la page.
        nbPerson : 0,
        tips : 5
    });

    const [isValid, setIsValid] = useState(true);
    const [totalPerPerson, setTotalPerPerson] = useState();

    const handleField = (event) => {
        // fonction qui va devoir gérer les 3 champs >< Demo 6 où il n'y avait que le handleSubmit sur le formulaire général.
        // event = contient les infos du champs qui vient de déclencher l'évènement
        const name = event.target.name; // = la propriété qui porte le nom de la cible (ici, target = un input, et name = bill ou tips...) est récupérée et appelée name (on aurait pu l'appeler cheese ou jeanPierre)
        console.log(event.target.name);
        const type = event.target.type;
        console.log( event.target.type);
        
        setSplitForm(prev => {
            const newSplitForm = {
                ...prev,
                // = On récupère ce qui se trouve dans l'objet prev, donc dans la state splitForm
                // Ensuite, on y modifie juste la propriété qui nous intéresse :

                [name] : // name est récupéré et reçoit la value de l'input, mais d'abord on fait une ternaire :
                    (type === 'checkbox') ? event.target.checked :
                        // = Si le type est une checkbox, alors on doit aller chercher la valeur dans checked et c'est un booléen.
                    (type === 'number') ? event.target.valueAsNumber :
                        // = Si le type est un nombre, alors on doit parse la valeur en nombre
                    event.target.value
                        // Si ce n'est ni un checkbox ni un number, alors on prend la valeur telle quelle.
            };
            return newSplitForm;
            // Ou return {...}
        })
    }

    const handleSubmit = (event) =>{
        // event contiendra l'évènement qui a été déclenché, c'est a dire le submit du <button>.

        // Ce qui se passe dans tous les cas :
        event.preventDefault(); // = empêche le rechargement automatique de la page par le submit.
        setTotalPerPerson(undefined); // = remet le total à 0 quand on clique sur le submit.

        // Ce qui se passe sous conditions :
        if(splitForm.bill > 0 && splitForm.nbPerson > 0) {
            // Si tout va bien, donc que l'addition est supérieure à 0, et que le nombre de personnes est supérieur à 0 :
            setTotalPerPerson( (splitForm.bill + (splitForm.bill * splitForm.tips/100)) / splitForm.nbPerson);
            setIsValid(true);

        } else {
            // message d'erreur
            setIsValid(false);
        }
    }

    return (
        <div>
            <h2>Tipo Splito 💸 (encore)</h2>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor="bill">Total de la note :</label>
                        <input id="bill" name ="bill" type ="number" value={splitForm.bill} onChange={handleField}/>
                            {/* value : -> On va chercher la valeur dans le state général splitForm */}
                            {/* onChange :  */}
                            {/* name : doit être le même que ce qui est écrit dans le state splitForm */}
                            
                    </div>

                    <div>
                        <label htmlFor="nbPerson">Nombre de personnes</label>
                        <input id="nbPerson" name="nbPerson" type ="number" value={splitForm.nbPerson} onChange={handleField}/>
                            
                    </div>
                    <div>
                        <label htmlFor="tips">Pourboire :</label>
                        <select id="tips" name="tips" value={splitForm.tips} onChange={handleField}>
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
                <div>Vous devez chacun·e : {totalPerPerson}</div>
                }
        </div>
    )
}
