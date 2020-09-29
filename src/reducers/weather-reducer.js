import * as c from '../actions/ActionTypes';

let initialState = {
  isLoading: false,
  weather: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_WEATHERDATA:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_WEATHERDATA_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        weather: action.weatherdata
      });
    case c.GET_WEATHERDATA_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
    }
};

