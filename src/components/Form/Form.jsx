/* eslint-disable jsx-a11y/alt-text */
import styles from './Form.module.css';
import {NavLink} from 'react-router-dom'; 
import {useState} from 'react';

export default function Form(){
    


    return(
        <div className={styles.container}>
            <div className={styles.fondo}></div>
            <div className={styles.tab}>
                <div className={styles.nav}>
                    <nav>
                          
                        <NavLink to='/home' className={styles.navLink}>
 
                            <img className={styles.imgToHome}/>
                            <p className={styles.pToHome}>home</p>  
                        </NavLink>
                        <h2>customize your own character</h2> 
                    </nav>
                </div>
                
                <div className={styles.formContainer}>
                    <form className={styles.form} >

                        <label>
                           name   
                        </label>
                            <input type='text' name='name' placeholder='Insert the character name' ></input>

                        <label>
                            status
                        </label>
                            <input type='text' name='status' placeholder='Insert the character status' ></input>

                        <label>
                            specie
                        </label>
                            <input type='text' name='specie' placeholder='Insert the character specie' ></input>

                        <label>
                            url
                        </label>
                        <input type='text' name='url' placeholder='Insert the character image' ></input>

                        <label>
                            description
                        </label>

                        <textarea type='text' name='description' placeholder='Insert a description of the character'  className={styles.textArea}></textarea>

                        <button className={styles.formButton} >Subbmit</button>
                    </form>
                </div>
            </div>
        </div>
    )

}
 