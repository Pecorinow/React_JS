# React
React est une librairie JS, classée dans les frameworks (mais pas vraiment un framework), qui permet de créer des interfaces pour les utilisateurs.
Développé par Facebook.
Alternative développée par Google : Angular, très présent sur le marché mais rattrapé par React.
Alternative plus indépendante (ni Google ni Meta), mais moins quali : VueJS 🪅

Voir State Of Js et State Of React : Sites sur les dernières tendances JS.

"États générals" : Redux (Voir ce que c'est j'ai pas suivi)

* Une structure basé sur des composants déclaratifs
    - Le rendu d’un composant est généré sur base des valeurs de l’état local.
    - Lorsqu’une valeur est modifiée, le rendu est automatiquement actualisé.
* L’interaction avec le DOM est extrêmement rapide via un DOM Virtuel.
* Intégration possible dans une application Web existante (ASP.Net, PHP, Java, ... )

## Crée des **Single Page Applications** :
But : N'avoir qu'une seule page index, avec pleins de composants (menu, contact... ), qui ont chacun une route attitrée, mais sans jamais charger une nouvelle page, seul le contenu de la page change => Moins demandeur en ressources et plus rapide.

## Langage 
* Le JavaScript (ECMAScript 2015+)
Langage qui nous permettra de coder la logique de nos composants.
* Le JSX
Une extension du Javascript qui permet réaliser le rendu des composants. Mélange de HTML et de JS.

## Environnement de développement :
NodeJs
Pluggin : [React Developper Tools] https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi.

## Créer un projet avec Vite :
**Vite** :

Depuis le dossier où on veut installer le projet (ici React_JS), ouvrir VSC.
Dans la console :
```
npm create vite@latest
```
Nom du projet : on me ce qu'on veut, juste pas d'espaces, séparer les mots par un tiret -.
-> Choix du framework : React -> Variant : Javascript -> No -> Yes -> Va créer le projet.

Quand c'est fait -> suivre le lien localhost -> Arrive sur une page Vite + React.

### architecture du projet :

#### Racine du projet :

📁 node_modules\
📁 public\
📁 src\
📄 .gitignore\
📄 index.html\
📄 package-lock.json\
📄 package.json\
📄 vite.config.js

> * **node_modules** → c'est le dossier où se trouve les dépendances du projet récupérées via le package.json et les commandes pour lancer le projet.
> * **public** : dossier qu rend accessible les fichiers, utilisé po rles medias (images, vidéos, son..)
> * **src** : dossier source, où se trouve notre application et où on va surtou travailler.
> * **gitignore** :
> * **index** : dossier html, C'est le point d'entrée du projet. Contient une balise <body> , qui contient le script JS. 
> * **package-lock.json et package.json** Fichiers des dépendances du proje. Package.json : là où se trouvent les commandes pour démarrer le projet.
> * **vite.config.js** : configuration de Vite, outil de build qui fournit le serveur local sur notre machine.


#### Zoom sur le dossier src :
📁assets\
📄App.css\
📄App.jsx\
📄index.css\
📄main.jsx\

> assets : dossier de medias propre à l'appli.

> Dans le fichier _index.html_, ily a un script qui permet de charger le fichier _main.jsx_, qui récupère grâce à getElementById la div possédant l'id **root** dans le fichier _index.html_, où on charge le premier composant de l'appli, le fichier **App.jsx**.

> Dans le fichier _App.jsx_ se trouve le premier composant. Composant = fonction qui renvoie du JSX,un mélange de JS et de HTML. Dans cette fonction, il y a un return. Avant le return, c'est du JS, après le return, c'ets le HTML qui s'affichera dans la page.

> _App.css_ est le fichier de styles.

## Lancer le projet en local :
Dans le dossier du projet, depuis la console :
```
npm run dev
```
-> Serveur lancé.
Sur le lien localhost, 
Une fois le serveur lancé, à chaque modif le projet se rechargera tout seul et le projet se mettra à jour 🌟.

## Créer un composant :
Composant = fonction qui renvoie du JSX.

_Exemple : fichier Demo1Component :_
```jsx
export const nomComposant = () => {

    return (
        <>
        Notre premier composant
        </>
    );
}
```
Attention : Il est OBLIGATOIRE de toujours écrire le nom du composant avec une **majuscule** au début.

