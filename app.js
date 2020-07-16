const express = require('express');
const http = require('http');
const fileUpload = require('express-fileupload');
const app = express();
const server = http.createServer(app);

app.set('view engine', 'ejs');

app.use(fileUpload({}));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

let { usersRouter } = require('./router');

app.use('/users', usersRouter );

server.listen(5000, () => console.log(`Server has been started on port 5000`));
