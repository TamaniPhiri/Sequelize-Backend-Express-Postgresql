const sequelize = require('./utils/db')
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app=express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api',require('./Routes/routes'))

app.get('/', (req, res)=>{
    res.send('Welcome to the products api')
})

sequelize.sync()
.then(()=>{
    console.log('database connection established')
    app.listen(5000);
    console.log('app listening on http://localhost:5000')
})
.catch(err => {
    console.error('error connecting to database', err)
});