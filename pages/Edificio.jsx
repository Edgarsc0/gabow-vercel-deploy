import React from 'react'
import Image from 'next/image'
import styles from '../styles/Edificio.module.scss'

import dynamic from "next/dynamic"
import Link from 'next/link'
const Flechas = dynamic(() => import("../components/Flechas"), { ssr: false })

const Edificio = () => {
  return (
    <>
      <div className={styles.container}>
        <input className={styles.buscador} type="search" placeholder='Buscar'/>
        <Image alt="svg" src='/Nivel2_Azotea.svg' height={500} width={900} />
        <div className={styles.cont}>
          <Flechas />
        </div>
        <button type="button" className={styles.button}>
          <Link href="/Ruta">
            <a >Iniciar ruta</a>
          </Link>
        </button>
      </div>
    </>
  )
}

export default Edificio