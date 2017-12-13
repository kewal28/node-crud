/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

exports.list = function(req) {
    return new Promise(resolve => { 
        req.getConnection(function (err, connection) {
        if (typeof connection == "undefined") {
            console.log("Error Updating : %s ", err);
            resolve(false);
        }  
        var query = connection.query('SELECT * FROM customer', function (err, rows)
        {
            if (err) {
                console.log("Error Updating : %s ", err);
                resolve(false);
            } else {
                resolve(rows);
            }
        });
        //console.log(query.sql);
        });
    });
}

exports.edit = function(req) {
    return new Promise(resolve => {
        var id = req.params.id;
        req.getConnection(function (err, connection) {
        if (typeof connection == "undefined") {
            console.log("Error Updating : %s ", err);
            resolve(false);
        }
        var query = connection.query('SELECT * FROM customer WHERE id = ?', [id], function (err, rows)
        {
            if (err) {
                console.log("Error Updating : %s ", err);
                resolve(false);
            } else {
                resolve(rows);
            }
        });
        //console.log(query.sql);
        });
    });
}

exports.save = function(req, res) {
    return new Promise(resolve => {
        var id = req.params.id;
        req.app.upload(req, res, function (err) {
            if (err) {
                console.log("Error inserting : %s ", err);
            }
            var input = JSON.parse(JSON.stringify(req.body));
            var filePath = req.files[0].filename;
            req.getConnection(function (err, connection) {
                if (typeof connection == "undefined") {
                    console.log("Error Updating : %s ", err);
                    resolve(false);
                }
                var data = {
                    name: input.name,
                    address: input.address,
                    email: input.email,
                    phone: input.phone,
                    image: filePath

                };
                var query = connection.query("INSERT INTO customer set ? ", data, function (err, rows)
                {
                    if (err) {
                        console.log("Error Updating : %s ", err);
                        resolve(false);
                    } else {
                        resolve(rows);
                    }

                });
    //             console.log(query.sql); //get raw query
            });
            console.log("File uploaded sucessfully!.");
        });
    })
}

exports.saveEdit = function(req, res) {
    return new Promise(resolve => {
        req.getConnection(function (err, connection) {
        req.app.upload(req, res, function (err) {
            if (err) {
                console.log("Error inserting : %s ", err);
            }
            var input = JSON.parse(JSON.stringify(req.body));
            var id = input.id;
            var filePath = req.files[0].filename;
        req.getConnection(function (err, connection) {
            if (typeof connection == "undefined") {
                console.log("Error Updating : %s ", err);
                resolve(false);
            }
            var data = {
                name: input.name,
                address: input.address,
                email: input.email,
                phone: input.phone,
                image: filePath
            };
            var query = connection.query("UPDATE customer set ? WHERE id = ? ", [data, id], function (err, rows)
            {
                if (err) {
                    console.log("Error Updating : %s ", err);
                    resolve(false);
                } else {
                    resolve(rows);
                }
            });
//            console.log(query.sql);
        });
            console.log("File uploaded sucessfully!.");
        });
    });
})        
}

exports.deleteCustomer = function(req) {
    return new Promise(resolve => {
        var id = req.params.id;
        req.getConnection(function (err, connection) {
            if (typeof connection == "undefined") {
                console.log("Error Updating : %s ", err);
                resolve(false);
            }
        connection.query("DELETE FROM customer  WHERE id = ? ", [id], function (err, rows)
        {
            if (err) {
                console.log("Error Updating : %s ", err);
                resolve(false);
            } else {
                resolve(rows);
            }
        });
        });
    });
}