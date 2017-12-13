/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


exports.checkLogin = function(req) {
    return new Promise(resolve => {
        req.getConnection(function (err, connection) {
            var input = JSON.parse(JSON.stringify(req.body));
            var data = {
                UserName: input.uname,
                Password: req.app.md5(input.psw)
            };
            if (typeof connection == "undefined") {
                console.log("Error Updating : %s ", err);
                resolve(false);
            }
            connection.query('SELECT * FROM user WHERE UserName = ? AND Password = ? ', [data.UserName, data.Password], function (err, rows)
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
    });
}