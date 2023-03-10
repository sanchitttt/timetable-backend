const Teachers = require('../modal/teacher.modal');

class TeacherService {
    async getAll() {
        const res = await Teachers.find({});
        return res;
    }
    
}

module.exports = TeacherService;