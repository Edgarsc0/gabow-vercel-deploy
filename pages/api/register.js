import con from "./config.js";
function registrarUsuarios(req,res){
 
    const {usuario,email,psw} = req.body;
    //console.log(usuario,email,psw);
    con.query(`insert into Usuarios values(?,?,?)` , [email,psw,usuario] , (e , r)=>{
        if(!e){
            console.log("se metio el dato");
            return res.json({
                status:"ok"
            });
        }else{
            console.log(e);
            return res.json({
                status:"algo salio mal"
            });
        }
    });

}

export default registrarUsuarios;