Note : au lieu de faire directement des fonctions, on va créer des constantes avec des fonctions dedans.

### Le paramètre d'entrée : les props 

Notre composant peut **recevoir** des informations envoyées lors de son utilisation.
Pour cela, lors du l'utilisation, nous devrons écrire :
```jsx
    <NomComposant nomProp1="uneChaine" nomProp2={42} />
```

Dans le composant, nous allons récupérer dans les paramètres du composant, un **objet props**, dans lequel se trouvera tout ce qui a été envoyé précédemment.
```jsx
    export const NomComposant = (props) => {
        // Pour extraire ce qu'on veut des props
        // Pour mettre une valeur par défaut à notre prop, on lui assigne une valeur avec un =
        const { nomProp1, nomProp2 = 0 } = props;

        return (
            <>
                <p> Pour afficher la valeur d'une prop : { nomProp1 }</p>
            </>
        )
    }
```

## Style du composant :

Composants CSS : Par défaut, c'est le fichier index.css qui s'applique, sauf si on crée un autre fichier CSS qui aura alors priorité dessus.
Pour s'assurer de ne pas avoir plusieurs classes qui ont le même nom selon les fichiers, et donc que certaines classes en écrasent d'autres, on crée en général un fichier **module.css** qui aura priorité sur index.css ou un autre fichier css importé.
Les classes qui viennent du module s'écrivent différemment :
```js
{/* Utilisation d'un fichier module CSS :*/}
<p className={style['grey-text']}>Bienvenue au cours de {name} où nous apprendrons les arcanes de {type}.</p>

{/*Utilisation d'un fichier CSS classique :*/}
<p className="grey-text">Difficulté : {difficulty}</p>
```
=> Même si qlq d'autre a appelé une classe comme nous, c'est la nôtre qui s'appliquera 


## Rendu conditionnel :

* 1e type de rendu conditionnel : Le **if** n'est utilisable qu'**en dehors du rendu (return ())**. Il sert donc à générer un rendu différent en fonction de notre condition.\
_exemple :_
    ```jsx
        export const NomComposant = (props) => {
            const { isError } = props;

            if(isError){
                return (
                    <> 
                        Une erreur est survenue 🤖
                    </>
                )
            }

            return (
                <> 
                    Pas d'erreur, tout roule 🛞
                </>
            )
        }
    ```

* 2e type de conditionnelle : la **ternaire** : on peut la faire directement dans le rendu pour ajoute une classe ou l'autre, ou pour afficher un contenu ou l'autre :
```jsx
import style from './NomComposant.module.css';

export const NomComposant = (props) => {
    const {color} = props;

    return (
        <div className={ (color === 'rose')? style.pink : style.black }>
        {/* = Si color est défini comme 'rose' dans App.jsx, alors la propriété appliquée depuis le module.css est pink, sinon c'est le noir.*/}

        <p> Chanson du jour :
            {
                (color === 'rose')?
                <span> Je vois la vie en rose hihihi </span> :
                <span>Back to black.</span>
            }
        </p>
    )
}
```
_Exemple : Demo2.jsx :_
    ```jsx
    {/* 2e type de conditionnelle : la ternaire :*/}
                <p> Votre animal est un {( type === 'chat') } ? (<span>🐈‍⬛</span>) : (<span>🐕‍🦺</span>)</p>
    ```

* L'opérateur **OU ||**. Pour afficher le contenu d'une variable si non null et non undefined ou une autre valeur.
    ```jsx
    export const NomComposant = (props) => {
        const {city, population} = props;

        return (
            <div> 
                <p>Ville : { city } </p>
                <p>Nombre d'habitants : { population ||'Donnée inconnue' } </p>
            </div>
        )
    }
    ```
* L'opérateur **ET &&**. Pour afficher quelque chose (ou appliquer une classe) si la condition est respectée.
    ```jsx
    export const NomComposant = (props) => {
        const {quote, author, imageAuthor} = props;

        return (
            <div> 
                <q>{quote}</q>
                <p>{author}</p>
                { imageAuthor && <img src={imageAuthor} /> }
                {/* n'affichera l'image que si on a reçu une image */}
            </div>
        )
    }
    ```

