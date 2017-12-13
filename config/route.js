/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var customerController = require('../customer/customerController');
var loginController = require('../login/loginController');
    
module.exports = function (app) {
    app.get('/login', loginController.login);
    app.post('/checkLogin', loginController.checkLogin);
    app.get('/logout', loginController.logout);
    app.get('/customers', customerController.list);
    app.get('/customers/add', customerController.add);
    app.post('/customers/add', customerController.save);
    app.get('/customers/delete/:id', customerController.deleteCustomer);
    app.get('/customers/edit/:id', customerController.edit);
    app.post('/customers/edit/:id', customerController.saveEdit);
    
}