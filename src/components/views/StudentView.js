import { Link } from "react-router-dom";


const StudentView = (props) => {
  const { student,  deleteStudent } = props;

  if(student.campusId == null){
    return(
      <div>
        <h1>{student.firstname + " " + student.lastname}</h1>
        <br></br>
        <img src={student.imageUrl} alt =""/>
        <br></br>
        <h3>Email: {student.email}</h3>
        <br></br>
        <h3>GPA: {student.gpa}</h3>
        <br></br>
        <h3>{"student currently not enrolled in any college"}</h3>
        <button onClick={() => deleteStudent(student.id)}>Delete student</button>
        <Link to={`/editstudent/${student.id}`}> <button onClick> Edit Student </button></Link>
      </div>

    )
  }
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <br></br>
      <img src={student.imageUrl} alt =""/>
      <br></br>
      <h3>Email: {student.email}</h3>
      <br></br>
      <h3>GPA: {student.gpa}</h3>
      <br></br>
      <h3>{"This student current is enrolled in:"}</h3>
      <Link to={`/campus/${student.campusId}`}>
        <h1>{student.campus.name}</h1>
      </Link>
      <br></br>
      <button onClick={() => deleteStudent(student.id)}>Delete student</button>
    <Link to={`/editstudent/${student.id}`}> <button onClick> Edit Student </button></Link>
    </div>
  );

};

export default StudentView;
