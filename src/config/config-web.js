const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');

module.exports = class ConfigWeb {

    config(app) {
        app.set('views', path.join(__dirname, '../../views'));
        app.set('view engine', 'ejs');
        //app.use(express.json());
        //app.use(express.urlencoded({ extended: false }));
        app.use(bodyParser.json()).use(bodyParser.urlencoded({extended: true}));
        app.use(cookieParser());
        app.use(express.static(path.join(__dirname, 'public')));
        app.use('/bootstrap/css', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/css')));
        app.use('/bootstrap/js', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/js')));
        app.use('/bootstrap/js', express.static(path.join(__dirname, '../../node_modules/jquery/dist')));
        
        let port = process.env.PORT || '3000';

        app.listen(port, () => {
            console.log(`Started APP in port: ${port}`)
          });
    }

}
