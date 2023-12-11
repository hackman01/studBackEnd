
const studentModel=require('../models/model');

const getStudent = async (req,res) => {
    try {
        const students = await studentModel.find();
        return res.status(200).json({students});
    } catch (error) {
        return res.status(500).json({message:"SomeThing went wrong!"});
    }
}
const addStudent =  (req,res) => {
    const students=req.body;
    students.forEach(async student => {

        try {
            const { name,rollno } = student;
        const newStudent = new studentModel({
            name:name,
            rollno:rollno,
            attended_classes:"0",
            total_classes:"0",
            percent:"0"
        })
        const stu=await studentModel.findOne({rollno:rollno})
        if(!stu){
        await newStudent.save();
        
        }
        else
        {
            return res.status(400).json({message:"Student already exist!"});
        }
        
        } catch (error) {
            return res.status(500).json({message:"SomeThing Went Wrong!"});
        }
        
    });
    return res.status(201).json({message:"Successfully Added!"});
}

const updateStudent =  (req,res) =>{
    
    const students=req.body;
    students.forEach(async student=>{
       
        const { _id,name,rollno,attended_class } = student;
        const studentId=_id;
    
        studentModel.findById(studentId,async function(err,student)
        {
              if(!err)
              {
                
    
                const attended_classes=Number.parseInt(student["attended_classes"]) + Number.parseInt(attended_class);
                const total_classes = Number.parseInt(student.total_classes) + 1;
                const percent = (attended_classes/total_classes)*100
                const newStudent = {
                    name:name,
                   rollno:rollno,
                   attended_classes:attended_classes,
                   total_classes:total_classes,
                   percent:percent
               };
               
           
               try{
                await studentModel.findByIdAndUpdate(studentId,newStudent,{new:true});
               
               } catch (error) {
                   return res.status(500).json({message:"Something went wrong!"});
               }
              }
              else{
                console.log(err);
              }
        });
        

    })
    return res.status(201).json({message:"Successfully Updated!"});    
 
}

const deleteStudent = async (req,res) => {
    
     const students = req.body;
     students.forEach(async student=>{

        const { _id} = student;
        const studentId= _id;
        try {
            await studentModel.findByIdAndRemove(studentId);
        
        } catch (error) {
            return res.status(500).json({message:"Something went wrong!"});
        }

     })
     return res.status(201).json({message:"Successfully Deleted!"});
}


module.exports = {getStudent,addStudent,updateStudent,deleteStudent};