import styles from './Card.module.css';


export default function Card({name , status, especies, image}){
    return (
        <div className={styles.card}>
            <div className={styles.divImage}>
                <img src={image} alt='character' className={styles.image}/>
            </div>
            <div className={styles.info}>
                <h3>{name}</h3>
                <p>{`Estatus: ${status}`}</p>
                <p>{`Especie: ${especies}`}</p>
               
            </div>
        </div>
    )
}