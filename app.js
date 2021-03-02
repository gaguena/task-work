var express = require('express');

var logger = require('morgan');

var RouterFactory = require("./src/controller/routers-factory");
var ConfigWeb = require("./src/config/config-web");

var app = express();

new RouterFactory().create(app);
new ConfigWeb().config(app);

