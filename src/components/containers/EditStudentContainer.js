import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import EditStudentView from '../views/EditStudentView';
import { fetchStudentThunk, editStudentThunk } from '../../store/thunks';


class EditStudentContainer extends Component {
  componentDidMount() {
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
  }
  constructor(props){
      super(props);
      this.state = {
        firstname: this.props.student.firstname,
        lastname: this.props.student.lastname,
        email: this.props.student.email,
        imageUrl:this.props.student.imageUrl,
        gpa: this.props.student.gpa,
        campusId: this.props.student.campusId,
        redirect: false,
        redirectId: null
      };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
      event.preventDefault();

      let student = {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          imageUrl: this.state.imageUrl,
          gpa: this.state.gpa,
          campusId: this.state.campusId,
          id: this.props.student.id
      };

      this.props.editStudent(student);

      this.setState({
        redirect: true,
        redirectId: this.props.student.id
      });
  }

  componentWillUnmount() {
      this.setState({redirect: false, redirectId: null});
  }

  render() {
    if(this.state.redirect) {
      return (<Redirect to={`/student/${this.state.redirectId}`}/>)
    }
    return (
      <EditStudentView
        student={this.props.student}
        handleChange = {this.handleChange}
        handleSubmit={this.handleSubmit}
      />

    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    editStudent: (student) => dispatch(editStudentThunk(student))

  };
};

export default connect(mapState, mapDispatch)(EditStudentContainer);
