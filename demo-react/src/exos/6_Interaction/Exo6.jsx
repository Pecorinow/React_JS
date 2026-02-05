import { useForm } from "react-hook-form"
import { useState } from "react";
import { Exo6Child1 } from "./Exo6Child1";

export const Exo6 = () => {

//* Création du state pour la liste des tâches :
    const [tasks, setTasks] = useState([
        {
            id : 1,
            name : 'Demander le statut BIM',
            description : '',
            isUrgent : true,
            isDone : false
        },
        {
            id : 2,
            name : 'Renouveler abonnement STIB',
            description : 'Aller au bureau de la Gare du Midi et payer une blinde pour prendre des trams qui puent 🌸',
            isUrgent : false,
            isDone : false
        },
        {
            id : 3,
            name : 'Apprendre des recettes pour Fenouil',
            description : 'Mon chat mérite de vrais plats !',
            isUrgent : false,
            isDone : false
        }
    ])

//* Création du useForm :
    const {register, // = enregistre un nouveau champs envoyé depuis le formulaire
        handleSubmit, // = empêche le rechargement automatique + gère les erreurs potentielles de validité du formulaire + formate les données de register dans data.
        formState : {errors}, // = gère les messages d'erreur si on a mal rempli les champs.
        
    } = useForm({
        mode : 'onChange',
            // = au moindre changement dans la page >< mode par défaut : 'onSubmit', càd à la soumission du formulaire. Or, nous on veut que 
        defaultValues : {name : '', description : '', isUrgent : false, isDone : false}
    })

//* Création du filtre urgent/terminé/encours :
 const [filter, setFilter] = useState('');

    const filterTask = () => {
        if(filter === 'high') {
            return tasks.filter(task => task.isUrgent === true);
        }

        if(filter === 'done') {
            return tasks.filter(task => task.isDone === true);
        }

        if(filter === 'todo') {
            return tasks.filter(task => task.isDone === false);
        }

        return tasks;
    }


//* Fonction addTask :
const addTask = (data) => {
    console.log(data);

    // Ajouter les infos manquantes sur les data :    
    const {name, description, isUrgent} = data;
    const newTask = {
        id : Date.now(),
            //* Pourquoi un id ? ?
            // Parce qu'un id est nécessaire pour créer la key, or l'id n'existe pas encore avant l'envoi du formulaire, et contrairement à MongoDB, il faut ajouter cet id manuellement avec le reste à la création de la task.
            //* Pourquoi pas l'index ?
            // Parce que si on supprime une task et puis qu'on en rajoute une, on risque d'avoir deux id identiques.
            //* Pourquoi pas length+1 ?
            // Pour la même raison que l'index.
            //* => Date.now() est la méthode la plus sûre d'avoir un id unique.
        name : name,
        description : description,
        isUrgent : isUrgent,
        isDone : false
    }
    // Pouvait auss s'écrire {
    //      ...data,
    //         id : Date.now(),
    //         isDone : false
    //  }
    // = Tout ce qu'il y a déjà dans data, + l'id et le isDone.

       
    setTasks(prev => [...prev, newTask]);
    // = On part du tableau précédent (prev, mais pourrait aussi s'écrire juste tasks), on prend toutes les données dedans (...prev) et on y ajoute la newTask.

    //* Pourquoi le push ne fonctionne pas ?
    // tasks.push(newTask)
    // Parce que le push ajoute une task au tableau ET renvoie la longueur actuelle du tableau.
    // => Il va bien ajouter une task au tableau, mais ce qui sera renvoyé par setTasks sera, non pas le tableau mis à jour, mais le nombre de tasks dans la tableau !
}

//* Fonction completeTask
const completeTask = (id) => {
     const completedTask = tasks.map(task => {
         if(task.id === id) {
            task.isDone = true;
        }
        return task;
     });
     
     setTasks(completedTask); 
}


//* Fonction deleteTask
const deleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);

     setTasks(newTasks);
}


    return (
        <div>

            <div>
                <h2>Ajouter une nouvelle tâche</h2>

                <form onSubmit={ handleSubmit(addTask, () => setTasks(undefined)) }>

                    <div>
                        <label htmlFor="name"></label>
                        <input id="name" name="name" type="text" {...register('name', {required : true})}>
                        </input>
                        {
                            errors['name']?.type ==='required' &&
                            <span>Veuillez remplir ce champs.</span>
                        }
                    </div>

                    <div>
                        <label htmlFor="description"></label>
                        <input id="description" name="description" type="text" {...register('description')}>
                        </input>
                        
                    </div>

                    <div>
                        <label htmlFor="isUrgent"></label>
                        <select id="isUrgent" name="isUrgent" {...register('isUrgent', {required : true})}>
                            <option value={false}>Normal</option>
                            <option value={true}>Urgent</option>
                        </select>
                    </div>

                    <button>Ajouter</button>
                </form>
            </div>

            <div>
                <h2>Ma liste de tâches</h2>
                <div>
                    <select onChange={(e) => setFilter(e.target.value)}>
                        <option value="">Toutes</option>
                        <option value="high">Urgentes</option>
                        <option value="done">Terminées</option>
                        <option value="todo">À faire</option>
                    </select>
                </div>
                <div>
                    {
                        filterTask().map(task => <Exo6Child1 key={task.id} task={task} onComplete={completeTask} onDelete={deleteTask}/>)
                    }
                </div>
            </div>

        </div>
    )

}