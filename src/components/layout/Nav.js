import React from 'react'
import styles from './Nav.module.css'
function Nav(props) {
  let itens =['Home', ' About', 'Contact']
  
  return (
    <div className={styles.navbar}>
        
        <ul className={styles.list}>
            
            <p>test</p>
  
        </ul>

      {/*
        <ul className={styles.list}>
            <li className={styles.item}>Home</li>
            <li className={styles.item}>Projetos</li>
            <li className={styles.item}>Sobre</li>
            <li className={styles.item}>Contato</li>
        </ul>
  
      */ }
      

        <ul>
        {itens.map((item) => 
         <li>{item}</li>
         )}
        </ul> 


        
    
    </div>
  )
}

export default Nav