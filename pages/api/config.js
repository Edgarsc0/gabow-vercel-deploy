const mysql = require('mysql2');

const con = mysql.createConnection({

    host:"containers-us-west-71.railway.app",
    user:"root",
    password:"wywMqWqQni5APugohFYO",
    port:"6798",
    database:"gabow"

})

export default con;