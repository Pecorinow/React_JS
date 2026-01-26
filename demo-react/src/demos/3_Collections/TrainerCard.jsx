import style from "./TrainerCard.module.css"

export const TrainerCard = (props) => {

    // On reçoit le formateur dans les props du composant :
    const { trainer } = props;

    // On extrait ensuite tout ce dont on a besoin du formateur :
    const { id, firstname, lastname, gender, vacations, hobbies } = trainer;

    return ( 
        <div className={`${style.card} 
        ${gender === 'm' ?
        style.male :
        gender === 'f' ?
        style.female :
        style.other}`}>
        {/* Ici on n'a pas mis le +' ' entre les deux ${} pour éviter la concaténation, car on est déjà dans une string entre ` `, donc l'espace entre les deux ${} est déjà pris en compte.*/}
            <h3>{firstname} {lastname}</h3>

            <div className={style.hobbies}>
                <p>Ses hobbies sont :</p>
                <ul> 
                    {/* On va afficher les hobbies dans des <li, mais ici pas besoin de faire un composant car ce ne sont que de petites chaines de caractères, pas un tableau d'objets. */}
                    {/* On se sert donc du .map() pour afficher juste un élément HTML avec peu de valeurs dedans, pas la peine d'en faire un composant : */}

                    { hobbies.map( 
                        (hobby, index) => ( <li key={index}>{hobby}</li>)
                    )}
                </ul>
                { vacations ?
                    <button disabled> 🛩️ En vacances</button> :
                    <button> 👉 Sélectionner</button>
                } {/*Retour à Demo3.jsx */}
            </div>

        </div>
    )
}