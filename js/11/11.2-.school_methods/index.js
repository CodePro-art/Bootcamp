const school = {
teachers: [
{
id: 1,
name: "Pinchas",
subjects: ["chemistry", "biology", "physics"],
students: [],
capacityLeft: 3,
},
{
id: 2,
name: "Williams",
subjects: ["history", "ethics"],
students: [],
capacityLeft: 2,
},
],
students: [
{
id: 10,
name: "Jennifer",
age: 20,
},
{
id: 11,
name: "Howard",
age: 23,
},
{
id: 12,
name: "Old-Timmy",
age: 86,
},
{
id: 13,
name: "Houston",
age: 21,
},
],
assignStudent(id,subject){
  let assigned = false;
  let studentExist = false;
  let subjectExist = false;
  let studentIndex;

  // check if student exist and find index
  this.students.forEach((stud, index) => {
    if (stud.id === id){
      studentIndex = index;
      studentExist = true;
    }
  });
   // check if subject exist and find index
  this.teachers.forEach(teacher => {
    teacher.subjects.forEach(sub =>{
      if (sub === subject){
        subjectExist = true;
      }
    });
  });

  if (studentExist){
    // teacers loop - find empty space for a new student
    this.teachers.forEach(element =>{ 

      element.subjects.forEach(sub => {
        if (sub === subject && element.capacityLeft){
          element.students.push(this.students[studentIndex]);
          element.capacityLeft --;
          assigned = true;
          console.log(`Assigned ${this.students[studentIndex].name}, id: ${id} to ${subject} class of ${element.name}`);
          console.log(`Capacity left: ${element.capacityLeft}`);
        }
      });
    }); // End of searching for teacher
    if (!subjectExist)
      console.log(`Sorry,no such subject: ${subject}`);
    else if (!assigned)
      console.log("Sorry,no available teachers left.");


  }else // End of outer if
    console.log( `There is no student with id: ${id}`);
}, // End of assignStudent function

assignTeachersSubject(id,subject){
  let teacherExist = false;
  let subjectExist = false;
  let teacherIndex;

  // check if teacher exist and find index
  this.teachers.forEach((teacher, index) => {
    if (teacher.id === id){
      teacherIndex = index;
      teacherExist = true;
    }
  });
  if (teacherExist){
    // check if subject exist and find index
    this.teachers[teacherIndex].subjects.forEach(sub =>{
      if (sub === subject)
        subjectExist = true;
      });
      
    if (!subjectExist){
      this.teachers[teacherIndex].subjects.push(subject);
      console.log(`Added new subject: ${subject} to ${this.teachers[teacherIndex].name}`);
    }else
      console.log(`Sorry ${this.teachers[teacherIndex].name} already teaches ${subject}.`);
  }else
    console.log(`There is no teacher with id: ${id}.`);
   
}, // End of assignTeachersSubject

// 3. Method that gets an input of teacher object with all the appropriate fields 
// and add the teacher to the list if he/she is not already teachingin that school
hireNewTeacher (newTeacher){
  let teacherExist = false;
  // check if teacher exist and find index
  this.teachers.forEach(teacher => {
    if (teacher.id === newTeacher.id)
      teacherExist = true;
  });
  if(teacherExist)
    console.log(`There is already a teacher with that id: ${newTeacher.id}`);
}
}; // End of object

school.assignStudent(15,"history");
school.assignStudent(10,"stam shem");
school.assignStudent(12,"history");
school.assignStudent(10,"biology");
school.assignStudent(13,"history");
school.assignStudent(11,"history");
// school.assignTeachersSubject(1,"chemistry" );
// school.assignTeachersSubject(1,"history" );
// school.assignTeachersSubject(2,"biology" );
// school.assignTeachersSubject(2,"politics" );
// school.assignTeachersSubject(2,"history" );
