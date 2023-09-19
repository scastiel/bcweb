import axios from "axios";
import { fetchData, fetchSuccess, fetchError, signout } from "./actions";

const apiCall = (url, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  dispatch(fetchData());
  return new Promise(() => {
    axios
      .get(url, config)
      .then((response) => {
        if (![200].includes(response.status)) {
          dispatch(signout());
        } else {
          //dispatch(signout());
          dispatch(fetchSuccess(response.data));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error));
        console.log(error);
      });
  });
};

export default apiCall;
