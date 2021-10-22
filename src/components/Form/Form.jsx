/* eslint-disable jsx-a11y/alt-text */
import styles from './Form.module.css';
import {NavLink} from 'react-router-dom'; 
import {useState} from 'react';

export default function Form(){
    const [contact,setContact] = useState({nombre:'',apellido:'',email:'',telefono:'',url:''})
    
    

    function handleChange(e){
        let evento =  e.target.value;
        setContact({...contact,[e.target.name] : evento})
    }
    function handleSubmit(e){
        e.preventDefault()
    }

    return(
        <div className={styles.container}>
        
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
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label>
                           name   
                        </label>
                            <input type='text' name='name' placeholder='Insert the character name' onChange={handleChange}></input>
                        <label>
                            status
                        </label>
                            <input type='text' name='status' placeholder='Insert the character status' onChange={handleChange}></input>
                        <label>
                            specie
                        </label>
                            <input type='text' name='specie' placeholder='Insert the character specie' onChange={handleChange}></input>
                        <label>
                            url
                        </label>
                        <input type='text' name='url' placeholder='Insert the character image' onChange={handleChange}></input>
                        <label>
                            description
                        </label>
                        <textarea type='text' name='description' placeholder='Insert a description of the character' onChange={handleChange} className={styles.textArea}></textarea>
                        <button className={styles.formButton} onClick={()=>alert('Your character was created successfully')}>Subbmit</button>
                    </form>
                </div>
            </div>
        </div>
    )

}
 