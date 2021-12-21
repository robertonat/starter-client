import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCampusThunk, deleteCampusThunk } from "../../store/thunks";
import { CampusView } from "../views";

class CampusContainer extends Component {
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchCampus(this.props.match.params.id);
  }

  render() {
    return (
      <CampusView
        campus={this.props.campus}
        deleteCampus={this.props.deleteCampus}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId))
  };
};

CampusContainer.propTypes = {
  campus: PropTypes.func.isRequired,
  fetchCampus: PropTypes.func.isRequired,
  deleteCampus: PropTypes.func.isRequired
};
export default connect(mapState, mapDispatch)(CampusContainer);
