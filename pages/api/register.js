import con from "./config.js";
async function registrarUsuarios(req,res){
 
    try{

        await con.connect();
        console.log("se conecto a la bd");
        
    }
    catch(err){
        console.log(err);
    }
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