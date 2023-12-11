const express=require('express');
const {getStudent,addStudent,updateStudent,deleteStudent} = require('../controllers/controller');
const {genPdf,percentPdfGen} = require('../controllers/pdfController');
const route = express.Router();

route.get('/get',getStudent);
route.post('/add',addStudent);
route.put('/update',updateStudent);
route.delete('/delete',deleteStudent);
route.post('/genPdf',genPdf);
route.post('/percentPdf',percentPdfGen);

module.exports = route;