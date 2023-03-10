const TeacherService = require("../service/teacher.service")
const TeacherServiceInstance = new TeacherService();


async function getTeachers(req,res) {
    try {
        const teachers = await TeacherServiceInstance.getAll();
        res.json(teachers);
    } catch (error) {
        
    }
}



module.exports = {getTeachers}