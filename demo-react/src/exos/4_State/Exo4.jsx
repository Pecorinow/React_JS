import { useState } from "react";

// import { ProductCard } from "./ProductCard";

export const Exo4 = () => {

    const products = [
        {
            id: 1,
            name: "Burger Cheese",
            price: 8.5,
        },
        {
            id: 2,
            name: "Burger Chicken",
            price: 11
        },
        {
            id: 3,
            name: "Burger Triple",
            price: 12.5
        },
        {
            id: 4,
            name: "Petite Frite",
            price: 3.5
        },
        {
            id: 5,
            name: "Moyenne Frite",
            price: 4
        },
        {
            id: 6,
            name: "Grande Frite",
            price: 4.5
        },
    ]

    // 1) 7 variables de states :
    // const [variableACreer, FonctionsMiseAJour] = useState(valeurInitiale)
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [count5, setCount5] = useState(0);
    const [count6, setCount6] = useState(0);
    const [total, setTotal] = useState(0);

    // 2) Fonction d'incrémentation :
    // La fonction d'incrémentation crement() appelle la fonction de mise à jour setCount() :
    const crement = (id,value) => {

        if (id === 1) {
            setCount1((prev) => prev + value);
        }
        else if (id === 2) {
            setCount2((prev) => prev + value);
        }
        else if (id === 3) {
            setCount3((prev) => prev + value);
        }
        else if (id === 4) {
            setCount4((prev) => prev + value);
        }
        else if (id === 5) {
            setCount5((prev) => prev + value);
        }
        else if (id === 6) {
            setCount6((prev) => prev + value);
        }
       
        //todo recalcul du total à chaque fois
        // tu connais l'id du product sur lequel on vient de clicker, tu peux donc récupérer le prix
        // tu connais aussi la valeur à ajouter -1 soit +1

        // Dans le tableau products, on cherche l'élément (ici appelé prod, mais pourrait s'appeler Jean-Bernard) dont l'id correspond à l'id qui a été envoyé en paramètre dans notre fonction crement => on en fait la variable product :
        const product = products.find(prod=> prod.id === id);
        setTotal((prev) => prev + product.price * value);  
    }

    // Fonction pour savoir quel count utiliser :
    const getCount = (id) => {
        if (id === 1) {
            return count1
        }
        else if (id === 2) {
            return count2
        }
        else if (id === 3) {
            return count3
        }
        else if (id === 4) {
            return count4
        }
        else if (id === 5) {
            return count5
        }
        else if (id === 6) {
            return count6
        }
    }

    return (
        <>
        {/* list.map(function(element) { return element.toUpperCase() }) */}
        {/* list.map((element) => { return element.toUpperCase() }) */}
        {/* list.map((element) =>  element.toUpperCase() ) */}
            {products.map((product) => 
                 (
                    <div key={product.id} className="main">
                        <div className="cart">
                            <div className="products">
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                            </div>
                            <div className="AddAndRemove">
                                <button onClick={() => crement(product.id, 1)}>➕</button>
                                <button>{getCount(product.id)}</button>
                                <button onClick={() => crement(product.id, -1)}>➖</button>

                                {/* ATTENTION : toujours mettre une FONCTION ANONYME (vide) avant notre fonction avec paramètres (crement()), pour éviter de lancer une fonction "infinie" où le rendu se régénère => ça déclenche la fonction => le rendu se régénère => ça déclenche la fonction => ... */}
                            </div>
                            
                        </div>
                    </div>
                )
            )}
            <div>Total : {total}</div>
        </>
    )




}