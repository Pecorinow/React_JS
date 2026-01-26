import { TrainerCard } from "./TrainerCard";

export const Demo3 = () => {

    // Création du tableau trainers :
    const trainers = [
        { 
            id : 1, 
            firstname : 'Aude',
            lastname : 'Beurivé',
            gender : 'f',
            vacations : false,
            hobbies : [ 'Dessin', 'Tricot', 'Soup' ]
        },
        { 
            id : 2,
            firstname : 'Aurélien',
            lastname : 'Strimelle',
            gender : 'm',
            vacations : false,
            hobbies : [ 'Randonnée', 'Jeux de société']
        },
        { 
            id : 3,
            firstname : 'Quentin',
            lastname : 'Geerts',
            gender : 'm',
            vacations : true,
            hobbies : [ 'Mangas', 'Jeux Vidéos' ]
        }
    ];

    return (
        <div>
            <h2> Liste des formateurs</h2>

            <div className="flex flex-row justify-center items-center">
                {/* Pour afficher plusieurs fois la même chose mais n'acrire qu'une seule fois le code, on va utiliser une "boucle" */}
                {/* Cette boucle sera la méthode .map() des tableaux puisqu'elle permet de transformer chaque élément du tableau en autre chose */}
                {/* On va donc s'en servir pour transformer chaque élément du tableau en JSX : */}

                {/* ETAPE 1 : Afficher juste les prénoms de formateurs : */}

                {/* { trainers.map( trainer => (<p>{trainer.firstname}</p>) ) } */}

                {/* 📢 Quand on affiche des collections (lists), on va devoir ajouter une clef unique sur chaque élément construit pour des questions d'optimisation. Cette clef doit être associée à une valeur unique (idéalement un id, mais si on n'en a pas, l'indice dans le tableau fait l'affaire).
                Cela se fait avec un attribut key={valeur}).
                Comme ça, si jamais on met par exemple à jour l'un des trainers, le mapping ne se refait pas sur tous les trainers du tableau mais seulement sur celui-là.  */}

                {/* Quand on a beaucou de HTML à afficher dans notre map, on va devoir en faire un composant
                => Créer un composant pour l'affichege d'un formateur : */}

                {/* ETAPE 2 : Créer et afficher un composant TrainerCard.jsx pour chaque formateur du tableau : */}

                { trainers.map( trainer => ( <TrainerCard key={trainer.id} trainer={trainer}/>))}

                {/* = Pour chaque objet trainer du tableau trainers, on affiche un composant TrainerCard :
                - dont la clef unique est égale à l'id du trainer
                - et dont le props à afficher {trainer} est égal au contenu de l'objet trainer   */}

            </div>
        </div>
    )
}


