//Required package
var options = require('./options');
const path=require('path');

var pdf = require("pdf-creator-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync(path.join(__dirname + '/../pdfTemplate/template.html'), "utf8");

var percentHtml = fs.readFileSync(path.join(__dirname + '/../pdfTemplate/percentTemplate.html'), "utf8");



const genPdf = (req,res) =>{

  var users = [];
    const data = req.body;
    
    data.forEach(element => {
      users.push(element)
    });
    var document = {
      html: html,
      data: {
        users: users,
      },
      path: './attendence/output.pdf'
      
    };
    const path = "http://192.168.40.126:8000/attendence/output.pdf";
    pdf
    .create(document, options)
    .then((resp) => {
      console.log(resp);
      
      return res.status(201).json({message:path});
    })
    .catch((error) => {
      console.error(error);
      
      return res.status(500).json({message:"Something went wrong!"});
    });  
}

const percentPdfGen = (req,res) =>{
     
    
  var users = [];
  const data = req.body;
  
  data.forEach(element => {
    users.push(element)
  });
  var document = {
    html: percentHtml,
    data: {
      users: users,
    },
    path: './attendence/percentOutput.pdf'
    
  };
  const path = "http://192.168.40.126:8000/attendence/percentOutput.pdf";
  pdf
  .create(document, options)
  .then((resp) => {
    console.log(resp);
    
    return res.status(201).json({message:path});
  })
  .catch((error) => {
    console.error(error);
    
    return res.status(500).json({message:"Something went wrong!"});
  }); 

}

  

module.exports = { genPdf,percentPdfGen };
