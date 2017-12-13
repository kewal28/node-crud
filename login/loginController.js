/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var async = require('asyncawait/async');
var await = require('asyncawait/await');

exports.login = function (req, res) {
    var sess = req.session;
    var UserName = "";
    if (sess.UserName) {
        UserName = sess.UserName;
    }
    res.render('login', {page_title: "Login", UserName: UserName, error: req.query.error});
};

exports.checkLogin = async(function (req, res, next) {
    var loginModel = require('./loginModel');
    var users = await(loginModel.checkLogin(req));
    if (users && users.length > 0) {
        var sess = req.session;
        sess.UserName = users[0].UserName;
        res.redirect('/customers');
    } else {
        res.redirect('/login?error=true');
    }
});

exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
};