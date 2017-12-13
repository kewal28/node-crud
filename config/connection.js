/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var connection = require('express-myconnection');
var mysql = require('mysql');

module.exports = function (app) {
    /*------------------------------------------
     connection peer, register as middleware
     type koneksi : single,pool and request 
     -------------------------------------------*/
    app.use(
            connection(mysql, {
                host: 'localhost', //'localhost',
                user: 'root',
                password: 'redhat',
                port: 3306, //port mysql
                database: 'sampledb'

            }, 'pool') //or single

            );
}