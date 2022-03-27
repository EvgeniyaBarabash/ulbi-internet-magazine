require("dotenv").config();
const express = require('express');
const sequelize = require('./db');
const models = require('./model');
const PORT = process.env.PORT;
const app = express();
const cors = require("cors");
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandingMiddleware');
const fileUpload = require('express-fileupload');
const path = require('path');

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}));
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorHandler)
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e)
    }
}
start()

app.get('/', (req, res) => {
    res.status(200).json({ massage: "Working" })
})