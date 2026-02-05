export const Demo7Child = (props) => {

    const {child, onWantedReveal} = props;
    // child = descendant -> on a réçu cette info du parent
    // onWantedReveal = montant -> on a reçu cette fonction à déclencher via le parent, mais on va la déclencher ici.
    const {id, name, skill, wanted} = child;

    return (
        <div>
            <h3>Je suis {name}, je pratique le {skill} depuis mes 6 ans !</h3>
            <p>Je suis donc meilleur que vous.</p>

            { wanted ?
            <span>Mes parents étaient très contents de mon arrivée !</span> :
            // On déclenche l'évènement onWantedReveal en envoyant l'id de l'enfant sur lequel on a cliqué (on peut envoyer ce qu'on veut, pas forcément un id).
            <button onClick={() => {onWantedReveal(id)}}>Adoptez-moi svp</button>}
        </div>
    )
}