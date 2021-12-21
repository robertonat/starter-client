import { FETCH_CAMPUS, EDIT_CAMPUS, DELETE_CAMPUS } from "../actions/actionTypes";

const initialState = {
  students: [],
};

const campus = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAMPUS:
      return action.payload;
    case DELETE_CAMPUS:
      return state.filter(campus => campus.id!==action.payload);
    case EDIT_CAMPUS:
      return state.map(campus => {
        return (
          campus.id===action.payload.id ? action.payload : campus
        );
        });
    default:
      return state;
  }
};

export default campus;
