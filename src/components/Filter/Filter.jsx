import styles from './Filter.module.css'

export default function Filter({status,species}){

    return (
        <ul className={styles.ul}>
            {status.map((e)=>{
                return<li className={styles.filtros}><button className={styles.botones}> {e} </button></li>
            })}
            {species.map((e)=>{
                return<li className={styles.filtros}><button className={styles.botones}> {e} </button></li>
            })}
            
        </ul>
    )
}