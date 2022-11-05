const mysql = require('mysql2');

/**



railway
containers-us-west-105.railway.app
KIpUFihr78flT20c07Ms
6955
root
mysql://${{ MYSQLUSER }}:${{ MYSQLPASSWORD }}@${{ MYSQLHOST }}:${{ MYSQLPORT }}/${{ MYSQLDATABASE }}


 */

const con = mysql.createPool({
    host:"containers-us-west-105.railway.app",
    user:"root",
    port:"6955",
    password:"KIpUFihr78flT20c07Ms",
    database:"simapDB"
})

con.query("INSERT INTO Usuarios values(?,?,?)",["e@l.com","12","edgar"],(err,result)=>{
    if(err){console.log(err)}else{
        console.log(result);
    }
})
