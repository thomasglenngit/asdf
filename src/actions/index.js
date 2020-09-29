import * as c from './ActionTypes';

export const requestWeather = () => ({
  type: c.REQUEST_WEATHERDATA
});

export const getWeatherSuccess = (weather) => ({
  type: c.GET_WEATHERDATA_SUCCESS,
  weather
});

export const getWeatherFailure = (error) => ({
  type: c.GET_WEATHERDATA_FAILURE,
  error
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestWeather);
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=portland&appid=${process.env.REACT_APP_API_KEY}`) 
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getWeatherSuccess(jsonifiedResponse.results));
          console.log(jsonifiedResponse.results);
        })
      .catch((error) => {
        dispatch(getWeatherFailure(error));
        console.log("boo, no good")
      });
  }
  
}