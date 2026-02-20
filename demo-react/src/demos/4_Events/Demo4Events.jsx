export const Demo4 = () => {
    let count = 0;

    const increment = () => {
        count++;
        console.log(count)
    }
    //! Problème : Notre count augmente et diminue bel et bien dans la console, mais le composant n'est actuellement pas capable de re-déclencher la mise à jour de son rendu pour qu'on puisse voir que la variable a changé => Le count change dans la console mais pas dans la page !
    // Dès qu'on commence à jouer avec les évènements, nous aurons besoin des hooks de React, et notamment celle appelée useState qui permet d'avoir des states (états) local à notre composant.

    const decrement = () => {
        count--;
        console.log(count)
    }

    return (
        <div>
            <h2>Les Events :</h2>
            <div className="flex flex-row justify-center items-center">
                <button onClick={decrement}>➖</button>
                <button>{count}</button>
                <button onClick={increment}>➕</button>

            </div>
        </div>
    )
}