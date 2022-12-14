import React from 'react';
import Head from 'next/head'
import styles from '../styles/Ruta.module.scss'
import Link from 'next/link';

const Ruta = () => {
    return (
        <>
            <Head>
                <title>GABOW</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <div className={styles.ruta}>
                    <div>
                        <br />
                        <h1>Ruta:</h1>
                        <h1>Cinepolis</h1>
                        <br />
                        <div>Origen: Primer piso</div>
                        <div>Lugar: Town Center El Rosario</div>
                        <br />
                        <button type="button" className={styles.button}>
                            <Link href="/Edificio">
                                <a>Modificar Destino</a>
                            </Link>
                        </button>
                        <button type="button" className={styles.button}>
                            <Link href="/Mapas">
                                <a>Finalizar Ruta</a>
                            </Link>
                        </button>
                    </div>
                    <div>
                        <br />
                        <h2>Instrucciones</h2>
                        <div>Continua Derecho</div>
                        <div>Gira a la derecha</div>
                        <div>Avanza 100m</div>
                    </div>
                    <div></div>
                    <br />
                    <h2>Descripcion</h2>
                    <div>
                        <div>¡Agregar una descripcion!</div>
                        <div>
                            <div>
                                <label htmlFor='comment'></label>
                                <textarea rows="5" id="comment"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Ruta;