import styles from './Episodes.module.css'
import { NavLink } from 'react-router-dom'

export default function Episodes(){

    return (
        <div className={styles.container}>
            <div className={styles.message}>
                <NavLink to='/home' className={styles.nav}>
                    <p className={styles.para}>TO HOME</p>
                </NavLink>
                <p className={styles.paragraphe}>Due to API limitations, I will not be able to create this section in which all the available episodes of the series can be viewed, for now ...</p>
            
                
            </div>
        </div>
    )  
}