var express = require('express');
var app = express();
app.get('/',function(req, res) {
    var sql = require("mssql");
    // config for your database
    var config = {
        user:"bob",
        password:"bob",
        server:"DESKTOP-8J3SARA",
        database:"Node",
        synchronize:true,
        trustServerCertificate:true,
        port:1433,
        dialectOptions:{
            instanceName:"SQLExpress"
        }
    };
    // connect to your database
    sql.connect(config,function(err) {
        if(err) console.log(err);
        //create Request object
        var request = new sql.Request();
        // query to the database and get the records
        request.query('select * from Studentinfo',function(err, recordset) {
            if(err) console.log(err)
            // send records as a response
            res.send(recordset);
        });
    });
});
var server = app.listen(5000,function() {
    console.log('Server is running..');
});