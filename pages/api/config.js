const mysql = require('mysql2');

const con = mysql.createConnection({

    host:"containers-us-west-21.railway.app",
    user:"root",
    password:"f7GLCHV3RhcicFj0ztZd",
    port:"6798",
    database:"simapDB"

})

export default con;