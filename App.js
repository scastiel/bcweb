import React from "react";
import Login from "./src/components/Login";
import BcList from "./src/components/BcList";
import store from "./src/redux/store";
import { Provider } from "react-redux";

/* const endpointBc = "https://demo-btw.monkey-soft.fr/bcweb/bcx/";
const endpointRefreshToken = "https://demo-btw.monkey-soft.fr/refresh-token/"; */

const App = () => {
  let isLogged = false;

  return (
    <Provider store={store}>
      {isLogged ? <BcList /> : <Login />}
    </Provider>
  );
};

export default App;
