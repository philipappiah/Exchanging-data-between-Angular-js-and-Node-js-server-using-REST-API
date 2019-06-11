const http = require('http');
const bodyParser= require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();


const path = require('path');
app.set('view engine', 'ejs');
app.set('views','views');
const errorController = require('./controllers/error')
const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');


app.use(bodyParser.json());
//app.use(cors);

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(cors());






app.use(errorController.get404);

app.listen(3000);