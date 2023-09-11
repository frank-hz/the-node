const express = require('express');
const app = express();
const path = require('path');


// Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const routes = require('./routes.js');
app.use(routes);


// Static Files
app.use(express.static(path.join(__dirname,'public')));

// Midlewares




app.listen(app.get('port'), () => {
    console.log(`live in ${app.get('port')}`);
});
