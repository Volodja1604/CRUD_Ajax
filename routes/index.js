const express = require('express');
const router = express.Router();
const fs = require('fs');

let results=[];
fs.readFile('json/data.json', 'utf8', function(err, data){
  if(err){
    throw err;
  } else {
    results = JSON.parse(data);
  }
});

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'List of students',
    lists: results
  });
});

router.post('/add',(req,res)=>{
  if(req.body.firstName){
   results=[...results,{firstName:req.body.firstName,lastName:req.body.lastName}];
   res.redirect('/');
  }

});
router.delete('/delete/:name',(req,res)=>{
   results=results.filter((item)=>{
    return item.lastName!==req.params.name;
  });
      res.render('index', {
    title: 'List of students',
    lists: results
  });
});

router.put('/update/:lastName',(req,res)=>{
  results=results.map(item=>{
    if(item.lastName===req.params.lastName){
      item.firstName=req.body.firstName;
      item.lastName=req.body.lastName;

    }
      return item;
  });
 
  res.render('index', {
    title: 'List of students',
    lists: results
  }); 
});
module.exports = router;