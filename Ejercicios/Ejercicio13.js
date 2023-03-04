
const getTopStudent = (students) => {
    let topStudent = { name: '', average: -1 };
  
    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      if (student.average > topStudent.average) {
        topStudent = student;
      }
    }
  
    return topStudent.name;
  }
  
  module.exports = getTopStudent;
  