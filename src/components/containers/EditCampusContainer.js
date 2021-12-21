import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCampusView from '../views/EditCampusView';
import { fetchCampusThunk, editCampusThunk } from '../../store/thunks';


class EditCampusContainer extends Component {
  componentDidMount() {
    //getting student ID from url
    this.props.fetchCampus(this.props.match.params.id);
  }

    constructor(props){
        super(props);
        this.state = {
          name: this.props.campus.name,
          description:this.props.campus.description,
          address: this.props.campus.address,
          imageUrl: this.props.campus.imageUrl,
          students:this.props.campus.students,
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
        let campus = {
            name: this.state.name,
            imageUrl: this.state.imageUrl,
            address: this.state.address,
            description: this.state.description,
            students: this.state.students,
            id: this.props.campus.id
        };

        this.props.editCampus(campus);

        this.setState({
          redirect: true,
          redirectId: this.props.campus.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
        }
        return (
          <EditCampusView
            campus={this.props.campus}
            handleChange = {this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        );
    }
}

const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: (campus) => dispatch(editCampusThunk(campus))

  };
};

export default connect(mapState, mapDispatch)(EditCampusContainer);
