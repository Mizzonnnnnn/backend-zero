require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const connection = require('./config/database')
const webRoutes = require('./routes/web')
const apiRoutes = require('./routes/api')
const app = express()
const port = process.env.PORT || 8888; // port => hardcode , uat ,prod
const hostname = process.env.HOST_NAME;
const fileUpload = require('express-fileupload');

app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data


// config template engine
configViewEngine(app);

// khai bao route
app.use('/', webRoutes);
app.use('/v1/api/', apiRoutes);

(async () => {
    // test connnection
    try {
        await connection();
        app.listen(port, () => {
            console.log(`Backend zero app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>>> error conect to DB: ", error)
    }

})()
