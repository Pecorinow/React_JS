import style from "./Exo3.module.css";

export const FilmCard = (props) => {
    // On a un film comme props du composant :
    const { film } = props;

    // On extraie ensuite du film les éléments dont on a besoin :
    const { id, title, director, releaseYear, poster, note } = film;

    return (
        <div className={style.card}>
            
            <img src = {poster} className={style.poster}></img>

            <div className={style.info}>
                <h3>{title}</h3>

                <div className={style.list}>
                    
                        {/* { films.map(
                            (film, index) => (<li key={index}>{film}</li>)
                        )} */}
                        <p>{director}</p>
                        <p>{releaseYear}</p>
                        
                        <div>
                            <p> Note :</p>
                            <p>{
                                Array.from({ length: 5 }, (value, index) =>(
                                    (index+1) <= note ?
                                        <span>🥐</span> :
                                        <span>☔</span>) )
                                // = Je crée un tableau avec deux paramètres : il est long de 5 éléments, et chaque élément ayant chacun une valeur (si on s'en fout de son nom on met juste value ou _) et un index.
                                // Si l'index+1 est plus petit ou égal à la note, on met un croissant, sinon on met un parapluie.
                                
                                //* Lien avec .map() :
                                // Mapper = transformer chaque élément d'un tableau en quelque chose d'autre, pour créer un nouveau tableau.
                                // Ici on "mappe" chaque élément d'un tableau (0,1, 2, 3..) en un élément JSX (<span>🥐</span> ou <span>☔</span>).
                                // Or, Array.from() permet de créer un tableau ET le mapper (ou le transformer) en une seule étape !
                                // Ce code est donc léquivalent de :
                                    // Array.from({ length: 5 }).map((value, index) => ((index+1) < note ? <span>🥐</span> : <span>☔</span> ))
                                
                                // Ce qui se passe :

                                // 1) Array.from({ length: 5 }) -> crée [undefined, undefined, undefined, undefined, undefined]
                                // 2) La fonction (value, index) => ... -> mappe chaque élément en fonction de son index
                                // 3) On obtient un tableau de 5 éléments <span> (croissants ou parapluies)
                                // 4) React affiche ce tableau de composants
                            
                                } /5
                            </p>
                        </div>

                        {
                            (note === 5) && <div className={style.heart}>
                                <p>Coup de coeur</p></div>
                        }
                </div>
            </div>
            

        </div>
    )
}