## Les Collections : map() et key={} :
Pour afficher plusieurs fois la même chose mais n'écrire qu'une seule fois le code, on va utiliser une "boucle"
Cette boucle sera la méthode **.map()** des tableaux puisqu'elle permet de :
- **parcourir** chaque élément d'un tableau (comme un forEach) ;
- **transformer** chaque élément de ce tableau en autre chose.
On va donc s'en servir pour transformer chaque élément du tableau en JSX.

📢 Quand on affiche des collections (lists), on va devoir ajouter une clef unique sur chaque élément construit pour des questions d'optimisation. Cette clef doit être associée à une valeur unique (idéalement un id, mais si on n'en a pas, l'indice dans le tableau fait l'affaire). Cela se fait avec un **attribut key={valeur}**.
Comme ça, si jamais on met par exemple à jour l'un des éléments du tableau, le mapping ne se refait pas sur tous les éléments mais seulement sur celui-là.

Quand on a beaucoup de HTML à afficher dans notre map, on va devoir en faire un composant dans un autre fichier, qu'on importera dand le premier. (Voir Demo3.)

Écriture : 
```jsx
{tableau.map((elementDuTableau) => (
    <NouvelElementACreer key={elementDuTableau.id}>
        {/* Contenu utilisant elementDuTableau (elementDuTableau.name, .price, .hobbies...) */}
    </NouvelElementACreer>
))}
```
Ici :
- elementDuTableau = élément original du tableau, à partir duquel on crée un élément JSX.
- NouvelElementACreer = nouvel élément JSX à créer à partir du tableau (une <div>, un <p>...).

Les points importants :

✅ tableau.map((elementDuTableau) => ...) -> on itère sur chaque élément.
✅ key={elementDuTableau.id} -> on utilise l'id de l'élément original comme key.
⚠️ Le key se met _sur la balise JSX qu'on crée_ (comme <div>, <li>, etc.), pas dans le nom de l'élément lui-même.

Le **key** est un attribut spécial que React utilise pour identifier chaque élément de la liste. On le met toujours sur l'**élément racine** qu'on retourne dans le .map(), donc par exemple sur la première <div> qui renvoie l'élément.

Exemple : pour un tableau de produits à acheter, chaque produit, qui est à la base un objet du tableau, devient une div => C'est sur elle qu'on met la key ! Et cette div contiendra elle-même des div ou des p qui renverront les éléments du produit.

Exemple :
```jsx
{products.map((product) => (
    <div key={product.id}>
        <p>{product.name}</p>
        <p>{product.price}</p>
    </div>
))}
```
-> Ici, la première div = nouvel élément créé à partir de chaque product du tableau products.

> NOTATION :
> Il y a 3 façons d'écrire un .map() :
> 1) À la base, on déclarait que ce que contenait le map était une fonction anonyme non-fléchée _fonction(param) {truc que fait la fonction sur le param}_, avec le paramètre "élément du tableau" entre les (), comme ceci :
> ```jsx
>     list.map(function(element) { return element.toUpperCase() })
> ```
> 2) Mais comme la fonction est de toute façon anu-onyme et n'a pas de nom, on a raccourci :
> - en écrivant juste le paramètre entre les (),
> - en ajoutant une flèche, pour faire directement _(param) => {truc que fait la fonction sur le param}_ :
> ```jsx
>     list.map((element) => { return element.toUpperCase() })
> ```
> 3) Et pour écrire le return :
> - soit on écrit le return entre {}, comme ici au-dessus,
> - soit on laisse tomber les {} et le return, et on renvoie directement le résultat de la fonction sur le paramètre element :
> ```jsx
>    list.map((element) =>  element.toUpperCase() )
> ```
Dans le cas de la _Demo5_ et de l'_Exo4_, c'est la méthode 3 qui a été choisie :

