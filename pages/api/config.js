const mysql = require('mysql2');
/**mysql 
database: gabow
username: g8gtut53myk575hj2gf1
host: us-east.connect.psdb.cloud
password: pscale_pw_yh3uXrQlH1hgCxCgSI7CRLjEhk3IN8p4tFKX5Ck6CnC
 * */
const con = mysql.createPool({
    host:"containers-us-west-105.railway.app",
    user:"root",
    port:"6955",
    password:"KIpUFihr78flT20c07Ms",
    database:"simapDB"
})

export default con;