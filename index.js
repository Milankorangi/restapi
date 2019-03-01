const express = require('express'); 
const port = process.env.PORT || 4000;
const routes = require('./routes/api.js');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://milankorangi:milankorangi4141@ds255005.mlab.com:55005/api', ()=>{
    console.log('Database connected successfully');
});
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(bodyparser.json());
app.use('/api', routes);

//error handelling
app.use((err, req, res, next)=>{
res.status(422).send({error: err.message});
});

//listen to requests
app.listen(port, ()=>{
    console.log(`listening to port: ${port}`);
});