_Exemple : Exo4 :_
```jsx
{products.map((product) =>
    // -> product = paramètre de la fonction anonyme, qui renvoie tout un élémént JSX entre ().
    // Pourquoi entre () ? Car la fonction ne peut renvoyer qu'un seul élément, donc on groupe tout le code JSX renvoyé entre () :
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
                </div>
                
            </div>
        </div>
    ) // -> Fin de l'élément JSX
)}
```
ATTENTION : le return écrit juste au-dessus du map est écrit selon la méthode 2 :
```jsx
    return (
        <> {/* -> balises vierges, car un return ne peut pas renvoyer une autre fonction directement, donc on met la fonction .map entre balises.  */}
            {products.map((product) => 
                 (
                    <div key={product.id} className="main">
                        {/* contenu de la <div> */}
                    </div>
                )
            )}
            <div>Total : {total}</div>
        </>
    )
```


## Le State et les Hooks :
Voir Demo4

Les Hooks permettent :
* Utiliser davantage de fonctionnalités de React sans recourir aux classes.
    - Permet d’utiliser un état local, d’avoir un cycle de vie.
* Extraire la logique d’un composant.
    - Permet de réutiliser une logique sans devoir modifier la hiérarchie de l’application.
* Simplifier les composants en les découpant en petites fonctions
    - Permet d’isoler les codes intrinsèquement liées (abonnement / désabonnement)

useState() :
Dans quels cas l'utilise-t-on ?
-> Dès qu'on a une variable dont la valeur va être changée au fil du temps, et que ce sera visible à l'écran.



## Les Formulaires :
_Voir Demo6_

Pour gérer les fomrulaires nativement en Ract avec la state, 2 options :

* 👉 OPTION 1 : Un state pour chaque donnée du formulaire
Pour pouvoir relier un state avec un champs, on rajoute 2 choses sur le champs :
    * L'attibut value : pour lier le champs à notre state value={nomState}
    * L'évènement onChange : onChange={ (event) => fonctionDeMiseAJour(event.target.value)}
        = écrire dans le champs (= onChange) déclenche un event qui met à jour la valeur contenue dans l'input.
        event.target.value : récupère la valeur de l'élément HTML qui déclenche l'évènement.
        event = l'évènement déclenché, target = cible l'élément HTML qui le déclenche (dans ce cas-ci, des inputs ou des selects).
```jsx
const [bill, setBill] = useState(0); // -> 0 = valeur par défaut qui sera affichée, afin d'éviter un warning inutile "Attention il n'y a pas de valeur gnagnagna"
const [nbPerson, setNbPerson] = useState(0);
const [tip, setTips] = useState(5); //-> 5 = valeur par défaut qui sera écrite dans la page.
const [isValid, setIsValid] = useState(true); // -> évite un message d'erreur par défaut.

const [totalPerPerson, setTotalPerPerson] = useState();
```

* 👉 OPTION 2 : Un state de type objet qui représente tout le formulaire :
```jsx
const [splitForm, setSplitForm] = useState ( {
        bill :0, // -> valeurs par défaut affichée dans la page.
        nbPerson : 0,
        tips : 5
    });

    const [isValid, setIsValid] = useState(true);
    const [totalPerPerson, setTotalPerPerson] = useState();
```


* 👉 OPTION 3 : Gestion du formulaire avec la librairie React-Hook-Form :
On va utiliser la librairie React-Hook-Form
https://react-hook-form.com/

Pour l'importer, taper dans la console :
npm i react-hook-form

```jsx
//* Création d'un state pour le résultat final :
    const [totalPerPerson, setTotalPerPerson] = useState();
    // = state et fonction de màj du state seulement pour le champs du résultat final (= total à payer par personne) >< Demo6 où chaque champ avait un state.

    const {register, handleSubmit, formState : {errors}} = useForm( {
        mode : 'onChange', 
        defaultValues : {bill : 0, nbPerson : 0,tips : 5}
        // Dans les paramètres de useForm, on peut mettre un objet avec des options :
        // * mode : permet de changer le mode de détection des erreurs du formulaire
        // * defaultValues permet de mettre des valeurs de base dans le formulaire, il faudra respecter le nom mis dans register
    } );

```

* **Création du useForm** :
Grâce à React Hook-Form, on a accès à une nouvelle Hook appelée useForm, de laquelle on va extraire plusieurs choses :
* - 👉 register 
    -> permet d' "enregistrer un nouveau champs", depuis la balise de ce champs dans le return JSX
    Il fait le value={state} + onChange{fonctionPourChangerLeState} pour nous.
    Ex : <input id="bill" name="bill" type ="number" {...register('bill', {valueAsNumber : true, required : true, min : 10})}/>
