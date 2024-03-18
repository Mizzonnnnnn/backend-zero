require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const connection = require('./config/database');
const webRoutes = require('./routes/web');

const app = express()
const port = process.env.PORT || 8888; // port => hardcode , uat ,prod
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// khai bao route
app.use('/', webRoutes);



// A simple SELECT query


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})