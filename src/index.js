const express = require('express');
const app    = express();
const port   = 3000;
const path   = require('path');
const morgan = require('morgan');
const engine = require('express-handlebars');
const route =  require('./routes');
const db = require('./config/db');

app.use(express.static(path.join(__dirname, 'public')));

// show log 
app.use(morgan('combined'));

// template engine
app.engine('.hbs', engine.engine({extname: '.hbs'}));

// connect database
db.connect();

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources','views'));
route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});