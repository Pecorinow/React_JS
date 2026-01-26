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

* 2e type de conditionnelle : la **ternaire** : on peut la faire directement dans le rendu pour ajoute une classe ou l'autre, ou pour afficher un contenu ou l'autre :
```jsx
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