* - 👉 handleSubmit
    -> Fonction qui fait le preventDefault et qui nous renvoie le state qu'elle a fabriqué.
    Elle prend 2 fonctions en paramètres : celle exécutée en cas de formulaire valide, et celle en cas de formulaire non-valide.
    Si valide, elle formate les données de chaque champs sous forme d'objets {nom + valeur} dans 'data'.
    On l'a écrite à la main dans la Demo6bis, mais ici elle est importée directement depuis React Hook Form.
* - 👉 formState
    -> l'état du formulaire.
    De formState, on va récupérer {errors}, écrit dans le formulaitre JSX, qui contient toutes les erreurs actuelles du formulaire (champs vides, mal remplis...), et fait apparaître un message d'erreur si nécessaire :
    Ex : { errors['bill']?.type === 'min' && <span>Vous devez indiquer une valeur minumum de 10.</span> }
* - 👉 reset
    -> Une fonction pour remettre à 0 (ou avec les defaultValues) le formulaire


## Interactions :
_Voir Demo7._

Dès qu'un composant B se trouve dans un autre composant A, il devient l'ENFANT de ce composant A !

La communication, qu'elle soit descendant ou ascendante, se fera toujours via les props : 
- Comunicaton Parent -> Enfant : via les **props classiques**.
    -> Une info contenue dans le Parent est envoyée dans l'Enfant pour être utilisée.
- Communication Enfant -> Parent : grâce à une **fonction callback** contenue dans une variable qui commence par 'on', via les props
    -> Une fonction créée dans le Parent est envoyée dans l'Enfant via les props.
    -> Un event dans l'Enfant déclenche cette fonction dans le return.
    -> Le Parent retourne la ComposantEnfant et son event.


_Exemple ComposantParent.jsx :_

```jsx
export const ComposantParent = () => {
    const donnéeAEnvoyer = "NomDuParent";

    const fonctionALancer = (param?) => {};
        // = fonction callback, avec ou sans paramètre.
        // Dans la Demo7, le paramètre est l'id de l'enfant.

    return (
        <ComposantEnfant
        // PROPS :
        nomParent = {donnéeAEnvoyer}
            // nomParent = props classique, envoyée à ComposantEnfant.
        onEnfantParle={fonctionALancer}/>
            // onEnfantParle = variable qui reçoit la fonction callback, envoyée à ComposantEnfant, qui contient l'event qui la déclenchera. 
            // Quand l'event est déclenché dans le ComposantEnfant => l'info remonte au ComposantParent via la props onEnfantParle, qui contient la fonction à déclencher.
            // => fonctionALancer est alors lancée dans le ComposantParent.
    )
}

```
_Exemple ComposantEnfant.jsx :_

```jsx
export constComposantEnfant = (props) => {
    const {nomParent, onEnfantParle} = props;
        // nomParent = props envoyée depuis ComposantParent.
        // onEnfantParle = variable qui contient la fonction à déclencher.

    return (
        <div> Mon parent s'appelle {nomParent}</div>
        <button onClick={() => onEnfantParle(param?)}>
            Click me !
        </button>
            // onClick = event qui déclenche la fonction.
            // onClick={() => onEnfantParle(param?)} = Quand l'event est déclenché dans le ComposantEnfant, l'info remonte au ComposantParent via la props onEnfantParle.
            // => la fonctionALancer est alors lancée dans le ComposantParent.
    )
}

```

## Cycle de Vie :
_Voir Demo8 et Exo7_

Les composants ont une vie et une mort.
* Vie = quand ils apparaissent à l'écran ( = naissance),
* Mort = quand ils disparaissent de l'écran.

Cette vie et mort est gérée par une un hook **useEffect()**.

**useState** : -> créer des variables qui vont être amenées à être modifiées, eventuellement dans useEffect(), mais pas nécessairement.
-> Crée la variable ET la fonction pour modifier la valeur dans la variable.

**useEffect** -> déclencher un effet :
- lorsque les valeurs renseignées dans les dépendances viennent à être modifiées (state ou props). 
- lorsque le composant apparaît à l'écran.
- lorsque le composnat disparaît de l'écran (pour annuler une requête, pour cleaner un timer...).

🚨Le useEffect() ne s'utilise que pour déclencher un effet au chargement d'un composant, ou au changement d'une valeur en particulier !
=> ne s'utilise pas pour charger de nouvelles données (ex. Demo9, on charge les nouveaux pokemons avec une simple fonction et non avec un useEffect), 

Le useEffect() se fait en 2 étapes :
- un effet = une fonction
- les valeurs modifiées = les dépendances []
🚨 Dans cette fonction, si on renvoie _une autre fonction_, ce sera celle qui sera exécutée _à la 'mort' du composant_.

Exemple : cas avec dépendance :
```jsx
useEffect(() => {
    console.log('Je me déclenche !');
        // = Effet qui se déclenche lorsque la dépendance est modifiée

    return () => {
        console.log('Je m\'arrête');
    }
        // = Fonction qui se déclenche à la mort du composant

}, [élémentDéclencheur])
    // = Dépendance = variable  qui, lorsqu'elle est modifiée, déclenche l'effet.
```


### Les trois cas de dépendances dans useEffect

#### 1. **Avec dépendance `[valeur]`** 

```javascript
useEffect(() => {
    console.log('Je me déclenche !');
}, [anniversaires])
```

**Quand ça se déclenche :**
- Au premier rendu (montage du composant)
- **À chaque fois que `anniversaires` change**

**Exemple :** Si vous cliquez 5 fois sur le bouton, le useEffect se déclenchera 6 fois au total (1 au départ + 5 fois pour chaque changement).

---

#### 2. **Avec dépendance vide `[]`**

```javascript
useEffect(() => {
    console.log('Je me déclenche une seule fois !');
}, [])
```

**Quand ça se déclenche :**
- **Uniquement au premier rendu** (montage du composant)
- Plus jamais après, même si d'autres états changent

**Cas d'usage typique :** Charger des données depuis une API au démarrage, initialiser quelque chose une seule fois.

---

#### 3. **Sans dépendance (pas de tableau)**

```javascript
useEffect(() => {
    console.log('Je me déclenche tout le temps !');
})
```

**Quand ça se déclenche :**
- Au premier rendu
- **À chaque re-rendu du composant** (peu importe quel état change)

**Attention ⚠️** C'est rarement ce qu'on veut ! Si votre useEffect modifie un état, ça créera une boucle infinie :
- Le useEffect change un état → provoque un re-rendu → le useEffect se relance → change l'état → etc.

---

### Résumé visuel

| Syntaxe | Déclenchement |
|---------|---------------|
| `useEffect(() => {...}, [valeur])` | 1er rendu + quand `valeur` change |
| `useEffect(() => {...}, [])` | 1er rendu uniquement |
| `useEffect(() => {...})` | À chaque rendu (dangereux !) |

Dans votre exemple, `[anniversaires]` fait que le useEffect "écoute" les anniversaires et réagit à chaque nouveau clic sur le bouton !


### localSotorage :
Le localStorage est une sorte de DB dans notre navigateur qui existe uniquement en local, sur notre machine.
On peut y stocker des données momentannées.
-> Ex :
- sur un site de vente où notre panier n'est sauvegardé que sur notre machine.
- Les cookies qui stockent certaines infos sur notre comportement en ligne.

* Pour **stocker** des infos dans le localStorage :

    ```jsx
    localStorage.setItem(id, infoAStocker)
    ```
    Attention, ici on a mis un id, mais ça peut aussi être un name, ou n'importe quelle propriété qui permette de retrouver précisément l'élément à stocker.

    _Ex : Exo7Compteur :_
    ```jsx
    useEffect(() =>{
            if(!isNaN(count)){
                localStorage.setItem(name, count)
            }
        }, [count])
    ```
    Ici, on a mis name, car name est connu via les props, et c'est plus facile à lire dans le navigateur avec un name qu'avec un id.

* Pour **récupérer** des infos dans le localStorage :
     ```jsx
    localStorage.setItem(id, infoAStocker)
    ```
    _Ex : Exo7Compteur :_
    ```jsx
    useEffect(() => {
        const savedCount = localStorage.getItem(name)
        console.log(savedCount);
    
        setCount(+savedCount)
    }, [])
    ```

## API
_Voir démo 9_

