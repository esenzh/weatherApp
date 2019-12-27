const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const Users = require('../models/user');

const saltRounds = 10;

router
    .get('/signup', (req, res) => {
        const {message} = req.session;
        delete req.session.message;
        res.render('signup', {message});
    })
    .post('/signup', async (req, res) => {
        const {email, username, password} = req.body;
        const user = new Users({
            email,
            username,
            password: await bcrypt.hash(password, saltRounds),
        });
        const dbusername = await Users.findOne({username});
        const dbemail = await Users.findOne({email});
        if (dbusername && dbusername.username === username) {
            req.session.message = 'Username is already used, please choose another';
            res.redirect('/signup');
        } else if (dbemail && dbemail.email === email) {
            req.session.message = 'Email is already used, please choose another';
            res.redirect('/signup');
        } else {
            await user.save();
            req.session.user = user;
            res.redirect('/user/home');
        }
    })
    .get('/login', (req, res) => {
        const {message} = req.session;
        delete req.session.message;
        res.render('login', {message});
    })
    .post('/login', async (req, res) => {
        const {username, password} = req.body;
        const user = await Users.findOne({username});
        if (user && (await bcrypt.compare(password, user.password))) {
            req.session.user = user;
            res.redirect('/user/home');
        } else {
            req.session.message = 'You are not authorized, please check your username or password!';
            res.redirect('/login');
        }
    })
    .get('/logout', async (req, res, next) => {
        try {
            await req.session.destroy();
            res.clearCookie('user_sid');
            res.redirect('/');
        } catch (error) {
            next(error);
        }
    });

module.exports = router;
