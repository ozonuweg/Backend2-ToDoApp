const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 8080;
const app = express();

app
  .use(bodyParser.urlencoded({extended : false}))
  .use(bodyParser.json())
  .use(cookieParser())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'))
  .get('/',function(req,res){
    res.status(200).send(`<h1>Welcome to our To-do App Backend Site</h1>
                          <p>Course: Web Backend 2<br>
                          Instructor: Nathan Birch</p>
                          
                          <h4>Developers:</h4>
                          <ul><li>Glory Ozonuwe</li>
                          <li>Willard Nyamombe</li>
                          <li>Comfort Azuonwu</li>
                          <li>Melanie Monkurai</li></ul>
                          
                          <h3>To run our APIs and make sample requests, visit our Swagger.io page <a href="/api-docs" target="_blank">here</a>.<br> See our github code <a href="https://github.com/ozonuweg/Backend2-ToDoApp" target="_blank">here</a>.</h3>`);
  });

const db = require('./models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`DB Connected and server running on ${port}.`);
    });
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });