require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const connection = require('./config/database')
const webRoutes = require('./routes/web')
const apiRoutes = require('./routes/api')
const fileUpload = require('express-fileupload')
const { MongoClient } = require('mongodb');


const app = express()
const port = process.env.PORT || 8888; // port => hardcode , uat ,prod
const hostname = process.env.HOST_NAME;
//config file update
// default options
app.use(fileUpload());

// config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

// config template engine
configViewEngine(app);

// khai bao route
app.use('/', webRoutes);
app.use('/v1/api/', apiRoutes);


// cách gọi này là thực hiện func ngay lập tức
(async () => {
    // test connnection
    try {
        // using mongoose
        // await connection();

        // using  mongodb driver
        // Connection URL
        const url = process.env.DB_HOST_WITH_DRIVER;
        const client = new MongoClient(url);
        // Database Name
        const dbName = process.env.DB_NAME;

        await client.connect();
        console.log('Connected successfully to server');
        
        const db = client.db(dbName);
        const collection = db.collection('documents');

        app.listen(port, () => {
            console.log(`Backend zero app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>>> error conect to DB: ", error)
    }

})()
