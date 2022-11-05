import React from 'react'
import Head from 'next/head'
import styles from '../styles/Registro.module.scss'
const Registro = () => {
    const redirigir=(mode)=>{
        if(mode==0){
            window.location.reload();
        }else{
            window.location.href = "/";
        }
    }
    return (
        <>
            <Head>
                <title>GABOW</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <div className={styles.main}>
                    <input type="checkbox" id={styles.chk} aria-hidden="true" />
                    <div className={styles.signup}>
                        <form method="post" onSubmit={async(e)=>{
                            e.preventDefault();
                            const data={
                                usuario: e.target.usuario.value,
                                email: e.target.email.value,
                                psw: e.target.pswd.value
                            }
                            //console.log(data);
                            const response=await fetch("api/register",{
                                method:"POST",
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body:JSON.stringify(data)
                            });
                            const result=await response.json();
                            console.log(result.status);
                            if(result.status=="ok"){
                                redirigir(0);
                            }else{
                                alert("Algo salio mal. Revisa los datos")
                            }
                        }}>
                            <label htmlFor={styles.chk} aria-hidden="true" className={styles.label}>Registrarse</label>
                            <input type="text" name="usuario" placeholder="Usuario" required="" className={styles.input} />
                            <input type="email" name="email" placeholder="Correo" required="" className={styles.input} />
                            <input type="password" name="pswd" placeholder="Contraseña" required="" className={styles.input} />
                            <br />
                            <a href="" className={styles.ter}>Terminos y Condiciones</a>
                            <br />
                            <label className={styles.ter}><input id="checkboX" type="checkbox"/>Acepto</label>
                            <button type='submit' className={styles.button}>Registrarse</button>
                        </form>
                    </div>
                    <div className={styles.login}>
                        <form method='post' onSubmit={async(e)=>{
                            e.preventDefault();
                            const data={
                                id: e.target.email.value,
                                psw: e.target.pswd.value
                            }
                            const response=await fetch("api/inicioSesion",{
                                method:"POST",
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body:JSON.stringify(data)
                            });
                            const result = await response.json();
                            if(result.status=="ok"){
                                redirigir(1);
                            }
                        }}>
                            <label htmlFor={styles.chk} aria-hidden="true" className={styles.label}>Iniciar Sesion</label>
                            <input type="email" name="email" placeholder="Correo" required="" className={styles.input} />
                            <input type="password" name="pswd" placeholder="Contraseña" required="" className={styles.input} />
                            <button className={styles.button}>Iniciar Sesion</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Registro;