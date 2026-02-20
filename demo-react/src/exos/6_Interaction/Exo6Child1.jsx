export const Exo6Child1 = (props) => {
    const {task, onComplete, onDelete} = props;

    const {id, name, description, isUrgent, isDone} = task;

    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            {
                (isUrgent === true) &&
                <span>URGENT !</span>
            }

            {
                (isDone === true) ?
                <button disabled>Terminer</button> :
                <button onClick={() => {onComplete(id)}}>Terminer</button>
            }
           
            <button onClick={() => {onDelete(id)}}>Supprimer</button>
        </div>
    )
}