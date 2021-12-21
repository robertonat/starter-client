import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const AllCampusesView = (props) => {
  const {deleteCampus} = props;
  if (!props.allCampuses.length) {
    return <div>There are no campuses. Would you like to create one?
    <br></br>
    <Link to={`/newcampus`}>
      <button>Add New Campus</button>
    </Link>
    </div>;

  }

  return (
    <div>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1></Link>
            <Button variant="contained" color="primary" style={{marginRight: '10px', height: '30px', width : '20px'}} onClick={() => deleteCampus(campus.id)}>
              X
            </Button>
            <br></br>
            <img src={campus.imageUrl} alt=""/>

        </div>
      ))}
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
