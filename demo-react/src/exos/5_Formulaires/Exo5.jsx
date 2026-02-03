import { useState } from "react";
import { useForm } from "react-hook-form";

import style from "./Exo5.module.css";

export const Exo5 = () => {
    //*------------------------------------------
    //* Vréation du state pour le résultat final :
    const [result, setResult] = useState();
    // = state et fonction de màj du state seulement pour le champs du résultat final.

    //*----------------------
    //* Création du useForm :
    const {
        register, // = enregistre un nouveau champs envoyé depuis le formulaire
        handleSubmit, // = empêche le rechargement automatique + gère les erreurs potentielles de validité du formulaire + formate les données de register dans data.
        formState : {errors}, // = gère les messages d'erreur si on a mal rempli les champs.
        reset // remise à 0 automatique.
    } = useForm({ 
        mode : 'onChange', 
        defaultValues : {nb1 : 0, operation : '+', nb2 : 0} });
    
    //*---------------------
    //* Fonction de calcul :
    const calculateResult = (data) => {
        console.log(data);

        const {nb1, nb2, operation} = data
        // data = données de notre formulaire pour chaque champs, récupérées par register et formatées par handleSubmit en objet {nom, valeur du champs}.

        setResult(
            ( operation === '+') ? (nb1 + nb2) :

            ( operation === '-') ? (nb1 - nb2) :

            ( operation === '*') ? (nb1 * nb2) :

            ( operation === '/') ? (nb1 / nb2) : undefined
            // Si aucune des conditions n'est remplies, c'est undefined qui est renvoyé comme résultat dans result.

        )
        
        reset();

    }

    //*---------
    //* Return :
    return (
            <div className={style.container}>
                <form onSubmit={ handleSubmit(calculateResult, () => setResult(undefined)) } >

                    {/* -------NB1-------- */}
                    <div>
                        <label htmlFor ="nb1">Nombre 1 :</label>
                        <input id="nb1" name="nb1" type="number" {...register("nb1", {valueAsNumber : true, required : true})}></input>
                        {
                            errors["nb1"]?.type === 'required' &&
                            <span>Ce champe est requis.</span>
                        }
                    </div>

                    {/* -------OPERATEUR-------- */}
                    <div>
                        <label htmlFor="operation">Opération :</label>
                        <select id="operation" name="operation" {...register("operation", { required : true})}>
                            <option value={'+'}>+</option>
                            <option value={'-'}>-</option>
                            <option value={'*'}>*</option>
                            <option value={'/'}>/</option>
                        </select>
                    </div>

                    {/* -------NB2-------- */}
                    <div>
                        <label htmlFor ="nb2">Nombre 2 :</label>
                        <input id="nb2" name="nb2"  step={0.00001} type="number" {...register("nb2", {valueAsNumber : true, required : true})}></input>
                    </div>

                    {
                        errors["nb1"]?.type === 'required' &&
                        <span>Ce champe est requis.</span>
                        }

                    <button>Abracadabra Calcula ! 🪄</button>

                </form>
                
                {result &&
                    <div>Vous devez chacun·e : {result.toLocaleString(undefined, { maximumFractionDigits: 4, minimumFractionDigits: 0 })} €</div>
                }
                
            </div>
    )
}

