// Import fichier css classique 
import './Demo1.css';

// import fichier module CSS :
// Quand on importe un module, on a accès à un objet 'style' qu contienttoutes les classes
import style from './Demo1.module.css';

export const Demo1Component = (props) => { // on met le export directement devant la constante.
    // props = objet qui contient le spropriétés qui porteront le nom de ce qui aura été envoyé lors de l'utilisation du composant.
    const {name, type, difficulty} = props;

    return ( //* Tout ce qui est écrit ici sera renvoyé dans la page HTML autant de fois qu'il y aura de Demo1Component écrits dans le fichier App.jsx.
    // Fragment <></>: Le JSX ne peut renvoyer qu'une seule balise, donc le fragment joue le rôle de balise par défaut autour de tout ce qu'on veut renvoyer.
        <>
            {/* Utilisation d'un fichier module CSS :*/}
            <p className={style['grey-text']}>Bienvenue au cours de {name} où nous apprendrons les arcanes de {type}.</p>

            {/*Utilisation d'un fichier CSS classique :*/}
            <p className="grey-text">Difficulté : {difficulty}</p>
            
        </>
    );
}