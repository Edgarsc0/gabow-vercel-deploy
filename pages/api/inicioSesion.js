import con from "./config.js";
import jwt from "jsonwebtoken";
import {serialize} from 'cookie';

function iniciarSesion(req,res){
    try{
        con.connect();
        console.log("se conecto a la bd");        
    }
    catch(err){
        console.log(err);
    }
    const {id,psw}=req.body;
    console.log(id,psw);
    con.query(`select * from Usuarios where usu_correo = "${id}"`,(err,result)=>{
        if(err){
            console.log(err);
            return res.json({
                status:"algo salio mal"
            });
        }else{
            const {usu_correo,usu_password,usu_nombre} = result[0];
            console.log(usu_correo);
            if(usu_correo==id && usu_password==psw){
                
                const token = jwt.sign({
                    email: usu_correo,
                    username: usu_nombre,
                } , 'secret');

                console.log(token);

                const serializado = serialize('Parameters' , token,{
                    httpOnly:true,
                    secure:process.env.NODE_ENV=="production",
                    sameSite: 'strict',
                    path:"/"
                });
                res.setHeader('Set-Cookie',serializado);
                return res.json({
                    status:"ok",
                    data : result
                });

            }
            else{

                return res.json({
                    status:"algo salio mal"
                });

            }
            
        }   
    })
}
export default iniciarSesion;