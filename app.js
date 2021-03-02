const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');

const taskRouter = require("./src/controller/task-controller");

const port = process.env.PORT || '3000';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/bootstrap/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/bootstrap/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/bootstrap/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.use("/tasks", taskRouter);

app.listen(port, () => {
  console.log(`Started APP in port: ${port}`)
});

