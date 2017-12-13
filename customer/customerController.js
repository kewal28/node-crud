/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var async = require('asyncawait/async');
var await = require('asyncawait/await');

exports.list = async(function (req, res) {
    var sess = req.session;
    var UserName = "";
    if (sess.UserName) {
        UserName = sess.UserName;
    } else {
        res.redirect('/');
    }
    var customerModel = require('./customerModel');
    var users = await(customerModel.list(req));
    if (users && users.length > 0) {
        res.render('customers', {page_title: "Customers", data: users, UserName: UserName});
    } else {
        res.render('customers', {page_title: "Customers", data: users, UserName: UserName});
    }
});

exports.add = function (req, res) {
    var sess = req.session;
    var UserName = "";
    if (sess.UserName) {
        UserName = sess.UserName;
    } else {
        res.redirect('/');
    }
    res.render('add_customer', {page_title: "Add Customers", UserName: UserName});
};

exports.edit = async(function (req, res) {
    var sess = req.session;
    var UserName = "";
    if (sess.UserName) {
        UserName = sess.UserName;
    } else {
        res.redirect('/');
    }
    var customerModel = require('./customerModel');
    var users = await(customerModel.list(req));
    if (users && users.length > 0) {
        res.render('edit_customer', {page_title: "Edit Customers", data: users, UserName: UserName});
    } else {
        res.render('edit_customer', {page_title: "Edit Customers", data: users, UserName: UserName});
    }
});

exports.save = async(function (req, res) {
    var sess = req.session;
    var UserName = "";
    if (sess.UserName) {
        UserName = sess.UserName;
    } else {
        res.redirect('/');
    }
    var customerModel = require('./customerModel');
    var users = await(customerModel.save(req, res));
    if (users && users.length > 0) {
        res.redirect('/customers');
    } else {
        res.redirect('/customers?error=true');
    }
});

exports.saveEdit = async(function (req, res) {
    var sess = req.session;
    var UserName = "";
    if (sess.UserName) {
        UserName = sess.UserName;
    } else {
        res.redirect('/');
    }
    var customerModel = require('./customerModel');
    var users = await(customerModel.saveEdit(req, res));
    if (users && users.length > 0) {
        res.redirect('/customers');
    } else {
        res.redirect('/customers?error=true');
    }
});

exports.deleteCustomer = async(function (req, res) {
    var sess = req.session;
    var UserName = "";
    if (sess.UserName) {
        UserName = sess.UserName;
    } else {
        res.redirect('/');
    }
    var customerModel = require('./customerModel');
    var users = await(customerModel.deleteCustomer(req));
    if (users && users.length > 0) {
        res.redirect('/customers');
    } else {
        res.redirect('/customers?error=true');
    }
});
