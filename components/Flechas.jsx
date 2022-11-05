import React from 'react'
import Script from 'next/script'
import styles from '../styles/Flechas.module.scss'

const Flechas = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.counter}></div>
                <button className={`${styles.button} ${styles.paginate} ${styles.left}`}><i></i><i></i></button>
                <button className={`${styles.button} ${styles.paginate} ${styles.right}`}><i></i><i></i></button>
                <Script strategy='lazyOnload'>
                    {`var pr = document.querySelector( '.${styles.paginate}.${styles.left}' );
                var pl = document.querySelector( '.${styles.paginate}.${styles.right}' );
                    
                pr.onclick = slide.bind( this, -1 );
                pl.onclick = slide.bind( this, 1 );
                    
                var index = 0, total = 5;
                    
                function slide(offset) {
                  index = Math.min( Math.max( index + offset, 0 ), total - 1 );
                
                  document.querySelector( '.${styles.counter}' ).innerHTML = ( index + 1 );
                
                  pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
                  pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
                }
                
                slide(0);`}
                </Script>
            </div>
        </>
    )
}

export default Flechas