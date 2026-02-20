import { useState } from "react";
import { useForm } from "react-hook-form"; // -> importe le hook useForm depuis React Hook Form.


// *Gestion formulaire avec Librairie :
// On va utiliser la librairie React-Hook-Form
// https://react-hook-form.com/

// Pour l'importer, taper dans la console :
// npm i react-hook-form

export const Demo6Lib = () => {

    //*------------------------------------------
    //* Création d'un state pour le résultat final :
    const [totalPerPerson, setTotalPerPerson] = useState();
    // = state et fonction de màj du state seulement pour le champs du résultat final (= total à payer par personne) >< Demo6 où chaque champ avait un state.

    //*----------------------
    //* Création du useForm :
    // Grâce à React Hook-Form, on a accès à une nouvelle Hook appelée useForm, de laquelle on va extraire plusieurs choses :
    //* - 👉 register 
        // -> permet d' "enregistrer un nouveau champs", depuis la balise de ce champs dans le return JSX
        // Il fait le value={state} + onChange{fonctionPourChangerLeState} pour nous.
        // Ex : <input id="bill" name="bill" type ="number" {...register('bill', {valueAsNumber : true, required : true, min : 10})}/>
    //* - 👉 handleSubmit
        // -> Fonction qui fait le preventDefault et qui nous renvoie le state qu'elle a fabriqué.
        // Elle prend 2 fonctions en paramètres : celle exécutée en cas de formulaire valide, et celle en cas de formulaire non-valide.
        // Si valide, elle formate les données de chaque champs sous forme d'objets {nom + valeur} dans 'data'.
        // On l'a écrite à la main dans la Demo6bis, mais ici elle est importée directement depuis React Hook Form.
    //* - 👉 formState
        // -> l'état du formulaire.
        // De formState, on va récupérer {errors}, écrit dans le formulaitre JSX, qui contient toutes les erreurs actuelles du formulaire (champs vides, mal remplis...), et fait apparaître un message d'erreur si nécessaire :
        // Ex : { errors['bill']?.type === 'min' && <span>Vous devez indiquer une valeur minumum de 10.</span> }
    //* - 👉 reset
        // -> Une fonction pour remettre à 0 (ou avec les defaultValues) le formulaire

    const {register, handleSubmit, formState : {errors}} = useForm( {
        mode : 'onChange', 
        defaultValues : {bill : 0, nbPerson : 0,tips : 5}
        // Dans les paramètres de useForm, on peut mettre un objet avec des options :
        // * mode : permet de changer le mode de détection des erreurs du formulaire
        // * defaultValues permet de mettre des valeurs de base dans le formulaire, il faudra respecter le nom mis dans register
    } );

    //*---------------------
    //* Fonction de calcul :
    const splitBill = (data) => {
        // data : contient les données de notre formulaire auto-gérées par notre useForm grâce à register, et formatées par handleSubmit en objets contenant chaque fois le nom + la valeur du champs.
        console.log(data);

        setTotalPerPerson( (data.bill + (data.bill * data.tips/100))/data.nbPerson )
    }
   

    return (
        <div>
            <h2>Tipo Splito 💸(toujours)</h2>
                <form onSubmit={ handleSubmit(splitBill, () => setTotalPerPerson(undefined)) } >

                    {/* ----------BILL--------- */}
                    <div>
                        <label htmlFor="bill">Total de la note :</label>
                            {/* htmlFor = équivalent du for en HTML, relié à l'id de l'input */}
                        <input id="bill" name="bill" type ="number"
                        {...register('bill', {valueAsNumber : true, required : true, min : 10})}/>
                            {/* bill = variable à créer (voir les const en haut) */}
                            {/* event.target.valueAsNumber = récupère la valeur dans l'input */}
                            {/* 🚨 valueAsNumber : si on met simplement value, alors le nombre est pris comme une string et, dans handleSumbit, c'est une concaténation de strings qui se fait au lieu d'un calcul. */}
                        {
                            errors['bill']?.type === 'required' && // type : n'a rien à voir avec le type d'un input.
                                // Y a-t-il une erreur ? Si oui, chercher le type de l'erreur et si c'est une erreur de required, on balance le span ci-dessous :
                            <span>Ce champs est requis.</span>
                        }
                        {
                            errors['bill']?.type === 'min' &&
                            // Y a-t-il une erreur ? Si oui, chercher le type de l'erreur et si c'est une erreur de min, on balance le span ci-dessous :
                            <span>Vous devez indiquer une valeur minumum de 10.</span>
                        }
                    </div>

                    {/* ----------NbPERSON--------- */}
                    <div>
                        <label htmlFor="nbPerson">Nombre de personnes</label>
                        <input id="nbPerson" name="nbPerson" type ="number"
                        {...register('nbPerson', {valueAsNumber : true, required : true, min : 1})}/>

                        {
                            errors['nbPerson']?.type === 'required' && // type : n'a rien à voir avec le type d'un input.
                                // Y a-t-il une erreur ? Si oui, chercher le type de l'erreur et si c'est une erreur de required, on balance le span ci-dessous :
                            <span>Ce champs est requis.</span>
                        }
                        {
                            errors['nbPerson']?.type === 'min' &&
                            // Y a-t-il une erreur ? Si oui, chercher le type de l'erreur, et si c'est une erreur de min, on balance le span ci-dessous :
                            <span>Vous devez indiquer une valeur minumum de 1.</span>
                        }
                    </div>

                    {/* ----------TIPS--------- */}
                    <div>
                        <label htmlFor="tips">Pourboire :</label>
                        <select id="tips" name="tips" 
                        {...register('tips', {valueAsNumber : true, required : true})}>
                            {/* valueAsNumbrer={5} = valeur par défaut quand on arrive sur la page */}
                            <option value ={0}>Aucun</option>
                            <option value ={5}>5%</option>
                            <option value ={10}>10%</option>
                        </select>
                    </div>

                    <button>Tipo Splito !🪄💸</button>
                    
                </form>

                {totalPerPerson &&
                <div>Vous devez chacun·e : {totalPerPerson.toFixed(2)} €</div>
                }
        </div>
    )
}