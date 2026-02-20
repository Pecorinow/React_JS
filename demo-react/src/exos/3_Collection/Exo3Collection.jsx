import { FilmCard } from "./FilmCard";

export const Exo3 = () => {

    // Création du tableau des films :
    const films = [
        {
            id : 1,
            title : "La Grande Vadrouille",
            director : "Gérard Oury",
            releaseYear : "1966",
            poster : "https://www.sorbonne.ae/wp-content/uploads/2025/02/La-grande-Vadrouille.png",
            note : 4
        },
        {
            id : 2,
            title : "Mais qu'est-ce qu'on a fait au bon Dieu ?",
            director : "Philippe de Chauveron",
            releaseYear : "2014",
            poster : "https://tse4.mm.bing.net/th/id/OIP.Q66FYK5heJ-FVUkIPFGGYAHaKD?pid=Api",
            note : 3
        },
        {
            id : 3,
            title : "Camping",
            director : "Fabien Onteniente",
            releaseYear : "2006",
            poster : "https://tse1.explicit.bing.net/th/id/OIP.Bm-jAfUqjMbA23t-cRiy3QHaJ4?cb=defcache2&pid=Api&defcache=1",
            note : 2
        },
        {
            id : 4,
            title : "Les bronzés font du ski",
            director : "Patrice Leconte",
            releaseYear : "1979",
            poster : "https://tse1.explicit.bing.net/th/id/OIP.Bm-jAfUqjMbA23t-cRiy3QHaJ4?cb=defcache2&pid=Api&defcache=1",
            note : 3
        },
    ];

    return (
        <div>
            <h2>Catalogue FranceFlix</h2>

            <div className="flex flex-row justify-center items-center">

                { films.map( film => <FilmCard key={film.id} film={film}/>) }

                {/* = Pour chaque objet film du tableau films, on affiche un composant FilmCard :
                - dont la clef unique est égale à l'id du film
                - et dont le props à afficher {film} est égal au contenu de l'objet film   */}
                {/* La key = valeur unique qui permet d'isoler chaque film, au cas où on doit, par exemple, en mettre un seul à jour et qu'on veut que le mapping ne se refasse donc que sur celui-là.*/}

            </div>

        </div>
    )
}