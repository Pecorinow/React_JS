import style from './Exo2.module.css';

export const Exo2Conditionnel = (props) => {
    const {isAvailable, name, image, description, price, promoPrice} = props;

    if(!isAvailable) {
        return (
        <div className={style['main-border']}>
            <div className={style.props}>
                <p>{name} n'est temporairement plus en vente.</p>
            </div>
            <div className={style.props +' ' + style.propImage }>
                <img src={image} alt="" />
            </div>
        </div>

        )
    }

    return (
         <div className={style['main-border']}>
            <div className={style.props +' ' + style.propImage }>
                <img src={image} alt="" />
            </div>
            <div className={style.props}>
                <p>{name}</p>
            </div>
            <div className={style.props}>
                {description && <p>{description}</p>}
            </div>
            <div className={style.props}>
                {promoPrice ?
                <p className={style.promo}> {promoPrice} </p> : <p className={style.price}> {price} </p> }
            </div>
        </div>
    )
}