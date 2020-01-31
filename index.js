const express =require('express');
const handle =require('./handlers');
const db =require('./models');
var cors = require('cors');
var bodyParser = require('body-parser');
const app=express();
const port=8080;
const vrrr={hello: 'login',arr:[{name:'hgghhg'},{name:'hgghhg'}]};
const vrrr333={hello: 'profile',arr:[{name:'hgghhg',email:"chandangupta010@gmail.com"},{name:'hgghhg',email:"chandangupta010@gmail.com"}]};
app.get('/',(req,res)=>{
    res.json(vrrr);
})
app.get('/profile',(req,res)=>{
    res.json(vrrr333);
})
//for middlleware  to use error handle
app.use(cors());

// parse application/json
app.use(bodyParser.json());
app.use(handle.notFound);
app.use(handle.errors);
app.listen(port,console.log(`sever start on port ${port}`));