import * as c from './ActionTypes';

export const requestWeather = () => ({
  type: c.REQUEST_WEATHERDATA
});

export const getWeatherSuccess = (weatherdata) => ({
  type: c.GET_WEATHERDATA_SUCCESS,
  weatherdata
});

export const getWeatherFailure = (error) => ({
  type: c.GET_WEATHERDATA_FAILURE,
  error
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestWeather);
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=') 
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getWeatherSuccess(jsonifiedResponse.results));
        })
      .catch((error) => {
        dispatch(getWeatherFailure(error));
        console.log("boo, no good")
      });
  }
  
}