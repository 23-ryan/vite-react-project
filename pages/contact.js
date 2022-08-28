import React from 'react'
import styles from '../styles/inventory.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function Contact(){
    return (
        <div>
            <h1 className={styles.heading}>Contact Section</h1>
            <p className={styles.text}>You can contact me through by any means <br/> I will <strike>definitely</strike> reply.</p>
            <footer>
                <h4 className={styles.headingSmall}>Email: aryanmathe111@gmail.com</h4>
                <a href="https://github.com/23-ryan" className={styles.icon}>
                    <i className='bi bi-github'></i>
                </a>
            </footer>
        </div>
    );
}

export default Contact