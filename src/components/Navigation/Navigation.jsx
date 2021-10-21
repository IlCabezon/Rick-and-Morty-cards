import styles from './Navigation.module.css'
import {NavLink} from 'react-router-dom';


export default function Navigation({onChange}){
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.toHome}><NavLink to='/' className={styles.home}>
                    home
                </NavLink></li>

                <li className={styles.toForm}><NavLink to='/Form' className={styles.create}>
                    create character
                </NavLink></li>
          
                <li className={styles.input}><input type='text' className={styles.searchBar} placeholder='Ingrese su busqueda' onChange={onChange}></input></li>

                <li className={styles.filter}> filter </li>
            </ul>
        </nav>
    )
}