const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config('./config.env');
const app = require('./app');

mongoose.connect('mongodb://localhost:27017/user-data', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(con => {
    console.log('DB Connection Successfully');
}).catch(err => {
    console.log(`DB connection error: ${err}`)
})

const port = process.env.PORT || 8000;

app.listen(port, () => { console.log(`App running on port ${port}`) })