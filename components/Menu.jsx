import React, { useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/Menu.module.scss'
import { useState } from 'react';

const Menu = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://gabow-vercel-deploy-9c1m.vercel.app/api/getCookie")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[]);
    if(data.cookie!==undefined){
        return (
            <>  
                <nav className={styles.container} id="nav">
                    <h2 className={`${styles.navLogo}`}>GABOW</h2>
                    <ul className={styles.navLinks} >
                        <li className={styles.navItem}>
                            <Link href="/">
                                <a className={styles.navLink}>Inicio</a>
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/Mapas">
                                <a className={styles.navLink}>Mapas</a>
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/Ruta">
                                <a className={styles.navLink}>Ruta</a>
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="#">
                                <a className={styles.navLink}>Favoritos</a>
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href='/Registro'>
                                <a className={styles.navLink}>Cerrar Sesion</a>
                            </Link>
                        </li>
                    </ul>
                    <a href="#nav" className={styles.navHam}>
                        <img src="/menu.svg" className={styles.navIcon} />
                    </a>
                    <a href="#" className={styles.navClose}>
                        <img src="/close.svg" className={styles.navIcon} />
                    </a>
                </nav>
            </>
        )
    }else{
        return (
            <>  
                <nav className={styles.container} id="nav">
                    <h2 className={`${styles.navLogo}`}>GABOW</h2>
                    <ul className={styles.navLinks} >
                        <li className={styles.navItem}>
                            <Link href="/">
                                <a className={styles.navLink}>Inicio</a>
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/Mapas">
                                <a className={styles.navLink}>Mapas</a>
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/Ruta">
                                <a className={styles.navLink}>Ruta</a>
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="#">
                                <a className={styles.navLink}>Favoritos</a>
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href='/Registro'>
                                <a className={styles.navLink}>Iniciar Sesion</a>
                            </Link>
                        </li>
                    </ul>
                    <a href="#nav" className={styles.navHam}>
                        <img src="/menu.svg" className={styles.navIcon} />
                    </a>
                    <a href="#" className={styles.navClose}>
                        <img src="/close.svg" className={styles.navIcon} />
                    </a>
                </nav>
            </>
        )
    }
}
/*Menu.getInitialProps=async(ctx)=>{
    const response=await fetch("http://localhost:3000/api/getCookie",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const result=await response.json();
    return result;
}*/
export default Menu;