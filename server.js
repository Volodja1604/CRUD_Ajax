const config=require('./config.js');
const port=config.port;
// const hostname=config.hostname;
const path = require('path');
const bodyParser=require('body-parser');

const express=require('express');
const index = require('./routes/index');
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname+'/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/',index);



app.listen(port,function(err){
  if(err){
  console.log(err)
}else{
    console.log(`server is runnind on port ${port}`);
}
});