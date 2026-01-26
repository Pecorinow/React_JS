import style from './Demo2.module.css';

export const Demo2 = (props) => {
    const {owner, havePet, name, image, type} = props;

    // Si le owner n'a pas d'animal :
    if(!havePet) {
        return (
            <div className={style['noPet']}>
                <p>Oh non {owner}, vous n'avez pas d'animal de compagnie ? Pourquoi ne pas adopter cette magnifique perruche ? </p>
                <a href="https://www.ma-perruche-bien-aimee.com/jadopte/">Clique ici pour adopter la perruche de tes rêves !</a>
            </div>
        )
    }

    // Si le owner a un animal :
    return (
        <div className={
            style.pet
            + ' ' 
            + ((type === 'chat') ? style.cat : style.dog)
            }>

            <div className ={style.inside}>

                <p>Waw {owner} qu'il est beau ! Est-ce qu'il sait utiliser les toilettes ?</p>
                
            {/* 2e type de conditionnelle : la ternaire :*/}
                <p> Votre animal est un {
                    ( type === 'chat')  ?
                    (<span>🐈‍⬛</span>) :
                    (<span>🐕‍🦺</span>) }
                </p>
                {/* Rappel : ternaire = condition */}

            {/* 3e type de conditionnelle : le OU :*/}
            {/* -> Utilisé pour afficher la seconde valeur si la première n'existe pas : */}
            {/* On pourrait faire le même traitement avec une ternaire, mais l'autre opérateur nous simplifie l'écriture :*/}
                {/*<p>Son petit nom est  : <span>{name ? name : 'Inconnu'}</span></p>*/}
            {/* Affichera la valeur de droite si la variable de gauche est null ou undefined : */}
                <p>Son petit nom est : 
                    <span>{ name || 'Inconnu' }</span>
                </p>

            {/* 4e type de conditionnelle : le ET :*/}
            {/* -> Utilisé pour afficher une valeur uniquement si une condition est remplie :*/}
                { image && <img width = "150px" src = {image}/>}
                {/* -> On crée la balise image SSI il y a un props image */}

            </div>
        </div>

    )
}