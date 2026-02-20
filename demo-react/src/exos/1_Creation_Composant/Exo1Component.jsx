import style from './Exo1.module.css';

// 
export const Exo1Component = (props) => {
    const {name, age} = props;

    return (
        <>
        <p className={style['plum-text']}>Bienvenue {name} ! </p>

        <p className={style['violet-text']}>As-tu bien {age} ans ?</p>

        </>
    );
}