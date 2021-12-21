import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
const CampusView = (props) => {
  const {campus, deleteCampus} = props;

  function delButton(){
    props.history.push('/campuses')
    //deleteCampus(campus.id);
    };

if (!campus.students.length){
  return (
    <div>
      <img src={campus.imageUrl} alt=""/>
      <br></br>
      <h1>{campus.name}</h1>
      <p>{campus.description}</p>
      <p>{campus.address}</p>
      <p> no students currently enrolled </p>

      <button onClick={() => delButton()}>X</button>
      <Link to={`/editcampus/${campus.id}`}> <button onClick> Edit Campus </button></Link>
    </div>
  );
}



  return (
    <div>
      <img src={campus.imageUrl} alt=""/>
      <br></br>
      <h1>{campus.name}</h1>
      <p>{campus.description}</p>
      <p>{campus.address}</p>


      <ul>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (

          <li key={student.id}><Link to={`/student/${student.id}`}>
            <h1>{name}</h1>
          </Link></li>

        );
      })}
      </ul>
      <button onClick={() => delButton()}>Delete</button>
      <Link to={`/editcampus/${campus.id}`}> <button onClick> Edit Campus </button></Link>
    </div>
  );

};
CampusView.propTypes = {
  Campuses: PropTypes.array.isRequired,
};
export default CampusView;
