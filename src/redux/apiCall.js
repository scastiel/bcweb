import axios from "axios";
import { fetchData, fetchSuccess, fetchError } from "./actions";

const apiCall = (url, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  dispatch(fetchData());
  return new Promise(() => {
    axios
      .get(url, config)
      .then((response) => {
        dispatch(fetchSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchError(error));
        console.log(error);
      });
  });
};

export default apiCall;
